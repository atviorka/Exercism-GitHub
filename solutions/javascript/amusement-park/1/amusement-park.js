/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {

  const visitorInformation = {
    name: name,
    age: age,
    ticketId: ticketId
  }

  return visitorInformation

//   const visitorInformation = {
//   name,
//   age,
//   ticketId
// }
//another way of doign it if the variable and key have the same name
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {

  // { name: 'something', age: 234, ticketId: 'sdfkjskfj' }

console.log("Visitor at start: ", visitor)

visitor.ticketId = null;

console.log("Visitor after changing: ", visitor)

return visitor

}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {

   //console.log(tickets, 'tickets', ticketId, 'ticketId')

   //console.log(tickets.ticketID, ' ticketID status')

  const ticket = tickets[ticketId]
 
  if (ticket === null) {
    return 'not sold'
  } else if (ticket === undefined) {
    return 'unknown ticket id'
  } else {
    return `sold to ${ticket}`
  }

  // if ticket is null, return something

  // if ticket is undefined, return something else

  // else return 'ticket name'

   //console.log(tickets[ticketId])

}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {

  // ---- First version
  // const ticket = tickets[ticketId]
  //
  // if (ticket === null || ticket === undefined) {
  //   return 'invalid ticket !!!'
  // } else {
  //   return ticket
  // }
  

  // ---- Slightly shorter version
  // const ticket = tickets[ticketId]

  // return ticket ?? 'invalid ticket !!!' //same as above but using nullish coalescing


  // Without ticket variable
  return tickets[ticketId] ?? 'invalid ticket !!!'
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {

  return visitor.gtc?.version

}
