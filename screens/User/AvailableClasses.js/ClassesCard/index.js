import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import globalStyles from '../../../../globalStyles';
import { styles } from './styles';

const ClassesCard = ({ yogaClass }) => {
    const [checkin, setCheckin] = useState(null);
    const [loading, setLoading] = useState(false);

    const { id, day, time, date, teacher, name, capacity } = yogaClass;

    useEffect(() => { }, []);

    const onDelete = () => { };

    const onCreate = () => { };

    const handleCheckin = () => {
        if (capacity === 0) return null;

        if (checkin) {
            // deletar
        } else {
            // criar
        }
    };


    if (loading) {
        return <Text>Carregando</Text>
    }

    return (
        <TouchableOpacity onPress={handleCheckin} style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.label}>
                    {day} - {time}
                </Text>
                {capacity > 0 ? (
                    <View style={globalStyles.line} >
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.text}>- Prof. {teacher}</Text>
                    </View>
                ) : (
                    <Text style={styles.text}>Não há mais vagas</Text>
                )}

                <View style={styles.actionContainer}>
                    <Text style={styles.actionText}>
                        {checkin ? 'Cancelar' : 'Agendar'}
                    </Text>
                    <View style={styles.iconContainer}>
                        {checkin ? (
                            <Image
                                source={require("../../../../assets/trashIcon.png")}
                                style={styles.icon}
                            />
                        ) : (
                            <Image
                                source={require("../../../../assets/chevronIcon.png")}
                                style={styles.icon}
                            />
                        )}
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );
};



export default ClassesCard