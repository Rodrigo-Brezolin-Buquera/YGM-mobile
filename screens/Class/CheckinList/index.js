import { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import globalStyles from '../../../globalStyles';
import { mockCheckins } from '../../../mockData';
import AddCheckinModal from './AddCheckinModal';
import CheckinCard from './CheckinCard';
import { styles } from './styles';

const CheckinList = () => {
    const [list, setList] = useState(mockCheckins)
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  

    const AddCheckinButton = () => {
        return (
            <TouchableOpacity style={styles.cardButton} onPress={toggleModal}>
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
            <Text style={globalStyles.boldText} >Check-ins realizados</Text>
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

            <AddCheckinModal isModalVisible={isModalVisible} toggleModal={toggleModal}/>
        </View>
    );
};

export default CheckinList;
