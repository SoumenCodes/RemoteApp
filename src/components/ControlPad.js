import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { sendCommand } from '../services/bluetoothService';

export default function ControlPad() {
    return (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Button onPress={() => sendCommand('F')}>⬆ Forward</Button>

            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Button onPress={() => sendCommand('L')}>⬅ Left</Button>
                <Button onPress={() => sendCommand('R')}>➡ Right</Button>
            </View>

            <Button onPress={() => sendCommand('B')}>⬇ Back</Button>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Button mode="contained" onPress={() => sendCommand('START')}>
                    Start
                </Button>
                <Button
                    mode="outlined"
                    style={{ marginLeft: 10 }}
                    onPress={() => sendCommand('STOP')}
                >
                    Stop
                </Button>
            </View>
        </View>
    );
}
