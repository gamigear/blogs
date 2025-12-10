

import React, { Fragment } from 'react';

import { Col, Row, Card } from 'react-bootstrap';
import { Head } from "@inertiajs/react";
import Pageheader from '../../../shared/layouts-components/pageheader/pageheader';
import SpkLeaflet from '../../../shared/@spk-reusable-components/reusable-plugins/spk-leaflet';
import MainLayout from '@/Layouts/layout';


const Leafletmaps = () => {

    const position = [51.505, -0.09];
    const redOptions = { color: "red" };
    const center = [51.51, -0.12];
    const fillBlueOptions = { fillColor: "blue" };
    const blackOptions = { color: "black" };
    const limeOptions = { color: "lime" };
    const purpleOptions = { color: "purple" };

    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ];
    const multiPolyline = [
        [
            [51.5, -0.1],
            [51.5, -0.12],
            [51.52, -0.12],
        ],
        [
            [51.5, -0.05],
            [51.5, -0.06],
            [51.52, -0.06],
        ],
    ];

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ];

    const multiPolygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
        ],
        [
            [51.51, -0.05],
            [51.51, -0.07],
            [51.53, -0.07],
        ],
    ];

    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ];

    return (

        <Fragment>
            <Head title={"Leaflet Maps"} />

            <Pageheader title="Maps" activepage="Leaflet Maps" currentpage="Leaflet Maps" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Leaflet Map</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="map">
                                <SpkLeaflet position={position} Zoom={13} scrollWheel={true} Customclass="mapleaflet ht-300" Id="leaflet1" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Map With Markers,Circles and Polygons</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="map1">
                                <SpkLeaflet position={center} Zoom={13} scrollWheel={true} Customclass="ht-200 sm:ht-300 md:ht-400 popup-map" Id="leaflet3" CirclepathOptions={fillBlueOptions} Circlepostion={center} MarkerpathOptions={redOptions} PolylinepathOptions={limeOptions} Polyllinepositions={polyline} PolygonpathOptions={purpleOptions} Polygonposition={polygon} ReactanglepathOptions={blackOptions} Bounds={rectangle} MUltipolygonposition={multiPolygon} Multipolyineposition={multiPolyline} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Map With Popup</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="map-popup">
                                <SpkLeaflet position={center} Zoom={13} scrollWheel={true} Customclass="ht-300 circle-map" Id="leaflet2" MarkerpathOptions={redOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Interactive Choropleth Map</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="interactive-map">
                                <SpkLeaflet position={position} Zoom={13} scrollWheel={true} Customclass="mapleaflet ht-300" Id="interactive-map" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

// Assign layout
Leafletmaps.layout = (page) => <MainLayout>{page}</MainLayout>;
export default Leafletmaps;
