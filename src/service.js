export let count = 5

export const data = [
    {
        id: 1,
        desc: 'Uraditi domaci',
        done: true,
    },
    {
        id: 2,
        desc: 'Napraviti rucak',
        done: false,
    },
    {
        id: 3,
        desc: 'Ispeglati ves',
        done: false,
    },
    {
        id: 4,
        desc: 'Nauciti nizove',
        done: true,
    },
]


//ubacivanje itema u niz

export const add = (item)=> {   //napomena: objekat item sadrzi samo desc i done
    item.id = count++
 
    data.push(item)
    //data.push({id:count++,...item})
   // return count - 1

   return item.id
}



//brisanje iz niza

export const deleteById =  id => {
    let index = data.findIndex(item=>item.id == id)
    data.splice(index, 1)
}





// //zamena u nizu  -- nije bilo navedeno u domacem zadatku da treba da se uradi

// export const changeById = (id, noviItem)=>{
//     let index = data.findIndex(item=>item.id == id)
//     data.splice(index,1,noviItem)
// }





