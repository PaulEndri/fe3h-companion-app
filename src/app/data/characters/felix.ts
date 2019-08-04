import { Character } from 'src/app/types/character';

export const Felix: Character = {
    firstName: 'Felix',
	alliance: 'Blue Lions',
	name: 'Felix Hugo Fraldarius',
	skill: 'Sword',
	stat: 'SPD',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Felix_Portrait.png',
	flower: [],
	gift: ['Ceremonial Sword', 'Hunting Dagger', 'Smoked Meat', 'Training Weight'],
	lostItems: ['Black Iron Spur', 'Sword Belt Fragment', 'Toothed Dagger'],
	trainings: [],
	lectures: [
		{
			question: 'Magic is not my forte. Being a gifted swordsman, I think my time is best served practicing swordplay technique. Why should I waste my time attending lectures, just to improve my magic skills from mediocre to average?',
			 answer: 'Knowing magic will make you a stronger swordsman.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
