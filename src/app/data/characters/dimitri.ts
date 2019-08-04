import { Character } from 'src/app/types/character';

export const Dimitri: Character = {
    firstName: 'Dimitri',
	alliance: 'Blue Lions',
	name: 'Dimitri Alexandre Blaiddyd',
	skill: '-',
	stat: '-',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Dimitri_Portrait.png',
	flower: [],
	gift: ['Whetstone', 'Training Weight', 'Riding Boots', 'Ceremonial Sword'],
	lostItems: ['Black Leather Gloves', 'Dulled Longsword', 'Training Logbook'],
	trainings: [],
	lectures: [
		{
			question: 'No matter the weapon, it cannot be wielded properly without ample strength and stamina, regardless of the skills one may possess. I’ve been using various training techniques, but lately I feel like they all are lacking…',
			 answer: 'Try focusing on one skill at a time, at least for a while.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
