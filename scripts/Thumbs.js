// TODO Add correct imports
import { getThumbs } from "./database.js"

const thumbs = getThumbs() 

// TODO Add event listener

// This function generates HTML for thumbs.
export const htmlThumbs = () => {
    return `<h2>Thumbs</h2>
        <select id="thumbs">
            <option value="0">Select Thumbs</option>
            ${
                thunmbs.map(
                    (thumb) => {
                        return `<option value="${thumb.id}">${thumb.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}