import * as React from 'react';
import { Container } from '@mui/material';
import Checkout from './components/checkout/Checkout';
import OrderContextProvider from './contexts/OrderContext';

const App = () => {
    return (
        <OrderContextProvider>
            <Container maxWidth="md">
                <Checkout />
            </Container>
        </OrderContextProvider>
    );
};

export default App;
