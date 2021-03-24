$(document).ready(function() {

    // Set Up Global Variables
    let imgDisplay = $("#img-display");
    let colIterations = 0;
    let idx = 0;

    /* Set Up Object Array for the Images with keys of caption and source

        caption is brief description of the image
        source is the file path of the image (e.g. images/la-geode-paris.JPG)

    */
    const IMAGES = [
        {
            "caption": "Thames Polytechnic Presentation Ceremony, Royal Festival Hall, London",
            "source": "images/presentation-ceremony-derek.jpg"
        }, 

        {
            "caption": "Institute of Directors Building, London",
            "source": "images/iod-building.JPG"
        },

        {
            "caption": "BCS Annual Dinner, IoD, London, September 2011",
            "source": "images/bcs-dinner-2011.jpg"
        },

        {
            "caption": "Eveningwear on 20 September 2011",
            "source": "images/derek-20110920.jpg"
        }
    ];
});