import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

import styles from '../styles/TeachersStyle';


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
                    {dataTeachers.map((item, i) =>
                        <View style={styles.item_container} key={i}>
                            <Text>{item.name}</Text>
                        </View>)}
                </ScrollView>
            </View>
        )
    }
}
