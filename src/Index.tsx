import { TextInput, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from './redux/actions/counterActions';
import { setUser } from './redux/actions/userActions';
import UserName from './components/Username';
import Password from './components/Password';
export default function Index() {

    const currentUser = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const [userObject, setUserObject] = useState({ username: "", password: "" });

    const loginButtonOnPress = () => {
        dispatch(setUser(userObject));
    }
    const onChangeTextUsername = (text) => {
        let newUsername = {
            username: text
        }
        setUserObject({ ...userObject, ...newUsername });
    }
    const onChangeTextPassword = (text) => {
        let newPassword = {
            password: text
        }
        setUserObject({ ...userObject, ...newPassword })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeTextUsername(text)}
            />
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeTextPassword(text)}
            />
            <TouchableOpacity onPress={loginButtonOnPress}>
                <Text>Giriş yap</Text>
            </TouchableOpacity>
            <UserName />
            <Password />
        </View>
    )
}
