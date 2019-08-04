import { House } from 'src/app/types/house';
import { Dimitri } from '../characters/dimitri';
import { Sylvain } from '../characters/sylvain';
import { Dedue } from '../characters/dedue';
import { Ashe } from '../characters/ashe';
import { Ingrid } from '../characters/ingrid';
import { Annette } from '../characters/annette';
import { Felix } from '../characters/felix';
import { Mercedes } from '../characters/mercedes';

export const BlueLions: House = {
  name: 'Blue Lions',
  stub: 'blueLions',
  leader: Dimitri,
  students: [Dimitri, Sylvain, Dedue, Ashe, Ingrid, Annette, Felix, Mercedes],
  banner: 'src/assets/housese/blueLionsBanner.png',
  motto: 'Holy Kingdom of Faerghus'
};
