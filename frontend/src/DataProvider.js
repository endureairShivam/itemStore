import React from 'react';
import { useState , createContext} from 'react';

export const DataContext= createContext()

export const DataProvider = (props) =>{
    const [items,setItems]= useState([]);
    return(
        <DataContext.Provider value={{items,setItems}}>
            {props.children}
        </DataContext.Provider>
    );
}

