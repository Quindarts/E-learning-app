import AsyncStorage from "@react-native-async-storage/async-storage";

const getTokenList = async () => {
    try {
        const data = await AsyncStorage.getItem('tokenList');
        return JSON.parse(`${data}`);
    } catch (error) {
        console.error('Error getting token list:', error);
        return [];
    }
};

const getAccessToken = async (): Promise<String> => {
    const tokenList = await getTokenList();
    return tokenList.accessToken
};

const getRefreshToken = async () => {
    try {
        const tokenList = await getTokenList();
        return tokenList.refreshToken || null;
    } catch (error) {
        console.error('Error getting refresh token:', error);
        return null;
    }
};

const setAccessToken = async (accessToken: string) => {
    try {
        const tokenList = await getTokenList();
        await AsyncStorage.setItem('tokenList', JSON.stringify({ ...tokenList, accessToken }));
    } catch (error) {
        console.error('Error setting access token:', error);
    }
};

const setRefreshToken = async (refreshToken: string) => {
    try {
        const tokenList = await getTokenList();
        await AsyncStorage.setItem('tokenList', JSON.stringify({ ...tokenList, refreshToken }));
    } catch (error) {
        console.error('Error setting refresh token:', error);
    }
};

export default {
    setAccessToken,
    setRefreshToken,
    getAccessToken,
    getRefreshToken
}