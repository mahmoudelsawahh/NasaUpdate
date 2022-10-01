import { Box } from "@mui/material";

      const Annotation = () => {
        return (
     <Box sx={{display : {md : 'block' , xs : 'none'}}}>
      <div
      style={{
        position: 'absolute',
        top: 70,
        left: 0,
        zIndex: 1,
        marginLeft: 15,
        marginTop: 15,
        padding: '1em',
        width: 220,
        color: '#000',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '.5em',
        fontSize: 12,
        lineHeight: 1.2,
      }}
    >
      <h2>The International Space Station (ISS)</h2>

      <br />

      <p style={{lineHeight : 1.6 , fontSize : '14px' }}>
      The International Space Station has a new commander as three Expedition 67 
      crewmates are less than a day away from returning to Earth. Most of the crew is 
      sleep-shifting today to prepare for Thursday morning’s crew departure as the rest 
      of the station’s astronauts focused on lab maintenance during Wednesday.
      </p>
    </div>
     </Box>
  );
};

export default Annotation;
