// export const getHeaders = () => {
//     if (typeof window !== "undefined") {
//         const token = localStorage.getItem("token")
//         const auth = {
//             headers: {
//                 Authorization: token
//             }
//         }
//         return auth
//     }
// }

import * as SecureStore from 'expo-secure-store';

export const setStorageItem = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
}

export const getStorageItem =  async (key) => {
  let result = await SecureStore.getItemAsync(key);
  return result || null
}

export const deleteStorageItem = async (key) => {
  await SecureStore.deleteItemAsync(key);
}