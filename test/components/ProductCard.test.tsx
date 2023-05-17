import React from 'react';

import renderer from 'react-test-renderer'
import {ProductCard} from '../../src/components'
import { product } from '../data/products';

const {act} = renderer;


describe('Pruebas en el ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    
    const wrapper = renderer.create(
        <ProductCard product={product}>
            {
                ()=>(
                    <h1>Hola Mundo</h1>    
                )
            }
        </ProductCard>    
    )
    
    expect(wrapper.toJSON()).toMatchSnapshot();

  });

  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    
    const wrapper = renderer.create(
        <ProductCard product={product}>
            {
                ({counter, increaseBy})=>(
                    <>
                        <h1>Hola Mundo</h1>
                        <span>{counter}</span>
                        <button onClick={()=>increaseBy(1)}>+1</button>
                    </>
                )            
            }
        </ProductCard>    

    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(()=>{
        (tree as any).children[2].props.onClick()
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');


  });

  
  
  
});