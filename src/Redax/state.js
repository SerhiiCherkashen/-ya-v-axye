import { rerenderEntireTree } from '../render'

let state = {
    expirienspage: {
        rightdata: [{ id: 1, text: 'Privet' },
        { id: 2, text: 'Hello' },
        { id: 3, text: 'LOL' },
        { id: 4, text: 'GOod' }],
        leftdata: [{ id: 1, el: 'Aaaa' },
        { id: 2, el: 'Bbbb' },
        { id: 3, el: 'Cccc' },
        { id: 4, el: 'Dddd' }],
    },
    messegepage: {
        listdata: [{ id: 1, list: 'Hello', imege: 'OOO' },
        { id: 2, list: `Hi`, imege: 'OOO' },
        { id: 3, list: 'Privet', imege: 'OOO' },
        { id: 4, list: 'Fack', imege: 'OOO' },
        { id: 5, list: 'HoHoHo', imege: 'OOO' },
        { id: 6, list: "Gooooood morning VIETNAM", imege: 'OOO' }],
        messegdatta: [{ id: 1, name: 'Stepan' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Mikola' },
        { id: 5, name: 'Vitia' },
        { id: 6, name: 'Staici' }],
    },
    centrpage: {
        messegdata: [{ id: 1, messeg: 'Hello world', like: 7 },
        { id: 2, messeg: 'I am a apple', like: 1 },
        { id: 3, messeg: 'My name Jekk', like: 29 },
        { id: 4, messeg: 'Hello man', like: 131 }],
    },
    povtorpage: {

        names: [{ id: 1, name: " Anton " },
        { id: 2, name: " Bil " },
        { id: 3, name: " Cem " },
        { id: 4, name: " Dima " },
        { id: 5, name: " Ivan " },
        ],
        texts: [{ id: 1, text: " asdsfdgdgon " },
        { id: 2, text: " basdad " },
        { id: 3, text: " cbafgfwfw " },
        { id: 4, text: " dbcajkjikjji " },
        { id: 5, text: " idbcajiji " },
        ],
    }
}

export let importPosts = (post) => {
    let newPost = {
        id: 0,
        messeg: post,
        like: 0,
    }
    return (
        state.centrpage.messegdata.push(newPost),
        rerenderEntireTree(state)

    )
}

export default state