
import React from 'react';
import { Image, Toast } from 'react-bootstrap';
import SpkButton from './spk-buttons';
import BaseImage from '@/shared/layouts-components/baseimage/baseimage';


const SpkToast = ({ show, onClose, title, message, timestamp, imgSrc, toastClass, headerClass, imgClass, bodyClass, autohide = false, delay = 5000, ToastHeader = false, ToastBtn = false, ChildContent, btnClass = 'btn-close', onclick, bg }) => {
    return (
        <Toast bg={bg} show={show} onClose={onClose} className={`toast ${toastClass}`} delay={delay} autohide={autohide}>
            {ToastHeader === true && (
                <Toast.Header className={`toast-header ${headerClass}`}>
                    {imgSrc && (
                        <BaseImage className={`bd-placeholder-img rounded me-2 ${imgClass}`} src={imgSrc} alt="Toast Image" />
                    )}
                    <strong className="me-auto">{title}</strong>
                    <small>{timestamp}</small>
                </Toast.Header>
            )}

            {ToastHeader && (ChildContent || message) && (
                <Toast.Body className={`w-100 ${bodyClass}`}>
                    {ChildContent || message}
                </Toast.Body>
            )}

            {!ToastHeader && ToastBtn && (
                <div className="d-flex">
                    <Toast.Body className="w-100">{ChildContent || message}</Toast.Body>
                    <SpkButton Buttonvariant='' Buttontype="button" Customclass={btnClass} aria-label="Close" onClickfunc={onclick || onClose}/>
                </div>
            )}
        </Toast>
    );
};

export default SpkToast;
