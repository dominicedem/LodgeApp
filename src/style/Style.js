import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --appbackgroundcolor: #efefef;
    --menubackgroundcolor: #efefef;
    --primary_text_color: #323232;
    --signout_text_color: #e33e;
    --signin_text_color: #217fd7;
    --signinBtn_hover_color: #0c65b8;
    --signin_text_color_faint: #217fd755;
    --signin_active_color_faint: #217fd722;
    --faint_text_black: #1212129d;
    --white_text: #eee;
    --secondary_text: #333;
    --secondary_text_faint: #3333333a;
    --tertiary_text_faint: #22222224;
    --input_Icon_color: #3d3d3db5;
    --star_Icon_color: #33333335;
    --inputField_border: #12121238;
    --feature_background: #eef7ff;

    --blacktextcolor: #121212;
    --buttontextcolor:  #76b0c9;
    --secondary_text_color: #ccc;
    --backgroundColor: #121212;
    --mapColor: #76b0c9;
    --searchbackground: #2223;
    --searchtextcolor:#2d2d2d;
    --bordercolor:#121212;
    --placeholdercolor:#999;
}
html {
    font-size: 62.5%;
}
body {
    font-family: sans-serif;
    line-height: 1.2;
}
*,*::before,*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    /* outline: 2px solid #f00; */
}




/* ::-webkit-scrollbar-thumb {
    background-color: #00597a;
    border-radius: 1rem;
}        
::-webkit-scrollbar {
    background-color:transparent;
    width: 0.5vw;
} */

/* .mapStyle {
    height: 100%;
}
.leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background: var(--appbackgroundcolor);
}
.leaflet-popup-content {
    font-size: 1.2rem;
    font-weight: bold;
    padding: .1rem .01rem;
}
.leaflet-popup-content-wrapper {
    border-left: 5px solid var(--mapColor);
    border-radius: .6rem;
    
} */
/* .swiper-pagination-bullet {
    background-color: var(--signin_text_color) !important;
} */
.swiper-pagination-bullets {
    margin-bottom: -8px;
}

.swiper-pagination-bullet-active {
    background-color: var(--primary_text_color) !important;
}
.mySwiper {
    height: 30rem;
}

.signout {
    color: var(--signout_text_color);
}
.signin {
    color: var(--signin_text_color);
}
.verify {
    background-color: var(--signin_text_color);
}
.notVerify {
    background-color: var(--secondary_text_faint);
}
.active {
    background: var(--signin_active_color_faint);
    border-radius: 0.5rem;
}
.activeTab {
    color: var(--signin_text_color);
}
.inactiveTab {
    color: var(--faint_text_black);
}

`;
export default GlobalStyle;
