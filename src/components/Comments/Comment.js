import {React}from 'react'
import Avatar from '@mui/material/Avatar';
import { CommentAvatarContainer, CommentWrapper, CommentRightPart, CommentContent, CommentAuthor, CommentText } from './CommentsElements';
export const selectedNews = 'newsId';



const Comment = ({data}) => {
    const username = typeof data.email === 'string' ? data.email.substring(0,1) : '';
    
    return (
        <CommentWrapper>
            <CommentAvatarContainer>
            <Avatar sx={{ backgroundColor: ' black' }} aria-label="recipe">
              {username}
            </Avatar>
            </CommentAvatarContainer>
            <CommentRightPart>
                <CommentContent>
                    <CommentAuthor>{data.email}</CommentAuthor>
                </CommentContent>
                <CommentText>{data.body}</CommentText>
            </CommentRightPart>
        
        </CommentWrapper>
    )
}

export default Comment