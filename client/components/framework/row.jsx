import React from 'react';

export default class Row extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}