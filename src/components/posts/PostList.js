import React from 'react';
import {Link} from "react-router-dom";
import {Button, Header, Icon, Item} from "semantic-ui-react";
import {connect} from "react-redux";
import {fetchPosts} from "../../actions";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <Link to="posts/new">
                    <Button color="violet" floated='right'>
                        <Icon name='add'/>Create
                    </Button>
                </Link>
            )
        }
    }

    renderPostButtons(post) {
        if (post.userId === this.props.currentUserId) {
            return (
                <div>
                    <Link to={`posts/delete/${post.id}`}>
                        <Button icon color='red' basic floated='right'>
                            <Icon name='trash'/>
                        </Button>
                    </Link>
                    <Link to={`posts/edit/${post.id}`}>
                        <Button icon color='violet' floated='right'>
                            <Icon name='edit'/>
                        </Button>
                    </Link>
                </div>
            )
        }
    }

    renderPosts() {
        return this.props.posts.map(post => {
            return (
                <Item key={post.id} divided>
                    <Item.Image avatar size='tiny' src={`https://i.pravatar.cc/80?u=${post.id}`}/>
                    <Item.Content verticalAlign='middle'>
                        <Item.Header><Link to={`/posts/${post.id}`}>{post.name}</Link></Item.Header>
                        <Item.Description>{post.description}</Item.Description>
                        <Item.Extra>
                            {this.renderPostButtons(post)}
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        })
    }

    render() {
        return (
            <div>
                <Header dividing
                    as='h2'
                    content='Post List'
                    subheader='All posts created by users are displayed here.'
                />
                {this.renderCreateButton()}
                <Item.Group divided relaxed>
                    {this.renderPosts()}
                </Item.Group>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, {fetchPosts})(PostList);
