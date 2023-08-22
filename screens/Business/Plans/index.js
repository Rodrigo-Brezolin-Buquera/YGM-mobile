import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { mockPlans } from '../../../mockData';
import globalStyles from '../../../globalStyles';
import LongPressText from '../../../components/LongPressText';
import { styles } from './styles';
import CreatePlanModal from './CreatePlanModal';


export const Plans = () => {
    const [plans, setPlans] = useState(mockPlans);
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const onDelete = (id) => {

    };

    useEffect(() => {

    }, [loading]);

    const list = plans.map((plan) => {
        return (
            <View key={plan.id} style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.label}>{plan.id}</Text>
                    <LongPressText
                        //   itemCol={plansCol}
                        id={plan.id}
                        atribute={'price'}
                        text={plan.price ? plan.price : ""}
                        size={10}
                    />
                </View>
                <Image
                    onPress={() => onDelete(plan.id)}
                    style={styles.icon}
                    source={require('../../../assets/trashIcon.png')}
                />
            </View>
        );
    })



    return (
        <View style={styles.columnContainer}>
            <View style={globalStyles.wrapContainer}>
                {list}
            </View>

            <TouchableOpacity
                style={globalStyles.button}
                onPress={toggleModal}
            >
                <Text style={globalStyles.buttonText}  >Novo Plano</Text>
            </TouchableOpacity>

            <CreatePlanModal isModalVisible={isModalVisible} toggleModal={toggleModal} />

        </View>
    );
};
