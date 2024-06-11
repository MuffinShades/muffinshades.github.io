(function() {
    for (var v of gdat) {
        var contain = document.getElementById(v.type+"-tbody");
        var row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <a href='#' id='ex-lnk'><span class='dynamic-hover'>${v.name}</span></a>
        </td>
        <td>
            <div class='plang'>
                <div id="${v.lang_id}"></div>
                <span>${v.lang}</span>
            </div>
        </td>
        <td>
            <span>${v.version}</span>
        </td>
        <td>
            <span>${v.releaseDate}</span>
        </td>
        `;
        contain.appendChild(row);
    }
})();
function link(href) {
    window.location=href;
}