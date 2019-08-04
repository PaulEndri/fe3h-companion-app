import { Character } from 'src/app/types/character';

export const Ashe: Character = {
    firstName: 'Ashe',
	alliance: 'Blue Lions',
	name: 'Ashe Ubert',
	skill: 'Lance',
	stat: 'CHA',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Ashe_Portrait.png',
	flower: ['Violet'],
	gift: ['Ancient Coin', 'Exotic Spices', 'Legends of Chivalry', 'Tasty Baked Treat'],
	lostItems: ['Bundle of Herbs', 'Evil Repelling Amulet', 'Moon Knight’s Tale'],
	trainings: [],
	lectures: [
		{
			question: 'I’m...kind of terrified to walk the monastery grounds at night. It’s unnerving how dark and quiet the place gets! How can I conquer my fear?',
			 answer: 'Think of it as training for night marches.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
