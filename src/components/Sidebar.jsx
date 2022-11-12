import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor="#cf88aa" flex={1} padding={2} sx={{ display: {xs: "none", sm: "block"} }}>
      SideBar
    </Box>
  )
}

export default Sidebar
