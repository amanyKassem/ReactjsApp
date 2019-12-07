import React, {Component} from 'react';

class RegularComp extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        console.log('regular comp')
        return (
            <div>
                reg comp {this.props.name}
            </div>
        );
    }
}

export default RegularComp;
