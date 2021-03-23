import React from 'react';
import {Header, Image} from "semantic-ui-react";
import {fetchPost} from "../../actions";
import {connect} from "react-redux";

class PostShow extends React.Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>
        }

        const {id, name, description} = this.props.post

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
}

const mapStateToProps = (state, ownProps) => {
    return {post: state.posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow);
