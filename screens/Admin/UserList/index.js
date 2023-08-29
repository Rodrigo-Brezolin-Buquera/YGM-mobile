import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import UserCard from '../UserCard';
import { useNavigation } from '@react-navigation/native'; 
import {mockUsers} from "../../../mockData"
import { adminStyles } from '../adminStyles';


const UserList = () => {
    const [list, setList] = useState(mockUsers)
    const navigation = useNavigation();

    // na requisição já buscar usuário inativos

    return (
        <View style={adminStyles.userContainer}>
            {
                list.length ?
                    <FlatList
                        data={list}
                        renderItem={({ item }) => <UserCard user={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={adminStyles.gap}
                    />
                    :
                    <Text>Não há conta inativas</Text>

            }

        </View>
    );
};

export default UserList;

