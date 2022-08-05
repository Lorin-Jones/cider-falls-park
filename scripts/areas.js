import { getAreas } from "./database.js"
import { servicesForArea } from "./areaServices.js"
import { getGuests } from "./database.js"
import { guestsPerArea } from "./guests.js"
const allAreas = getAreas()
const allGuests = getGuests()


export const areas = () => {
    let html = ""

    for (const area of allAreas) {
        html += `<section class="details"><h2 id="areas--${area.id}">${area.name}</h2>`
        let selectedServices = servicesForArea(area) 
        html += selectedServices

    }

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("areas")) {
            const [,areaId] = itemClicked.id.split("--")
            
            for (let area of allAreas) {
                if (area.id === parseInt(areaId)) {
                    let getGuests = guestsPerArea(area)
                        
                    window.alert(`There are ${getGuests} guests in this area.`)
                }
            }
        }
    }
)
