import React, { createContext } from 'react'
import usePostApi from './../API/PostApi';
import useUserApi from '../API/UseApi';

export const DataContext = createContext();

function DataProvider(props){
     
    const data ={
        postApi : usePostApi(),
        useApi  : useUserApi()

    }


    return(
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataProvider