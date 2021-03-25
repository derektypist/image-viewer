$(document).ready(function() {

    // Set Up Global Variables
    let imgDisplay = $("#img-display");
    let colIterations = 0;
    let idx = 0;

    /* Set Up Object Array for the Images with keys of caption and source

        caption is brief description of the image (e.g. La Geode, Paris, France)
        source is the file path of the image (e.g. images/la-geode-paris.JPG)

    */
    const IMAGES = [
        {
            "caption": "Thames Polytechnic Presentation Ceremony, Royal Festival Hall, London",
            "source": "images/presentation-ceremony-derek.jpg"
        }, 

        {
            "caption": "IoD Building, London",
            "source": "images/iod-building.JPG"
        },

        {
            "caption": "BCS Annual Dinner, IoD, London, September 2011",
            "source": "images/bcs-dinner-2011.jpg"
        },

        {
            "caption": "In London on 20 September 2011",
            "source": "images/derek-20110920.jpg"
        },

        {
            "caption": "Olympic Park Noticeboard, Munich, Germany",
            "source": "images/olympic-park-nb-munich.JPG"
        },

        {
            "caption": "Olympic Park Path, Munich, Germany",
            "source": "images/olympic-park-path-munich.JPG"
        },

        {
            "caption": "Olympic Park with Running Track, Munich, Germany",
            "source": "images/olympic-park-running-track-munich.JPG"
        },

        {
            "caption": "La Geode, Paris, France",
            "source": "images/la-geode-paris.JPG"
        },

        {
            "caption": "On Board the Cristal II in Paris, 19 September 2015",
            "source": "images/paris-cristal-20150919.jpg"
        },

        {
            "caption": "Nerja, Spain",
            "source": "images/nerja-spain.jpg"
        },

        {
            "caption": "Observatory in Prague, Czech Republic",
            "source": "images/observatory-prague.JPG"
        },

        {
            "caption": "Wendover Road, Bromley",
            "source": "images/wendover-rd-bromley.JPG"
        },

        {
            "caption": "Langdon Road, Bromley",
            "source": "images/langdon-rd-bromley.JPG"
        },

        {
            "caption": "Whitehall Recreation Ground, Bromley",
            "source": "images/whitehall-rec-bromley.JPG"
        },

        {
            "caption": "Whitehall Recreation Ground (Path), Bromley",
            "source": "images/whitehall-rec-path-bromley.JPG"
        },

        {
            "caption": "Hope Church at St Lukes, Bromley",
            "source": "images/hope-church-st-lukes-bromley.JPG"
        },

        {
            "caption": "Elmfield Wood Notice Board, Bromley",
            "source": "images/elmfield-wd-nb-bromley.JPG"
        },

        {
            "caption": "Elmfield Wood Path, Bromley",
            "source": "images/elmfield-wd-path-bromley.JPG"
        }
    ];

    const CAPTION_COLORS = ["black","blue","purple","green","orange","red","brown"];

    resetImage();

    // Function to Reset Image
    function resetImage() {
        idx = 0;
        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);
    }

    // Function to Display Image
    function displayImage(src, caption) {
        $("#image").html(`
            <img src=${src} title=${caption} alt=${caption}>`);
    }

    // Function to Display Caption
    function displayCaption(caption) {
        $("#img-caption").html(`
            <figcaption>${caption}</figcaption>`);
    }

    // Function to Display Position Information
    function displayPosition(idx) {
        $("#pos-info").html(`<p>Position ${idx + 1} of ${IMAGES.length}</p>`);
    }

    // Function to Move to Previous Image
    function previousImage(idx) {
        if (idx > 0) {
            idx -= 1;
        }

        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);
    }

    // Function to Move to Next Image
    function nextImage(idx) {
        if (idx != IMAGES.length - 1) {
            idx += 1;
        }

        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);
    }

});