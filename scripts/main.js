import { areas } from "./areas.js"
import { guests } from "./guests.js"
import { findServices } from "./services.js"

const serviceContainer = document.querySelector(".park__services")
const serviceHTML = `${findServices()}`
serviceContainer.innerHTML = serviceHTML
const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <section class="detail--column list details__areas">
        ${areas()}
    </section>

`

mainContainer.innerHTML = applicationHTML

const asideContainer = document.querySelector(".guests")

const guestsHTML = `<h2>Park Guests</h2>${guests()}`

asideContainer.innerHTML = guestsHTML














/*
resources: areas, services, guests
areas: areaId, services available
services: 
guests: hotel, restaurant, preserve, office park, child play area, trails


in html, create a header with the logo and the main header
create a subheader above the main section that lists the park services...
these will be clickable, and will tell how many guests are participating
then create a body with one article containing sections (parkareas)
and another article containing an aside (one aligned left and one aligned right)
for each section, add a header for the name of the area, a subheader with destinations,
and a list of services in each
flex wrap the sections to that they appear in two rows/three columns


what modules? need a database that contains parkareas, services, and guests (and additional destinations)
in database, parkareas should have an id number, location name, servicesIds, and destinationIds
services should have id and name
guests should have id and name
destinations should have id and name

i think i need a module for each of those (and a main)
need to use getter functions to export all
in main, the final function should print a string that invokes functions for each Area.(like main in dogwalking)
park area should export a function that iterates through areas and prints a string that opens a section and adds a header with the park name.
destinations should take parkarea function as a parameter, iterate through destinations...
if destinationId is equal to destination.id add destination to empty string.
--------------------------------------------------------
areas function iterates through array and outputs a copy
areaString function iterates through copy of array and prints a String with name for each one
then returns a copy of the array with section/string added to each.

services function iterates through array and outputs a copy

areaservices function iterates through areaString, and for each areaString, 
checks to see if area.id === areaservices.areaId
then adds the areaservice to an empty variable and returns the variable

next function takes variable as parameter,
loops through variable 

this should be done with string concatonation (last group project) and uploaded to the dom
inside services, create a function that iterates through services and outputs a variable that stores 

*/