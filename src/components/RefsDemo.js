import React, {Component} from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

        // call back ref
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log( this.inputRef)

        if(this.cbRef){
            // we don't use current in call back ref
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        );
    }
}

export default RefsDemo;
