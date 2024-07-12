import * as React from 'react';
import styles from '@/modules/staffCard.module.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function RecipeReviewCard() {
  return (
    <div className={styles.containerCard}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Matias Gabriel Asencio"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Nuestro líder de marketing y ventas es el arquitecto de nuestra presencia digital. Con una mente estratégica y creativa, desarrolla campañas innovadoras que resaltan la singularidad de nuestros servicios. Su habilidad para conectar con la audiencia y generar oportunidades de negocio es excepcional. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a><InstagramIcon /></a>
        </IconButton>
        <IconButton aria-label="share">
          <a><FacebookIcon /></a>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a href='https://www.linkedin.com/in/matias-gabriel-asencio-202ba6165/'> <LinkedInIcon /></a>
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Lucas Llamanzarez"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"

        height="300"
        image="https://res.cloudinary.com/de2od3piw/image/upload/v1710778975/Imagen_de_WhatsApp_2024-03-18_a_las_13.10.37_f5409ec2_gy1igk.jpg"
        alt="Lucas LLamanzarez"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Nuestro experto en seguridad informática y servidores en Kraken es el guardián digital de nuestros sistemas. Con sólida experiencia en diseño, implementación y mantenimiento de sistemas seguros, se dedica a proteger la integridad de los datos y la estabilidad de los servidores de nuestros clientes. Su enfoque proactivo puede anticipar riesgos garantizando tranquilidad digital. 

        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a><InstagramIcon /></a>
        </IconButton>
        <IconButton aria-label="share">
          <a><GitHubIcon /></a>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a><DesktopWindowsRoundedIcon /></a>
        </IconButton>
      </CardActions> */}
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Bernardo Broscheit"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://res.cloudinary.com/de2od3piw/image/upload/v1669759185/pics/IMG_20221120_235115_j47far.jpg"
        alt="Bernardo Broscheit"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        En Kraken, nuestro experto en desarrollo web es el arquitecto digital de nuestras soluciones. Con dominio de las últimas tecnologías, crea experiencias en línea cautivadoras y funcionales que superan expectativas. Su enfoque meticuloso y atención al detalle aseguran resultados impecables en cada proyecto.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <a><InstagramIcon /></a>
        </IconButton> */}
        <IconButton aria-label="share">
          <a href='https://github.com/bbroscheit'><GitHubIcon /></a>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a href='https://portfolio-orcin-tau-18.vercel.app/'> <DesktopWindowsRoundedIcon /></a>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a href='https://www.linkedin.com/in/bernardo-broscheit-94b567144/'> <LinkedInIcon /></a>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}
