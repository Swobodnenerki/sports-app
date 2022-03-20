
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import  NewsItem  from './NewsItem'
import { NewsListContainer } from '../../pages/HomePageElements'

const NewsList = () => {
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setArticles(response.data)
            console.log(response)
        }
        const getUsers = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${articles.id}/users`)
            setUsers(response.data)
            console.log(response)
        }

        getArticles()
        getUsers()
    }, [])

    let mergedData = articles.map(article =>{
        let selectedUsers = users.find(user => user.id === article.userId)
        return {...article, ...selectedUsers}
    })
    return (
        
        <NewsListContainer>
            {mergedData.map((data, idx) => (
                <NewsItem key={idx} data={data}/>
                ))}
        </NewsListContainer>
    )
}

export default NewsList