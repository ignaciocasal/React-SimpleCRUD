import React from 'react';
import {Button, Confirm, Modal} from "semantic-ui-react";
import history from "../../history";
import {deletePost, fetchPost} from "../../actions";
import {connect} from "react-redux";

class PostDelete extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }

    handleConfirm = () => {
        this.props.deletePost(this.props.post.id)
    };

    handleCancel() {
        history.push('/')
    }

    render() {
        return (
            <div>
                <Modal
                    size='tiny'
                    open={true}
                    onClose={this.handleCancel}>
                    <Modal.Header>Delete Your Post</Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete {this.props.post?.name}?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.handleCancel}>
                            Cancel
                        </Button>
                        <Button negative onClick={this.handleConfirm}>
                            Delete
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDelete);
