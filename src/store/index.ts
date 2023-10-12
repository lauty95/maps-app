import { createStore } from 'vuex';
import { PlacesState } from './places/state';
import { MapState } from './map/state';
import placesModule from './places'
import mapModule from './map';

export interface StateInterface {
  places: PlacesState,
  map: MapState,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})
