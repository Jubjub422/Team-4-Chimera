import { getTorsos } from "./database.js"

const torsos = getTorsos()

export const Torsos = () => {
    let html = `<h2>Torsos</h2>`

    html += `<select id="torsos">`
    html += `<option value="0">Select a torso</option>`

    const arrayOfTorsos = torsos.map(torso => {
        return `<option value ="${torso.id}">${torso.name}</option>`
        }
    )

    html += arrayOfTorsos.join("")
    html += "</select>"
    return html
}