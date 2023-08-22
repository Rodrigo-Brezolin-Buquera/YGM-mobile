import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import LongPressText from '../../../components/LongPressText';
import { mockLocal } from '../../../mockData';
import { styles } from './styles';
// import { Line, MainContainer, TextContainer } from '../../theme'; // Adjust the imports

const Local = () => {
    const [business, setBusiness] = useState(mockLocal);

    useEffect(() => {

    }, []);

    return (
        <View>
            <Text style={styles.label} >Endereço:</Text>
            <LongPressText text={business.address} atribute={'address'} id={'main'} />

            <Text style={styles.label} >Capacidade:</Text>
            <LongPressText text={business.maxCapacity} atribute={'maxCapacity'} id={'main'} />

            <Text style={styles.label} >Telefone:</Text>
            <LongPressText text={business.phone} atribute={'phone'} id={'main'} />

            <Text style={styles.label} >Email:</Text>
            <LongPressText text={business.email} atribute={'email'} id={'main'} />

            <Text style={styles.label} >Site:</Text>
            <LongPressText text={business.website} atribute={'website'} id={'main'} />

            <Text style={styles.label} >Facebook:</Text>
            <LongPressText text={business.facebook} atribute={'facebook'} id={'main'} />

            <Text style={styles.label} >Instagram:</Text>
            <LongPressText text={business.instagram} atribute={'instagram'} id={'main'} />
        </View>
    );
};

export default Local;
