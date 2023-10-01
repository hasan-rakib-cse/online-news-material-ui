import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


const News = (props) => {
    const {source, title, description, urlToImage, publishedAt} = props.article;
    const {name} = source;
  return (
    <>

        <Card sx={{ maxWidth: 345 }}>
            <CardHeader 
            avatar={ <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"> {name.slice(0,1)} </Avatar> }
            action={ <IconButton aria-label="settings"><MoreVertIcon /></IconButton> }
            title={source.name}
            subheader={publishedAt} />

            <CardMedia sx={{ height: 140 }} image={urlToImage} title={title} />  
            <CardContent>
                <Typography style={{textAlign: 'left', fontSize: '20px'}} gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography style={{textAlign: 'justify'}} variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>
            <CardActions style={{padding: '0 16px 16px 16px'}}>
                <Button variant="contained" color="success">Go Anywhere</Button>
            </CardActions>
        </Card>

    </>
  )
}

export default News