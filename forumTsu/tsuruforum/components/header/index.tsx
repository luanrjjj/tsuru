import React, {useEffect,useState} from "react";
import {BsFillChatFill} from 'react-icons/bs';
import {AiFillEye,AiOutlineSearch} from 'react-icons/ai';



import {
  Container,
  ContainerContent,
  ContentSection,
  FiltersSection,
  Header,
  HeaderContainer,
  HeaderContent,
  HeaderLinks,
  HeaderLogo,
  HeaderTitle,
  Menu,
  Sticky,
  Thread,
  ThreadDetails,
  Threads,
  ThreadsSection,
  TitleThread
  
 
} from './styles'

import logoImg from '../../assets/images/origami.png';
import userImg from '../../assets/images/user.png';


import api from '../../services/api';



interface Post {
  id:string;
  title:string;
  
}


interface Thread {
  id:string;
  title:string;
  body:string;
  created_at:string;
  updated_id:string;
  creator: {
    name:string;
  };
  category:string;
  solved:number;
  
}

interface Threads {
  threads:Thread[]
}

interface Posts {
  posts:Post[]
}
const Forum:React.FC = () => {
 const [threads,setThreads] = useState<Thread[]>([])

  

  useEffect(() => {
     api.get('/api/threads').then(response=>  {
      setThreads(response.data);
    })
  },[])

  useEffect(() => {
    api.get('/api/threads/user').then(response=>  {
     console.log(response)  
   })
 },[])

console.log(threads)

  return (
    <>
    <Container>
    <ContainerContent>
      <HeaderContainer>
        <Header>

          <HeaderLogo><img src={logoImg.src}></img></HeaderLogo>
          <HeaderTitle>
          <span>Cerebriz</span>
          </HeaderTitle>

          <HeaderLinks>
            <span>Home</span>
            <span>Profile </span>
            <span>Cursos</span>
            
            
          </HeaderLinks>
         
          <HeaderContent>
            <div className="HeaderIcons">
           <AiOutlineSearch size={25} color={"#FFF"}/>
           
           </div>
            </HeaderContent>
          
        </Header>
        </HeaderContainer>
        <Header></Header>
        <ContentSection>
    
            <ThreadsSection>
              <FiltersSection>

                
              </FiltersSection>
            <Threads>
           
                  <ol>
                    {threads?.map(({ id, title,body,created_at,creator,category,solved }:Thread) => (
                       <Thread>
                         <div className="userImg">
                           <div>
                          <img src={userImg.src}></img>
                          </div>
                          </div>
                          <li key={id}>
                         
                            <TitleThread>
                              <h1>{title}</h1>
                              <div>
                              <a>{category}</a>
                              <div className="RepliesCount">
                                <p>10</p>
                                <BsFillChatFill/>
                              </div>
                              <div className="VisualizationsCount">
                               <p>20</p>
                                <AiFillEye className="ChatIcon"/>
                              </div>
                              </div>
                              </TitleThread>
                            <ThreadDetails>                                       
                              <p>{creator.name}</p>
                              {solved==1 ? <a>solved</a>:''}
                            </ThreadDetails>   
                            <p></p>
                          </li>
                          </Thread>
                        ))}
                    </ol>
                   
                  </Threads>
                  </ThreadsSection>
                  </ContentSection>
          </ContainerContent>
          
          
          
          </Container>
                      
          </>
  );
}
export default Forum