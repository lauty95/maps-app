import { Feature } from "@/interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; //long, lat
    isLoadingPlaces: boolean;
    places: Feature[];
}

function placesModule(): PlacesState {
    return {
        isLoading: false,
        userLocation: undefined,
        isLoadingPlaces: false,
        places: [],
    }
}

export default placesModule;