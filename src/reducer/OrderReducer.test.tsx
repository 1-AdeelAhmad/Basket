import { orderReducer } from './OrderReducer'

describe('Order Reducer`', () => {
      
      const initialState = [
            {product: 'testProduct 1', price: 0.92, quantity: 2, id: 1, maxInventory: 10},
            {product: 'testProduct 2', price: 0.20, quantity: 8, id: 2, maxInventory: 10}
      ]

      it('Should Return New State for "INCREMENT" Action', () => {
            const newState = [
                  {product: 'testProduct 1', price: 0.92, quantity: 3, id: 1, maxInventory: 10},
                  {product: 'testProduct 2', price: 0.20, quantity: 8, id: 2, maxInventory: 10}
            ]
            const updatedAction = { type: 'INCREMENT', id: 1, quantity: 1 }
            const updatedState = orderReducer(initialState, updatedAction)
            expect(updatedState).toEqual(newState)
      });

      it('Should Return New State for "DECREMENT" Action', () => {
            const newState = [
                  {product: 'testProduct 1', price: 0.92, quantity: 1, id: 1, maxInventory: 10},
                  {product: 'testProduct 2', price: 0.20, quantity: 8, id: 2, maxInventory: 10}
            ]
            const updatedAction = { type: 'DECREMENT', id: 1, quantity: 1 }
            const updatedState = orderReducer(initialState, updatedAction)
            expect(updatedState).toEqual(newState)
      });
      it('Should Return New State for "REMOVE_ITEM" Action', () => {
            const newState = [
                  {product: 'testProduct 1', price: 0.92, quantity: 2, id: 1, maxInventory: 10}
            ]
            const updatedAction = { type: 'REMOVE_ITEM', id: 2, quantity: 1 }
            const updatedState = orderReducer(initialState, updatedAction)
            expect(updatedState).toEqual(newState)
      });
      it('Should Return New State for "ON_QUANTITY_CHANGE" Action', () => {
            const newState = [
                  {product: 'testProduct 1', price: 0.92, quantity: 2, id: 1, maxInventory: 10},
                  {product: 'testProduct 2', price: 0.2, quantity: 5, id: 2, maxInventory: 10}
            ]
            const updatedAction = { type: 'ON_QUANTITY_CHANGE', id: 2, quantity: 5 }
            const updatedState = orderReducer(initialState, updatedAction)
            expect(updatedState).toEqual(newState)
      });
});
