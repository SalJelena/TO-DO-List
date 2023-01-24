export let count = 5

export const data = [
    {
        id: 1,
        desc: 'Do homework',
        done: true,
    },
    {
        id: 2,
        desc: 'Make lunch',
        done: false,
    },
    {
        id: 3,
        desc: 'Do the laundry',
        done: false,
    },
    {
        id: 4,
        desc: 'Practice Arrays in JS',
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