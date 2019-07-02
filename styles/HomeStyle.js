import {StyleSheet} from 'react-native';
import {LIGHT_BG_COLOR_PRIMARY, LIGHT_BG_COLOR_SECONDARY, LIGHT_COLOR_GRAY_1} from "./common";

export default StyleSheet.create({
    bg: {
        backgroundColor: LIGHT_BG_COLOR_PRIMARY,
    },
    header: {
        height: 20,
        width: '100%',
        marginLeft: 24,
        marginRight: 24,
        marginTop: 16,
        color: LIGHT_COLOR_GRAY_1,
    }
})