import { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../../../globalStyles';
import { mockCheckins } from '../../../mockData';
import CheckinCard from './CheckinCard';
import { styles } from './styles';

const CheckinList = () => {
    const [list, setList] = useState(mockCheckins)


    const AddCheckinButton = () => {
        return (
            <TouchableOpacity style={styles.cardButton} onPress={() => { }}>
                <Text style={globalStyles.buttonText}>Adicionar pessoa</Text>
            </TouchableOpacity>
        );

    }
    const renderItem = ( item ) => {
        return item.id === 'AddCheckinButton' ? (
            <AddCheckinButton />
        ) : (
            <CheckinCard checkin={item} />
        )
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.normalText} >Check-ins:</Text>
            {
                list.length ?
                    <FlatList
                        data={[...list, { id: 'AddCheckinButton' }]}
                        renderItem={({ item }) => renderItem(item)}
                        keyExtractor={item => item.id}
                    />
                    :
                    <Text>Não há check-ins</Text>

            }


        </View>
    );
};

export default CheckinList;
