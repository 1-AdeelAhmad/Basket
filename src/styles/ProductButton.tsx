import React from 'react'
import { OrderContextProviderProps } from '../definitions/State';

export interface ProductButtonProps {
      click: () => void,
      increment?: boolean
}


const ProductButton = (props: OrderContextProviderProps & ProductButtonProps) => {

      const {click, children, increment} = props;

      return(
            <button
                  style={{cursor: 'pointer',padding: '5px', fontSize: '20px', backgroundColor: `${increment? 'blue' : 'red'}`, border: 'none', boxShadow: 'none', color: 'white', borderRadius: '10px', width: '40px', height: '40px', margin: '5px'}}
                  data-test='increment'
                  aria-label='increment'
                  onClick={click}
            >
                  {children}
            </button>
      )
}

export default ProductButton;