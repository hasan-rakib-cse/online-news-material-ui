import React, { useEffect, useState } from 'react'

import News from '../News/News'
import { v4 as uuidv4 } from 'uuid';

// import Grid from '@mui/material/Grid';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const TopHeadline = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=594cc922de8b45aa9fff59a30f2cd992')
      .then(res => res.json())
      .then(data => setArticles(data.articles))
    
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    
  return (
    <div>
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} style={{textAlign: 'center'}}>

                    {articles.map(article => {
                        return(
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Item key={uuidv4()} style={{backgroundColor: '#efefef', padding: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <News article={article} />
                                </Item>
                            </Grid>
                        )
                    })}

            </Grid>
        </Box>
    </div>
  )
}

export default TopHeadline