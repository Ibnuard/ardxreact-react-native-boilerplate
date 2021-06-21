import React from 'react';
import Main from './src'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  )
}

export default App;
