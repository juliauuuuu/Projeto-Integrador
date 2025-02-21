// scriptatomos.js

// Função para exibir uma mensagem de alerta ao clicar em um átomo
function showAlert(atomName) {
    alert("Você clicou na " + atomName + ".\n\n" +
          "Tabela Periódica: A tabela Periódica foi organizada com o intuito de facilitar seu estudo. O posicionamento de cada elemento obedece à seguinte lei periódica: As propriedades físicas e químicas dos elementos são funções periódicas de seus números atômicos.\n\n" +
          "Comecemos por distinguir Períodos e Famílias:\n\n" +
          "Períodos: são as linhas horizontais da tabela, ao todo são sete períodos;\n\n" +
          "Famílias ou grupos: correspondem às linhas verticais da tabela periódica. A tabela atual é constituída por 18 famílias. As principais famílias estão destacadas em verde na figura acima, vejamos:\n\n" +
          "Família dos Alcalinos: Lítio (Li), Sódio (Na), Potássio (K), Rubídio (Rb), Césio (Cs), Frâncio (Fr).\n\n" +
          "Família dos Alcalino-terrosos: Berílio (Be), Magnésio (Mg), Cálcio (Ca), Estrôncio (Sr), Bário (Ba), Rádio (Ra).\n\n" +
          "Família dos Gases Nobres: Hélio (He), Neônio (Ne), Argônio (Ar), Criptônio (Kr), Xenônio (Xe), Radônio (Rn).\n\n" +
          "A tabela também é subdividida de acordo com a natureza do elemento em metal, semimetal, ametal, gás nobre, sendo que os elementos em rosa constituem os semimetais (sete elementos).\n\n" +
          "A divisão é simples: os elementos que estão à esquerda dos semimetais compreendem os metais (totalizam dois terços dos elementos) e os que se localizam à direita são os ametais (11 elementos). Os gases nobres ficam na extremidade direita da Tabela (parte verde).\n\n" +
          "Os dois períodos separados da Tabela compreendem os elementos de Transição interna: série dos Lantanídeos (número atômico 57 a 71) e Actinídeos (número atômico 89 a 103).");
}

// Função para mudar a cor de fundo de um átomo ao passar o mouse
function highlightAtom(element) {
    element.style.backgroundColor = "#9b59b6"; // Cor de destaque
}

function resetAtomHighlight(element) {
    element.style.backgroundColor = ""; // Reseta a cor de fundo
}

// Adicionando eventos aos elementos de átomo
document.addEventListener('DOMContentLoaded', function() {
    const atomElements = document.querySelectorAll('.bordered-image');

    atomElements.forEach(atom => {
        // Adiciona evento de clique
        atom.addEventListener('click', function() {
            const atomName = this.nextElementSibling.innerText; // Pega o nome do átomo
            showAlert(atomName);
        });

        // Adiciona eventos de mouseover e mouseout
        atom.addEventListener('mouseover', function() {
            highlightAtom(this);
        });

        atom.addEventListener('mouseout', function() {
            resetAtomHighlight(this);
        });
    });
});