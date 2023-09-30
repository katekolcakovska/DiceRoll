import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
        return (
            <div>
                <i class={`Die fas fa-solid fa-dice-${this.props.face} ${this.props.isRolling ? 'shaking' : ''}`}></i>

            </div>
        );
    }
}

export default Die;