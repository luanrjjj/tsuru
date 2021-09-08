import styled from 'styled-components';

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
export const ThreadCreateSection = styled.div ` 

    width:100%;
    padding-bottom:2em;

    
    border-width:0;
    border-style:solid;
    border-color:#e2e8f0;

    margin-left:0.25rem;
    margin-right:0.25rem;
    display:inline-block;
    position:relative;
    



`
export const FormSection = styled.div `
max-width:1050px;
min-width:600px;
align-items:center;
justify-content: center;
display:flex;
box-sizing:border-box;


`

export const Form = styled.div `
display:block;
`