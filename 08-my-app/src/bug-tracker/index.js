import React, { Component } from 'react';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import './index.css';

class BugTracker extends React.Component {
    render = () => {
        const { bugs, toggle, removeClosed, addNew } = this.props;
        return (
            <div>
                <BugStats bugs={bugs} />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, removeClosed }} />
            </div>
        )
    }
}

export default BugTracker;