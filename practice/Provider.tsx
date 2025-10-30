import React,{createContext, useState, ReactNode} from 'react'
import {View, Text, StyleSheet} from 'react-native'

type Theme = 'light' | 'dark';

export const MyContext = createContext<any>('dark');
const[theme, useTheme] = useState('dark');

export const MyProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return(
    <MyContext.Provider value={theme}>
      {children}
    </MyContext.Provider>
  )
}

