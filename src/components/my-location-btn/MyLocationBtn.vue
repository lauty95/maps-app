<template>
    <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClick">
        Ir a mi ubicacion
    </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from "@/composables"
import { computed, defineComponent } from "vue"

export default defineComponent({
    name: "MyLocationBtn",
    setup() {
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return {
            isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),

            onMyLocationClick: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14,
                })
            }
        }
    }
})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>