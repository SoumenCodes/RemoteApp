import BluetoothClassic from 'react-native-bluetooth-classic';

let connectedDevice = null;

export const getPairedDevices = async () => {
    return await BluetoothClassic.getBondedDevices();
};

export const connectToDevice = async (deviceId) => {
    if (connectedDevice && connectedDevice.id === deviceId) {
        return true;
    }
    // Disconnect previous device safely
    if (connectedDevice) {
        try {
            await connectedDevice.disconnect();
        } catch (e) {
            // ignore disconnect errors
        }
        connectedDevice = null;
    }

    // Connect new device
    const device = await BluetoothClassic.connectToDevice(deviceId);

    connectedDevice = device;
    return true;
};

export const sendCommand = async (command) => {
    if (!connectedDevice) return;

    try {
        // ✅ THIS IS THE ONLY VALID WAY
        await connectedDevice.write(`${command}\n`);
    } catch (e) {
        console.log('Send failed', e);
    }
};

export const disconnect = async () => {
    if (!connectedDevice) return;
    await BluetoothClassic.disconnect();
    connectedDevice = false;
};
