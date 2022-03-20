import React, {useState} from "react";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";
import NewsList from "../components/News/NewsList";
import {HomeBackground} from './HomePageElements';
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
    return(
      <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HomeBackground>
        <NewsList />
      </HomeBackground>
      </div>
    );
  };
  export default HomePage;