import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCart, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug Card',
  image: '../../../public/coffee-mug.png',
};

const App = () => {
  return (
    <>
      <ProductCart
        product={product}
        initialValues={{
          count: 0,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <br />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCart>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
