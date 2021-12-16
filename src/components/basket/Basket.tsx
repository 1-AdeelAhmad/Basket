import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import BasketItem from './BasketItem';
import { OrderContext } from '../../contexts/OrderContext';
import { StyledTableCell } from '../../styles/Table';

const columns = ['Product', 'Price', 'Quantity', 'Cost', ''];

const Basket = () => {
    const { basketItems } = useContext(OrderContext);

    return basketItems.length ? (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column, i) => {
                            return <StyledTableCell key={i}>{column}</StyledTableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {basketItems.map((item) => {
                        return <BasketItem key={item.id} item={item} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    ) : (
        <React.Fragment>
            <Typography component="h6" variant="h6">
                No Items In Basket
            </Typography>
        </React.Fragment>
    );
};

export default Basket;
