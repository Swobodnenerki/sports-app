import {React}from 'react'
import {useNavigate} from 'react-router-dom';
import photo from '../../photos/1.jpg';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import { ButtonContainer, NewsContainer } from "../../pages/HomePageElements";
import { Title, Body, Username } from '../../pages/HomePageElements';
export const selectedNews = 'newsId';

const NewsItem = ({data}) => {
  
    const navigate = useNavigate();
    const username = typeof data.username === 'string' ? data.username.substring(0,1) : '';
    const handleClick=()=>{
      navigate('/news',{state: data});
    }
    return (
        <NewsContainer>
          <Card sx={{ maxWidth: 500, marginBottom: 5, borderRadius: '20px'}} raised={true} >
            <CardHeader sx={{fontFamily: 'Montserrat'}}
              avatar={
                <Avatar sx={{ backgroundColor: 'black', fontFamily: 'Montserrat'}} aria-label="recipe">
                  {username}
                </Avatar>
              }    
              title={
                <Username>{data.name}</Username>
              }        
            />
            <CardActionArea onClick={()=>{handleClick()}}>
              <CardMedia
                component="img"
                height="225"
                image={photo}
                alt="green iguana"
              />
              <CardContent>
                <Title>
                  {data.title}
                </Title>
                <Body  variant="body2" color="text.secondary" >
                  <Username>
                  {`${data.body.substring(0, 130)}...`}
                  </Username>
                </Body>
              </CardContent>
              <ButtonContainer>
                <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: '20px', marginBottom: '20px', fontFamily: 'Montserrat' }} endIcon={<ReadMoreRoundedIcon />}>
                  Continue reading
                </Button>
              </ButtonContainer>
            </CardActionArea>
          </Card>
        </NewsContainer>
    )
}

export default NewsItem