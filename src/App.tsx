import React, { useEffect, useState } from 'react';
import { Layout, Box } from './Components';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store';
import { addItem } from './store/cartSlice';


interface ProductProps {
  price: number,
  name: string,
  id: number
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [product, setProduct] = useState<ProductProps>({
    name: 'Sample Product',
    price: 100,
    id: 1
  });

  return (
    <Layout>
      {console.log(cartItems)}
      <Box price={product.price} name={product.name} addToCart={() => dispatch(addItem(product))} />
    </Layout>
  );
}

export default App;
