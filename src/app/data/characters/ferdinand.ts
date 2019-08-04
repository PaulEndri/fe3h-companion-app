import { Character } from 'src/app/types/character';

export const Ferdinand: Character = {
    firstName: 'Ferdinand',
	alliance: 'Black Eagles',
	name: 'Ferdinand von Aegir',
	skill: 'Hvy. A',
	stat: 'DEX',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Ferdinand_Portrait.png',
	flower: [],
	gift: ['Riding Boots', 'Tea Leaves', 'Whetstone'],
	lostItems: ['Agricultural Survey', 'Bag of Tea Leaves', 'Maintenance Oil'],
	trainings: [],
	lectures: [
		{
			question: 'I am an avid arms collector. Since coming to live here, however, I have had much more trouble finding new items for my collection. Any ideas as to where I might find some uncommon weapons?',
			 answer: 'Ask a blacksmith to teach you how to craft your own.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
