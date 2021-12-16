import React, { useContext } from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import OrderReview from '../orderReview/OrderReview';
import { OrderContext } from '../../contexts/OrderContext';
import TableText from '../../styles/TableText';
import TableRow from '../../styles/TableRow';
import TableColumn from '../../styles/TableColumn';

const Checkout = () => {
    const { basketItems } = useContext(OrderContext);

    const subTotal = parseFloat(basketItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2));
    const VAT = parseFloat((0.2 * subTotal).toFixed(2));
    const Total = (subTotal + VAT).toFixed(2);

    const post = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const checkOutDetails = () => {
            const summary: any[] = [];
            basketItems.map((item) =>
                summary.push({
                    product: item.product,
                    quantity: item.quantity,
                    costs: (item.price * item.quantity).toFixed(2),
                }),
            );
            summary.push({ subTotal, VAT, Total });
            return { details: JSON.stringify(summary) };
        };

        axios
            .post('https://reqres.in/api/users', checkOutDetails())
            .then((response) => alert(response.data.details))
            .catch((error) => {
                console.error('There was an error!', error);
            });
    };

    return (
        <Grid container sx={{ p: 2 }}>
                <Grid item xs={12}>
                    <Typography sx={{ p: 2 }} align="center" component="h1" variant="h4">
                        Review Your Order & Complete Checkout
                    </Typography>
                    <Divider />
                    <OrderReview />
                    <Divider sx={{ pt: 3 }} />
                    <TableRow>
                        <TableColumn>
                            <TableText>Subtotal:</TableText>
                            <TableText>VAT @ 20%</TableText>
                        </TableColumn>
                        <TableColumn>
                            <TableText>£{subTotal}</TableText>
                            <TableText>£{VAT}</TableText>
                        </TableColumn>
                    </TableRow>
                    <Divider sx={{ p: 1 }} />
                    <TableRow>
                        <TableText>Total</TableText>
                        <TableText>£{Total}</TableText>
                    </TableRow>
                    <Divider sx={{ p: 1 }} />
                    <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            type="submit"
                            disabled={!basketItems.length}
                            sx={{ borderRadius: 10 }}
                            variant="contained"
                            size="large"
                            color="info"
                            onClick={(e) => post(e)}
                        >
                            Buy Now
                        </Button>
                    </Box>
                </Grid>
        </Grid>
    );
};

export default Checkout;
