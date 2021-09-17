import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import { Button, Form, Input, Select, Typography } from 'antd';
const { Option } = Select;

import {
  
    
    FormSection,
    Header,
    HeaderContent,
    HeaderLogo,
    ThreadCreateSection,
} from './styles'
import ReactQuill from 'react-quill';

import dynamic from 'next/dynamic';
import logoImg from '../../assets/images/origami.png';
import api from '../../services/api';


const TextEditor = dynamic(()=> import('../../components/editorversion4/index'),{ssr:false});



const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;


interface IPostCreate {
  body: string;
}


const CreateThreads:React.FC = () => {
  const [form] = Form.useForm();
  const [categories,setCategories] = useState<any>([])
  const [value, setValue] = useState();
  const [threadCreated,setThreadCreated] = useState<any>([])


  const onSubmit = (values: IPostCreate) => {
    // logic to submit form to server
    setThreadCreated([...threadCreated,values])
    form.resetFields();
    console.log(threadCreated)
  };

  const style = {
    editor: {
      height:"140px"
    }
  }


  useEffect(() => {
    api.get('/api/categories').then(response=>  {
      setCategories(response.data)
     
   })
 },[])




  return (
    <>

    <Header>
          <HeaderLogo><img src={logoImg.src}></img></HeaderLogo>
          <HeaderContent>
            <span>Home</span>
            <span>Posts </span>
            <span>Profile</span>
            <span>Log Out</span>

          
            
            </HeaderContent>
          
        </Header>
       <ThreadCreateSection>
       <h1>Publique sua dúvida</h1>
         <FormSection>
    

      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Item name ="Title" label ="Título" required tooltip="This is a required field">
          <Input placeholder="Input Placeholder"/>
        </Item>
        <Form.Item name="category" label="Escolha o assunto" required tooltip="This is a required field">
        <Input.Group compact>
          
        <Select onChange={(value) => {
      console.log(value)
    }} placeholder="Escolha a disciplina">
          <Option value ="Logaritmos">Logaritmos </Option>
          <Option value ="Afim">Função Afim </Option>
          <Option value ="Potenciação">Potenciação </Option>
          <Option value ="Radiciação">Radiciação </Option>
          <Option value ="Exponencial">Exponencial </Option>
          <Option value ="Polinômios">Polinômios </Option>    
        </Select>
      
         
          <Form.Item>
           
          </Form.Item>
        </Input.Group>
      </Form.Item>

        <Item
          name="body"
          rules={[
            {
              required: false,
              message: 'Please enter body of post',
            },
          ]}
        >
          {/* @ts-ignore */}
          <TextEditor/>
        </Item>

        <Item>
         
          <Button htmlType="submit" type="primary" style={{marginTop:40}}>
            Submit
          </Button>
        </Item>
      </Form>
      </FormSection>
      </ThreadCreateSection>

    </>
  );
};


export default CreateThreads;