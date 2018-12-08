import React, {Component} from 'react';

import {Player} from 'video-react';

class VideoPlayer extends Component {
    render() {
        return (
            <div>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src={this.props.video}
                />

            </div>
        );
    }
}

export default VideoPlayer;
