import React, {useEffect} from 'react';
import {Header, Image} from "semantic-ui-react";
import {fetchPost} from "../../actions";
import {connect} from "react-redux";

const PostShow = (props) => {

    useEffect(() => {
        return props.fetchPost(props.match.params.id)
    }, []);


    if (!props.post) {
        return <div>Loading...</div>
    }

    const {id, name, description} = props.post

    return (
        <div>
            <Header as='h2' icon textAlign='center'>
                <Image avatar src={`https://i.pravatar.cc/80?u=${id}`}/>
                <Header.Content>
                    {name}
                </Header.Content>
            </Header>
            <h3 align={'center'}>
                {description}
            </h3>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
