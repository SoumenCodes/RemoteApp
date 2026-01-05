import BluetoothClassic from 'react-native-bluetooth-classic';

export const getPairedDevices = async () => {
    return await BluetoothClassic.getBondedDevices();
};

export const connectToDevice = async (deviceId) => {
    return await BluetoothClassic.connectToDevice(deviceId);
};

export const sendCommand = async (command) => {
    await BluetoothClassic.write(command);
};
