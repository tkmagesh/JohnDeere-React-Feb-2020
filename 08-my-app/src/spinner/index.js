import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import spinnerActionCreators  from './actions';

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

function mapStateToProps(storeState){
    const spinnerValue = storeState.spinnerData;
    return { value : spinnerValue };
}
function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spinner);