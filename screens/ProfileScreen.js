import React, {Component} from 'react'
import {Text, View, ScrollView} from 'react-native'

import styles from '../styles/ProfileStyle';
import {Button} from "react-native-elements";

const dataPerson = [
    {
        id: 1,
        name: 'Татьяна Пошаталова',
        company: 'Integral Space Academy',
        followers: 425,
        listeners: 22851,
        description: 'Основатель Академии целостного развития Integral Space. Сертифицированный преподаватель Mindfulness. Научный переводчик. Опыт практики более 5 лет. ~ Изучала психологию, майнфулнесс и буддизм по программам Принстона, Лейденского, Торонтского и Вирджинского университетов. ~ Имеет диплом практического психолога. ~ Организатор образовательных проектов. ~ Обучила практикам осознанности более 200 человек. ~ Участница научного исследования влияния практики медитации на мозг в МГУ, в контрольной группе практикующих более 5 лет. ~ Публикуется в онлайн-изданиях. ~ Имеет сертификацию в сферах: Mindfulness, Йога, Спиральная Динамика, Интегральный подход, Психология.',
        courses: [
            {id: 1, name: 'Здесь и Сейчас', duration: '5 минут'},
            {id: 2, name: 'Внимательная жизнь', duration: '5 минут'}
        ]
    }
];

type Props = {}

export default class ProfileScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.title}>Татьяна Пошаталова</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <ScrollView style={styles.container}>
                    {dataPerson.map((item, i) =>
                        <View style={styles.item_container} key={i}>
                            <Text>{item.name}</Text>
                        </View>)}
                </ScrollView>
            </View>
        )
    }
}
