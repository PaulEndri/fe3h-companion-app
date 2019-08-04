import { Character } from 'src/app/types/character';

export const Lorenz: Character = {
    firstName: 'Lorenz',
	alliance: 'Golden Deer',
	name: 'Lorenz Hellman Gloucester',
	skill: 'Reason',
	stat: 'CHA',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Lorenz_Portrait.png',
	flower: ['Rose'],
	gift: ['Book of Sheet Music', 'Floral Adornment', 'Tea Leaves'],
	lostItems: ['A Treatise On Etiquette', 'Artificial Flower', 'Silk Handkerchief'],
	trainings: [],
	lectures: [
		{
			question: 'The ladies have been giving me the cold shoulder, of late, I believe it is because they are intimidated by my noble presence. How can I be more... accessible?',
			 answer: 'Sounds like it’s their problem, not yours.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
