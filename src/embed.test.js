import { getEmbedTitle } from './embed'
import { TZ_NAMES } from './util'

const snowflake = '01FFJ72Z95CGKHGMHD13AWAPNT'

test('returns false if given insufficient parameters', () => {
	expect(getEmbedTitle({})).toBe(false)
	expect(getEmbedTitle({ z: '-' })).toBe(false)
	expect(getEmbedTitle({ z: '-', l: 'en-US' })).toBe(false)
})

test('returns false if given invalid snowflake', () => {
	expect(getEmbedTitle({ z: '-', s: 'abc' })).toBe(false)
	expect(getEmbedTitle({ z: '-', f: 'abc' })).toBe(false)
})

test('returns correct timestamp when no time zone specified', () => {
	expect(getEmbedTitle({ s: snowflake, l: 'en-US', z: '-' })).toBe(
		'09/14/2021 1:14:08 PM UTC'
	)
})

test('returns correct timestamp with locale format', () => {
	expect(getEmbedTitle({ s: snowflake, l: 'de', z: '-' })).toBe(
		'14.09.2021 13:14:08 UTC'
	)
	expect(getEmbedTitle({ s: snowflake, l: 'de-DE', z: '-' })).toBe(
		'14.09.2021 13:14:08 UTC'
	)
	expect(getEmbedTitle({ s: snowflake, l: 'zn', z: '-' })).toBe(
		'2021/09/14 13:14:08 UTC'
	)
})

test('returns correct timestamp with America/New_York time zone', () => {
	expect(
		getEmbedTitle({
			s: snowflake,
			l: 'en-US',
			z: TZ_NAMES.indexOf('America/New_York'),
		})
	).toBe('09/14/2021 9:14:08 AM EDT')
})
