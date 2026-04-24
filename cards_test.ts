import { assertEquals } from '@std/assert'
import { Card, CardValues, ColorValues } from './cards.ts'

Deno.test('BEATS: compare two values', () => {
	const cardLow = new Card(ColorValues.Eicheln, CardValues.Neun)
	const cardHigh = new Card(ColorValues.Rosen, CardValues.Ober)

	const checkBeats = cardHigh.beats(cardLow)

	assertEquals(checkBeats, true)
})

Deno.test('BEATS: if both values are equal, compare colors', () => {
	const cardLow = new Card(ColorValues.Eicheln, CardValues.Neun)
	const cardHigh = new Card(ColorValues.Rosen, CardValues.Neun)

	const checkBeats = cardHigh.beats(cardLow)

	assertEquals(checkBeats, true)
})
