import { useMapStore, usePlacesStore } from "@/composables";
import Mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>()
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore()

        const initMap = async () => {
            await Promise.resolve()
            if (!mapElement.value) return
            if (!userLocation.value) return
            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: userLocation.value,
                zoom: 15
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4> Aquí estoy </h4>
                    <p>Actualmente en Rafaela</p>
                    <p>${userLocation.value}</p>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo(map)

            setMap(map)
        }

        onMounted(() => {
            if (isUserLocationReady.value) return initMap()
        })

        watch(isUserLocationReady, (newVal) => {
            if (isUserLocationReady.value) return initMap()
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }
})