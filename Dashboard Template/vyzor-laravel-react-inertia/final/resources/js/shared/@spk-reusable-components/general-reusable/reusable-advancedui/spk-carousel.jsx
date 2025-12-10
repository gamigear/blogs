
import React from "react";
import { Carousel } from "react-bootstrap";


const SpkCarouselComponent = ({ bsPrefix, as, slide = true, fade = false, controls = false, indicators = false, indicatorLabels, activeIndex, onSelect, onSlide, onSlid, interval, interval1, keyboard = false, pause = "hover", wrap = false, touch = false, prevIcon, prevLabel = "Previous", nextIcon, nextLabel = "Next", variant, defaultActiveIndex = 0, mainClass, items, ...props }) => {
    return (
        <Carousel bsPrefix={bsPrefix} as={as} slide={slide} fade={fade} controls={controls} indicators={indicators} activeIndex={activeIndex} onSelect={onSelect} onSlide={onSlide} onSlid={onSlid} interval={interval} keyboard={keyboard} pause={pause} wrap={wrap} touch={touch} prevIcon={prevIcon} prevLabel={prevLabel} nextIcon={nextIcon} nextLabel={nextLabel} variant={variant} defaultActiveIndex={defaultActiveIndex} className={mainClass} {...props}>
            {items.map((Item, index) => (
                <Carousel.Item key={index} interval={interval1} >
                    {Item}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default SpkCarouselComponent;
