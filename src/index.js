//TO DO
// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci da je item uradjen).



import { data, add, deleteById } from "./service.js";


const formaInput = document.querySelector('.form')
const inputText = document.querySelector('#inputText')
const divLista = document.querySelector('.list')



//Funkcija da mogu vec postojeci niz da upisem u DOM

function addToDom (niz) {
    //kreiram DIV, listText item, checkbox input, delete button
    const divItem = document.createElement('div')
    divItem.className = 'div-item'

    const listItemCheckbox = document.createElement('input');
    listItemCheckbox.type = 'checkbox';
    listItemCheckbox.className = 'checkbox-inp'


    const pText = document.createElement('p')
    pText.textContent = niz.desc
    pText.className = 'text-todo'

    const btnDelete = document.createElement('button')
    btnDelete.classList = 'fa fa-trash'


    //dodajem event na button da se brise sto dodam kad kliknem
    btnDelete.addEventListener('click',()=>{
        divItem.remove()
        deleteById(niz.id)
        console.log(data)
    })  

    if(niz.done == true){
        pText.className = 'checked-txt'
        listItemCheckbox.checked = true
    }

    //dodajem event na checkbox da se precrta kad kliknem da sam uradila
    listItemCheckbox.addEventListener('change',()=>{
        if(listItemCheckbox.checked == true){
            pText.className = 'checked-txt'
            niz.done = true
            console.log(data)
            
        }else if(listItemCheckbox.checked == false){
            pText.className = 'text-todo'
        }

    })

    divItem.append(listItemCheckbox, pText, btnDelete)
    divLista.append(divItem)
}


//da upisem elemente iz datog niza u DOM

data.forEach(dat=>{
    addToDom(dat)
  
})


//event na formi za upisivanje 

formaInput.addEventListener('submit',(event) => {
    event.preventDefault()

    //pravim novi objekat da ga ubacim u dati niz, ID mi se dodaje posle ispod na kraju svakog objekta, i pocinje od broja 5
    let listItem = {desc:inputText.value, done: false}

    //validacija da mora nesto da se upise, i lepljenje u niz i na DOM
    if(inputText.value != ''){
        addToDom(listItem)
        add(listItem)
        console.log(data)         
    }else{
        console.log(`Upisi nesto!`)
    }

    //resetujem input na nulu
    inputText.value = ''

})