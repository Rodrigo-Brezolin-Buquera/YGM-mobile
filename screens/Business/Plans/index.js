import { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { mockPlans } from '../../../mockData';
import globalStyles from '../../../globalStyles';
import LongPressText from '../../../components/LongPressText';
import { styles } from './styles';
// import { TextCard } from '../../theme';
// import { PlanForm } from './PlanForm';

export const Plans = () => {
    const [plans, setPlans] = useState(mockPlans);
    const [loading, setLoading] = useState(false);

    const onDelete = (id) => {

    };

    useEffect(() => {

    }, [loading]);

    const list = plans.map((plan) => {
        return (
            <View key={plan.id}   style={styles.card}>
                <View style={styles.textContainer}>
                     <Text style={styles.label}>{plan.id}</Text> 
                     <LongPressText
                        //   itemCol={plansCol}
                        id={plan.id}
                        atribute={'price'}
                        text={plan.price ? plan.price : "" }
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
        <View>
            <View style={globalStyles.wrapContainer}>
            {list}
            </View>
         
        </View>
    );
};
