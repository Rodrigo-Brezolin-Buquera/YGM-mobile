import { StyleSheet } from 'react-native';
import { applyShadow, colors } from '../../../globalStyles';

export const styles = StyleSheet.create({
    cardButton: applyShadow({
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.lightCian,
            borderRadius: 8,
            margin: 10,
            padding: 10,
            width:300
    })
});