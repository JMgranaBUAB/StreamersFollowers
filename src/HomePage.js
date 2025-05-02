import React from 'react';

function HomePage() {
    return (

        <div>

            <div class="iframeFollowers">


                <div class="boxStreamer">
                    <div id="countik-widgetibaillanos"></div>
                    <script>
                        (function () {
                    var countikWidget = document.createElement('script');
                        countikWidget.src = 'https://countik.com/widget.js';
                        countikWidget.async = true;
                        countikWidget.onload = function () {
                        if (typeof window.initializeCountikWidget === 'function') {
                            window.initializeCountikWidget({
                                container: '#countik-widgetibaillanos',
                                themeColor: '#444444',
                                uniqueId: 'ibaillanos',
                                language: 'es'
                            });
                        }
                    };
                        var firstScript = document.getElementsByTagName('script')[0];
                        firstScript.parentNode.insertBefore(countikWidget, firstScript);
                })();
                    </script>
                    <a href="https://countik.com/es/user/ibaillanos" target="_blank" class="pow-countik"
                        style="font-size:11px;color:#333;display:block;padding:4px 3px;text-decoration:none;">Impulsado por
                        Countik™</a>
                </div>

            </div>
        </div>
    );
}

export default HomePage;