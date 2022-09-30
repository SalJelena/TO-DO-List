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

export const add = (item)=> {
    item.id = count++ 
    data.push(item)
   return item.id
}

export const deleteById =  id => {
    let index = data.findIndex(item=>item.id == id)
    data.splice(index, 1)
}