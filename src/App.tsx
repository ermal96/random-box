import React, { useEffect, useState } from 'react';
import { Layout, Card } from './Components';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store';
import { addItem, deleteItem } from './store/cartSlice';
import { ProductProps } from './Components/Card';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [product, setProduct] = useState<ProductProps>({
    name: 'IPhone 13Pro MAX',
    price: 1299,
    description: `A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The world’s fastest smartphone chip.`,
    id: 1,
    items: 0
  });

  return (
    <Layout>
      <Card 
        items={cartItems.length}
        id={product.id} 
        description={product.description} 
        price={product.price} 
        name={product.name} 
        addToCart={() => dispatch(addItem(product))} 
      />
    </Layout>
  );
}

export default App;
