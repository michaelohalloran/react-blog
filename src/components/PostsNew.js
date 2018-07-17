import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';{}
import {createPost} from '../actions/index';
import {connect} from 'react-redux';

class PostsNew extends Component {

    renderField(field) {

        const {touched, error} = field.meta;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                //field is an object, ... means use all of this oject's props need to be passed as props 
                //to input tag
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        // console.log(values);
        this.props.createPost(values, this.props.history);
    }

    render() {

        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

const validate = (values) => {
    //console.log(values) => {title: 'blah', categories: 'blah', etc.}
    const errors = {};

    //validate inputs from values
    if(!values.title || values.title.length < 3) {
        errors.title = 'Enter a title that is at least 3 characters';
    }

    if(!values.categories) {
        errors.categories = 'Enter categories!';
    }

    if(!values.content) {
        errors.content = 'Enter some content!';
    }

    //if errors is empty, form has no errors and can be submitted
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);