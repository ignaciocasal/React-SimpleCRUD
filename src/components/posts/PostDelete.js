import React, {useEffect} from 'react';
import {Button, Confirm, Modal} from "semantic-ui-react";
import history from "../../history";
import {deletePost, fetchPost} from "../../actions";
import {connect} from "react-redux";

const PostDelete = (props) => {

    const handleConfirm = () => {
        props.deletePost(props.post.id)
        props.onClose()
    };

    return (
        <Modal
            size='tiny'
            dimmer={'blurring'}
            open={props.open}
            onClose={props.onClose}>
            <Modal.Header>Delete Your Post</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete {props.post?.name}?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={props.onClose}>
                    Cancel
                </Button>
                <Button negative onClick={handleConfirm}>
                    Delete
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default connect(null, {fetchPost, deletePost})(PostDelete);
