import styled from 'styled-components';

export const Comments = styled.div`
    margin-top: 10px;
    margin: 10px;
`

export const CommentsTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 20px;
    @media screen and (max-width: 500px){
        font-size: 1rem;
        margin-bottom: 10px;
    }
`
export const CommentsContainer = styled.div`
    margin-top: 40px;
    overflow: auto; 
    max-height: 360px;
    margin-bottom: 30px;
`
export const CommentWrapper = styled.div`
    display: flex;
    margin-bottom: 28px;
`
export const CommentAvatarContainer = styled.div`
    margin-right: 12px;
`
export const CommentRightPart = styled.div`
    width: 100%;
`
export const CommentContent = styled.div`
    display: flex;
`
export const CommentAuthor = styled.div`
    margin-right: 8px;
    font-size: 1rem;
    color: rgb(59, 130, 246);
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`
export const CommentText = styled.div`
    font-size: 1rem;
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`
export const CommentButtonContainer = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 10px;
`
export const CommentFormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`