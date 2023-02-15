const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const copie = document.querySelector('.copie');
const squareInfo = document.querySelector('.square-info');
var encryptDecryptText = document.querySelector('#encrypt-decrypt-text');
const btnCopy = document.querySelector('.btn-copie');


       
btnEncrypt.addEventListener('click', function encrypt(){
 var text = document.querySelector("#input-text").value;
 encryptDecryptText.innerHTML = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
copie.classList.remove('hide');
squareInfo.classList.add('hide');
});



btnDecrypt.addEventListener('click', function decrypt (){
 var text = document.querySelector("#input-text").value;
 encryptDecryptText.innerHTML = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
 copie.classList.remove('hide');
 squareInfo.classList.add('hide');
});

btnCopy.addEventListener('click', function () {
    var inputFalso = document.createElement('input');
    inputFalso.setAttribute('value', encryptDecryptText.innerHTML)
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand('copy');
    document.body.removeChild(inputFalso);
  });
