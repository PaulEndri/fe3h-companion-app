import { Character } from 'src/app/types/character';

export const Edelgard: Character = {
    firstName: 'Edelgard',
	alliance: 'Black Eagles',
	name: 'Edelgard von Hresvelg',
	skill: '-',
	stat: '-',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Edelgard_Portrait.png',
	flower: ['Carnation'],
	gift: ['Armored Bear Stuffy', 'Board Game', 'Monarch Studies Book'],
	lostItems: ['Eastern Porcelain', 'Time-worn Quill Pen', 'White Glove'],
	trainings: [],
	lectures: [
		{
			question: 'When one professor lectures many students, some will inevitably have trouble keeping up, while others will get too far ahead in their studies. I wonder how this problem might be solved…',
			 answer: 'Perhaps we should make lectures optional.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
