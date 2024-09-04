import React from "react";
import Style from "@/modules/cardPortfolio.module.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CardPortfolio({ key, title, detail }) {
 

  return (
    <div className={Style.flipContainer} >
    <div className={Style.cardflip} key={key}>

    {/* Front */}
    <Card 
      sx={{ 
        width:"100%",
        height:400,
        color: "#FFFFFF",
        backgroundColor: 'rgba(20,20,20,0.1)',
        backdropFilter: 'blur(15px)'
      }}
        className={Style.front}
      >
      
      {/* <CardMedia
        component="img"
        height="194"
        //image={image}
        alt="imagen del proyecto"
      /> */}
      <CardContent>
        <Typography variant="h4" 
                    sx={{ 
                            marginTop:"50%" , 
                          marginBottom:2, 
                          color: "#ffffff",
                          fontWeight:"bold",
                          fontSize:"1.5rem",
                          textAlign:"center",
                          
        }}>
          {title}
        </Typography>
      
      
      </CardContent>
    </Card>

    {/* back */}
    <Card 
      sx={{ 
        width:"100%",
        height:400,
        color: "#FFFFFF",
        backgroundColor: 'rgba(20,20,20,0.1)',
        backdropFilter: 'blur(15px)'
      }}
        className={Style.back}
      >
      <CardContent>
        <Typography variant="h5" 
                    sx={{ 
                            marginTop:2 , 
                          marginBottom:2, 
                          color: "#ffffff",
                          fontWeight:"bold",
                          fontSize:"1.5rem",
                          textAlign:"justify",
                          hyphens: "auto",
                    }}>
          {detail}
          
        </Typography>
        {/* <div>{detail}</div> */}
        
      </CardContent>
    </Card>
      </div>
    </div>
  );
}

export default CardPortfolio;