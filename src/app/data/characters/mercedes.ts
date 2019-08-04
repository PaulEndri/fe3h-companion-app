import { Character } from 'src/app/types/character';

export const Mercedes: Character = {
    firstName: 'Mercedes',
	alliance: 'Blue Lions',
	name: 'Mercedes von Martritz',
	skill: 'Bow',
	stat: 'MAG',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Mercedes_Portrait.png',
	flower: ['Lavender'],
	gift: ['Armored Bear Stuffy', 'Gemstone Beads', 'Goddess Statuette', 'Tasty Baked Treat'],
	lostItems: ['Book of Ghost Stories', 'Fruit Preserves', 'How to Bake Sweets'],
	trainings: [],
	lectures: [
		{
			question: 'I enjoy a good ghost story, but I’ve never seen a ghost in real life. I would love to have that experience for myself, even just once!',
			 answer: 'Maybe you need a ritual to summon one.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
