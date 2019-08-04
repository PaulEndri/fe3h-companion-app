import { Character } from 'src/app/types/character';

export const Bernadetta: Character = {
    firstName: 'Bernadetta',
	alliance: 'Black Eagles',
	name: 'Bernadetta von Varley',
	skill: 'Bow',
	stat: 'STR',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Bernadetta_Portrait.png',
	flower: ['Pitcher Plant'],
	gift: ['Armored Bear Stuffy', 'Book of Sheet Music', 'Dapper Handkerchief', 'Landscape Painting', 'Watering Can'],
	lostItems: ['Hedgehog Case', 'Needle And Thread', 'Still-Life Picture'],
	trainings: [],
	lectures: [
		{
			question: 'Um. Sorry, but you should probably just skip me. I don’t have a question to ask. How would I even think of one?',
			 answer: 'You just did.'
		},
		{
			question: 'I want to knit an animal doll for someone, but I\'m not sure what kind to make. They love eagles, lions, and deer equally! I don\'t know what to do...',
			answer: 'Try using an eagle\'s head, a lion\'s body, and a deer\'s tail.'
		}
	],
};
