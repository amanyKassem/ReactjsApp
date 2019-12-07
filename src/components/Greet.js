import React from 'react';

const Greet = (props) => {
    return <h1>hello {props.name} {props.location.state.name}</h1>
}

export default Greet