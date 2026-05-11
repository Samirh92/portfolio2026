(function () {
    var LINKS = [
        { href: 'index.html',        label: '// Accueil' },
        { href: 'presentation.html', label: '// profil personnel' },
        { href: 'entreprise.html',   label: '// EXPÉRIENCE professionnel' },
        { href: 'ecole.html',        label: '// Mon ecole' },
        { href: 'dm.html',           label: '// DOC_&_MAQUETTE' },
        { href: 'veille.html',       label: '// VEILLE_INFO' }
    ];

    function currentFile() {
        var path = window.location.pathname.split('/').pop();
        return path === '' ? 'index.html' : path;
    }

    function inject() {
        if (document.querySelector('nav.tech-nav')) return;

        var here = currentFile();
        var nav = document.createElement('nav');
        nav.className = 'tech-nav';

        LINKS.forEach(function (item) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = item.label;
            if (item.href === here) {
                btn.classList.add('is-active');
                btn.setAttribute('aria-current', 'page');
            }
            btn.addEventListener('click', function () {
                window.location.href = item.href;
            });
            nav.appendChild(btn);
        });

        var target = document.body || document.documentElement;
        target.insertBefore(nav, target.firstChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inject);
    } else {
        inject();
    }
})();
