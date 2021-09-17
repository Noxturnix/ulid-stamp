/*
 * This file contains implemented codes which are referenced
 * from ulid/javascript by Alizain Feerasta.
 *
 * ulid/javascript is released under MIT License
 * https://github.com/ulid/javascript/blob/master/LICENSE
 */

export const ULID_LETTERS = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
export const ULID_LETTERS_LENGTH = ULID_LETTERS.length
export const ULID_TIME_MAX = 2 ** 48 - 1

// Converts a snowflake ID string into a JS Date object
export function convertSnowflakeToDate(id) {
	return new Date(
		id
			.substr(0, 10)
			.split('')
			.reverse()
			.reduce((p, c, i) => {
				return (p += ULID_LETTERS.indexOf(c) * ULID_LETTERS_LENGTH ** i)
			}, 0)
	)
}

// Validates a snowflake ID string and returns a JS Date object if valid
export function validateSnowflake(id) {
	if (id.length !== 26) {
		throw "That doesn't look like an ID. IDs have length of 26."
	}
	id.split('').map((l) => {
		if (ULID_LETTERS.indexOf(l) === -1)
			throw "That doesn't look like an ID. IDs may contain certain characters."
	})
	const timestamp = convertSnowflakeToDate(id)
	if (isNaN(timestamp.getTime())) {
		throw "That doesn't look like an ID. IDs have fewer digits."
	}
	if (timestamp.valueOf() > ULID_TIME_MAX) {
		throw "That doesn't look like an ID. IDs can't be this large."
	}
	return timestamp
}
