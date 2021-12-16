import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { OrderContext } from '../../contexts/OrderContext';
import { BasketItemProps } from '../../definitions/State';
import { StyledTableCell, StyledTableRow } from '../../styles/Table';
import { UserAction } from '../../definitions/State'

export interface ProductListItemProps {
    item: BasketItemProps;
}

const BasketItem = ({ item }: ProductListItemProps) => {
    const { dispatch } = React.useContext(OrderContext);
    const [quantity, setQuantity] = React.useState('0');
    const [cost, setCost] = React.useState('0');

    const updatePrice = (price: number, pQuantity: number) => {
        if (pQuantity) {
            return setCost((item.price * pQuantity).toFixed(2));
        }
        return setCost('0');
    };

    useEffect(() => {
        setQuantity(item.quantity.toString());
        updatePrice(item.price, parseInt(quantity));
    }, [item, quantity]);

    const handleUpdate = (userAction: UserAction) => dispatch(userAction)

    return (
        <React.Fragment>
        <StyledTableRow >
            <StyledTableCell component="th" scope="row">
                {item.product}
            </StyledTableCell>
            <StyledTableCell align="center">£{item.price}</StyledTableCell>
            <StyledTableCell align="center">
                <input 
                    data-test="quantityInputField"
                    style={{width: '40px', height: '40px', textAlign: 'center', borderRadius: '5px', border: '1px solid gray'}}
                    name='quantity'
                    aria-label='quantity'
                    type="number"
                    value={quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUpdate({type: 'ON_QUANTITY_CHANGE', id: item.id, quantity: parseInt(e.target.value)})}
                />
                <button
                    style={{cursor: 'pointer', padding: '5px', fontSize: '20px', backgroundColor: 'red', border: 'none', boxShadow: 'none', color: 'white', borderRadius: '10px', width: '40px', height: '40px', margin: '5px'}}
                    data-test='decrement'
                    onClick={() => handleUpdate({type: 'DECREMENT', id: item.id, quantity: 1 })}
                >
                    -
                </button>
                <button
                    style={{cursor: 'pointer',padding: '5px', fontSize: '20px', backgroundColor: 'blue', border: 'none', boxShadow: 'none', color: 'white', borderRadius: '10px', width: '40px', height: '40px', margin: '5px'}}
                    data-test='increment'
                    aria-label='increment'
                    onClick={() => handleUpdate({type: 'INCREMENT', id: item.id, quantity: 1 })}
                >
                    +
                </button>
            </StyledTableCell>
            <StyledTableCell align="center">£{cost}</StyledTableCell>
            <StyledTableCell align="center">
                <Button
                    data-test="removeBasketItemBtn"
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => handleUpdate({type: 'REMOVE_ITEM', id: item.id, quantity: 0 })}
                >
                    Delete
                </Button>
            </StyledTableCell>
        </StyledTableRow>
        </React.Fragment>
    );
};

export default BasketItem;
