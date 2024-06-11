function setScrollVar() {
    const html = document.documentElement;
    var sa = html.scrollTop / window.innerHeight;
    html.style.setProperty('--scroll', sa);
}

window.addEventListener('scroll', setScrollVar);
window.addEventListener('resize', setScrollVar);