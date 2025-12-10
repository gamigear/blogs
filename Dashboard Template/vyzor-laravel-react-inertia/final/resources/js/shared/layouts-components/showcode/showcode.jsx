
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import SpkButton from '../../@spk-reusable-components/general-reusable/reusable-uielements/spk-buttons';


const ShowCode = ({ title, reactCode, dataCode, reusableCode, customCardClass, customCardHeaderClass, customCardBodyClass, customCardFooterClass, children }) => {

    const [showCode, setShowCode] = useState(false);
    const [activeTab, setActiveTab] = useState('react');

    const toggleCode = () => {
        setShowCode(!showCode);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const shouldShowDataTab = !!dataCode;
    //const shouldShowReusableTab = !!reusableCode;

    return (
        <Card className={`custom-card ${customCardClass}`}>
            <Card.Header className={`justify-content-between ${customCardHeaderClass}`}>
                <div className="card-title" dangerouslySetInnerHTML={{ __html: title }}></div>
                <div className="prism-toggle">
                    <SpkButton Size='sm' Buttonvariant="primary-light" onClickfunc={toggleCode}>
                        {showCode ? 'Hide Code' : 'Show Code'}
                        <i className={`${showCode ? 'ri-code-s-slash-line' : 'ri-code-line'} ms-2 align-middle inline-block`}></i>
                    </SpkButton>
                </div>
            </Card.Header>
            {showCode ? (
                <Card.Footer className={`border-top-0 ${customCardFooterClass}`}>
                    <div className="tabs">
                        <SpkButton Buttonvariant='' Customclass={`tab-button text-default ${activeTab === 'react' ? 'active' : ''}`} onClickfunc={() => handleTabChange('react')}>React </SpkButton>
                        {shouldShowDataTab && (
                            <SpkButton Buttonvariant='' Customclass={`tab-button text-default ${activeTab === 'data' ? 'active' : ''}`} onClickfunc={() => handleTabChange('data')}>Data</SpkButton>
                        )}
                        {reusableCode && (
                            <SpkButton Buttonvariant='' Customclass={`tab-button text-default ${activeTab === 'reusable' ? 'active' : ''}`} onClickfunc={() => handleTabChange('reusable')}>Reusable Code</SpkButton>
                        )}
                    </div>
                    <pre className="language-html showcode-code">
                        <code className="language-html">
                            {activeTab === 'react'
                                ? reactCode
                                : activeTab === 'data'
                                    ? dataCode
                                    : activeTab === 'reusable'
                                        ? reusableCode
                                        : null}
                        </code>
                    </pre>
                </Card.Footer>
            ) : (
                <Card.Body className={`${customCardBodyClass}`}>{children}</Card.Body>
            )}
        </Card>
    );
};

export default ShowCode;
