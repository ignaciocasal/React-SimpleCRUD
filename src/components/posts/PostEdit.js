import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {editPost, fetchPost} from "../../actions";
import PostForm from "./PostForm";
import _ from "lodash";
import {Header} from "semantic-ui-react";

const PostEdit = (props) => {

    useEffect(() => {
        return props.fetchPost(props.match.params.id)
    }, []);


    const onSubmit = (values) => {
        props.editPost(props.post.id, values)
    };

    if (!props.post) {
        return <span>Loading...</span>
    }
    return (
        <div>
            <Header dividing
                    as='h2'
                    content='Edit Post'
                    subheader='You can change the data of your own post here.'
            />
            <PostForm onSubmit={onSubmit} initialValues={_.pick(props.post, 'name', 'description')}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, editPost})(PostEdit);
