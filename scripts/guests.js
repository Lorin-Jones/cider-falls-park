import { getGuests } from "./database.js"

const allGuests = getGuests()

export const guests = () => {
    let html = "<ul>"

    for (const guest of allGuests) {
        html += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    html += "</ul>"
    return html
}
//
export const guestsPerArea = (area) => {
    let numberOfGuests = 0
    
    for (const guest of allGuests) {
        if (guest.areaId === area.id) {
            numberOfGuests++
        }
    }    
    return numberOfGuests
}

//call guests function in html aside

