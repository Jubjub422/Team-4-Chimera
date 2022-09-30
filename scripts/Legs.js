import { getLegs } from "./database.js"

const legs = getLegs() 

export const Legs = () => {
    let html = '<select id="legs"><option value="0">Select legs...</option>'

    const listItemsArray = legs.map(leg => {
        return `<option id="${leg.id}"value="${leg.id}">${leg.name}</option>`
    })

    html += listItemsArray.join("")

    html += '</select>'
    return html
}