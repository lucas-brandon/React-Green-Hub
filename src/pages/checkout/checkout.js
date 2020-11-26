function getElem(elem) {
    return document.querySelector(elem);
};

export function showAlert (valor) {
    valor.style.display = "block";
}

export function hideAlert (valor) {
    valor.style.display = "none";
}