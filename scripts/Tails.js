// TODO Add correct imports
import { getTails } from "./database.js"

const tails = getTails() 

// TODO Add event listener

// This function generates HTML for tail options.
export const htmlTails = () => {
    return `<h2>Tails</h2>
        <select id="tails">
            <option value="0">Chose Tail Option</option>
            ${
                tails.map(
                    (tail) => {
                        return `<option value="${tail.id}">${tail.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}