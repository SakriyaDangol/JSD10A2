const myInput = document.createElement('input');
document.body.appendChild(myInput);
myInput.placeholder = 'Type here';

const myButton = document.createElement('button');
document.body.appendChild(myButton);
myButton.innerHTML = `Add`;

const orderList = document.createElement('ol');
document.body.appendChild(orderList);

myButton.addEventListener('click',  () => {
    const text = document.createTextNode(myInput.value);
    const list = document.createElement('li');
    orderList.appendChild(list);
    list.appendChild(text);
    document.querySelector('input').value = ' ';
    }
);