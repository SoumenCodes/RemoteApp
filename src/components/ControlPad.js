import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { sendCommand } from '../services/bluetoothService';

export default function ControlPad({ disabled = false }) {

    return (
        <View style={styles.container}>
            <Button
                mode="contained"
                disabled={disabled}
                onPress={() => sendCommand('F')}
            >
                ↑
            </Button>

            <View style={styles.row}>
                <Button
                    mode="contained"
                    disabled={disabled}
                    onPress={() => sendCommand('L')}
                >
                    ←
                </Button>

                <Button
                    mode="contained"
                    disabled={disabled}
                    onPress={() => sendCommand('R')}
                >
                    →
                </Button>
            </View>

            <Button
                mode="contained"
                disabled={disabled}
                onPress={() => sendCommand('B')}
            >
                ↓
            </Button>

            <View style={styles.row}>
                <Button
                    mode="outlined"
                    disabled={disabled}
                    onPress={() => sendCommand('START')}
                >
                    START
                </Button>

                <Button
                    mode="outlined"
                    disabled={disabled}
                    onPress={() => sendCommand('STOP')}
                >
                    STOP
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 16,
        marginVertical: 10,
    },
});
