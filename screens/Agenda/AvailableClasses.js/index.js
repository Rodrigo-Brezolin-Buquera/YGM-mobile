import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { mockClasses } from '../../../mockData';
import { goToClass } from '../../../Router/Coordinator';
import { styles } from './styles';

const AvailableClasses = ({ navigation }) => {
    const [yogaClasses, setYogaClasses] = useState(mockClasses);

    const ClassesCard = ({ yogaClass }) => {
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => goToClass(navigation, yogaClass.id)}
            >
                <Text style={styles.label}>
                    {yogaClass.day} - {yogaClass.time}
                </Text>
                <Text style={styles.line}>
                    {yogaClass.teacher} - {yogaClass.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View
            style={styles.listContainer}
        >
            {
                yogaClasses.length ?
                    yogaClasses.map((yogaClass) => (
                        <ClassesCard key={yogaClass.id} yogaClass={yogaClass} />))
                    :
                    <Text>Não há aulas</Text>
            }

        </View>
    );
};

export default AvailableClasses;
