import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

import styles from '../styles/PlayerStyle';

const dataTrack = [
    {
        id: 1,
        course_name: 'Здесь и Сейчас',
        track_name: 'Осознанное дыхание',
        duration: '5:08',
        teacher: 'Татьяна Пошаталова',
        company: 'Integral Space Academy',
        likes: 0,
    }
];

type Props = {}

export default class CourseScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.title}>Осознание дыхания</Text>
            </View>
        )
    }
}
