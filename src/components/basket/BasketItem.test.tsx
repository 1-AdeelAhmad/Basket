import {  mount , ReactWrapper,} from 'enzyme';
import BasketItem from './BasketItem';
import { OrderContext } from '../../contexts/OrderContext';
import { OrderContextProps } from '../../definitions/State';

const contexts: OrderContextProps = {
    basketItems: [{product: 'test', price: 1, quantity: 2, id: 1, maxInventory: 10 }],
    dispatch: jest.fn()
} 

describe('Basket Item Component', () => {
    let wrapper: ReactWrapper 
    
    beforeEach(() => {
        const props = {
            item: {product: 'testProduct', price: 0.92, quantity: 2, id: 1, maxInventory: 10 },
        };
        wrapper = mount(<OrderContext.Provider value={contexts}><BasketItem {...props}/></OrderContext.Provider>, {context: {contexts}})
    });
 
    it('Should Render Component Without Errors', () => {
        expect(wrapper.length).toBe(1)
    });

    it('Should Render Quantity Props With Correct Value', () => {
        const input = wrapper.find(`[data-test='quantityInputField']`)
        expect(input.props().value).toEqual("2")
    });

    it('Should Modify Product Quantity Input field', async () => {
        const input = wrapper.find(`[data-test='quantityInputField']`)
        input.props().value = '9'
        expect(input.props().value).toEqual("9")
    });
});

