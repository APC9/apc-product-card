# apc-product-card

Este es un paquete de pruebas de despliegue npm

### Alberto Peña  

## Ejemplos

```
import {
    ProductCart,
    ProductImage,
    ProductTitle,
    ProductButtons,
} from './apc-product-card';
```


```

const product = {
  id: '1',
  title: 'Coffee Mug Card',
  image: '../../../public/coffee-mug.png',
};

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
```
