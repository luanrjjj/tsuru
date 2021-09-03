import React, {useEffect,useState} from "react";



import {
  Container,
  ContainerContent,
  ContentSection,
  Header,
  HeaderContent,
  HeaderLogo,
  Menu,
  Post,
  Posts,
  PostsSection,
  Sticky
  
 
} from './styles'

import logoImg from '../../assets/images/origami.png'
import api from '../../services/api';

interface Post {
  id:string;
  title:string;
  
}


interface Thread {
  id:string;
  title:string;
  
}

interface Threads {
  threads:Thread[]
}

interface Posts {
  posts:Post[]
}
const Forum:React.FC = () => {
 const [threads,setThreads] = useState<Thread[]>([])
  const posts:any = [{"id":"1","title":"Novo Experimento Utilizando ReactJS"},{"id":"1","title":"Novo Experimento Utilizando ReactJS"}];
  

  useEffect(() => {
     api.get('/api/threads').then(response=>  {
      setThreads(response.data);
    })
  },[])

console.log(threads)

  return (
    <>
    <Container>
    <ContainerContent>
        <Header>
          <HeaderLogo><img src={logoImg.src}></img></HeaderLogo>
          <HeaderContent>
            <span>Home</span>
            <span>Posts </span>
            <span>Profile</span>
            <span>Log Out</span>

          
            
            </HeaderContent>
          
        </Header>
        <ContentSection>
            <Menu>
              <Sticky>
                <button>New Discussion</button>
                <ul>
                  <li>
                    <a>My Questions</a>
                  </li>
                  <li>
                    <a>My Participation</a>
                  </li>
                  <li>
                    <a>My Best Answers</a>
                  </li>
                  <li>
                    <a>Following</a>
                  </li>
                  <li>
                    <a>Popular this Week</a>
                  </li>
                  <li>
                    <a>Solved</a>
                  </li>
                  <li>
                    <a>Unsolved</a>
                  </li>
                  <li>
                    <a>No replies Yet</a>
                  </li>

                </ul>
              </Sticky>
              
            </Menu>
            <PostsSection>
            <Posts>
           
                  <ol>
                    {posts.map(({ id, title }:Post) => (
                       <Post>
                          <li key={id}>
                            <div>
                              <span>{title}</span>
                            </div>
                          </li>
                          </Post>
                        ))}
                    </ol>
                   
                  </Posts>
                  </PostsSection>
                  </ContentSection>
          </ContainerContent>
          
          </Container>
          </>
  );
}
export default Forum