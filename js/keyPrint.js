import {keys} from './keys.js';

export function keyPrint(){
let keysHTML =' ';
keys.forEach((key)=>{
  keysHTML+=`
  <div data-key=${key.type} class="${key.class}">
    <span>${key.key}</span>
  </div>
  `

})
document.querySelector('.keys').innerHTML=keysHTML;
}
