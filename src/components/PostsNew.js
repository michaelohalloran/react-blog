import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                //field is an object, ... means use all of this oject's props need to be passed as props 
                //to input tag
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field 
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        );
    }
}
export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);