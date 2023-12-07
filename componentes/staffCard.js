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
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
    </div>
  );
}
