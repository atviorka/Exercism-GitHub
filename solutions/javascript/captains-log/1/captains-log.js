// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {

  return (`NCC-${Math.round(1000 + Math.random()*(9999 - 1000))}`)
}
  
/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {

   return (41000.0 + Math.random()*(42000.0 - 41000.0))
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {

  const planetArray = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];

  const randomPlanet = planetArray[Math.floor(Math.random() * planetArray.length)]

  return randomPlanet


}
