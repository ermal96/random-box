import React from 'react';
import { Button, SIZE, SHAPE } from "baseui/button";
import Layout from './Components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Button
        size={SIZE.compact}
        shape={SHAPE.pill}
      >
        Hello
      </Button>
    </Layout>
  );
}

export default App;
