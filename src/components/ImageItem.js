import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <li className="creatures"><img alt="horned beast" src={this.props.image.url} />{this.props.image.title}</li>
        )
    }
}