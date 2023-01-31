import AsyncStorage from '@react-native-async-storage/async-storage';

import { DRIVERS_LICENSE_ID_STORAGE } from '@storage/storageConfig';

export async function storageDriversLicenseId(newDriversLicenseNumber: string) {
    await AsyncStorage.setItem(DRIVERS_LICENSE_ID_STORAGE, JSON.stringify(newDriversLicenseNumber));
}

export async function storageDriversLicenseIdGet() {
    const storage = await AsyncStorage.getItem(DRIVERS_LICENSE_ID_STORAGE);

    const driversLicenseId: string = storage ? JSON.parse(storage) : {};
    return driversLicenseId;
}

export async function storageDriversLicenseIdRemove() {
    await AsyncStorage.removeItem(DRIVERS_LICENSE_ID_STORAGE);
}