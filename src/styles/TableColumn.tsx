import React from 'react'
import { Box } from '@mui/system';
import { OrderContextProviderProps } from '../definitions/State';

const TableColumn = (props: OrderContextProviderProps) => {
      return(
            <Box sx={{ p: 1 }}>
                  {props.children}
            </Box>
      )
}

export default TableColumn;