import React from 'react';
import { ReactWrapper, shallow, mount,ShallowWrapper,  } from 'enzyme';
import App from './App';
import { OrderContextProps } from './definitions/State';
import { OrderContext } from './contexts/OrderContext';

const contexts: OrderContextProps = {
    basketItems: [{product: 'test', price: 1, quantity: 2, id: 1, maxInventory: 10 }],
    dispatch: jest.fn()
} 

describe('App Component', () => {
    let wrapper: ReactWrapper
    
    beforeEach(() => {
        wrapper = mount(<OrderContext.Provider value={contexts}><App/></OrderContext.Provider>)
    });

    it('Should Render App Component Without Errors', () => {
        expect(wrapper).toHaveLength(1)
    });
});
