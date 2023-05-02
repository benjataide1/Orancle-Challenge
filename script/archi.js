//Encrypter
let encrypt = document.getElementById("encrypt");

encrypt.addEventListener('click', () => {
  let { value } = document.getElementById("div-input");
  let data = value.toLowerCase().split('');
  let parrafo = document.getElementById("div-p");
  let newArray = [];


  data.map(item => {
    if (item === 'a') {
      newArray.push('ai');
    } else if (item === 'e') {
      newArray.push('enter');
    } else if (item === 'i') {
      newArray.push('imes');
    } else if (item === 'o') {
      newArray.push('ober');
    } else if (item === 'u') {
      newArray.push('ufat');
    } else {
      newArray.push(item);
    }
  });

  parrafo.innerHTML = newArray.join('')
  document.getElementById("div-input").value = '';
  document.getElementById("card-text").style.display = 'none';

});


//Decrypter
let decrypt = document.getElementById("decrypt");

decrypt.addEventListener('click', () => {
  let { value } = document.getElementById("div-input");
  let data = value.toLowerCase()
  let result = data.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
  let parrafo = document.getElementById("div-p");

  parrafo.innerHTML = result
  document.getElementById("card-text").style.display = 'none';
  document.getElementById("div-p").style.display = 'flex'
  document.getElementById("div-input").value = '';

});


//Buton Copy
let copy = document.getElementById("copy")

copy.addEventListener('click', () => {
  let content = document.getElementById("div-p");
 
  let element = content.innerText;
  let inputelement = document.createElement('input');
  inputelement.setAttribute('value', element);
  document.body.appendChild(inputelement);
  inputelement.select();
  document.execCommand('copy');

  inputelement.parentNode.removeChild(inputelement);
  document.getElementById("div-p").style.display = 'none'
  document.getElementById("card-text").style.display = 'flex'


});







