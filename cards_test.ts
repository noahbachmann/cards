import { assertEquals } from '@std/assert'
import { Card, CardValues, ColorValues } from './cards.ts'

Deno.test('bei karten mit gleichen Wert werden die Farben verglichen', () => {
	const cardLow = new Card(ColorValues.Eicheln, CardValues.Neun)
	const cardHigh = new Card(ColorValues.Rosen, CardValues.Neun)

	const checkBeats = cardHigh.beats(cardLow)

	assertEquals(checkBeats, true)
})
