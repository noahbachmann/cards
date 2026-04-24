export enum CardValues {
	Sechs = 6,
	Sieben,
	Acht,
	Neun,
	Banner,
	Under,
	Ober,
	König,
	Ass
}

export enum ColorValues {
	Rosen = 3,
	Schellen = 2,
	Schilten = 2,
	Eicheln = 1
}

export class Card {
	constructor(
		private color: ColorValues,
		private value: CardValues
	) {}

	public beats(other: Card): boolean {
		if (this.value == other.value) {
			return this.color > other.color
		}
		return this.value > other.value
	}
}
