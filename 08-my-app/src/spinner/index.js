import React, { Component } from 'react';
class Spinner extends Component {
    state = {
        delta: 0
    };
    onDownClick = () => {
        this.props.down(this.state.delta);
    }
    onUpClick = () => {
        this.props.up(this.state.delta);
    }
    render = () => {
        const { delta } = this.state;
        const value = this.props.value;
        return (
            <div>
                <label>Delta :</label>
                <input type="number" value={delta} onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="DOWN" onClick={this.onDownClick} />
                <span> [ {value} ] </span>
                <input type="button" value="UP" onClick={this.onUpClick} />
            </div>
        )
    }
}
export default Spinner;