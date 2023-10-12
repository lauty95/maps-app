import { Feature } from "@/interfaces/places";
import { StateInterface } from "@/store";
import { LngLat } from "@/store/map/actions";
import Mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {
    const store = useStore<StateInterface>();

    return {
        map: computed(() => store.state.map.map),
        duration: computed(() => store.state.map.duration),
        distance: computed(() => store.state.map.distance),

        isMapReady: computed(() => store.getters["map/isMapReady"]),

        setMap: (map: Mapboxgl.Map) => store.commit("map/setMap", map),
        setPlaceMarkers: (places: Feature[]) => store.commit("map/setPlaceMarkers", places),

        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch("map/getRouteBetweenPoints", { start, end }),
    }
}
