import { getAreaServices } from "./database.js"
import { getServices } from "./database.js"
import { getAreas } from "./database.js"
const allAreaServices = getAreaServices()
const services = getServices()
const allAreas = getAreas()
//invoke function inside area
export const servicesForArea = (areaObj) => {
    let serviceHTMLString = ""
    for (let areaService of allAreaServices) {
        if (areaService.areaId === areaObj.id) {
            for (let service of services) {
                if (areaService.servicesId === service.id) {
                    serviceHTMLString += `<ul id="area__service--${service.id}">${service.name}</ul>`
                }
            }
           
        }
    }
    serviceHTMLString += "</section>"
    return serviceHTMLString
}