import { Character } from 'src/app/types/character';

export const Claude: Character = {
    firstName: 'Claude',
	alliance: 'Golden Deer',
	name: 'Claude von Riegan',
	skill: '-',
	stat: '-',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Claude_Portrait.png',
	flower: [],
	gift: ['Board Game Piece', 'Exotic Spices', 'Riding Boots'],
	lostItems: ['Leather Bow Sheath', 'Mild Stomach Poison', 'Board Game Piece'],
	trainings: [],
	lectures: [
		{
			question: 'That was a fascinating lecture, but now my brain is fried. I feel like I need a change of pace to reinvigorate me. What do you recommend?',
			 answer: 'Try going for a stroll around the monastery.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
