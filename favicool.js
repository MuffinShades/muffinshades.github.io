(function(cAm,colorRange,d) {
    const tSize = 256, fCan = d.createElement('canvas'), fCtx = fCan.getContext('2d'), gCol = function() {
        let cMod = Math.ceil(0xff / colorRange), r = function(m) {
            return Math.round(Math.random() * m);
        };
        return `rgb(${r(colorRange)*cMod},${r(colorRange)*cMod},${r(colorRange)*cMod})`;
    },gSize = tSize / cAm, fvIco = d.createElement('link'), gen = function() {;
    fCan.width = fCan.height = tSize;
    var x,y;
    x=y=0;
    do {
        do {
            fCtx.fillStyle = gCol();
            fCtx.fillRect(x*gSize,y*gSize,gSize,gSize);
        } while(++y<gSize);
    } while (++x<gSize&&!(y=0));
    var url = fCan.toDataURL();
    fvIco.setAttribute('href', url) 
};
    
    fvIco.setAttribute('rel','icon');
    d.head.appendChild(fvIco);

    setInterval(gen, 250);
})(4,256,document);