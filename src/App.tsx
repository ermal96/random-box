import React from 'react';
import { Button, SIZE, SHAPE } from "baseui/button";

const App: React.FC = () => {
  return (
    <>
      <Button
        size={SIZE.compact}
        shape={SHAPE.pill}
      >
        Hello
      </Button>
    </>
  );
}

export default App;
