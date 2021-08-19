import React from "react";



import {
  Container,
  Header,
  HeaderContent,
  HeaderLogo
  
 
} from './styles'

import logoImg from '../../assets/images/origami.png'

const Forum:React.FC = () => {

  return (
    <Header>
      <HeaderLogo><img src={logoImg.src}></img></HeaderLogo>
      <HeaderContent>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
        
        
        </HeaderContent>
      
    </Header>
  );
}
export default Forum