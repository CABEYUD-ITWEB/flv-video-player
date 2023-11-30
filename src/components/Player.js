import FlvJs from "flv.js"
import { useState } from "react";

import styles from './Player.module.css'

function Player() {
    const [flvUrl, setFlvUrl] = useState('https://flvplayer.js.org/assets/video/weathering-with-you.flv');
    let player = undefined;

    function flvLoadMDS() {
        try {
            const element = document.getElementById('player');
            let mediaDataSource = {
                type: 'flv',
                isLive: true,
                hasAudio: true,
                hasVideo: true,
                url: flvUrl,
            };

            if (typeof player !== "undefined") {
                if (player != null) {
                    player.unload();
                    player.detachMediaElement();
                    player.destroy();
                    player = null;
                }
            }
            player = FlvJs.createPlayer(mediaDataSource, {
                enableWorker: false,
                lazyLoadMaxDuration: 3 * 60,
                seekType: 'range',
            });
            player.attachMediaElement(element);
            player.load();

            playerHanleError();
        } catch (err) {
            console.log(err);
        }
    }

    function playerHanleError() {
        player.on(FlvJs.Events.ERROR, (err, errdet) => {
            if (err === FlvJs.ErrorTypes.MEDIA_ERROR) {
                if (errdet === FlvJs.ErrorDetails.MEDIA_FORMAT_UNSUPPORTED) {
                    console.log('Media format not supported');
                }
            }
            if (err === FlvJs.ErrorTypes.NETWORK_ERROR) {
                if (errdet === FlvJs.ErrorDetails.NETWORK_STATUS_CODE_INVALID) {
                    console.log('http status code exception')
                }
            }
            if (err === FlvJs.ErrorTypes.OTHER_ERROR) {
                console.log('Other exceptions: ', errdet)
            }
            flvDestroy();
        })
    }

    // function flvStart() {
    //     try {
    //         player.play();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // function flvPause() {
    //     try {
    //         player.pause();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    function flvDestroy() {
        try {
            player.pause();
            player.unload();
            player.detachMediaElement();
            player.destroy();
            player = null;
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div id="mediaSourceURL" className="hidden">
                <div className="url-input">
                    <input
                        id="msURL"
                        type="text"
                        value={flvUrl}
                        onChange={(e) => { setFlvUrl(e.target.value) }}
                    />
                </div>
                <div style={{ fontSize: '12px', color: 'darkgreen', lineHeight: '22px', width: '98%' }}>
                    <i>* This is an example of a secure video URL:
                        <b>https://yoursite.com:8443/live/PLXyz.flv</b>
                    </i>
                </div>
                <button className={styles.playBtn} onClick={flvLoadMDS}>Play Video</button>
            </div>

            <br />

            <div className="video-container">
                <div>
                    <video width="100%" id="player" name="videoElement" className="centeredVideo" controls autoPlay>
                        Your browser is too old which doesn't support HTML5 video.
                    </video>
                </div>
            </div>
        </>
    )
}

export default Player
