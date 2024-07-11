function encryptText() {
    let text = document.getElementById("input-text").value;
    if (text.match(/[^a-z\s]/)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = encryptedText;
}

function decryptText() {
    let text = document.getElementById("output-text").value;

    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = decryptedText;
}

function copyText() {
    let text = document.getElementById("output-text");
    text.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
