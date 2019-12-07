import React, {Component} from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'amany'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'amany'
            })
        } , 2000)
    }

    render() {
        console.log('************ Parent Comp ***********')
        return (
            <div>
                parent comp
                <MemoComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;
