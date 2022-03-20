import React, {useState, useEffect} from "react";
import axios from 'axios'
import {useLocation} from 'react-router-dom';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { HomeBackground } from "./HomePageElements";
import { ColumnContainer, LeftColumn, RightColumn} from "./NewsDetailsElements";
import { Card} from "@mui/material";
import NewsDetails from "../components/News/NewsDetails";
import Comment from "../components/Comments/Comment";
import CommentForm from '../components/Comments/CommentForm'
import { Comments, CommentsContainer, CommentsTitle } from "../components/Comments/CommentsElements";
const NewsDetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
    setIsOpen(!isOpen)
    }
    const [comments, setComments] = useState([])
    const location = useLocation();
    console.log(location.state)

    useEffect(() => {
        const getComments = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${location.state.id}/comments`)
            setComments(response.data)
            console.log(response)

        }

        getComments()
    }, [])
    const addComment = async (text, email) => {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${location.state.id}/comments`,{
            postId: location.state.id,
            name: location.state.title,
            email: email,
            body: text
        });
        console.log(response)
        setComments([response.data, ...comments])
        
      };
    return(
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HomeBackground>
            <ColumnContainer>
                <LeftColumn>
                    <NewsDetails data={location.state}/>
                </LeftColumn>
                <RightColumn>
                <Card sx={{borderRadius: '20px', width: '100%', maxHeight: '770px'}} raised={true}>
                    <Comments>
                        <CommentsTitle>Comments</CommentsTitle>
                        <CommentsContainer>
                            {comments.map((data, idx) => (
                                <Comment key={idx} data={data}/>
                            ))}
                        </CommentsContainer>
                    </Comments>
                    <CommentForm submitLabel="Comment" handleSubmit={addComment} />
                </Card>
                </RightColumn>
            </ColumnContainer>
        </HomeBackground>
      </div>
    );
  };
  export default NewsDetailsPage;