import bespoke from "bespoke";
import keys from "bespoke-keys";
import classes from "bespoke-classes";
import progress from "bespoke-progress";
import touch from "bespoke-touch";
import bullets from "bespoke-bullets";


const startPresentation = (selector) => {
    const plugins = [
        keys(),
        classes(),
        progress(),
        touch(),
        bullets('li, .bullet'),
    ]
    const presentation = document.querySelector(selector);

    var deck = bespoke.from(presentation, plugins);
    window.deck = deck

    // Add fullscreen support
    presentation.parentNode.classList.remove("hidden")
    if (presentation.parentNode.requestFullscreen) {
        presentation.parentNode.requestFullscreen().catch(err => {
            console.error("Error attempting to enable fullscreen mode:", err);
        });

        addEventListener("fullscreenchange", (event) => {
            if (!document.fullscreenElement) {
                window.location.reload()
            }
        })

    }
    window.onkeydown = function (e) {
        if (e.key === 'Escape') {

        }
    }
}


window.startPresentation = startPresentation


