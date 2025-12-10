
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Head } from "@inertiajs/react";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
import Plyr from "plyr-react";
import MainLayout from "@/Layouts/layout";

const MediaPlayer = () => {

    const videoSources = [
        {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
            type: 'video/mp4',
        },
        {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
            type: 'video/mp4',
        },
        {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
            type: 'video/mp4',
        },
    ];

    return (

        <Fragment>

            {/* <!-- Page Header --> */}

            <Head title="Media-Player" />

            <Pageheader title="Advanced Ui" currentpage="Media Player" activepage="Media Player" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                VIDEO PLAYER
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Plyr source={{ type: 'video', sources: videoSources, poster: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" }} id="player" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>YOUTUBE VIDEO</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="plyr__video-embed" id="player1">
                                <iframe width="560" height="430" src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=EerYCepJFDTb5xOl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12} >
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                AUDIO PLAYER
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="px-1 px-xl-3">
                            <ReactAudioPlayer id="player2" className="w-100" src={`${__APP_BASE_PATH__}/build/assets/audio/perfect-beauty.mp3`} autoPlay controls />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!--End::row-1 --> */}

        </Fragment>

    )
};
// Assign layout
MediaPlayer.layout = (page) => <MainLayout>{page}</MainLayout>;
export default MediaPlayer;
