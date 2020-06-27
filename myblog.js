//Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('my-form'));

//multiple element 
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

/*const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));*/

/*const ul = document.querySelector('#item');
//ul.remove();
//ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';//item1 is now hello

ul.children[1].innerText = 'Bob'

ul.lastElementChild.innerHTML = '<h1>Hello World</h1>'


const btn = document.querySelector('.button');
//btn.style.background = 'red'; //to manipulate css with js
*/

/*const btn = document.querySelector('.button');
btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = "#ccc";
})
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(function(){msg.remove()}, 3000);
    }
    else{
        const li = document.createElement('li');
        li.append(document.createTextNode(nameInput.value +' : '+emailInput.value));

        userlist.append(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}
