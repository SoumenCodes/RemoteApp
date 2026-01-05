import { PermissionsAndroid, Platform } from 'react-native';

export async function requestBluetoothPermissions() {
    if (Platform.OS !== 'android') return true;

    if (Platform.Version >= 31) {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        ]);

        return (
            granted['android.permission.BLUETOOTH_CONNECT'] === 'granted' &&
            granted['android.permission.BLUETOOTH_SCAN'] === 'granted'
        );
    }

    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    return granted === 'granted';
}
