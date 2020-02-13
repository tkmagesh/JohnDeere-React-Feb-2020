import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bugActionCreators from './actions';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import './index.css';

class BugTracker extends Component {
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

function mapStateToProps(storeState){
    const bugs = storeState.bugsData;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);