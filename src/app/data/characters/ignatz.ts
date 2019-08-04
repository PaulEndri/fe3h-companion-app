import { Character } from 'src/app/types/character';

export const Ignatz: Character = {
    firstName: 'Ignatz',
	alliance: 'Golden Deer',
	name: 'Ignatz Victor',
	skill: 'Authority',
	stat: 'DEX',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Ignatz_Portrait.png',
	flower: ['Forget-me-nots'],
	gift: ['Ancient Coin', 'Ceremonial Sword', 'Goddess Statuette', 'Landscape Painting'],
	lostItems: ['Art Book', 'Blue Stone', 'Letter to the Goddess'],
	trainings: [],
	lectures: [
		{
			question: 'I’m not very good at sharing my opinion. Usually, I just go along with what everybody else thinks. I don’t want to bother anyone. Um..',
			 answer: 'They’ll appreciate your opinion. Let yourself be heard.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
