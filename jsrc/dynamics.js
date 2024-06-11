(function(w,d){
    const e=d.querySelectorAll('.bg')[0];
    const mDist = 150, nPoints = 50;
    const can = d.createElement('canvas'), ctx = can.getContext('2d');
    can.width = e.clientWidth;can.height = e.clientHeight;
    can.style='position:absolute;top:0;left:0;width:100%;height:100%';
    e.appendChild(can);
    const center = {
        x: can.width / 2,
        y: can.height / 2
    }
    var p = function(x, y) {
        this.theta = Math.random() * Math.PI * 2;
        this.x = x;
        this.y = y;
        this.v = Math.random()*1+0.1;
        this.update = function() {
            var dc = Math.sqrt((center.x - this.x)**2+(center.y-this.y)**2), lum = ((center.x - dc) / center.x) * 0.5 + 0.5;
            this.x += Math.cos(this.theta) * this.v;
            this.y += Math.sin(this.theta) * this.v;

            ctx.fillStyle = `#fff`;
            ctx.globalAlpha = lum;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.globalAlpha = 1;

            if (this.x < -mDist) {
                this.x = can.width + mDist;
                this.theta = Math.random() * Math.PI + (Math.PI / 2);
            }
            if (this.x > can.width + mDist) {
                this.x = -mDist;
                this.theta = Math.random() * Math.PI - (Math.PI / 2);
            }
            if (this.y < -mDist) {
                this.y = can.height + mDist;
                this.theta = Math.random() * Math.PI + Math.PI;
            }
            if (this.y > can.height + mDist) {
                this.y = -mDist;
                this.theta = Math.random() * Math.PI;
            }

            //lines
            var p;
            for (p of points) {
                if (p == this) continue;

                var dx = this.x - p.x, dy = this.y - p.y;
                var dist = Math.sqrt(dx*dx+dy*dy);

                if (dist > mDist) continue;

                var lum = ((mDist - dist) / mDist) * 0.5;
                ctx.strokeStyle = `#fff`;
                ctx.globalAlpha = lum;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(p.x,p.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }
    var points = [];
    for (var i = 0; i < nPoints; i++)
        points.push(new p(Math.random() * can.width, Math.random() * can.height));
    setInterval(function() {
        can.width = e.clientWidth;
        can.height = e.clientHeight;
        for (var i in points) {
            points[i].update();
        }
    },1000/60);
})(window,document);

//hover effect
(function(w,d){
    var e = d.querySelectorAll('.dynamic-hover'),c;
    for (var u of e) {
        c = u.innerText;
        u.setAttribute('tdata', c);
    }
})(window, document);