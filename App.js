import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TemaContext, { TemaProvider } from './src/contexts/TemaContext';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  let tema = useContext(TemaContext);
  return (
    <TemaProvider>
      <PaperProvider theme={tema}>
        <HomeScreen />
      </PaperProvider>
    </TemaProvider>
  );
}


