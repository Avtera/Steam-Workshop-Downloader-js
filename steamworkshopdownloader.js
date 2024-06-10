// ==UserScript==
// @name         Steam Workshop Downloader
// @namespace    https://github.com/Avtera/
// @version      1.0
// @description  Downloads Steam Workshop items using steamworkshop.download
// @author       Avtera
// @match        *://steamcommunity.com/workshop/filedetails/?id=*
// @match        *://steamcommunity.com/sharedfiles/filedetails/?id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @grant        none
// @license      none
// ==/UserScript==

const header=document.querySelector( '.workshopItemDetailsHeader' );
const a=document.createElement('a');
a.innerText='Download';
var ct=window.location.href.search('&');
if(ct==-1) a.href='http://steamworkshop.download/download/view/'+window.location.href.substr(window.location.href.search('id=')+3);
else a.href='http://steamworkshop.download/download/view/'+window.location.href.substring(window.location.href.search('id=')+3,ct);
a.target='_blank';
// a.className='btn_green_white_innerfade btn_border_2px btn_medium';
// a.style.padding='10px';

a.classList.add('btn_green_white_innerfade', 'btn_border_2px', 'btn_medium');
a.style.marginTop = '5px';
a.style.marginRight = '18px';
a.style.padding = '5px 20px';
a.style.height = '21.43px';
a.style.fontSize = '14px';

header.style.position = 'relative';

// Position the button absolutely within the header
a.style.position = 'absolute';
a.style.right = '0';
header.appendChild(a);
