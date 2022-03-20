import React from "react";
import { Card, CardMedia, Avatar, CardContent,  } from "@mui/material";
import photo from '../../photos/1.jpg'
import { Divider, Username, Title, Body } from "../../pages/NewsDetailsElements";
const NewsDetails = ({data}) => {
    const username = typeof data.username === 'string' ? data.username.substring(0,1) : '';
    return (
        <Card sx={{ maxWidth: 900, borderRadius: '20px', maxHeight: '770px'}} raised={true}>
            <CardMedia
                component="img"
                height="300"
                image={photo}
                alt="green iguana"
            />
            <Divider>
                <Avatar sx={{ backgroundColor: ' black' }} aria-label="recipe">
                    {username}
                </Avatar>
            </Divider>
            <Username>
                {data.name}
            </Username>
            <CardContent>
                <Title>
                    {data.title}
                </Title>
                <Body>
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                    {data.body}
                </Body>
            </CardContent>
        </Card>
    
    )
}

export default NewsDetails