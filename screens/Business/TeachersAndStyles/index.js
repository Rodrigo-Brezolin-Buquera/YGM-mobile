import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import RequestInput from '../../../components/RequestInput';
import { mockStyles, mockTeachers } from '../../../mockData';
import { styles } from './styles';

const TeachersAndStyles = () => {
    const [classStyles, setClassStyles] = useState(mockStyles);
    const [teachers, setTeachers] = useState(mockTeachers);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [loading]);

    const onDelete = (itemCol, id, name) => { };

    const renderList = (state) =>
        state?.length ? (
            state.map((item) => (
                <TouchableOpacity
                    style={styles.card}
                    key={item.id}
                    onLongPress={() => onDelete(item.id, item.name)}
                >
                    <Text style={styles.cardText}>{item.name} </Text>

                    <Text style={styles.cardText}> X </Text>
                </TouchableOpacity>
            )
            )
        )
            :
            (
                <Text>Não há itens disponíveis</Text>
            );

    return (
        <View style={styles.centralContariner}>
            <Text style={styles.label}>Professores</Text>

            <RequestInput
                // itemCol={teachersCol}
                setLoading={setLoading}
                placeholder={'Adicione uma pessoa'}
            />
            <View style={styles.wrapContainer}>
                {renderList(teachers)}
            </View>
            <Text style={styles.label}>Estilos</Text>

            <RequestInput
                // itemCol={stylesCol}
                setLoading={setLoading}
                placeholder={'Adicione um estilo'}
            />

            <View
                style={styles.wrapContainer}
            >{renderList(classStyles)}</View>
        </View>
    );
};

export default TeachersAndStyles;
