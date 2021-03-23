import React, {Component} from 'react';
import {Container} from "semantic-ui-react";
import {Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import PostList from "./posts/PostList";
import PostCreate from "./posts/PostCreate";
import PostEdit from "./posts/PostEdit";
import PostDelete from "./posts/PostDelete";
import PostShow from "./posts/PostShow";
import history from '../history'

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Container>
                        <Switch>
                            <Route path="/" exact component={PostList}/>
                            <Route path="/posts/new" exact component={PostCreate}/>
                            <Route path="/posts/edit/:id" exact component={PostEdit}/>
                            <Route path="/posts/delete/:id" exact component={PostDelete}/>
                            <Route path="/posts/:id" exact component={PostShow}/>
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
