import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

import styles from '../styles/CourseStyle';

const dataCourse = [
    {
        id: 1,
        name: 'Здесь и Сейчас',
        teacher: 'Татьяна Пошаталова',
        company: 'Integral Space Academy',
        description: 'Умение находиться в моменте здесь и сейчас базовое для всех видов практик.',
        likes: 0,
        tracks: [
            {id: 1, name: 'Осознанное дыхание', duration: '5:08'},
            {id: 2, name: 'Медитация любящей доброты', duration: '9:12'},
            {id: 3, name: 'Звуки и мысли', duration: '11:33'},
            {id: 4, name: 'Дыхание и тело', duration: '10:36'},
        ]
    }
];

type Props = {}

export default class CourseScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.title}>Татьяна Пошаталова</Text>
                <ScrollView style={styles.container}>
                    {dataCourse.map((item, i) =>
                        <View style={styles.item_container} key={i}>
                            <Text>{item.name}</Text>
                        </View>)}
                </ScrollView>
            </View>
        )
    }
}
