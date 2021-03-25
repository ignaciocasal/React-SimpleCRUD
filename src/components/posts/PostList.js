import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button, Header, Icon, Item} from "semantic-ui-react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";
import PostDelete from "./PostDelete";


const PostList = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [activePost, setActivePost] = useState();

    useEffect(() => {
        return props.fetchPosts();
    }, []);

    const renderCreateButton = () => {
        if (props.isSignedIn) {
            return (
                <Link to="posts/new">
                    <Button color="violet" floated='right'>
                        <Icon name='add'/>Create
                    </Button>
                </Link>
            )
        }
    }

    const openModalHandler = (post) =>{
        setActivePost(post)
        setModalOpen(true)
    }

    const renderPostButtons = (post) => {
        if (post.userId === props.currentUserId) {
            return (
                <div>
                    <Button icon color='red' basic floated='right' onClick={()=>openModalHandler(post)}>
                        <Icon name='trash'/>
                    </Button>
                    <Link to={`posts/edit/${post.id}`}>
                        <Button icon color='violet' floated='right'>
                            <Icon name='edit'/>
                        </Button>
                    </Link>
                </div>
            )
        }
    }

    const renderPosts = () => {
        return props.posts.map(post => {
            return (
                <Item key={post.id} divided='true'>
                    <Item.Image avatar size='tiny' src={`https://i.pravatar.cc/80?u=${post.id}`}/>
                    <Item.Content verticalAlign='middle'>
                        <Item.Header><Link to={`/posts/${post.id}`}>{post.name}</Link></Item.Header>
                        <Item.Description>{post.description}</Item.Description>
                        <Item.Extra>
                            {renderPostButtons(post)}
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        })
    }

    return (
        <div>
            <Header dividing
                    as='h2'
                    content='Post List'
                    subheader='All posts created by users are displayed here.'
            />
            {renderCreateButton()}
            <Item.Group divided relaxed>
                {renderPosts()}
            </Item.Group>
            <PostDelete open={modalOpen} post={activePost} onClose={() => setModalOpen(false)}/>
        </div>
    );
}

const mapStateToProps = state => ({
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, {fetchPosts})(PostList);
