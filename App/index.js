import React from 'react';
import StackNavigator from './router/StackNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
