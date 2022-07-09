import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { useSelector, useDispatch } from 'react-redux';

export default function UserName() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.userReducer);
    return (
        <View>
            <Text>{currentUser.username}</Text>
        </View>
    )
}

