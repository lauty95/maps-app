import { ActionTree } from 'vuex';
import { PlacesState as PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse, Feature } from '@/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit("setLngLat", { lng: coords.longitude, lat: coords.latitude }),
            (err) => {
                console.error(err)
                throw new Error("No geolocation")
            }
        )
    },
    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
        if (query.length === 0) {
            commit("setPlaces", []);
            return [];
        }
        if (!state.userLocation) {
            throw new Error("No hay ubicación del usuario")
        }
        commit("setIsLoadingPlaces");
        const { data } = await searchApi.get<PlacesResponse>('/forward', {
            params: {
                proximity: state.userLocation?.join(","),
                q: query,
            }
        })
        commit("setPlaces", data.features);
        return data.features
    },
}



export default actions;
