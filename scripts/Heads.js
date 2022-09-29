import { getHeads } from "./database.js"

const heads = getHeads() 


// Event listener for when a head is chosen

// This function will generate html elements from the heads object 
export const htmlHeads = () => {
    return `<h2>Heads</h2>
        <select id="heads">
            <option value="0">Select a Head</option>
            ${
                heads.map(
                    (head) => {
                        return `<option value="${head.id}">${head.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}