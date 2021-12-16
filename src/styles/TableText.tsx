import React, {ReactNode} from 'react'
import { Typography } from '@mui/material'
import { OrderContextProviderProps } from '../definitions/State'


const TableText = (props:OrderContextProviderProps) => {
      return(
            <Typography sx={{ mt: 1 }} align="left" component="h6" variant="h6">
                  {props.children}
            </Typography>
      )
}

export default TableText