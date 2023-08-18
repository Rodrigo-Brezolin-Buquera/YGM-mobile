import { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import UserCard from '../UserCard';
import { useNavigation } from '@react-navigation/native'; 
import {mockUsers} from "../../../mockData"


const UserList = () => {
    const [userList, setUserList] = useState(mockUsers)
    const navigation = useNavigation();

    // na requisição já buscar usuário inativos

    return (
        <>
            {
                userList.length ?
                    <FlatList
                        data={userList}
                        renderItem={({ item }) => <UserCard user={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                    />
                    :
                    <Text>Não há conta inativas</Text>

            }

        </>
    );
};

export default UserList;

