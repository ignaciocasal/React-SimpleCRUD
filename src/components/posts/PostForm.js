import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Button, Form, Icon, Message} from "semantic-ui-react";

const PostForm = props => {
    const {getFieldProps, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            name: '',
            description: '',
            ...props.initialValues
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Name is required.'),
            description: Yup.string()
                .required('Description is required.'),
        }),
        onSubmit(values) {
            props.onSubmit(values);
        }
    });

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        autoComplete="off"
                        {...getFieldProps("name")}
                    />
                    {errors.name && touched.name && <Message negative size='tiny'>{errors.name}</Message>}
                </Form.Field>
                <Form.Field>
                    <label htmlFor="name">Description</label>
                    <input
                        name="description"
                        type="text"
                        autoComplete="off"
                        {...getFieldProps("description")}
                    />
                    {errors.description && touched.description && <Message negative size='tiny'>{errors.description}</Message>}
                </Form.Field>
                <Button color="violet"><Icon name='save'/> Save</Button>
            </Form>
        </div>
    );
};

export default PostForm;



