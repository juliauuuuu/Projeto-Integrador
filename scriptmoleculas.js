function searchTopics() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('topicsTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
        }
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', searchTopics);

    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            showResourceDetails(title, description);
        });
    });
});

function toggleJanela() {
    const janela = document.querySelector('.janela-lateral');
    const seta = document.querySelector('.fechar-janela');

    if (janela.style.left === '0px') {
        janela.style.left = '-300px';
        seta.classList.remove('rotacionar');
    } else {
        janela.style.left = '0px';
        seta.classList.add('rotacionar');
    }
}

document.querySelector('.fechar-janela').addEventListener('click', alternarJanela);
