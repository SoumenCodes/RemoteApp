import React, { useState } from 'react';
import { View } from 'react-native';
import { Menu, Button } from 'react-native-paper';

export default function BluetoothDropdown({ devices, onConnect }) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={{ marginVertical: 16 }}>
            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Button mode="outlined" onPress={() => setVisible(true)}>
                        Select Paired Device
                    </Button>
                }
            >
                {devices?.map(device => (
                    <Menu.Item
                        key={device.id}
                        onPress={() => {
                            setVisible(false);
                            onConnect(device);
                        }}
                        title={device.name || device.id}
                    />
                ))}
            </Menu>
        </View>
    );
}
