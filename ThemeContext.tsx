import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: typeof lightTheme;
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
};


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// export default function ApiComponent(){
//     type post = {
//         title: string;
//         body: string;
//         id: number;
//     };
//     const[data, setData] = useState<post | null>(null)
//     const[error,setError] = useState(null);

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then((response)=> response.json())
//         .then(json =>{
//             setData(json)
//         })
//         .catch((error)=>{
//             setError(error.message);
//         });
//     },[]);

//     if(error){
//         return(
//             <View style = {styles.container}>
//                 {error &&
//                 <Text style={{color: 'red', fontSize : 20}}>{error}</Text>
//                 }
//             </View>
//         )
//     }


//     return(
//         <View style = {styles.container}>
//             <Text style={styles.title}>{data?.title}</Text>
//             <Text>{data?.body}</Text>
//         </View>
//     )

// }

// const styles = StyleSheet.create({
//     container : {
//         flex : 1,
//         justifyContent : 'center',
//         alignItems : 'center',
//     },
//     error : {
//         color: 'red',
//         fontWeight: 'bold',
//         fontSize : 20,
//     },
//     title : {
//         fontWeight : 'bold',
//         fontSize : 20,
//         padding : 8,
//     }
// })

