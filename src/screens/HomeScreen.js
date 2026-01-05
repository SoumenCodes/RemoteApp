import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import BluetoothDropdown from '../components/BluetoothDropdown';
import ControlPad from '../components/ControlPad';
import { getPairedDevices, connectToDevice } from '../services/bluetoothService';
import { requestBluetoothPermissions } from '../utils/permissions';


export default function HomeScreen() {
    const [devices, setDevices] = useState([]);
    const [connected, setConnected] = useState(false);

    const [connectionStatus, setConnectionStatus] = useState('disconnected');
    // possible values: disconnected | connecting | connected | error


    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
        const list = await getPairedDevices();
        setDevices(list);
    };

    const handleConnect = async (device) => {
        try {
            setConnectionStatus('connecting');

            await connectToDevice(device.id);

            setConnectionStatus('connected');
        } catch (e) {
            console.log('Connection failed', e);
            setConnectionStatus('error');
        }
    };


    useEffect(() => {
        requestBluetoothPermissions();
    }, []);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <BluetoothDropdown
                devices={devices}
                onConnect={handleConnect}
            />

            <Text
                style={{
                    marginVertical: 8,
                    color:
                        connectionStatus === 'connected'
                            ? 'green'
                            : connectionStatus === 'connecting'
                                ? 'orange'
                                : 'red',
                }}
            >
                Status: {connectionStatus}
            </Text>

            {connectionStatus === 'connected' && (
                <ControlPad disabled={false} />
            )}
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-start',
    },
});