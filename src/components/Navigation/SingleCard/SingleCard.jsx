import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SingelCard({
    name,
    image,

}) 
{
return (
    <Card sx={{ maxWidth: 345 ,"&:hover":{backgroundColor:"#e6e8e6"}}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Кино"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}