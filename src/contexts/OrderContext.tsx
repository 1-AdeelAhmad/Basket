import React, { useState, createContext, useReducer, ReducerStateWithoutAction } from 'react';
import { BasketItemProps, OrderContextProps, OrderContextProviderProps,} from '../definitions/State';
import { orderReducer } from '../reducer/OrderReducer';

export const OrderContext = createContext<OrderContextProps>({} as OrderContextProps);

const initialProducts: BasketItemProps[] = [
    { product: 'Apple', price: 0.52, quantity: 2, id: 1, maxInventory: 10 },
    { product: 'Banana', price: 0.67, quantity: 3, id: 2, maxInventory: 10 },
];

const init = (initialCount: BasketItemProps[]) => initialCount

const OrderContextProvider = (props: OrderContextProviderProps) => {
    const [ basketItems, dispatch ] = useReducer(orderReducer, initialProducts)
    
    return (
        <OrderContext.Provider
            value={{
                basketItems,
                dispatch,
            }}
        >
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderContextProvider;
