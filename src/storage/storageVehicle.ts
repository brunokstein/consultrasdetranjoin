import AsyncStorage from '@react-native-async-storage/async-storage';

import { VEHICLE_ID_STORAGE } from '@storage/storageConfig';

export async function storageVehicleId(newVehicleId: string) {
    await AsyncStorage.setItem(VEHICLE_ID_STORAGE, JSON.stringify(newVehicleId));
}

export async function storageVehicleIdGet() {
    const storage = await AsyncStorage.getItem(VEHICLE_ID_STORAGE);

    const vehicleId: string = storage ? JSON.parse(storage) : {};
    return vehicleId;
}

export async function storageVehicleIdRemove() {
    await AsyncStorage.removeItem(VEHICLE_ID_STORAGE);
}