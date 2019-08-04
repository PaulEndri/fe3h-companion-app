import { Character } from 'src/app/types/character';

export const Ingrid: Character = {
    firstName: 'Ingrid',
	alliance: 'Blue Lions',
	name: 'Ingrid Brandl Galatea',
	skill: 'Flying',
	stat: 'DEX',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Ingrid_Portrait.png',
	flower: [],
	gift: ['Legends of Chivalry', 'Riding Boots', 'Smoked Meat'],
	lostItems: ['Curry Comb', 'Jousting Almanac', 'Pegasus Horseshoes'],
	trainings: [],
	lectures: [
		{
			question: 'Art has never been my forte. Even when I apply myself and sketch a ton, I don’t seem to improve much. I can envision an image so perfectly in head, but turning it into something physical that I feel good about eludes me...',
			 answer: 'Don’t worry about the end result. Just keep practicing.'
		},
		{
			question: 'Times are hard... My favorite food cart that sold the most amazing grilled delights went under. I don\'t even know what to live for anymore...',
			answer: 'Maybe the cart will open back up if the war ends.'
		}
	],
};
