import { Character } from 'src/app/types/character';

export const Hilda: Character = {
    firstName: 'Hilda',
	alliance: 'Golden Deer',
	name: 'Hilda Valentine Goneril',
	skill: 'Axe',
	stat: 'CHA',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Hilda_Portrait.png',
	flower: ['Anemone'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Gemstone Beads', 'Stylish Hair Clip'],
	lostItems: ['Handmade Hair Clip', 'Spotless Bandage', 'Used Bottle of Perfume'],
	trainings: [],
	lectures: [
		{
			question: 'I hate cleaning my room. It’s so boring, and to be honest, I’m kinda lazy. But I don’t want my room to get messy. Who do you think I should get to tidy up for me?',
			 answer: 'Ask somebody who’s good at cleaning.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
