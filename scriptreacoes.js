function mostrarReacao() {
    let r1 = document.getElementById('reagente1').value;
    let r2 = document.getElementById('reagente2').value;
    let resultado = "";

    if ((r1 === "H2" && r2 === "O2") || (r1 === "O2" && r2 === "H2")) {
        resultado = "A reação produz água (H₂O)!";
    } else if ((r1 === "Na" && r2 === "Cl2") || (r1 === "Cl2" && r2 === "Na")) {
        resultado = "A reação forma Cloreto de Sódio (NaCl), o sal de cozinha!";
    } else if ((r1 === "Fe" && r2 === "S") || (r1 === "S" && r2 === "Fe")) {
        resultado = "A reação forma Sulfeto de Ferro (FeS)!";
    } else if ((r1 === "Fe" && r2 === "HCl") || (r1 === "HCl" && r2 === "Fe")) {
        resultado = "O ferro reage com ácido clorídrico formando Cloreto de Ferro (FeCl₂) e gás hidrogênio!";
    } else if ((r1 === "Na" && r2 === "H2O") || (r1 === "H2O" && r2 === "Na")) {
        resultado = "O sódio reage com água formando Hidróxido de Sódio (NaOH) e gás hidrogênio!";
    } else if ((r1 === "AgNO3" && r2 === "Fe") || (r1 === "Fe" && r2 === "AgNO3")) {
        resultado = "O ferro desloca a prata formando Nitrato de Ferro (Fe(NO₃)₃) e prata metálica!";
    } else if ((r1 === "AgNO3" && r2 === "Na") || (r1 === "Na" && r2 === "AgNO3")) {
        resultado = "O sódio desloca a prata formando Nitrato de Sódio (NaNO₃) e prata metálica!";
    } else if ((r1 === "AgNO3" && r2 === "HCl") || (r1 === "HCl" && r2 === "AgNO3")) {
        resultado = "A reação forma Cloreto de Prata (AgCl), um precipitado branco insolúvel, e ácido nítrico (HNO₃)!";
    } else if ((r1 === "FeS" && r2 === "HCl") || (r1 === "HCl" && r2 === "FeS")) {
        resultado = "A reação forma Cloreto de Ferro (FeCl₂) e libera gás sulfídrico (H₂S)!";
    } else {
        resultado = "Nenhuma reação ocorre com esses reagentes.";
    }
    
    document.getElementById('resultadoReacao').innerText = resultado;
}