let textoOriginal = "";
let textoCriptografadoUm = "";

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('textoResultado');
    input.placeholder = '';
});

function substituirLetras(str, substituicoes) {
        for (let letraAntiga in substituicoes) {
            let letraNova = substituicoes[letraAntiga];
            str = str.split(letraAntiga).join(letraNova);
        }
        return str;
};

function criptTexto() {
    let textoCrip = document.getElementById('campo').value;
    textoOriginal = textoCrip;
    let imagem = document.getElementById('img-grand');
    let substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoCriptografar = substituirLetras(textoCrip, substituicoes);
    textoCriptografadoUm = textoCriptografar;
    document.getElementById("textoResultado").value = textoCriptografadoUm;
    document.getElementById('campo').value = "";
    imagem.style.display = "none";

    var titulo = document.getElementById("titulo");
    var paragrafo = document.getElementById("paragrafo");
    
    if (titulo) {
        titulo.remove();
    }
    if (paragrafo) {
        paragrafo.remove();
    }
    document.getElementById("textoResultado").style.display = "block";
    document.getElementById("copy-clean").style.display = "block";
};

function descriptTexto() {
    let textoCrip = document.getElementById('campo').value;
    let imagem = document.getElementById('img-grand');
    let substituicoes = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let textoRestaurado = substituirLetras(textoCrip, substituicoes);
    document.getElementById('textoResultado').value = textoRestaurado;
    document.getElementById('campo').value = ""; 

    imagem.style.display = "none";

    if (titulo) {
        titulo.remove();
    }
    if (paragrafo) {
        paragrafo.remove();
    }
    document.getElementById("textoResultado").style.display = "block";
    document.getElementById("copy-clean").style.display = "block";
};

function copiarTexto(){
    let resultado = document.getElementById('textoResultado');
    let imagem = document.getElementById('img-grand');
    let textarea = document.createElement("textarea");

    textarea.value = resultado.value;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    document.body.removeChild(textarea);
    document.getElementById('textoResultado').value = "";

    imagem.style.display = "none";

        const input = document.getElementById('textoResultado');
        input.value = ''; 
        input.placeholder = 'Nenhuma mensagem';

};