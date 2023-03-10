import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import NavContainer from './components/navigation/NavContainer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavContainer />
    </QueryClientProvider>
  );
}
