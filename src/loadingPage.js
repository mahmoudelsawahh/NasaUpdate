import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./component/earth";
import { TopSection } from "./component/earth/topSection";
import { Box } from "@mui/material";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
    
  return (
  <div>
       <Box sx={{display : {md : 'block' , xs : 'none'}}}>
      <CanvasContainer style={{  position : 'absolute' , backgroundColor : '#000' }}>
      <TopSection/>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
   </Box>
  </div>
  );
}

export default App;
