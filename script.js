// script.js

// Função para buscar tópicos na tabela
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

// Função para exibir detalhes no modal
function showResourceDetails(title, description) {
    const modalTitle = document.getElementById('resourceModalTitle');
    const modalDescription = document.getElementById('resourceModalDescription');
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    $('#resourceModal').modal('show');
}

// Função para alternar tema
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Adicionando eventos
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de animação ao carregar a página
    document.body.classList.add('fade-in');

    // Adicionando evento de busca
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', searchTopics);

    // Adicionando evento para os itens de recursos
    const resourceItems = document.querySelectorAll('.resource-item');
    resourceItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            showResourceDetails(title, description);
        });
    });

    // Adicionando evento para o botão de tema
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.addEventListener('click', toggleTheme);
});