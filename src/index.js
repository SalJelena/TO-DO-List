import { data, add, deleteById } from "./service.js";

const formaInput = document.querySelector('.js-form');
const inputText = document.querySelector('.js-input');
const divLista = document.querySelector('.js-list');

function addToDom (niz) {
    const divItem = document.createElement('div');
    divItem.className = 'list__item';

    const listItemCheckbox = document.createElement('input');
    listItemCheckbox.type = 'checkbox';
    listItemCheckbox.className = 'list__checkbox';

    const pText = document.createElement('p');
    pText.textContent = niz.desc;
    pText.className = 'list__text';

    const btnDelete = document.createElement('button');
    btnDelete.classList = 'fa fa-trash';

    btnDelete.addEventListener('click', () => {
        divItem.remove();
        deleteById(niz.id);
    });

    if(niz.done == true) {
        pText.className = 'list__checked-txt';
        listItemCheckbox.checked = true;
    }

    listItemCheckbox.addEventListener('change', () => {
        if(listItemCheckbox.checked == true) {
            pText.className = 'list__checked-txt'
            niz.done = true 
        }else if(listItemCheckbox.checked == false){
            pText.className = 'list__text'
        }
    });

    divItem.append(listItemCheckbox, pText, btnDelete);
    divLista.append(divItem);
}

data.forEach(dat=>{
    addToDom(dat)
})

formaInput.addEventListener('submit',(event) => {
    event.preventDefault()
    let listItem = {desc:inputText.value, done: false}

    if(inputText.value != ''){
        addToDom(listItem)
        add(listItem)      
    }

    inputText.value = ''
})