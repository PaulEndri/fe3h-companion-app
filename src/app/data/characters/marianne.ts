import { Character } from 'src/app/types/character';

export const Marianne: Character = {
    firstName: 'Marianne',
	alliance: 'Golden Deer',
	name: 'Marianne von Edmund',
	skill: 'Riding',
	stat: 'MAG',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Marianne_Portrait.png',
	flower: ['Lily of the Valley'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Floral Adornment'],
	lostItems: ['Bag of Seeds', 'Confessional Letter', 'How to be Tidy'],
	trainings: [],
	lectures: [
		{
			question: 'Um, excuse me… Can you help me? I always get the feeling that I’m being watched. I get so nervous that I can’t sleep at night…',
			 answer: 'You might be right. You should be careful.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
