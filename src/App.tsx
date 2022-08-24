import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import { Image, SafeAreaView, useColorScheme, View, Platform } from 'react-native';

import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { graphqlClient } from './data/graphql';
import { CompanyInfoScreen } from './presentation/feature/companyInfo/screens/CompanyInfoScreen';
import { VerticalSpacing } from './presentation/components/VerticalSpacing';
import { name as appName } from '../app.json';
import { NavMenu } from './presentation/components/NavMenu';

const App = () => {
  const [revealed, setRevealed] = useState(false);
  const shouldShowDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: shouldShowDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ApolloProvider client={graphqlClient}>
      <VerticalSpacing height={(Platform.OS === 'ios') ? "5%" : "0%"} />
      <Backdrop
        revealed={revealed}
        header={
          <AppBar
            title={appName}
            transparent
            leading={props => (
              <IconButton
                icon={props => (
                  <Image style={{
                    width: "65%", height: "65%",
                  }} source={revealed ? require('./assets/img/arrow-left.png') : require('./assets/img/menu.png')} />
                )}
                onPress={() => setRevealed(prevState => !prevState)}
                {...props}
              />
            )}
          />
        }
        backLayer={<NavMenu />}
      >
        <BackdropSubheader title="Company Info" />
        <CompanyInfoScreen isDarkMode={false} />
      </Backdrop>
    </ApolloProvider>
  );
};

export default App;
