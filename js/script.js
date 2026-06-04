const links = document.querySelectorAll(".header-menu a");

console.log("javascript".includes("a"));

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    url.includes
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if (elemento) {
        elemento.checked = true;
    }
    
    console.log(parametro);
}

parametros.forEach(ativarProduto);
