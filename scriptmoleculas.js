document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".imagem-bordada").forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7)";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
        });
    });

    document.querySelector(".formulario-pesquisa").addEventListener("submit", function (evento) {
        let campoPesquisa = document.querySelector(".campo-pesquisa");
        if (campoPesquisa.value.trim() === "") {
            evento.preventDefault();
            alert("Por favor, insira um termo para pesquisa.");
        }
    });

    window.addEventListener("scroll", function () {
        document.querySelectorAll(".secao-dinamica").forEach(secao => {
            let posicao = secao.getBoundingClientRect().top;
            let alturaJanela = window.innerHeight / 1.3;
            if (posicao < alturaJanela) {
                secao.classList.add("visivel");
            }
        });
    });

    const janela = document.querySelector(".janela-lateral");
    const fecharJanela = document.querySelector(".fechar-janela");

    fecharJanela.addEventListener("click", function () {
        janela.classList.toggle("fechar");
        this.classList.toggle("open");
    });

});
