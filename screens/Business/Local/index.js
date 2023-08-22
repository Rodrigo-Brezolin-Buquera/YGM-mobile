import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import DoubleClickText from '../../../components/DoubleClickText';
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
            <DoubleClickText text={business.address} atribute={'address'} id={'main'} />

            <Text style={styles.label} >Capacidade:</Text>
            <DoubleClickText text={business.maxCapacity} atribute={'maxCapacity'} id={'main'} />

            <Text style={styles.label} >Telefone:</Text>
            <DoubleClickText text={business.phone} atribute={'phone'} id={'main'} />

            <Text style={styles.label} >Email:</Text>
            <DoubleClickText text={business.email} atribute={'email'} id={'main'} />

            <Text style={styles.label} >Site:</Text>
            <DoubleClickText text={business.website} atribute={'website'} id={'main'} />

            <Text style={styles.label} >Facebook:</Text>
            <DoubleClickText text={business.facebook} atribute={'facebook'} id={'main'} />

            <Text style={styles.label} >Instagram:</Text>
            <DoubleClickText text={business.instagram} atribute={'instagram'} id={'main'} />
        </View>
    );
};

export default Local;
