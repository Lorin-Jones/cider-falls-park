//database includes areas, amenities, services, guests
//areas includes id, name, servicesid, destinationId
//destinations includes id, name
//services includes id, name, guestId
//guests includes id, name, servicesId.
//rafting, canoeing, fishing, hiking, picnicking, rock climbing, lodging, parking, information, zip lines

const database = {
    areas: [{
        id: 1,
        name: "Chamfort River",
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        
    }, {
        id: 3,
        name: "Lodge",
        
    }, {
        id: 4,
        name: "Gander River",
   
    }, {
        id: 5,
        name: "Campgrounds",
        
    }, {
        id: 6,
        name: "Pine Bluffs Trails",
        
    }],
    services: [{
        id: 1,
        name: "rafting",
    }, {
        id: 2,
        name: "canoeing",
    }, {
        id: 3,
        name: "fishing",
    }, {
        id: 4,
        name: "hiking",
    }, {
        id: 5,
        name: "picnicking",
    }, {
        id: 6,
        name: "rock climbing",
    }, {
        id: 7,
        name: "lodging",
    }, {
        id: 8,
        name: "parking",
    }, {
        id: 9,
        name: "information",
    }, {
        id: 10,
        name: "zip lines",
    }, {
        id: 11,
        name: "hotel",
    }, {
        id: 12,
        name: "restaurant",
    }, {
        id: 13,
        name: "office park",
    }, {
        id: 14,
        name: "children's play area",
    }, {
        id: 15,
        name: "food vendor",
    }],
    guests: [{
        id: 1,
        name: "E. Howard Hunt",
        areaId: 2
    }, {
        id: 2,
        name: "Jack Ruby",
        areaId: 5
    }, {
        id: 3,
        name: "Guy Banister",
        areaId: 3
    }, {
        id: 4,
        name: "David Ferry",
        areaId: 1
    }, {
        id: 5,
        name: "George De Mohrenschildt",
        areaId: 4
    }, {
        id: 6,
        name: "James Jesus Angleton",
        areaId: 5
    }, {
        id: 7,
        name: "David Atlee Phillips",
        areaId: 6
    }, {
        id: 8,
        name: "Lee Harvey Oswald",
        areaId: 5
    }],
    areaServices: [
        { id: 1, areaId: 1, servicesId: 1 }, 
        { id: 2, areaId: 1, servicesId: 2 }, 
        { id: 3, areaId: 1, servicesId: 3 }, 
        { id: 4, areaId: 2, servicesId: 4 },
        { id: 5, areaId: 2, servicesId: 5 },
        { id: 6, areaId: 2, servicesId: 6 },
        { id: 7, areaId: 3, servicesId: 5 },
        { id: 8, areaId: 3, servicesId: 7 },
        { id: 9, areaId: 3, servicesId: 8 },
        { id: 10, areaId: 3, servicesId: 9 },
        { id: 11, areaId: 3, servicesId: 11 },
        { id: 12, areaId: 3, servicesId: 12 },
        { id: 13, areaId: 4, servicesId: 3 },
        { id: 14, areaId: 4, servicesId: 4 },
        { id: 15, areaId: 5, servicesId: 7 },
        { id: 16, areaId: 5, servicesId: 8 },
        { id: 17, areaId: 5, servicesId: 9 },
        { id: 18, areaId: 5, servicesId: 13 },
        { id: 19, areaId: 5, servicesId: 14 },
        { id: 20, areaId: 6, servicesId: 4 },
        { id: 21, areaId: 6, servicesId: 5 },
        { id: 22, areaId: 6, servicesId: 10 },
        { id: 23, areaId: 6, servicesid: 15 },
    ],  
}
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}
export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}
export const getServices = () => {
    return database.services.map(service => ({...service}))
}
export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({...areaService}))
}