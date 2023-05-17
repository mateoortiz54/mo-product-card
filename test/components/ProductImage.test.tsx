import React from 'react';

import renderer from 'react-test-renderer'
import ProductCard, {ProductImage} from '../../src/components'
import { product2 } from '../data/products';

describe('Pruebas en el ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    
    const wrapper = renderer.create(
        <ProductImage img={'una imagen cualquiera'}/>    
    )
    
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Debe de mostrar el componente sin imagen personalizada', () => {
    
    const wrapper = renderer.create(
      <ProductCard product={product2}>
          {()=> (
              <ProductImage />
            )
          }    
      </ProductCard>
  

    )
    
    expect(wrapper.toJSON()).toMatchSnapshot();


  });    
  

  
});