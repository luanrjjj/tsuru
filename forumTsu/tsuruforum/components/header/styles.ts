import styled from 'styled-components';
import { rgba, shade } from 'polished';

export const Container = styled.div`

  
  `
 
export const ContainerContent = styled.div `
/*
margin-left: auto;
margin-right: auto;
min-width:600px;
max-width:1050px;
*/

`
export const Header = styled.header `  
  height:40px;
  
  
`;


export const HeaderLogo = styled.div`

  align-items: center;
  width:30px;
  position:absolute;

  >img{
    height: 29px;
    margin-top:7px;
  }
  
`
export const HeaderContent = styled.div `
  float:right;
  margin-top:7px;
  
  

span {
  text-decoration: none;
  margin-right:10px;
  
  
  
  


& + a { 
  margin-left:5px;
}
}
`

export const ContentSection = styled.div `
  display: flex;
  flex-direction:row;
  margin-top: 30px;
  padding: 40px 30px;
  position: relative;

`

export const Menu = styled.div `
  width: 210px;
  top: 60px;
  display:block;
  align-self: flex-start;
  margin-right: 3rem;
  
    `

export const Sticky = styled.div `  
  position: sticky;
  text-align: center;
  line-height:1.5;

  button {
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;


    font-size: 0.9rem;
    font-weight: 500;


    width: 100%;
    background-color:rgba(50,138,241);
    color:rgba(255,255,255);
    padding-bottom: 0.83rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: .83rem;
    cursor:pointer;

    &:hover {
      color:${shade(0.2,rgba(50,138,241,0.75))}
    }
  }

  ul {
    list-style:none;
    width:100%;
    font-size:0px;
    padding:0px;
    margin:0px;
  }
  li {
    margin-top:10px;
    width: 100%;
    font-size:0px;
    
  }
  a {
    align-items:center;
    display:flex;

    font-size: 0.9rem;
    font-weight: 500;

    padding-bottom: 0.5rem;
    padding-top:0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    border-radius:0.9rem;
    border-style:solid;
    cursor:pointer;
    
    &:hover {
      color: ${shade(0.2,'#ff9000')}
    }

  }


`

export const ThreadsSection = styled.div `
  flex: 1 1 0%;
  margin-left: auto;
  margin-right: auto;
  max-width:1400px;
  
 
`
export const Threads = styled.div ` 
  display:block;

`

export const Thread = styled.div `  
  height: 140px;
  flex-direction: row;
  margin-bottom: 0.75rem;

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  padding-top: 1rem;

  background-color: rgba(0,0,0,.01);

  border-style: solid;
  border-width: 1px;
  border-radius: 0.9rem;
  cursor: pointer;
  display:flex;
  
  li {
    list-style-type: none;
  }

 .userImg {
  margin-right:1.25rem;
   display:block;
   align-self: flex-start;
   

   div {
     display:flex;
     align-items:center;
     
   }
 }
  img {
  width:50px;
   height:50px;
  }

  
  `
  export const TitleThread = styled.div `
    display:flex;
    align-items: flex-start;
    margin-top:-0.25rem;
    height:30px;

    h1 {
      padding-right:1.5rem;
      font-size:16px;
      width: 1000px;
    }

    div {
      align-items:center;
      position:relative;
      flex-direction: row-reverse;
      display:flex;
      margin-left:auto;
      text-align:center;
      height:20px;
      margin-top:5px;
      
      .RepliesCount {
        margin-left:0.5rem;
        p {
          margin-left:0.1rem;
        }
        svg {
          width:20px;
        }


      .VisualizationsCount {
        margin-left:0.5rem;
        p {
          margin-left:0.1rem;
        }
        svg {
          width:20px;
        }
        
      }
      
    }
    a {
      color:#F56857;
      outline:none;
      font-size:0.66rem;
      text-align:center;
      width:6rem;
      display:block;
      border: 1px solid;
      border-color:#F56857;
      border-radius:10px;
      max-width: 100%;
      margin-right:1.5rem;
      margin-left:0.5rem;
  
      
    }
    }

  `
    
;