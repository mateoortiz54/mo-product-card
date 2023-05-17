import React from 'react';

import renderer from 'react-test-renderer'
import ProductCard, {ProductTitle} from '../../src/components'
import { product } from '../data/products';

describe('Pruebas en el ProductTitle', () => {
  test('debe de mostrar el componente correctamente en el titutlo personalizado', () => {
    
    const wrapper = renderer.create(
        <ProductTitle title='Hola mundo'/>    
    )
    
    console.log(wrapper.toJSON())
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    
    const wrapper = renderer.create(
        <ProductCard product={product}>
            {
                () => (
                    <ProductTitle/>
                )
            }
        </ProductCard>    
    )
    
    expect(wrapper.toJSON()).toMatchSnapshot();


  });    
  

  
});