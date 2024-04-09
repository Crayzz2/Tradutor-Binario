let decimalParaBinario = function(num){
    let finalInvertido = ''
    if(num>255){ return 'Este número não pode ser convertido para binário'}
    while(num!=0){
        let resto = num%2
        if (resto==0){
            finalInvertido += 0
            num = num/2
        }else{
            finalInvertido += 1
            num = (num-1)/2
        }
    }
    while(finalInvertido.length<8){
        finalInvertido += '0'
    }
    let final = finalInvertido.split("").reverse().join("")
    return final
}
let binarioParaDecimal = function(bin){
    let binario = bin.split("").reverse().join("")
    let final = 0
    for(let i = 1; i<=8; i++){
        let bit = parseInt(binario[i-1])
        if(bit == 1){final += (bit*2)**(i-1)}
    }
    return final
}

let traduzir = document.getElementById('traduzir');
let traduzido = document.getElementById('traduzido');
let btn = document.getElementById('btn');

let ascii = {
    33: '!', 34: '"', 35: '#', 36: '$', 37: '%', 38: '&', 39: `'`, 40: '(', 41: ')', 42: '*',
    43: '+', 44: ',', 45: '-', 46: '.', 47: '/', 58: ':', 59: ';', 60: '<', 61: '=', 62: '>',
    63: '?', 64: '@', 65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H',
    73: 'I', 74: 'J', 75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R',
    83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z', 91: '[', 93: ']', 
    94: '^', 95: '_', 96: '`', 97: 'a', 98: 'b', 99: 'c', 100: 'd', 101: 'e', 102: 'f', 103: 'g',
    104: 'h', 105: 'i', 106: 'j', 107: 'k', 108: 'l', 109: 'm', 110: 'n', 111: 'o', 112: 'p', 113: 'q',
    114: 'r', 115: 's', 116: 't', 117: 'u', 118: 'v', 119: 'w', 120: 'x', 121: 'y', 122: 'z', 123: '{',
    124: '|', 125: '}', 126: '~', 128: 'Ç', 130: 'é', 131: 'â', 133: 'à', 135: 'ç', 136: 'ê', 138: 'è',
    141: 'ì', 143: 'Â', 144: 'É', 147: 'ô', 149: 'ò', 150: 'û', 151: 'ù', 160: 'á', 162: 'ó', 163: 'ú',
    181: 'Á', 182: 'Â', 183: 'À', 198: 'ã', 199: 'Ã', 214: 'Í', 224: 'Ó', 226: 'Ô', 227: 'Ò', 228: 'õ',
    229: 'Õ', 233: 'Ú', 255: ' '
}
let invertedAscii = {};

for (let key in ascii) {
    invertedAscii[ascii[key]] = parseInt(key);
}

btn.addEventListener('click', () => {

    let arr_traduzir = traduzir.value.split(' ');

    for (let i = 0; i<arr_traduzir.length; i++){
        console.log(arr_traduzir[i]);
    }

})