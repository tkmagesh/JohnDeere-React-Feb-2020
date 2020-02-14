import React, { Component} from 'react';
import BugItem from './BugItem';

class BugList extends Component {
    render = () => {
        const { bugs, toggle, removeClosed } = this.props;
        const bugItems = bugs.map((bug, index) => (
            <BugItem key={index} bug={bug} toggle={toggle} />
        ));
        return (
            <section className="list">
                <ol>
                    {bugItems}
                </ol>
                <input type="button" value="Remove Closed" onClick={() => removeClosed()} />
            </section>
        )
    }
}

export default BugList;