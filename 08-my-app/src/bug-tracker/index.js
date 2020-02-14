import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import bugActionCreators from './actions';

import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';
import './index.css';

class BugTracker extends Component {
    state = {
        sortAttrName : '',
        sortDesc : false
    };

    onChangeSortAttr = (evt) => {
        this.setState({ sortAttrName : evt.target.value });
        this.props.sort(evt.target.value, this.state.sortDesc);
    }
    onChangeSortDesc = (evt) => {
        this.setState({sortDesc : evt.target.checked});
        this.props.sort(this.state.sortAttrName, evt.target.checked);
    }
    render = () => {
        const { bugs, toggle, removeClosed, addNew } = this.props;
        return (
            <div>
                <BugStats bugs={bugs} />
                <BugEdit addNew={addNew} />
                <section>
                    <label htmlFor="">Order By :</label>
                    <select name="" id="" onChange={this.onChangeSortAttr}>
                        <option value="id">Id</option>
                        <option value="name">Name :</option>
                        <option value="isClosed">Status</option>
                        <option value="createdAt">Created</option>
                    </select>
                    <label htmlFor="">Descending :</label>
                    <input type="checkbox" onClick={this.onChangeSortDesc} />
                </section>
                <BugList {...{ bugs, toggle, removeClosed }} />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const { filterData, bugsData, spinnerData } = storeState;
    const bugs = filterData.applyFilter ? bugsData.bugs.filter(bug => bug.id % 2 === spinnerData % 2) : bugsData.bugs;
    const attrName = bugsData.sortAttrName;
    const result = bugs.sort((b1, b2) => {
        if (b1[attrName] < b2[attrName]) return ( -1 * (bugsData.sortDesc ? -1 : 1));
        if (b1[attrName] > b2[attrName]) return ( 1 * (bugsData.sortDesc ? -1 : 1));
        return 0;
    });
    return { bugs : result };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);