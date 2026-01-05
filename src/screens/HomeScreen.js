import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import BluetoothDropdown from '../components/BluetoothDropdown';
import ControlPad from '../components/ControlPad';
import { getPairedDevices, connectToDevice } from '../services/bluetoothService';

export default function HomeScreen() {
    const [devices, setDevices] = useState([]);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
        const list = await getPairedDevices();
        setDevices(list);
    };

    const handleConnect = async (device) => {
        await connectToDevice(device.id);
        setConnected(true);
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text variant="titleLarge">Bluetooth Remote</Text>

            <BluetoothDropdown devices={devices} onConnect={handleConnect} />

            {connected && <ControlPad />}
        </View>
    );
}
