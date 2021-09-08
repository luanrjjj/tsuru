import React, {useEffect,useState} from "react";
import {BsFillChatFill} from 'react-icons/bs';
import {AiFillEye} from 'react-icons/ai';



import {
  Container,
  ContainerContent,
  ContentSection,
  Header,
  HeaderContent,
  HeaderLogo,
  Menu,
  Sticky,
  Thread,
  Threads,
  ThreadsSection,
  TitleThread
  
 
} from './styles'

import logoImg from '../../assets/images/origami.png';
import userImg from '../../assets/images/user.png';
import api from '../../services/api';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(()=> import('../../components/editor/index'),{ssr:false});
const DynamicComponent2 = dynamic(()=> import('../../components/editorversion2/index'),{ssr:false});
const DynamicComponent3 = dynamic(()=> import('../../components/editorversion3/index'),{ssr:false});
import EditorModal from '../editor/index';




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
            <ThreadsSection>
           
      
            <Threads>
           
                  <ol>
                    {threads.map(({ id, title,body,created_at,creator,category }:Thread) => (
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
                              <p>{body}</p>                           
                            <p>{creator.name}</p>
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