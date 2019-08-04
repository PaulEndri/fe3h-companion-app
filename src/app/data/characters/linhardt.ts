import { Character } from 'src/app/types/character';

export const Linhardt: Character = {
    firstName: 'Linhardt',
	alliance: 'Black Eagles',
	name: 'Linhardt von Hevring',
	skill: 'Reason',
	stat: 'MAG',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Linhardt_Portrait.png',
	flower: [],
	gift: ['Book of Crest Designs', 'Fishing Float', 'Tasty Baked Treat'],
	lostItems: ['Animated Bait', 'Feather Pillow', 'The Saints Revealed'],
	trainings: [],
	lectures: [
		{
			question: 'When I take a lecture I’m not interested in, I get so...sleepy. I just can\'t fight it. I should just give up, don’t you think? Close my eyes and enjoy a peaceful slumber?',
			 answer: 'No need to fight it. You can’t help it.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
