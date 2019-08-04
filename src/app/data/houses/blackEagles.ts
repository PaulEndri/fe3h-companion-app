import { House } from 'src/app/types/house';
import { Edelgard } from '../characters/edelgard';
import { Ferdinand } from '../characters/ferdinand';
import { Bernadetta } from '../characters/bernadetta';
import { Dorothea } from '../characters/dorothea';
import { Caspar } from '../characters/caspar';
import { Hubert } from '../characters/hubert';
import { Linhardt } from '../characters/linhardt';
import { Petra } from '../characters/petra';

export const BlackEagles: House = {
  name: 'Black Eagles',
  stub: 'blackEagles',
  leader: Edelgard,
  students: [Edelgard, Ferdinand, Bernadetta, Dorothea, Caspar, Hubert, Linhardt, Petra],
  banner: 'src/assets/housese/blackEaglesBanner.png',
  motto: 'Adrestian Empire'
};
