import React, { useState } from "react";
import { Button, Form, Input, Typography } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


interface IPostCreate {
  body: string;
}

export default function MyComponent() {

  const [value, setValue] = useState("<p><strong><em><s><u>Hector oscar Pacheco</u></s></em></strong></p> ");
  const [form] = Form.useForm();

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const { Item } = Form;
const { TextArea } = Input;
const { Title } = Typography;

const onSubmit = (values: IPostCreate) => {
    // logic to submit form to server
    var html = ReactQuill
    console.log(values.body);
    form.resetFields();
  };
  const handleProcedureContentChange = (content:any, delta:any, source:any, editor:any) => {
    console.log(content);
  };

  return (
      <>
      
    <Title level={5}>Your Post</Title>

    <Form layout="vertical" form={form} onFinish={onSubmit}>
      <Item
        name="body"
        rules={[
          {
            required: true,
            message: 'Please enter body of post',
          },
        ]}
      >
        {/* @ts-ignore */}
    <ReactQuill theme="snow"  value={value || ''} onChange={handleProcedureContentChange}  modules={modules}
    formats={formats}/>

</Item>

<Item>
  <Button htmlType="submit" type="primary">
    Submit
  </Button>
</Item> 
</Form>
    </>
  );
}