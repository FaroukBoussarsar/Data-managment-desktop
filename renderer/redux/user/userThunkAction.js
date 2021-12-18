import { Dispatch } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import { getUserFailure, getUserStart, getUserSuccess } from "./userSlice";

export const getUser = () => async( dispatch) => {
    dispatch(getUserStart())
    console.log('i am');
    try {
        await aaa(6)
        console.log('i am');
        
        dispatch(getUserSuccess({name:'jibij'}))
        
    } catch (error) {
        dispatch(getUserFailure('nbjh'))
    }
} 


const aaa = (number) => {
    return new Promise((resolve, reject)=> {
        if(number> 5) {
            resolve(number)
        }else {
            reject(number)
        }
    })
}