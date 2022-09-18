const ADD_POST = "Add-Post"
const UPDAITE_NEW_POST_TEXT = "Updaite-New-Post-Text"
const UPDAITE_NEW_MESSEG_BODY = "Updait_New_Messeg_Body"
const SAND_MESSEG = "Sand_Messeg"

let store = {
    _state: {
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
            messegdatta: [
                { id: 1, name: 'Stepan' },
                { id: 2, name: 'Lena' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Mikola' },
                { id: 5, name: 'Vitia' },
                { id: 6, name: 'Staici' }
            ],
            listdata: [
                { id: 1, list: 'Hello' },
                { id: 2, list: `Hi` },
                { id: 3, list: 'Privet' },
                { id: 4, list: 'Fack' },
                { id: 5, list: 'HoHoHo' }
            ],
            newMessegText: " "
        },
        centrpage: {
            messegdata: [{ id: 1, messeg: 'Hello world', like: 7 },
            { id: 2, messeg: 'I am a apple', like: 1 },
            { id: 3, messeg: 'My name Jekk', like: 29 },
            { id: 4, messeg: 'Hello man', like: 131 }],
            newPostText: "Hello world",
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
    },
    _callSubscribe() {
        console.log('State change')
    },
    getState() {

        return (this._state)

    },
    subscribe(observer) {

        this._callSubscribe = observer

    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 0,
                messeg: this._state.centrpage.newPostText,
                like: 0,
            }
            this._state.centrpage.messegdata.push(newPost)
            this._state.centrpage.newPostText = ''
            this._callSubscribe(this._state)
        }
        if (action.type === UPDAITE_NEW_POST_TEXT) {

            this._state.centrpage.newPostText = action.newText
            this._callSubscribe(this._state)
        }
        if (action.tupe === UPDAITE_NEW_MESSEG_BODY) {
            this._state.messegepage.newMessegText = action.body
            this._callSubscribe(this._state)
        }
        if (action.type === SAND_MESSEG) {
            debugger
            let body = this._state.messegepage.newMessegText
            this._state.messegepage.newMessegText = " "
            this._state.messegepage.listdata.push({ id: 6, list: body })
            this._callSubscribe(this._state)
            debugger
        }
    }
}

export const addpostActionCreater = () => ({ type: ADD_POST })
export const updaitenewposttextActionCreater = (text) => {
    return { type: UPDAITE_NEW_POST_TEXT, newText: text }
}
export const SandMessegCreater = () => ({ type: SAND_MESSEG })
export const UpdaiteNewMessegBodyCreater = (body) => {
    return { type: UPDAITE_NEW_MESSEG_BODY, body: body }
}
window.state = store
export default store

// export let importPosts = (post) => {
//     let newPost = {
//         id: 0,
//         messeg: post,
//         like: 0,
//     }
//     return (
//         state.centrpage.messegdata.push(newPost),
// // / /// / // / / / // rerenderEntireTree(state)
//     )
// }