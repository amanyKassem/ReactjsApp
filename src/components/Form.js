import React , {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            comments:'',
            topic:'vue',
        }
    }

    changeUsername = (event) =>{
        this.setState({username:event.target.value})
    }
    changeTextarea = (event) =>{
        this.setState({comments:event.target.value})
    }
    changeTopic = (event) =>{
        this.setState({topic:event.target.value})
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        event.preventDefault();
        this.props.history.push('/greet' , {
            name:'fathy kassem'
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">username</label>
                    <input type="text" value={this.state.username} onChange={this.changeUsername}/>
                </div>
                <div>
                    <label htmlFor="comments">comments</label>
                    <textarea name="comments" id="comments" cols="30" rows="10"
                        value={this.state.comments}
                        onChange={this.changeTextarea}
                    />
                </div>
                <div>
                    <label htmlFor="comments">Topics</label>
                    <select name="" id="" value={this.state.topic} onChange={this.changeTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default withRouter(Form);
