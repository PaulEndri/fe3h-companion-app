import { House } from 'src/app/types/house';
import { Claude } from './students/claude';

export const GoldenDeer: House = {
  name: 'Golden Deer',
  stub: 'goldenDeer',
  leader: Claude,
  students: [Claude, Claude, Claude, Claude, Claude, Claude, Claude, Claude],
  banner: 'https://fireemblemwiki.org/w/images/thumb/4/44/FETH_Golden_Deer_symbol.png/300px-FETH_Golden_Deer_symbol.png',
  motto: 'no'
};
