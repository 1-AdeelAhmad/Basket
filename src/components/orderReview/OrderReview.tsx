import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Basket from '../basket/Basket';

const OrderReview = () => {
    return (
        <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12}>
                <Box sx={{ borderRadius: '5px', border: '1px solid #9b9ea2', height: 'auto' }}>
                    <Box sx={{ backgroundColor: '#9b9ea2' }}>
                        <Typography sx={{ p: 1 }} align="left" component="h6" variant="h6">
                            Review Your Order
                        </Typography>
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Basket />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default OrderReview;
