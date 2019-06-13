import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'


const dataTeachers = [
    {
        id: 1,
        name: 'Татьяна Пошаталова',
        company: 'Integral Space Academy',
        followers: 425,
        listeners: 22851
    }
];

type Props = {}

export default class TeachersScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.title}>Учителя</Text>
                <ScrollView style={styles.container}>
                    {dataTeachers.map(item =>
                        <View style={styles.item_container}>
                            {item.name}
                        </View>)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16
    },
    container: {
        width: '80%',
        height: '40px'
    }
});
