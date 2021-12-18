import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist";
import createElectronStorage from "redux-persist-electron-storage";
import userSlice from './user/userSlice'
import Cookies from 'cookies-js'

const persistConfig = {
    key: "root",
    storage: createElectronStorage(),
   whitelist: ["userSlice"],
  };
  
  

const rootReducer = combineReducers({
    userSlice: userSlice
})


export default  persistReducer(persistConfig, rootReducer)