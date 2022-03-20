import styled from 'styled-components';
import Photos from '../photos/2.jpg';

export const HomeBackground = styled.div`
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    &:before{
    content:'';
    content: "";
    width: 100%;
    height: 100vh;
    background-image: url(${Photos});
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export const NewsContainer = styled.div`
    display: flex;
    justify-content: center;
    z-index: 5;
`
export const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`
export const Username = styled.div`
    font-weight: 300;
    font-family: 'Montserrat';
    color: black;
    font-weight: 400;
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`

export const Title = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Montserrat';
    @media screen and (max-width: 500px){
        font-size: 1rem;
    }
`

export const Body = styled.div`
    font-size: 1rem;
    color: grey;
    margin-top: 5px;
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`
export const NewsListContainer = styled.div`
    margin-top: 110px;
`




