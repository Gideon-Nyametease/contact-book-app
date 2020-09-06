import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Form, Input, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const AddDrawer=({show,handleOnClose,handleOnFinish,handleOnFinishFailed}) => {
    const initialValues={firstName:"",lastName:"",phoneNumber:null,emails:"",twitter:""}
    return (
        <Drawer 
            Title="Add Contact"
            visible={show} 
            onClose={handleOnClose} 
            // closable={false}
            maskClosable={false}
            >
            <h1>Contact Form</h1>
         
            <Form
            
                name="basic"
                initialValues={initialValues}
                onFinish={handleOnFinish}
                onFinishFailed={handleOnFinishFailed}
                >
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: "Please input contact's first name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: "Please input contact's last name!" }]}
                >
                    <Input />
                </Form.Item>
                
                {/* <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Please input contact's phone name!" }]}
                >
                    <Input />
                </Form.Item> */}
            
                {/* <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input contact's email!" }]}
                >
                    <Input />
                </Form.Item> */}
            

                <Form.List name="phoneNumbers">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map(field => (
                            <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                            <Form.Item
                               
                                name={[field.name, 'phoneNumber']}
                                fieldKey={[field.fieldKey, 'phoneNumber']}
                                rules={[{ required: true, message: 'Missing phone number' }]}
                            >
                                <Input placeholder="Twitter Username" />
                            </Form.Item>
                        

                            <MinusCircleOutlined
                                onClick={() => {
                                remove(field.name);
                                }}
                            />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button
                            type="dashed"
                            onClick={() => {
                                add();
                            }}
                            block
                            >
                            <PlusOutlined /> Add Phone Number
                            </Button>
                        </Form.Item>
                        </div>
                    );
                }}
                </Form.List>

                <Form.List name="emails">
                    {(fields, { add, remove }) => {
                    return (
                        <div>
                        {fields.map(field => (
                            <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                            <Form.Item
                               
                                name={[field.name, 'email']}
                                fieldKey={[field.fieldKey, 'email']}
                                // rules={[{ required: true, message: 'Missing first name' }]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                        

                            <MinusCircleOutlined
                                onClick={() => {
                                remove(field.name);
                                }}
                            />
                            </Space>
                        ))}

                        <Form.Item>
                            <Button
                            type="dashed"
                            onClick={() => {
                                add();
                            }}
                            block
                            >
                            <PlusOutlined /> Add Email
                            </Button>
                        </Form.Item>
                        </div>
                    );
                }}
                </Form.List>

                <Form.Item
                    label="Twitter"
                    name="twitter"
                    rules={[{ required: true, message: "Please input contact's twitter username!" }]}
                >
                    <Input />
                </Form.Item>
            

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>

       
        
    )
}

AddDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
    handleOnFinish: PropTypes.func.isRequired,
    handleOnFinishFailed: PropTypes.func.isRequired,
};

export default AddDrawer 

