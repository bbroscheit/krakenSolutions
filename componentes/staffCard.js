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
        Nuestro maestro del marketing y las ventas en Kraken es el arquitecto detrás de nuestra presencia digital. Con una mente estratégica y creativa, desarrolla campañas innovadoras que destacan la singularidad de nuestros servicios. Su capacidad para conectar con nuestra audiencia y generar oportunidades de negocio es incomparable. Con una pasión contagiosa por el crecimiento y la visión empresarial, es el impulsor clave de nuestro éxito comercial.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a><InstagramIcon /></a>
        </IconButton>
        <IconButton aria-label="share">
          <a><FacebookIcon /></a>
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
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Nuestro experto en seguridad informática y servidores es el guardián digital de Kraken. Con una sólida formación y experiencia en el diseño, implementación y mantenimiento de sistemas seguros, se dedica a proteger la integridad de los datos y la estabilidad de los servidores de nuestros clientes. Su enfoque proactivo y su habilidad para anticipar y mitigar riesgos garantizan una tranquilidad total en el ámbito digital. Con un compromiso inquebrantable con la seguridad y la eficiencia, es el pilar sobre el cual se sustenta nuestra infraestructura tecnológica.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a><InstagramIcon /></a>
        </IconButton>
        <IconButton aria-label="share">
          <a><GitHubIcon /></a>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a><DesktopWindowsRoundedIcon /></a>
        </IconButton>
      </CardActions>
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
        Nuestro genio del desarrollo web en Kraken es el arquitecto digital de nuestras soluciones. Con un dominio completo de las últimas tecnologías, crea experiencias en línea cautivadoras y funcionales que superan las expectativas de nuestros clientes. Su enfoque versátil y su atención meticulosa al detalle garantizan resultados impecables en cada proyecto. Apasionado por la innovación y la excelencia técnica, es el motor impulsor de nuestra presencia en el mundo virtual.
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
      </CardActions>
    </Card>
    </div>
  );
}
