import React, { Dispatch, ReactNode } from 'react';

export interface OrderContextProviderProps {
    children: ReactNode;
}

export interface BasketItemProps {
    product: string
    price: number
    quantity: number
    id: number
    maxInventory: number
}

export interface OrderContextProps {
    basketItems: BasketItemProps[]
    dispatch: any
}

export interface UserAction{
    type: string,
    id: number,
    quantity: number
}
