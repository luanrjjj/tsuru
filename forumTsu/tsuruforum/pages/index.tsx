import type { NextPage } from 'next';
import Forum from '../components/header/index';
import styled from 'styled-components';


const Home: NextPage = () => {
return (
  <>
  <Forum/>
  <Title><h1>Hello</h1></Title>
  
  </>
)
}

const Title = styled.h1`
color:red;
`

export default Home
