

Este es un paquete de pruebas de despliegue en NPM

## Mateo Ortiz

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'mo-product-card';
```


## ejemplo 

```
<ProductCard 
  product={product}
  initialValues={{
    count:4,
    // maxCount:10
  }}
  >
    { 
      ({reset, counter, increaseBy, maxCounterReached})=>(
          <>
            <ProductImage />
            <ProductTitle  />
            <ProductButtons  />
          </>     
    
        )
    
    }
</ProductCard> 

```