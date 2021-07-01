// ==UserScript==
// @name         Azure DevOps Services Work Item Helpers
// @namespace    https://blog.miniasp.com/
// @version      0.1
// @description  Turn all Screen recording links into VIDEO tag.
// @license      MIT
// @homepage     https://blog.miniasp.com/
// @homepageURL  https://blog.miniasp.com/
// @website      https://www.facebook.com/will.fans
// @source       https://github.com/doggy8088/AzureDevOpsWorkItemHelpers
// @namespace    https://github.com/doggy8088/AzureDevOpsWorkItemHelpers
// @author       Will Huang
// @match        *://*.visualstudio.com/*
// @match        *://dev.azure.com/*
// ==/UserScript==

(function () {
    'use strict';

    function replaceVideos() {
        // <a href="https://xxxxx.visualstudio.com//TestManagement/v1.0/AttachmentDownload.ashx?run=0&amp;res=0&amp;id=1407" style="margin-left:30px">Screen recording - 1</a>
        let allAnchors = document.querySelectorAll('a[href*="TestManagement/v1.0/AttachmentDownload.ashx"]')
        allAnchors.forEach(a => {
            if (a.className != 'x-show' && a.innerText.indexOf('Screen recording') >= 0) {
                a.className = "x-show";
                a.outerHTML = a.outerHTML + `<video src="${a.href}" controls width="100%"></video>`;
            }
        })
    }

    function executeActions() {
        replaceVideos();
    }

    (function () {
        'use strict';
        document.addEventListener('keyup', function (e) {
            console.log(e)
            if (e.ctrlKey && e.altKey && e.shiftKey && e.key == 'P') {
                executeActions();
            }
        });

        setTimeout(executeActions, 2000);
    })();

})();