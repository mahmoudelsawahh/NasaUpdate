import { Box } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Layout from '../layout'
import Navbar from '../layout/Navbar'
import LandingStar from '../star/Star'

 const NasaGallery = () => {
  return (
    <>
        <Box sx={{backgroundColor : '#000' , minHeight : '100vh'}}>
      <Navbar/>
      <Canvas style={{ position: 'absolute'}}>
        <Suspense fallback={null}>
           <LandingStar/>
        </Suspense>
      </Canvas>
       <Box sx={{color : '#fff' , position : 'absolute' , marginTop : '80px'}}>
         
       </Box>
    </Box>
    </>
  )
}
export default NasaGallery