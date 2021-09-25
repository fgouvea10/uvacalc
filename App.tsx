import React from 'react';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import Landing from './src/pages/Landing';

function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) return <AppLoading />;

      return(
          <Landing />
      );
}

export default App;