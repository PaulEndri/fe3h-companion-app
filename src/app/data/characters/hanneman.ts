import { Character } from 'src/app/types/character';

export const Hanneman: Character = {
    firstName: 'Hanneman',
	alliance: 'Church of Seiros',
	name: 'Hanneman von Essar',
	skill: '-',
	stat: '-',
	image: '/.jpg',
	thumbnail: 'src/assets/characters/thumbnails/Hanneman_Portrait.png',
	flower: [],
	gift: ['Arithmetic Textbook', 'Book of Crest Designs', 'Dapper Handkerchief', 'Tea Leaves'],
	lostItems: ['Hammer and Chisel', 'Lens Cloth', 'Sketch of a Sigil'],
	trainings: ['Bow', 'Reason', 'Riding'],
	lectures: [
		{
			question: 'When I ask them to take part in my experiments, even the most industrious students run away from me. No matter how sincerely I plead! Do you have any suggestions?',
			 answer: 'Make the "Experiment" a "job" and pay them handsomely.'
		},
		{
			question: '',
			answer: ''
		}
	],
};
