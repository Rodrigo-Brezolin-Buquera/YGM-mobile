import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../../../globalStyles';
import { mockClasses } from '../../../mockData';
import ClassesCard from './ClassesCard';
import { styles } from './styles';

const AvailableClasses = ({ navigation }) => {
    const [yogaClasses, setYogaClasses] = useState(mockClasses);

    const classesList = yogaClasses.map((yogaClass) => (
        <ClassesCard key={yogaClass.id} yogaClass={yogaClass} />))


    return (
        <View style={ styles.listContainer}>
            <Text style={ styles.title}>Próximas aulas</Text>

            {
                yogaClasses?.length ?
                    classesList
                    :
                    <Text>Não há aulas</Text>
            }

        </View>
    );
};

export default AvailableClasses;
