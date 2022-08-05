import { getServices } from "./database.js"
import { getAreaServices } from "./database.js"
import { getAreas } from "./database.js"
const services = getServices()
const allAreas = getAreas()
const selectedServices = getAreaServices()

export const findServices = () => {
    let html = "<h2 id='services__header'>Park Services</h2><ul id='services__list'>"

    for (const service of services) {
        html += `<li id="services--${service.id}">${service.name}</li>`
    }

    html += "</ul>"

    return html
}
//function should take service as a parameter
//create empty array
//loop through areaservices 
//check if service.id is equal to servicesId...
//then push service to array
//return array

//create function that takes returned array as parameter
//create empty string called areaNames
//loop through new array,
//inside loop, loop through areas
//if area.id === servicearea.servicesId
//areaNames = ${area.name}
const findAreaServices = (service) => {
    let foundServices = []
    for (let selectedService of selectedServices) {
        if (service.id === selectedService.servicesId) {
            foundServices.push(selectedService)
        }
    }
    return foundServices
}
const serviceAreaNames = (foundServices) => {
    let areaNames = ""
    for (let foundService of foundServices) {
        for (let area of allAreas) {
            if (foundService.areaId === area.id) {
                areaNames += `${area.name} `
            } 
        }
    }
    return areaNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("services")) {
            const [,servicesId] = itemClicked.id.split("--")
            
            for (const service of services) {
                if (service.id === parseInt(servicesId)) {
                    let foundServices = findAreaServices(service)
                    let areaNames = serviceAreaNames(foundServices)
                    window.alert(`${service.name} is available in ${areaNames}`)
                    
            
            
                }
            }
        }
    }
 )


//loop through services
            //for each service, loop areaservices,
            //check if service.id === servicesId,
            //push areaservice to array
            //loop through selectedareaservices
            //for each selectedareaservice
            //loop through allareas,
            //if sas.areaId is equal to area.id
            //string += area.name
            //return string



 // const serviceAreas = (service) => {
//     let areaServices = []
//     for (let service of services) {
//         for (let selectedService of selectedServices) {
//             if (service.id === selectedService.servicesId) {
//                 for (let area of allAreas) {
//                     if (selectedService.areaId === area.id) {
//                         areaServices.push(area)
//                     }
//                 }
//             }
//         }
//     }
//     return areaServices
// }

// let selectedAreas = serviceAreas()

// const servicesString = (serviceObj) => {
//     let HTMLString = ""
//     for (let selectedArea of selectedAreas) {
//         for (let area of allAreas) {
//             if (selectedArea.areaId === area.id) {
//                 HTMLString += `${area.name} `
//             }
        
//         }
//     }

//     return HTMLString
// }
// let areaServicesArray = []
//                     for (const area of allAreas) {
//                         for (const selectedService of selectedServices) {
//                             if (selectedService.areaId === area.id) {
//                                 areaServicesArray.push(selectedService)
//                             }
//                         }
//                         return areaServicesArray
//                     }
//                     let areaNames = ""
//                     for (const areaServicesObj of areaServicesArray) {
//                         for (const area of allAreas) {
//                             if (area.id === areaServicesObj.areaId) {
//                                 areaNames += `${area.name}`
//                             }
//                         }
//                         return areaNames
                        
//                     } 
    
//                 }
//             }