import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../../actions";
import PostForm from "./PostForm";
import {Header} from "semantic-ui-react";

class PostCreate extends React.Component {

    onSubmit = (values) => {
        this.props.createPost({...values, userId: this.props.currentUserId})
    };

    render() {
        return (
            <div>
                <Header dividing
                        as='h2'
                        content='Create Post'
                        subheader='Fill out the form to create a new post.'
                />
                <PostForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUserId: state.auth.userId
})

export default connect(mapStateToProps, {createPost})(PostCreate);

