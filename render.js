import { html } from "./html.js"

/**
 * @param {string[]} players 
 */
export function render(players){
    const court = document.getElementById('court')
    court.innerHTML = html`<div>
        <h3>On Court</h3>
        <div class="players on">
            ${players.slice(0, 6).map(p => player(p))}
        </div>
        <h3>Bench</h3>
        <div class="players off">
            ${players.slice(6).map(p => player(p))}
        </div>
    </div>`
}

/**
 * @param {string} name 
 * @returns {string}
 */
 function player(name) {
    return html`<div class="player">${name}</div>`
}