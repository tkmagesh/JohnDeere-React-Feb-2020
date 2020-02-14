import React from 'react';
/* const BugItem = ({ bug, toggle }) => {
    console.log('BugItem rendered for ', bug.id);
    return (
        <li>
            <span
                className={'bugname' + (bug.isClosed ? ' closed' : '')}
                onClick={() => toggle(bug)}
            >
                {bug.name}</span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <div>[ID : {bug.id}]</div>

        </li>
    );
}; */

/* class BugItem extends React.PureComponent{
    render = () => {
        const { bug, toggle } = this.props;
        console.log('BugItem rendered for ', bug.id);
        return (
            <li>
                <span
                    className={'bugname' + (bug.isClosed ? ' closed' : '')}
                    onClick={() => toggle(bug)}
                >
                    {bug.name}</span>
                <div className="datetime">{bug.createdAt.toString()}</div>
                <div>[ID : {bug.id}]</div>

            </li>
        );
    };
} */

const BugItem = ({ bug, toggle }) => {
    
    return (
        <li>
            <span
                className={'bugname' + (bug.isClosed ? ' closed' : '')}
                onClick={() => toggle(bug)}
            >
                {bug.name}</span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <div>[ID : {bug.id}]</div>

        </li>
    );
};
export default BugItem;