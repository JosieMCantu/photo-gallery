import React from 'react';
import ImageItem from './ImageItem.js';



export default class ImageList extends React.Component {

    render() {

        const imageList =
            this.props.images.map(
                image => <ImageItem image={image} key={image.title} />
            )
        return (
            <div className="plum-div"><ul>{imageList}</ul></div>
        )
    }
}