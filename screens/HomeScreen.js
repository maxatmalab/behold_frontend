import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons';

const IconComponent = Ionicon;

import styles from '../styles/HomeStyle';
import {Button} from 'react-native-elements';

import {LIGHT_COLOR_GRAY_1} from "../styles/common";

type Props = {}

export default class HomeScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.bg}>
                <View style={styles.header}>
                    <Text><IconComponent name={'ios-search'} size={20} color={LIGHT_COLOR_GRAY_1}/> Поиск</Text>
                </View>
                <ScrollView>
                    <Button
                        title="На страницу Курса..."
                        onPress={() => this.props.navigation.push('Course')}
                    />
                    <Button
                        title="На страницу Профайла..."
                        onPress={() => this.props.navigation.push('Profile')}
                    />
                    <Button
                        title="На страницу Курса..."
                        onPress={() => this.props.navigation.push('Player')}
                    />

                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />

                    <Text>
                        Колоколов средневековый
                        Певучий зов, печаль времен,
                        И счастье жизни вечно новой,
                        И о былом счастливый сон.

                        И чья-то кротость, всепрощенье
                        И утешенье: все пройдет!
                        И золотые отраженья
                        Дворцов в лазурном глянце вод.

                        И дымка млечного опала,
                        И солнце, смешанное с ним,
                        И встречный взор, и опахало,
                        И ожерелье из коралла
                        Под катафалком водяным.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}