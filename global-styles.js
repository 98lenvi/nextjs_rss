import { createGlobalStyle } from 'styled-components';

const softPink = '#F9D8D4';
const yellow = '#F9A734';
const DarkYellow = '#FB8B24';
const green = '#36964C';
const DarkGreen = '#286E38';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }


  body { 
    background:
    /* Pineapple details */
    radial-gradient(circle closest-side at 50px 50px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 40px 60px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 60px 60px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 50px 70px, ${DarkYellow} 3px, transparent 0),
    
    radial-gradient(circle closest-side at 150px 165px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 140px 175px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 160px 175px, ${DarkYellow} 3px, transparent 0),
    radial-gradient(circle closest-side at 150px 185px, ${DarkYellow} 3px, transparent 0),
    
    /* Pineapple base */
    radial-gradient(ellipse closest-side at 50px 60px, ${yellow} 18px, transparent 0),
    
    radial-gradient(ellipse closest-side at 150px 175px, ${yellow} 18px, transparent 0),
    
    /* Pineapple leafs */
    radial-gradient(circle closest-side at 30px 40px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 40px 35px, ${green} 15px, transparent 0),
    radial-gradient(circle closest-side at 70px 40px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 60px 35px, ${DarkGreen} 15px, transparent 0),
    
    radial-gradient(circle closest-side at 130px 155px, ${softPink} 15px, transparent 0),
    radial-gradient(circle closest-side at 140px 150px, ${green} 15px, transparent 0),
    radial-gradient(circle at 170px 155px, ${softPink} 15px, transparent 0),
    radial-gradient(circle at 160px 150px, ${DarkGreen} 15px, transparent 0)
    ;
    background-color: ${softPink};
    background-size: 180px 210px;
    animation: animatedBackground .5s cubic-bezier(.61,-0.64,.58,1.46) forwards;
  }
  
  
  /* Animation */
  
  @keyframes animatedBackground {
    from { background-position: 0 50%; }
    to { background-position: 0 0; }
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Crete Round', serif;
    font-weight: initial;
}


  p, li, span, input, a, button {
    font-family: 'ABeeZee', sans-serif;
  }

  .rhap_container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-family: inherit;
    width: 100%;
    padding: 10px 15px;
    background-color: white;
    border: 2.5px solid black;
  }
  .rhap_container:focus:not(:focus-visible) {
    outline: 0;
  }
  .rhap_container svg {
    vertical-align: initial;
  }
  
  .rhap_header {
    margin-bottom: 10px;
  }
  
  .rhap_footer {
    margin-top: 5px;
  }
  
  .rhap_main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  
  .rhap_stacked .rhap_controls-section {
    margin-top: 8px;
  }
  
  .rhap_horizontal {
    flex-direction: row;
  }
  .rhap_horizontal .rhap_controls-section {
    margin-left: 8px;
  }
  
  .rhap_horizontal-reverse {
    flex-direction: row-reverse;
  }
  .rhap_horizontal-reverse .rhap_controls-section {
    margin-right: 8px;
  }
  
  .rhap_stacked-reverse {
    flex-direction: column-reverse;
  }
  .rhap_stacked-reverse .rhap_controls-section {
    margin-bottom: 8px;
  }
  
  .rhap_progress-section {
    display: flex;
    flex: 3 1 auto;
    align-items: center;
  }
  
  .rhap_progress-container {
    display: flex;
    align-items: center;
    height: 20px;
    flex: 1 0 auto;
    align-self: center;
    margin: 0 calc(10px + 1%);
    cursor: pointer;
    -webkit-user-select: none;
  }
  .rhap_progress-container:focus:not(:focus-visible) {
    outline: 0;
  }
  
  .rhap_time {
    color: black;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
  }
  
  .rhap_progress-bar {
    box-sizing: border-box;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 5px;
    background-color: black;
    border-radius: 2px;
  }
  
  .rhap_progress-filled {
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: black;
    border-radius: 2px;
  }
  
  .rhap_progress-bar-show-download {
    background-color: rgba(221, 221, 221, 0.5);
  }
  
  .rhap_download-progress {
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgb(122, 122, 122);
    border-radius: 2px;
  }
  
  .rhap_progress-indicator {
    box-sizing: border-box;
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    top: -8px;
    background: black;
    border-radius: 50px;
  }
  
  .rhap_controls-section {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;
  }
  
  .rhap_additional-controls {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
  }
  
  .rhap_repeat-button {
    font-size: 26px;
    width: 26px;
    height: 26px;
    color: black;
    margin-right: 6px;
  }
  
  .rhap_main-controls {
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .rhap_main-controls-button {
    margin: 0 3px;
    color: black;
    font-size: 35px;
    width: 35px;
    height: 35px;
  }
  
  .rhap_play-pause-button {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }
  
  .rhap_volume-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-end;
    align-items: center;
  }
  
  .rhap_volume-button {
    flex: 0 0 26px;
    font-size: 26px;
    width: 26px;
    height: 26px;
    color: black;
    margin-right: 6px;
  }
  
  .rhap_volume-container {
    display: flex;
    align-items: center;
    flex: 0 1 100px;
    -webkit-user-select: none;
  }
  
  .rhap_volume-bar-area {
    display: flex;
    align-items: center;
    width: 100%;
    height: 14px;
    cursor: pointer;
  }
  .rhap_volume-bar-area:focus:not(:focus-visible) {
    outline: 0;
  }
  
  .rhap_volume-bar {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 4px;
    background: black;
    border-radius: 2px;
  }
  
  .rhap_volume-indicator {
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    left: 0;
    top: -4px;
    background: black;
    opacity: 0.9;
    border-radius: 50px;
    cursor: pointer;
  }
  .rhap_volume-indicator:hover {
    opacity: 0.9;
  }
  
  /* Utils */
  .rhap_button-clear {
    background-color: transparent;
    border: none;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
  }
  .rhap_button-clear:hover {
    opacity: 0.9;
    transition-duration: 0.2s;
  }
  .rhap_button-clear:active {
    opacity: 0.95;
  }
  .rhap_button-clear:focus:not(:focus-visible) {
    outline: 0;
  }
  
`;

export default GlobalStyle;
