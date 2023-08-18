import { useState } from 'react';
import { FlatList, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mockContracts } from '../../../mockData';
import ContractCard from '../ContractCard';
import { useInput } from '../../../hooks/useInput';
import { styles } from './styles';

const ContractList = () => {
    const [list, setList] = useState(mockContracts)
    const [nameFilter, handleNameFilter] = useInput("")
    const navigation = useNavigation();

    const filteredList = list?.length &&
        list.filter(i => i.name?.toLowerCase().includes(nameFilter.toLowerCase()))

    return (
        <>
            <View style={styles.inputContainer} >
                <TextInput
                    value={nameFilter}
                    onChangeText={handleNameFilter}
                    placeholder="Buscar por nome"
                    style={styles.input}
                />
            </View>

            {
                list.length ?
                    <FlatList
                        data={filteredList}
                        renderItem={({ item }) => <ContractCard contract={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                    />
                    :
                    <Text>Não há usuários</Text>

            }
        </>
    );
};

export default ContractList;
