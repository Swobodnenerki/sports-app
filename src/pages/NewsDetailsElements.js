import styled from 'styled-components';

export const ColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
`
export const LeftColumn = styled.div`
    flex: 1 1 300px; 
    margin-top: 45px;
    margin-left: 40px;
    margin-right: 40px;
    @media screen and (max-width: 500px){
        margin: 10px;
    }
`

export const RightColumn = styled.div`
    flex: 1 1 300px; 
    margin-top: 45px;
    margin-right: 40px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 500px){
        margin: 10px;
    }
`

export const Divider = styled.h4`
    display: flex;
    align-items: center;
    &::before {
        background-color: black;
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        margin: 0 20px;
        margin-left: 12%;
  }
  &::after {
        border-radius: 5px;
        display: flex;
        content: "";
        flex-grow: 1;
        height: 4px;
        background-color: black;
        margin: 0 20px;
        margin-right: 12%;
  }
`

export const Username = styled.div`
    text-align: center;
    font-weight: 300;
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`

export const Title = styled.div`
    font-weight: 900;
    font-size: 1.5rem;
    @media screen and (max-width: 500px){
        font-size: 1rem;
    }
`

export const Body = styled.div`
    overflow: auto;
    max-height: 300px; 
    margin-top: 10px;
    font-size: 1rem;
    @media screen and (max-width: 500px){
        font-size: 0.8rem;
    }
`
export const SmallColumn = styled.div`
    margin: 10px;
    flex: 1 1 100px; 
    text-align: center;
`

export const SmallColumnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

