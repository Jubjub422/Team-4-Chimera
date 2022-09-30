import {database} from "./database.js"

const powers = getPowers()

export const Powers = () => {
    let html = '<select id="powers"><option value="0">Select power...</option>'

    const listItemsArray = powers.map(power => {
        return `<option id="${power.id}"value="${power.id}">${power.name}</option>`
    })

    html += listItemsArray.join("")

    html += '</select>'
    return html
}