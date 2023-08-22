import { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { mockPlans } from '../../../mockData';
import globalStyles from '../../../globalStyles';
import DoubleClickText from '../../../components/DoubleClickText';
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
            <View key={plan.id} style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                     <Text style={{ fontWeight: 'bold' }}>{plan.id}</Text> 
                     <DoubleClickText
                        //   itemCol={plansCol}
                        id={plan.id}
                        atribute={'price'}
                        text={plan.price ? plan.price : "" }
                        size={10}
                    /> 
                </View>
                <Image
                    onPress={() => onDelete(plan.id)}
                    source={require('../../../assets/trashIcon.png')}
                    />
            </View>
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
