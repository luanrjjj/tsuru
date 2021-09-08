import React, {useState} from 'react';
import {useForm} from 'react-hook-form'
import { Button, Form, Input, Typography } from 'antd';
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
const TextEditor = dynamic(()=> import('../../components/editorversion4/index'),{ssr:false});


const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;


interface IPostCreate {
  body: string;
}

const CreateThreads:React.FC = () => {
  const [form] = Form.useForm();

  const onSubmit = (values: IPostCreate) => {
    // logic to submit form to server
    console.log(values);
    form.resetFields();
  };
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
      <Title level={5}>Your Post</Title>

      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Item name ="Title" label ="Title" required tooltip="This is a required field">
          <Input placeholder="Input Placeholder"/>
        </Item>
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
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Item>
      </Form>
    </>
  );
};


export default CreateThreads;