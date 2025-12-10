import React, { Fragment, useRef } from "react";
import SunEditor from 'suneditor-react';
import SunEditorCore from "suneditor/src/lib/core";



const SpkSunEditor = ({ width, height, placeholder, autofocus, setplugin, setcontent, appendcontent, defaultstyle, disable, hide, hidetoolbar, disabletoolbar, defaulContent, setoptions }) => {

  const editor = useRef(null);

  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  const handleChange = (content) => {
    console.log("Content changed:", content);
  };

  const handleScroll = (event) => {
    console.log("Scroll event:", event);
  };

  const handleClick = (event) => {
    console.log("Click event:", event);
  };

  const handleMouseDown = (event) => {
    console.log("Mouse down event:", event);
  };

  const handleInput = (event) => {
    console.log("Input event:", event);
  };

  const handleKeyUp = (event) => {
    console.log("Key up event:", event);
  };

  const handleFocus = (event) => {
    console.log("Focus event:", event);
  };

  const handleBlur = (event, editorContents) => {
    console.log("Blur event:", event, editorContents);
  };

  const handleKeyDown = (event) => {
    console.log("Key down event:", event);
  };

  const handleDrop = (event) => {
    console.log("Drop event:", event);
  };

  const handleImageUploadBefore = (data) => {
    console.log("Image upload before:", data);
    return true;
  };

  const handleImageUpload = (data) => {
    console.log("Image upload:", data);
  };

  const handleImageUploadError = (data) => {
    console.log("Image upload error:", data);
  };

  const handleVideoUploadBefore = (data) => {
    console.log("Video upload before:", data);
    return true;
  };

  const handleVideoUpload = (data) => {
    console.log("Video upload:", data);
  };

  const handleVideoUploadError = (data) => {
    console.log("Video upload error:", data);
  };

  const handleAudioUploadBefore = (data) => {
    console.log("Audio upload before:", data);
    return true;
  };

  const handleAudioUpload = (data) => {
    console.log("Audio upload:", data);
  };

  const handleAudioUploadError = (data) => {
    console.log("Audio upload error:", data);
  };

  const handleResizeEditor = (data) => {
    console.log("Editor resized:", data);
  };

  const handleCopy = (event, clipboardData) => {
    console.log("Copy event:", event, clipboardData);
    return true;
  };

  const handleCut = (event, clipboardData) => {
    console.log("Cut event:", event, clipboardData);
    return true;
  };

  const handlePaste = (data) => {
    console.log("Paste event:", data);
  };

  const imageUploadHandler = (data) => {
    console.log("Image upload handler:", data);
  };

  const toggleCodeView = (data) => {
    console.log("Toggle code view:", data);
  };

  const toggleFullScreen = (data) => {
    console.log("Toggle full screen:", data);
  };

  const showInline = (data) => {
    console.log("Show inline:", data);
  };

  const showController = (data) => {
    console.log("Show controller:", data);
  };

  const editorOptions = {
    ...setoptions,
  };

  return (
    <Fragment>
      <SunEditor setOptions={editorOptions} getSunEditorInstance={getSunEditorInstance}
        width={width} height={height} placeholder={placeholder} autoFocus={autofocus}
        setAllPlugins={setplugin} setContents={setcontent} appendContents={appendcontent}
        setDefaultStyle={defaultstyle} disable={disable} hide={hide} hideToolbar={hidetoolbar}
        disableToolbar={disabletoolbar} defaultValue={defaulContent}
        onChange={handleChange}
        onScroll={handleScroll}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onDrop={handleDrop}
        onImageUploadBefore={handleImageUploadBefore}
        onImageUpload={handleImageUpload}
        onImageUploadError={handleImageUploadError}
        onVideoUploadBefore={handleVideoUploadBefore}
        onVideoUpload={handleVideoUpload}
        onVideoUploadError={handleVideoUploadError}
        onAudioUploadBefore={handleAudioUploadBefore}
        onAudioUpload={handleAudioUpload}
        onAudioUploadError={handleAudioUploadError}
        onResizeEditor={handleResizeEditor}
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        imageUploadHandler={imageUploadHandler}
        toggleCodeView={toggleCodeView}
        toggleFullScreen={toggleFullScreen}
        showInline={showInline}
        showController={showController}

      />
    </Fragment>
  );
};

export default SpkSunEditor;
