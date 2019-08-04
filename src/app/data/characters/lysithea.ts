import { Character } from 'src/app/types/character';

export const Lysithea: Character = {
    firstName: 'Lysithea',
	alliance: 'Golden Deer',
	name: 'Lysithea von Ordelia',
	skill: 'Faith',
	stat: 'MAG',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Lysithea_Portrait.png',
	flower: ['Lily'],
	gift: ['Arithmetic Textbook', 'Armored Bear Stuffy', 'Book of Crest Designs', 'Tasty Baked Treat'],
	lostItems: ['Encyclopedia of Sweets', 'New Bottle of Perfume', 'Princess Doll'],
	trainings: [],
	lectures: [
		{
			question: 'There’s so much to do and never enough time in which to do it. Sleep is a nuisance, but my body forces me to slow down, even though my mind doesn’t want to. Do you have any tips for shaking tired feelings away?',
			 answer: 'Sleeping when you’re tired is best for you.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
