import { Character } from 'src/app/types/character';

export const Petra: Character = {
    firstName: 'Petra',
	alliance: 'Black Eagles',
	name: 'Petra Macneary',
	skill: 'Riding',
	stat: 'DEX',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Petra_Portrait.png',
	flower: ['Sunflower'],
	gift: ['Exotic Spices', 'Hunting Dagger', 'Smoked Meat'],
	lostItems: ['Annotated Dictionary', 'Exotic Feather', 'Small Tan Hide'],
	trainings: [],
	lectures: [
		{
			question: 'I am having a question. I wish for improvement of my lance skills. But I am having uncertainty about how to be training effectively. What should I be doing?',
			 answer: 'Try studying the movements of others for improvement.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
