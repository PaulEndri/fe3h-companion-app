import { House } from 'src/app/types/house';
import { Claude } from '../characters/claude';
import { Ignatz } from '../characters/ignatz';
import { Hilda } from '../characters/hilda';
import { Marianne } from '../characters/marianne';
import { Raphael } from '../characters/raphael';
import { Lysithea } from '../characters/lysithea';
import { Lorenz } from '../characters/lorenz';
import { Leonie } from '../characters/leonie';

export const GoldenDeer: House = {
  name: 'Golden Deer',
  stub: 'goldenDeer',
  leader: Claude,
  students: [Claude, Ignatz, Hilda, Marianne, Raphael, Lysithea, Lorenz, Leonie],
  banner: 'src/assets/housese/goldenDeerBanner.png',
  motto: 'Leicester Alliance'
};
