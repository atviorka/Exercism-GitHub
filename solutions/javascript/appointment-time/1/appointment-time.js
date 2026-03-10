// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  // console.log("------");
  // console.log("now", now);
  // console.log("days", days);

  const appointment = new Date(now ?? Date.now());
  // console.log("appointment", appointment);

  const daysToAdd = appointment.getDate() + days;
  // console.log("appointment.getDate()", appointment.getDate());
  // console.log("daysToAdd", daysToAdd);

  // update originalDate using .setDate() to add `days` onto the original date
  appointment.setDate(daysToAdd);
  // console.log("updated appointment", appointment);

  return appointment;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  // `2026-03-02:16:06:11Z`
  // `YYYY-MM-DDTHH:MM:SSZ`
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const appointment = new Date(timestamp)
  const appointmentObject = {
    year: appointment.getFullYear(),
    month: appointment.getMonth(),
    date: appointment.getDate(),
    hour: appointment.getHours(),
    minute: appointment.getMinutes()
  }
  // console.log('appointemnt Object', appointmentObject)
  return appointmentObject
  
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const appointmentDate = new Date(timestamp)
  
  if (options.year !== undefined) { appointmentDate.setFullYear(options.year)}
  if (options.month !== undefined) { appointmentDate.setMonth(options.month)}
  if (options.date !== undefined) { appointmentDate.setDate(options.date)}
  if (options.hour !== undefined) { appointmentDate.setHours(options.hour)}
  if (options.minute !== undefined) { appointmentDate.setMinutes(options.minute)}

  const dateISOString = appointmentDate.toISOString() // "2022-07-09T08:20:00.000Z"

  const updatedDetails = getAppointmentDetails(dateISOString)
  return updatedDetails
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {

  const dateA = new Date(timestampA)
  const dateAMilliseconds = dateA.getTime()
  console.log(dateAMilliseconds, 'dateAMilliseconds' )

  const dateB = new Date(timestampB)
  const dateBMilliseconds = dateB.getTime()

  const difference = (dateBMilliseconds - dateAMilliseconds) / 1000
  console.log('difference', difference)
  return Math.round(difference)
  
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  
  const difference = timeBetween(appointmentTimestamp, currentTimestamp)
  
  if (difference < 1) {
    return true
  } else {
    return false
  }
  
}
