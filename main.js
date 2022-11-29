//@ts-check

import { render } from "./render.js"

let players = []

/**
 * @param {string[]} p
 */
function setPlayers(p) {
    players = p
    localStorage.setItem('players', JSON.stringify(p))
    render(p)
}

const popup = document.getElementById('popup') || new HTMLElement()

const form = document.getElementById('add-form')
const textArea = document.getElementById('names')
if (form instanceof HTMLFormElement && textArea instanceof HTMLTextAreaElement) {
    form.addEventListener('submit', e => {
        e.preventDefault()
        setPlayers(textArea.value.split('\n').map(n => n.trim()).filter(Boolean))
        popup.classList.remove('open')
    })
}


/**
 * @param {string} id 
 * @param {() => void} callback 
 */
function onClick(id, callback) {   
    const btnRotate = document.getElementById(id)
    if (btnRotate instanceof HTMLElement) {
        btnRotate.addEventListener('click', callback)
    } 
}

onClick('update', () => {
    const textArea = document.getElementById('names')
    if (!(textArea instanceof HTMLTextAreaElement)){
        return;
    }
    textArea.value = players.join('\n')
    popup.classList.add('open')
})
onClick('close', () => {
    popup.classList.remove('open')
})

onClick('rotate', () => {
    setPlayers([players[players.length-1], ...players.slice(0, -1)])
})

onClick('unrotate', () => {
    setPlayers([...players.slice(1), players[0]])
})

setPlayers(JSON.parse(localStorage.getItem('players') || '[]'))