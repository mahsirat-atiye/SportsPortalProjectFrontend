//import "node_modules/video-react/dist/video-react.css"; // import css
import React, {Component} from 'react';

//import { Player } from 'video-react';
//import ReactPlayer from 'react-player'
import { Player } from 'video-react';

class Videoplayer extends Component {

    constructor(props, context) {
        super(props, context);

    }

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
export default Videoplayer
