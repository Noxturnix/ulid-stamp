import { convertSnowflakeToDate, validateSnowflake } from './convert'

const snowflake = '01FFJ72Z95CGKHGMHD13AWAPNT'
const defaultUnix = 1631625248037

test('converts snowflake to correct date', () => {
	expect(convertSnowflakeToDate(snowflake).getTime()).toBe(defaultUnix)
})

test('converts snowflake to correct date with custom epoch', () => {
	expect(convertSnowflakeToDate(snowflake).getTime()).toBe(defaultUnix)
})

test('returns date for valid snowflake', () => {
	expect(validateSnowflake(snowflake)).toBeInstanceOf(Date)
	expect(validateSnowflake(snowflake, 1000)).toBeInstanceOf(Date)
})

test('throws if snowflake is not an integer', () => {
	expect(() => validateSnowflake('abc')).toThrow()
})

test('throws if snowflake is too short', () => {
	expect(() => validateSnowflake('1000')).toThrow()
})

test('throws if snowflake is too long', () => {
	expect(() => validateSnowflake('9'.repeat(23))).toThrow()
})
