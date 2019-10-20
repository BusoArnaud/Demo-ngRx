import { Unicorn } from './interfaces/unicorns.interface';
import { Capacity } from './interfaces/capacity.interface';

export interface AppState {
 unicornsList: Array<Unicorn>;
 capacitiesList: Array<Capacity>;
}
