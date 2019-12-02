import React , {Component} from 'react';

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : 'welcome visitor'
        }
    }

    changeMsg(){
        this.setState({
            message: 'thank you for subscribing'
        })
    }

    render() {
        return (
           <div>
               <h1>{this.state.message}</h1>
               <button onClick={() => this.changeMsg()}>subscripe now</button>
           </div>
        );
    }
}

export default Message;
