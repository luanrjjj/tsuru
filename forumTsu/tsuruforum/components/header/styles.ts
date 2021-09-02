import styled from 'styled-components';


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

  }


`

export const PostsSection = styled.div `
  flex: 1 1 0%;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
 
`
export const Posts = styled.div ` 
  display:block;

`

export const Post = styled.div `  
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

  
  `
;