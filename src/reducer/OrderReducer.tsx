import { ReducerWithoutAction } from "react";
import { BasketItemProps, UserAction } from "../definitions/State"


export const orderReducer = (state: BasketItemProps[], action: UserAction):any => {
      switch(action.type) {
            case "REMOVE_ITEM":
                  return state.filter((item) => item.id !== action.id)
            case "INCREMENT":
                  const productI = state.find((item) => item.id === action.id);
                  if (productI) {
                        return state.map((item) => {
                              if (item.id === action.id) {
                                    if (productI.quantity >= 1 && productI.quantity < productI.maxInventory)
                                          return { ...productI, quantity: productI.quantity + action.quantity };
                              }
                              return item;
                        })
                  }
            case "DECREMENT":
                  const productD = state.find((item) => item.id === action.id);
                  if (productD) {
                        if (productD.quantity > 1) {
                              return state.map((item) => (item.id === action.id ? { ...productD, quantity: productD.quantity - action.quantity } : item))
                        }
                        return state.filter((item) => item.id !== action.id)
                  }
            case "ON_QUANTITY_CHANGE":
                  const product = state.find((item) => item.id === action.id);
                  const value = action.quantity
                  if (product) {
                        const max = product.maxInventory;
                        return value > max
                        ? state.map((item) => (item.id === action.id ? { ...product, quantity: max } : item))
                        : state.map((item) => {
                                    return item.id === action.id ? { ...product, quantity: value } : item;
                              })
                  }
            default: 
                  return state
      }
}