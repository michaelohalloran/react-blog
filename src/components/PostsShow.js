import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log('inside cDm in PostsShow, id is ', id);
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        console.log('inside PostsShow deleteClick, id is', id);
        console.log('inside PostsShow deleteClick, history is', this.props.history);
        this.props.deletePost(id, this.props.history);
    }

    render() {
        const {post} = this.props;
        console.log('inside PostsShow, post is', post);

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Home</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => ({
    post: posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);