import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (value, key) => {
    try {
        let val;
        if (typeof value === "object") {
            val = JSON.stringify(value)
        } else {
            val = value
        }

        await AsyncStorage.setItem(key, val)
    } catch (e) {
        // saving error
    }
}