// ==UserScript==
// @name     Auto-Refresh
// @version 0.1
// @icon     https://image.flaticon.com/icons/svg/189/189687.svg
// /* Icon made by Roundicons from www.flaticon.com */
// @homepageURL https://github.com/perdolka/Auto-Refresh
// @downloadURL https://raw.githubusercontent.com/perdolka/Auto-Refresh/master/1.user.js
// @updateURL   https://raw.githubusercontent.com/perdolka/Auto-Refresh/master/1.user.js
// @include  http://sample.com/
// ==/UserScript==

(function () 
{ 
    var minutes = false; // false=seconds, true=minutes
    var interval = minutes ? 60000 : 1000; 
    var IDLE_TIMEOUT = 5; // minutes or seconds
    var idleCounter = 0;

    document.onmousemove = document.onkeypress = function () 
    {
        idleCounter = 0;
    };

    window.setInterval(function () 
    {
        if (++idleCounter >= IDLE_TIMEOUT) 
        {
            window.location.reload(); // or whatever you want to do
        }
    }, interval);
}());
