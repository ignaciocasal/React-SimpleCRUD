import React from 'react';
import {withFormik} from "formik";
import * as Yup from 'yup';
import {Button, Form, Icon, Message} from "semantic-ui-react";

class PostForm extends React.Component {

    render() {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
        } = this.props;

        return (
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            type="text"
                            autoComplete="off"
                            onChange={handleChange}
                            value={values.name}
                        />
                        {errors.name && touched.name && <Message negative size='tiny'>{errors.name}</Message>}
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="name">Description</label>
                        <input
                            name="description"
                            type="text"
                            autoComplete="off"
                            onChange={handleChange}
                            value={values.description}
                        />
                        {errors.description && touched.description && <Message negative size='tiny'>{errors.description}</Message>}
                    </Form.Field>
                    <Button color="violet"><Icon name='save'/> Save</Button>
                </Form>
            </div>
        );
    }
}


export default withFormik({
    mapPropsToValues: (props) => ({...props.initialValues}),

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Name is required.'),
        description: Yup.string()
            .required('Description is required.'),
    }),

    handleSubmit: (values, {props}) => {
        props.onSubmit(values);
    },
})(PostForm);



