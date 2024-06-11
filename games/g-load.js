(function() {window.addEventListener('load',function() {
    const parent = document.querySelector('#g-lcontainer');
    var loadGame = function(g,parent) {
        let e = document.createElement('tr');

        e.innerHTML = `
        <td>
            <details>
                <summary class="game-title">
                    <h3>${g.name}</h3>
                </summary>
                <div class='g-sum-container'>
                    <ul class="g-details">
                        <li>Version: ${g.version}</li>
                        <li>Lang: ${g.lang}</li>
                        <li>Lines of Code: ${g.linesOfCode}</li>
                        <li>Release Date: ${g.releaseDate||'???'}</li>
                    </ul>
                    <button class='b-playbtn' onclick='window.location="${g.url}"'>Play</button>
                </div>
            </details>
        </td>
        `;

        parent.appendChild(e);
    }

    for (let i of gdat) {
        if (i.type == 'game')
            loadGame(i,parent);
    }
})})();