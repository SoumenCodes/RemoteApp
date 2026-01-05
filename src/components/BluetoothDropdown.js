import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Modal, Portal, List } from 'react-native-paper';

export default function BluetoothDropdown({ devices, onConnect }) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button mode="outlined" onPress={() => setVisible(true)}>
                Select Paired Device
            </Button>

            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    contentContainerStyle={{
                        backgroundColor: 'white',
                        margin: 20,
                        borderRadius: 8,
                    }}
                >
                    <FlatList
                        data={devices}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <List.Item
                                title={item.name || item.id}
                                onPress={() => {
                                    setVisible(false);
                                    setTimeout(() => onConnect(item), 300);
                                }}
                            />
                        )}
                    />
                </Modal>
            </Portal>
        </>
    );
}
