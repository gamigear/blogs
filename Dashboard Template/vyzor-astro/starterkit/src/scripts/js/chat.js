
import SimpleBar from "simplebar";
import GLightbox from "glightbox";
import face2 from '../../assets/images/faces/2.jpg';
import face15 from '../../assets/images/faces/15.jpg';
import face10 from '../../assets/images/faces/10.jpg';
import face8 from '../../assets/images/faces/8.jpg';
import face11 from '../../assets/images/faces/11.jpg';
import face3 from '../../assets/images/faces/3.jpg';
import face6 from '../../assets/images/faces/6.jpg';
import face4 from '../../assets/images/faces/4.jpg';
import face13 from '../../assets/images/faces/13.jpg';
import face17 from '../../assets/images/faces/17.jpg';
import face18 from '../../assets/images/faces/18.jpg';
import face19 from '../../assets/images/faces/19.jpg';
import face20 from '../../assets/images/faces/20.jpg'; 
import face21 from '../../assets/images/faces/21.jpg'; 

(function () {
    "use strict";

    var myElement1 = document.getElementById('chat-msg-scroll');
    new SimpleBar(myElement1, { autoHide: true });

    var myElement2 = document.getElementById('groups-tab-pane');
    new SimpleBar(myElement2, { autoHide: true });

    var myElement3 = document.getElementById('contacts-tab-pane');
    new SimpleBar(myElement3, { autoHide: true });

    var myElement4 = document.getElementById('main-chat-content');
    new SimpleBar(myElement4, { autoHide: true });

    document.querySelector(".responsive-chat-close").addEventListener("click", () => {
        document.querySelector(".main-chart-wrapper").classList.remove("responsive-chat-open")
    })

    var lightboxVideo = GLightbox({
        selector: '.glightbox'
    });
    lightboxVideo.on('slide_changed', ({ prev, current }) => {

        const { slideIndex, slideNode, slideConfig, player } = current;
    });

})();

const faceImages = {
  '2': face2,
  '15': face15,
  '3': face3,
  '10':face10,
  '8':face8,
  '11':face11,
  '6':face6,
  '4':face4,
  '13':face13,
  '17':face17,
  '18':face18,
  '19':face19,
  '20':face20,
  '21':face21
};

export let changeTheInfo = (element, name, img, status) => {
    document.querySelectorAll(".checkforactive").forEach((ele) => {
        ele.classList.remove("active");
    });

    element.closest("li").classList.add("active");

    document.querySelectorAll(".chatnameperson").forEach((ele) => {
        ele.innerText = name;
    });

    // Use the mapping instead of constructing a string
    const image = faceImages[img].src;
    document.querySelectorAll(".chatimageperson").forEach((ele) => {
        ele.src = image;
    });

    document.querySelectorAll(".chatstatusperson").forEach((ele) => {
        ele.classList.remove("online", "offline");
        ele.classList.add(status);
    });

    document.querySelector(".chatpersonstatus").innerText = status;

    document.querySelector(".main-chart-wrapper").classList.add("responsive-chat-open");
};
window.changeTheInfo = changeTheInfo;


