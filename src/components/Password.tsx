import { Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { useDispatch, useSelector } from 'react-redux'
export default function Password() {
    const currentUser = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    return (
        <View>
            <Text>{currentUser.password}</Text>
        </View>
    )
}
