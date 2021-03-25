import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../../actions";
import PostForm from "./PostForm";
import {Header} from "semantic-ui-react";

const PostCreate = (props) => {
    const onSubmit = (values) => {
        props.createPost({...values, userId: props.currentUserId})
    };

    return (
        <div>
            <Header dividing
                    as='h2'
                    content='Create Post'
                    subheader='Fill out the form to create a new post.'
            />
            <PostForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUserId: state.auth.userId
})

export default connect(mapStateToProps, {createPost})(PostCreate);

