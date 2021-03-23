import React from 'react';
import {connect} from "react-redux";
import {editPost, fetchPost} from "../../actions";
import PostForm from "./PostForm";
import _ from "lodash";
import {Header} from "semantic-ui-react";

class PostEdit extends React.Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }

    onSubmit = (values) => {
        this.props.editPost(this.props.post.id, values)
    };

    render() {
        if (!this.props.post) {
            return <span>Loading...</span>
        }
        return (
            <div>
                <Header dividing
                        as='h2'
                        content='Edit Post'
                        subheader='You can change the data of your own post here.'
                />
                <PostForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.post, 'name', 'description')}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, editPost})(PostEdit);
