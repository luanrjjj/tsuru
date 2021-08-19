import styled from 'styled-components';


export const Container = styled.div`
  
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
;