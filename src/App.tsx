import React from 'react';
import {Layout, Box} from './Components';

const App: React.FC = () => {
  return (
    <Layout>
     <Box price={200} name={'hello box'} />
    </Layout>
  );
}

export default App;
