import React from 'react'
import { Box } from '@mui/system';
import { OrderContextProviderProps } from '../definitions/State';

const TableRow = (props: OrderContextProviderProps) => {
      return(
            <Box sx={{ mt: 1, p: 1, display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}>
                  {props.children}
            </Box>
      )
}

export default TableRow;