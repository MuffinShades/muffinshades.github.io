const can = document.getElementById('c');
const ctx = can.getContext('2d');

const FPS = 60;
let deltaTime = 1;
let fps = FPS, fpsCount = 0;

var map = [];

var mapW = 12, mapH = 12, edge = 1;
const tileSize = /*Math.floor(document.documentElement.clientHeight / (mapH+edge*2))*/ 45;

var highScore = localStorage.getItem("hScore") || 0;

let projectiles = [];

let warnings = [];

let textGuis = [];

var spawnRate = 60;

var gamePaused = false;

const bombScores = [0, 250, 100];
let ticks = [null, (5 * (1000 / (1000 / FPS))), (3 * (1000 / (1000 / FPS))), (2 * (1000 / (1000 / FPS))), (4 * (1000 / (1000 / FPS)))];
let spawnThreshold = [0, 100, 250, 500, 0, 1500];

const BONUS_MAX = 450, BONUS_BASE = 50;

let _Interval = function(r, fn) {
    this.rate = r;
    this.fn = fn;
    this.it = 0;
    this.tick = function() {
        this.it++;
        if (this.it >= this.rate) {
            this.it = 0;
            this.fn();
        }
    }
}

function _addColorStops(grad, cs) {
    for (let i= 0; i < cs.length; i++)
        grad.addColorStop((i/(cs.length - 1)), cs[i]);

    return grad;
}

function createRainbowGrad(x, y, w, h) {
    let grad = ctx.createLinearGradient(x,y, x+w, y+h);

    let colorsStops = [
        "#ff0",
        "#0f0",
        "#0ff",
        "#00f",
        "#80f",
        "#f0f"
    ];

    grad = _addColorStops(grad, colorsStops);

    return grad;
}

let textGui = function(x, y, text, fill) {
    this.x = x;
    this.y = y;
    this.txt = text;
    this.transparency = 1;
    this.hide = false;
    this.fill = fill || "#fff";

    this.update = function() {
        this.y -= 0.25;

        ctx.font = '25px Arial';

        ctx.strokeStyle = '#000';
        ctx.fillStyle = this.fill;
        ctx.globalAlpha = this.transparency;
        ctx.strokeText(this.txt, this.x, this.y);
        ctx.fillText(this.txt, this.x, this.y);
        ctx.globalAlpha = 1;
        this.transparency -= 0.025;

        //ctx.fillStyle = this.fill;
        //ctx.fillRect(this.x, 0, 100, can.height)

        if (this.transparency <= 0)
            this.hide = true;
    }
}


let spawnInterval = new _Interval(spawnRate, function() {
    let x = Math.random() > 0.5 ? 0 : 1,
    y = Math.random() > 0.5 ? 0 : 1;
    projectiles.push(
        new proj(
            x * can.width, 
            y * can.height, 
            Math.random() * (x ? -5 : 5), 
            Math.random() * (y ? -5 : 5), 
            10,
            0
        )
    );  
})

var p = {
    x: 100,
    y: 100,
    w: tileSize * 0.6,
    h: tileSize * 0.6,
    bSz: 3,
    vx: 0,
    vy: 0,
    mu: false,
    md: false,
    mr: false,
    ml: false,
    speed: 5,
    health: 4,
    score: 0,
    hitKd: 0,
    end: false,
    draw: function() {
        if (this.hitKd > 0) {
            ctx.globalAlpha = this.hitKd / 150;
            ctx.fillStyle = 'rgb(0,200,255)';
            ctx.strokeStyle = 'rgb(0,128,200)';
            ctx.beginPath();
            ctx.arc(this.x + this.w / 2, this.y + this.h / 2, this.w / 2 + 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
        ctx.fillStyle = `rgb(255,0,0)`;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = '#000';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5 * 0.7;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        
        if (this.mu && this.vy > -this.speed) {
            this.vy -= this.speed;
        }
        
        if (this.md && this.vy < this.speed) {
            this.vy += this.speed;
        }
        
        if (this.mr && this.vx < this.speed) {
            this.vx += this.speed;
        }
        
        if (this.ml && this.vx > -this.speed) {
            this.vx -= this.speed;
        }
        
        //TODO add slodown maybe
        if (!this.ml && !this.mr)
            this.vx = 0;
            
        if (!this.mu && !this.md)
            this.vy = 0;
        
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
        
        if (this.hitKd > 0) {
            this.hitKd --;
        }
        
        if (this.health <= 0) {
            if (this.score > highScore) {
                localStorage.setItem("hScore", this.score);
                highScore = this.score;
            }
            alert('Game Over! Score: '+this.score+" Hi: "+highScore);
            this.end = true;
            window.location.reload();
        }
        
        this.score++;
    },
    hit: function(xp, yp, proj) {
        this.health --;
            
        if (xp < this.x || xp > this.x + this.w) {
            proj.vx *= -1
        }
            
        if (yp < this.y || yp > this.y + this.h) {
            proj.vy *= -1
        }
            
        this.hitKd = 100;

        return proj;
    } 
}

function genMap(mapw, maph, edgeSz) {
    let mw = mapW + edgeSz * 2, mh = maph + edgeSz * 2;
    
    let map = [];
    for (let y = 0; y < mh; y++) {
        map[y] = [];
        
        for (let x = 0; x < mw; x++) {
            if (x == 0 || x >= mw - 1 || y == 0 || y >= mh - 1)
                map[y][x] = 1;
            else
                map[y][x] = 0;
                
            /*if (Math.random() * 100 > 20) {
                map[y][x] = 1;
            }*/
        }
    }
    
    return map;
}

const warningUpdates = [
    function(self) {
        ctx.globalAlpha = (self.ticks % (self.count / self.pulses)) / self.count;
        ctx.fillStyle = '#f00';
        ctx.fillRect(self.tx * tileSize, self.ty*tileSize, tileSize, tileSize);
        ctx.globalAlpha = 1;
    },
    function(self) {
        ctx.globalAlpha = (self.ticks % (self.count / self.pulses)) / (self.count * 0.5);
        ctx.fillStyle = '#f00';
        ctx.strokeStyle = '#000';
        ctx.font = '35px Arial';
        ctx.strokeText("!", self.tx, self.ty);
        ctx.fillText("!", self.tx, self.ty);
        ctx.globalAlpha = 1;
    }
]

function ticksToSeconds(ticks) {
    return Math.floor((ticks/ (1000 / (1000 / FPS))) * 10) / 10;
}

let warning = function(tx, ty, count, pulses, id, finishFunc, additionalInfo) {
    this.ticks = count;
    this.count = count;
    this.pulses = pulses;
    this.tx = tx;
    this.ty = ty;
    this.finishFn = finishFunc;
    this.id = id;
    this.done = false;
    this.adInf = additionalInfo;

    this.update = function() {
        this.ticks--;
        
        warningUpdates[this.id](this);

        if (this.ticks == 0) {
            this.finishFn(this);
            this.done = true;
            this.ticks = 999;
        }
    }
}

let updateFuncs = [

    function(self) {
        ctx.fillStyle = '#00f';
        ctx.fillRect(self.x, self.y, self.w, self.h);
        ctx.strokeStyle = '#000';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(self.x, self.y, self.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(self.x, self.y, self.size, 0, Math.PI * 2);
        ctx.stroke();
        
        self.x += self.vx * deltaTime;
        self.y += self.vy * deltaTime;

        return self;
    },
    function(self) {
        self.ticks--;
        ctx.fillStyle = '#ff0';
        ctx.fillRect(self.x, self.y, self.w, self.h);
        ctx.strokeStyle = '#000';
        ctx.lineCap = 'round';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(self.x, self.y, self.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(self.x, self.y, self.size, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.font = '25px Arial';
        ctx.strokeText(ticksToSeconds(self.ticks), self.x - self.size / 2, self.y + self.size / 2);
        ctx.fillText(ticksToSeconds(self.ticks), self.x - self.size / 2, self.y + self.size / 2);
        

        if (self.ticks <= 0) {
            self.destroy = true;

            let rad = Math.PI * 2, am = 10;

            for (let i = 0; i < rad; i += rad / am) {
                projectiles.push(new proj(
                    self.x + Math.cos(i) * 5,
                    self.y + Math.sin(i) * 5,
                    Math.cos(i) * 5,
                    Math.sin(i) * 5,
                    10, 
                    0
                ));
            }
        }

        return self;
    },
    function(self) {
        self.ticks--;
        ctx.fillStyle = '#0ff';
        ctx.strokeStyle = '#000';
        
        ctx.save();
        ctx.translate(self.x + self.w / 2, self.y + self.h / 2);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-self.w / 2,-self.h / 2, self.w, self.h);
        ctx.strokeRect(-self.w / 2,-self.h / 2, self.w, self.h);
        ctx.restore();
        
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.font = '25px Arial';
        ctx.strokeText(Math.floor((self.ticks / (1000 / (1000 / FPS))) * 10) / 10, self.x, self.y + self.h / 1.5);
        ctx.fillText(Math.floor((self.ticks / (1000 / (1000 / FPS))) * 10) / 10, self.x, self.y + self.h / 1.5);

        if (self.ticks <= 0) {
            self.destroy = true;

            let rad = Math.PI * 2, am = 4;

            for (let i = 0; i < rad; i += rad / am) {
                projectiles.push(new proj(
                    self.x + Math.cos(i) * 5,
                    self.y + Math.sin(i) * 5,
                    Math.cos(i) * 5,
                    Math.sin(i) * 5,
                    10, 
                    0
                ));
            }
        }

        return self;
    },
    function(self) {
        if (!self.maxTicks)
            self.maxTicks = self.ticks;

        self.ticks--;
        
        ctx.fillStyle = createRainbowGrad(-self.w / 2 + 5,-self.h / 2 + 5, self.w-10, self.h-10);
        ctx.strokeStyle = '#000';
        
        //ctx.globalAlpha = (self.ticks / (self.maxTicks));
        ctx.save();
        ctx.translate(self.x + self.w / 2, self.y + self.h / 2);
        ctx.fillRect(-self.w / 2,-self.h / 2, self.w, self.h);
        ctx.strokeRect(-self.w / 2,-self.h / 2, self.w, self.h);
        ctx.restore();

        if (!self.bonus)
            self.bonus = Math.floor(Math.random() * BONUS_MAX) + BONUS_BASE;
        
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.font = '15px Arial';
        ctx.strokeText("+"+self.bonus, self.x, self.y + self.h / 1.5);
        ctx.fillText("+"+self.bonus, self.x, self.y + self.h / 1.5);
        /*ctx.font = '7px Arial';
        ctx.strokeText(ticksToSeconds(self.ticks), self.x + 7, self.y + 7);
        ctx.fillText(ticksToSeconds(self.ticks), self.x + 7, self.y + 7);*/
        ctx.globalAlpha = 1;

        if (self.ticks <= 0) {
            self.destroy = true;
        }

        return self;
    },
    function(self) {

        self.ticks--;
        
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = '#000';
        
        //ctx.globalAlpha = (self.ticks / (self.maxTicks));
        ctx.fillRect(self.x, self.y, self.w, self.h);
        ctx.fillStyle = '#f00';
        ctx.fillRect(self.x + self.w/3, self.y, self.w / 3, self.h);
        ctx.fillRect(self.x, self.y + self.h / 3, self.w, self.h / 3);
        ctx.strokeRect(self.x, self.y, self.w, self.h);
        
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.font = '20px Arial';
        ctx.strokeText(":D", self.x, self.y + self.h / 1.5);
        ctx.fillText(":D", self.x, self.y + self.h / 1.5);
        /*ctx.font = '7px Arial';
        ctx.strokeText(ticksToSeconds(self.ticks), self.x + 7, self.y + 7);
        ctx.fillText(ticksToSeconds(self.ticks), self.x + 7, self.y + 7);*/
        ctx.globalAlpha = 1;

        if (self.ticks <= 0) {
            self.destroy = true;
        }

        return self;
    }
];

var hitFuncs = [
    function(xp, yp, self) {
        if (p.hitKd <= 0) {
            return p.hit(xp, yp, self);
        }

        return self;
    },
    function(xp, yp, self) {
        self.destroy = true;
        
        if (Math.random() < 0.9) {
            let guiTxt = "+"+bombScores[self.type];

            textGuis.push(new textGui(
                self.x - self.size / 2, self.y - 20,
                guiTxt
            ))

            p.score += bombScores[self.type];
        } else {
            let guiTxt = "+"+(bombScores[self.type] * 2);

            textGuis.push(new textGui(
                self.x - self.size / 2, self.y - 20,
                guiTxt,
                createRainbowGrad(self.x - self.size, 0, ctx.measureText(guiTxt).width, 0)
            ))

            p.score += bombScores[self.type] * 2;
        }
        return self;
    },
    function(xp, yp, self) {
        self.destroy = true;
        
        let guiTxt = "+"+(bombScores[self.type]);

            textGuis.push(new textGui(
                self.x - self.size / 2, self.y - 20,
                guiTxt,
                '#0ff'
            ))

            p.score += bombScores[self.type];

        return self;
    },
    function(xp, yp, self) {
        self.destroy = true;
        
        p.score += self.bonus;

        let guiText = "+"+self.bonus;

        textGuis.push(new textGui(
            self.x - self.size / 2, self.y - 20,
            guiText,
            '#fb0'
        ))

        return self;
    },
    function(xp, yp, self) {
        self.destroy = true;
        
        p.health++;

        let guiText = "+1hp";

        textGuis.push(new textGui(
            self.x - self.size / 2, self.y - 50,
            guiText,
            '#0f0'
        ))

        textGuis.push(new textGui(
            self.x - self.size / 2, self.y - 20,
            '-300',
            '#f00'
        ))

        p.score -= 300;

        return self;
    }
];

let proj = function(x, y, vx, vy, size, type) {
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.vx = vx;
    this.vy= vy;
    this.size = size;
    this.type = type;
    this.ticks = ticks[this.type];
    this.destroy = false;

    this.update = function() {
        let self = updateFuncs[this.type](this);

        /*let o = Object.keys(self);

        for (i in o)
            this[o] = self[o];*/
    }
}

map = genMap(mapW, mapH, edge);

let tileColors = ['rgb(231, 231, 255)', 'rgb(245, 248, 255)'];

function _line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function _collide(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
}

function drawMap() {
    for (let y in map) {
        for (let x in map) {
            if (map[y][x]) {
                y = parseInt(y);
                x = parseInt(x);
                ctx.fillStyle = 'rgb(180, 180, 252)';
                ctx.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
            } else {
                ctx.fillStyle = tileColors[(y ^ x) % 2];
                ctx.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
            }
        }
    }
    
    for (let y in map) {
        for (let x in map) {
            if (map[y][x]) {
                y = parseInt(y);
                x = parseInt(x);
                let xp  = tileSize * x, yp = tileSize * y;
                
                //borders
                ctx.strokeStyle = '#000';
                ctx.lineCap = 'round';
                ctx.lineWidth = 5;
                
                if (y > 0 && !map[y - 1][x])
                    _line(xp, yp, xp + tileSize, yp);
                    
                
                if (y < mapH && !map[y + 1][x])
                    _line(xp, yp + tileSize, xp + tileSize, yp + tileSize);    
                    
                if (x > 0 && !map[y][x - 1])
                    _line(xp, yp, xp, yp + tileSize);
                    
                if (x < mapW && !map[y][x + 1])
                    _line(xp+ tileSize, yp, xp + tileSize, yp + tileSize);

                //player collision
                if (_collide(p.x + p.vx, p.y - p.vy, p.w, p.h, xp, yp, tileSize, tileSize)) {
                    p.vx = 0;
                    p.x = p.x > xp ? xp + tileSize : xp - p.w;
                }

                if (_collide(p.x, p.y + p.vy, p.w, p.h, xp, yp, tileSize, tileSize)) {
                    p.vy = 0;
                    p.y = p.y > yp ? yp + tileSize + 1 : yp - p.h - 1;
                }
            }
        }
    }
}

//can.style = 'position: absolute; top: 0; left: 0;';

function handleRem(rem, target) {
    while (rem.length > 0) {
        
        for (let j in rem) {
            if (rem[j] > rem[0])
                rem[j]--;
        }
        
        target.splice(rem[0], 1);
        rem.splice(0,1);
    }

    return target;
}

let rem;
var time = 0;

setInterval(function() {if (!gamePaused) {
    if (p.end) return;
    fpsCount ++;
    deltaTime = FPS / fps;
    
    //can.width = document.documentElement.clientWidth;
    //can.height = document.documentElement.clientHeight;
    can.width = (mapW + edge*2) * tileSize;
    can.height = (mapH + edge*2) * tileSize;
    
    //draw map
    drawMap();

    rem = [];

    for (let i in warnings) {
        warnings[i].update();

        if (warnings[i].done)
            rem.push(i);
    }

    handleRem(rem, warnings);
    
    //draw projectiles
     rem = [];
    for (let i = 0 ; i < projectiles.length; i++) {
        projectiles[i].update();
        
        if (projectiles[i].x < 0 || projectiles[i].x > can.width || projectiles[i].y < 0 || projectiles[i].y > can.height || projectiles[i].destroy) {
            rem.push(i);
            p.score += 5;
            continue;
        }
        
        //check for collision with player
        let xp = projectiles[i].x, yp = projectiles[i].y;
        if (Math.sqrt(((p.x + p.w / 2) - xp) ** 2 + ((p.y + p.h/ 2) - yp) ** 2) < projectiles[i].size + (p.w / 2)) {
            projectiles[i] = hitFuncs[projectiles[i].type](xp, yp, projectiles[i]);
        }
    }
    
    handleRem(rem, projectiles);

    rem = [];

    for (let i in textGuis) {
        textGuis[i].update();

        if (textGuis[i].hide)
            rem.push(i);
    }

    handleRem(rem, textGuis);
    
    p.draw();
    
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.font = '20px Arial';
    let dispTime = Math.floor(time * 100) / 100;
    ctx.strokeText("Health: "+p.health+" Score: "+p.score + " Time: " + dispTime + "f High Score: "+highScore, 5, 15);
      ctx.fillText("Health: "+p.health+" Score: "+p.score + " Time: " + dispTime + "f High Score: "+highScore, 5, 15);
    
    spawnInterval.tick();
    spawnInterval.rate -= 0.001;

    for (let i in spawnThreshold) {
        if (spawnThreshold[i] == null)
            continue;

        spawnThreshold[i]--;

        if (spawnThreshold[i] <= 0){
            setInterval(function() {
                if (gamePaused) return;
                spawners[i].fn();
            }, spawners[i].rate);

            spawnThreshold[i] = null;
        }
    }

    time ++;
} else {
    ctx.fillStyle = '#999';
    ctx.font = '30px Arial';
    ctx.fillText("Press Esc. to return to game...", 100, 100);
}}, 1000/FPS)

var bombThreshold = 90;

const remThreshHold = 70;


window.addEventListener('keydown', function(e) {
    console.log(e);
    switch (e.key) {
        case 'w': {
            p.mu = true;
            break;
        }
        case 'a': {
            p.ml = true;
            break;
        }
        case 's': {
            p.md = true;
            break;
        }
        case 'd': {
            p.mr = true;
            break;
        }
        case 'ArrowUp': {
            p.mu = true;
            break;
        }
        case 'ArrowLeft': {
            p.ml = true;
            break;
        }
        case 'ArrowDown': {
            p.md = true;
            break;
        }
        case 'ArrowRight': {
            p.mr = true;
            break;
        }
        case 'Escape': {
            gamePaused = !gamePaused;
            break;
        }
    }
})

window.addEventListener('keyup', function(e) {
    switch (e.key) {
        case 'w': {
            p.mu = false;
            break;
        }
        case 'a': {
            p.ml = false;
            break;
        }
        case 's': {
            p.md = false;
            break;
        }
        case 'd': {
            p.mr = false;
            break;
        }
        case 'ArrowUp': {
            p.mu = false;
            break;
        }
        case 'ArrowLeft': {
            p.ml = false;
            break;
        }
        case 'ArrowDown': {
            p.md = false;
            break;
        }
        case 'ArrowRight': {
            p.mr = false;
            break;
        }
    }
})

setInterval(function() {if (gamePaused) return;
    fps = fpsCount;
    fpsCount = 0;
}, 1000);

var bombThresholds = [90, 80];

function genRandomPosXOnMap() {
    return Math.floor(Math.random() * mapW * tileSize) + edge * tileSize;
}

function genRandomPosYOnMap() {
    return Math.floor(Math.random() * mapH * tileSize) + edge * tileSize;
}

let spawners = [
    {
        fn: function() {
            if (Math.random() * 100 > 70) {
                warnings.push(new warning(Math.floor(Math.random() * mapW)+edge, Math.floor(Math.random() * mapH)+edge, 120, 3, 0, function(self) {
                    map[self.ty][self.tx] = !map[self.ty][self.tx];
                }))
            }
        },
        rate: 2000,
    },
    {
        fn: function() {
            if (Math.random() * 100 > bombThresholds[0]) {
                projectiles.push(new proj(
                    genRandomPosXOnMap(), 
                    genRandomPosYOnMap(),
                    0,
                    0,
                    15,
                    1
                ))
            }

            bombThresholds[0] -= 0.1;
        },
        rate: 750
    },
    {
        fn: function() {
            if (Math.random() * 100 > bombThresholds[1]) {
                projectiles.push(new proj(
                    genRandomPosXOnMap(), 
                    genRandomPosYOnMap(),
                    0,
                    0,
                    25,
                    2
                ))
            }

            bombThresholds[1] -= 0.1;
        },
        rate: 500
    },
    {
        fn: function() {
            let amount = 5 + Math.random() * 5;
            for (let i = 5 ;i < amount; i++) {
                let x = (Math.random() > 0.5 ? 0 : 1) * can.width;
                x += (x > can.width / 2) ? -35 : 35;
                warnings.push(new warning(
                    x,
                    Math.random() * can.height,
                    100,
                    3,
                    1,
                    function(self) {
                        let side = (self.tx > can.width / 2) ? 0 : 1;
                        let x = side ? 1: can.width - 1;
                        
                        projectiles.push(new proj(
                            x,
                            self.ty,
                            7 * (side * 2 - 1),
                            0,
                            10,
                            0
                        ))
                    }
                ))
            }
        },
        rate: 5000
    },
    {
        fn: function() {
            if (Math.random() * 100 > 0.7) {
                projectiles.push(new proj(
                    genRandomPosXOnMap(), 
                    genRandomPosYOnMap(),
                    0,
                    0,
                    35,
                    3
                ))
            }
        },
        rate: 9601
    },
    {
        fn: function() {
            projectiles.push(new proj(
                genRandomPosXOnMap(), 
                genRandomPosYOnMap(),
                0,
                0,
                30,
                4
            ))
        },
        rate: 15000
    }
]
