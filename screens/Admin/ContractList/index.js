import { useState } from 'react';
import { FlatList, Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mockContracts } from '../../../mockData';
import ContractCard from '../ContractCard';
import { useInput } from '../../../hooks/useInput';


const ContractList = () => {
    const [list, setList] = useState(mockContracts)
    const [nameFilter, handleNameFilter] = useInput("")
    const [planType, handlePlanType] = useInput("");
    const navigation = useNavigation();

    const filteredList = list?.length && list
        .filter(i => i.name?.toLowerCase().includes(nameFilter.toLowerCase()))
        .filter((i) => {
            switch (planType) {
                case "1x-Mensal":
                    return i?.plan === "1x-Mensal";
                case "2x-Mensal":
                    return i?.plan === "2x-Mensal";
                case "1x-Trimestral":
                    return i?.plan === "1x-Trimestral";
                case "2x-Trimestral":
                    return i?.plan === "2x-Trimestral";
                case "1x-Semestral":
                    return i?.plan === "1x-Semestral";
                case "2x-Semestral":
                    return i?.plan === "2x-Semestral";
                case "Avulsa":
                    return i?.plan === "---Avulsa";
                case "Gympass":
                    return i?.plan === "---Gympass";
                default:
                    return i?.plan;
            }
        })


    return (
        <>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: 10,
                }}
            >
                <TextInput
                    value={nameFilter}
                    onChangeText={handleNameFilter}
                    placeholder="Buscar por nome"
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 5,
                    }}
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
