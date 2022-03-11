import { Uuid4 } from '../../dist/mod.js';
const MyUuid4 = new Uuid4();
const base64 = MyUuid4.asBase64();
const bin = MyUuid4.asBinString();
const hex = MyUuid4.asHexString();
const uuid = MyUuid4.asUuid();
const div = document.getElementById('as');
div.innerText = '';
const ul = document.createElement('ul');
let li = document.createElement('li');
li.innerText = `base64: ${base64}`;
ul.appendChild(li);
console.log('base64:');
console.log(base64);
li = document.createElement('li');
li.innerText = `bin: ${bin}`;
ul.appendChild(li);
console.log('bin:');
console.log(bin);
li = document.createElement('li');
li.innerText = `hex: ${hex}`;
ul.appendChild(li);
console.log('hex:');
console.log(hex);
li = document.createElement('li');
li.innerText = `uuid: ${uuid}`;
ul.appendChild(li);
console.log('uuid:');
console.log(uuid);
div.appendChild(ul);