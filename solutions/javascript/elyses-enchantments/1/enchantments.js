// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */






export function getItem(cards, position) {

  console.log("Starting test")
  let card = cards[position]
  console.log("cards " + cards, "position " + position, "card " + card )
  return card

}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {

  console.log("-------Starting test-------")
  console.log("starting cards" + cards)
  cards[position] = replacementCard
  console.log("cards " + cards, "position " + position, "replacement card " + replacementCard )
  return cards
  
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
   
  cards.push(newCard) //a function on the array, it means it has access to the array already so no need to declare a new variable
  return cards
  
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {

 cards.splice(position, 1)
  return cards

}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {

  cards.pop()
  return cards
  
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {

  cards.unshift(newCard)
  return cards
  
}

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {

  cards.shift()
  return cards
  
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {

  if (cards.length === stackSize) {
    return true
  } else {return false}

 // return (cards.length === stackSize) --- easier way of doing the above

  
}
