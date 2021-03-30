$(document).ready(function() {

    // Set Up Global Variables
    let colIterations = 0;
    let idx = 0;

    /* Set Up Object Array for the Images with keys of caption and source

        caption is brief description of the image (e.g. La Geode, Paris, France)
        source is the file path of the image (e.g. images/la-geode-paris.JPG)

    */
    const IMAGES = [
        {
            "caption": "IoD Building, London",
            "source": "images/iod-building.jpg"
        },

        {
            "caption": "BCS Annual Dinner, IoD, London, September 2011",
            "source": "images/bcs-dinner-2011.jpg"
        },

        {
            "caption": "In London on 20 September 2011",
            "source": "images/derek-20110920.JPG"
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
            "caption": "Tramway in Reims, France",
            "source": "images/tramway-reims.JPG"
        },

        {
            "caption": "Comedie, Reims, France Tram Stop",
            "source": "images/comedie-reims.JPG"
        },

        {
            "caption": "Nice, France at Night",
            "source": "images/nice-at-night.JPG"
        },

        {
            "caption": "Nice, France",
            "source": "images/nice-france.JPG"
        },

        {
            "caption": "Menton, France",
            "source": "images/menton.JPG"
        },

        {
            "caption": "Mountain Views in Menton, France",
            "source": "images/menton-mountain-views.JPG"
        },

        {
            "caption": "La Geode, Paris, France",
            "source": "images/la-geode-paris.JPG"
        },

        {
            "caption": "Summer Ball 2015 at Hinckley Island Hotel",
            "source": "images/summer-ball-hinckley-2015.jpg"
        },

        {
            "caption": "Eiffel Tower, Paris, France",
            "source": "images/eiffel-tower-paris.JPG"
        },

        {
            "caption": "Benalmadena, Spain",
            "source": "images/benalmadena-spain.JPG"
        },

        {
            "caption": "Mijas, Spain",
            "source": "images/mijas-spain.JPG"
        },

        {
            "caption": "Lisbon, Portugal",
            "source": "images/lisbon.JPG"
        },

        {
            "caption": "Lisbon, Portugal at Night",
            "source": "images/lisbon-at-night.JPG"
        },

        {
            "caption": "Nerja, Spain",
            "source": "images/nerja-spain.JPG"
        },

        {
            "caption": "Boat Trip, Prague, Czech Republic",
            "source": "images/boat-trip-prague.JPG"
        },

        {
            "caption": "Observatory in Prague, Czech Republic",
            "source": "images/observatory-prague.JPG"
        },

        {
            "caption": "Waldorf Restaurant, CMV Magellan",
            "source": "images/waldorf-restaurant-magellan.JPG"
        },

        {
            "caption": "Torremolinos, Spain",
            "source": "images/torremolinos-spain.jpg"
        },

        {
            "caption": "Fuengirola, Spain",
            "source": "images/fuengirola-spain.JPG"
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
        },

        {
            "caption": "St Mark's Square, Bromley",
            "source": "images/st-marks-sq-bromley.JPG"
        },

        {
            "caption": "Havelock Recreation Ground, Bromley",
            "source": "images/havelock-rec-bromley.JPG"
        },

        {
            "caption": "Norman Park, Bromley",
            "source": "images/norman-park-bromley.JPG"
        },

        {
            "caption": "Map of Norman Park, Bromley",
            "source": "images/norman-park-map-bromley.JPG"
        }
    ];

    const CAPTION_COLORS = ["black","blue","purple","green","darkorange","red","brown"];

    resetImage();

    // Function to Reset Image
    function resetImage() {
        /*

            Set index to 0
            Set button whose id is prev to disabled
            Set button whose id is next to enabled

        */
        idx = 0;
        $("#prev").prop("title","First Image").prop("disabled",true).css("background-color","darkgrey");
        $("#next").prop("title","Next Image").prop("disabled",false).css("background-color","black");
        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);
    }

    // Function to Display Image
    function displayImage(src, caption) {
        $("img").attr("src",src).attr("title",caption).attr("alt",caption);
    }

    // Function to Display Caption
    function displayCaption(caption) {
        $("#img-caption").html(`
            <p>${caption}</p>`);
    }

    // Function to Display Position Information
    function displayPosition(idx) {
        $("#pos-info").html(`<p>Image ${idx + 1} of ${IMAGES.length}</p>`);
    }

    // Function to Move to Previous Image
    function previousImage() {
        /*
            If not already at first image
            Decrement the index by 1
            Set the button whose id is next to enabled and change the screentip

        */
        
        if (idx > 0) {
            idx -= 1;
            $("#next").prop("title","Next Image").prop("disabled",false).css("background-color","black");
        }

        /*
            If already at first image
            Disable the button whose id is prev and change the screentip

        */

        if (idx == 0) {
            $(this).attr("id","prev").attr("title","First Image").prop("disabled",true).css("background-color","darkgrey");
        } else {
            $(this).attr("id","prev").attr("title","Previous Image").prop("disabled",false).css("background-color","black");
        }
        

        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);
    }

    // Function to Move to Next Image
    function nextImage() {

        /*
            If not at last image
            Increment the index by 1
            Enable the button whose id is prev and change the screentip

        */

        if (idx < IMAGES.length - 1) {
            idx += 1;
            $("#prev").prop("title","Previous Image").prop("disabled",false).css("background-color","black");
            
        }
       
        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx); 
        
        /*
            If already at last image
            Disable the button whose id is next and change the screentip

        */

        if (idx == IMAGES.length - 1) {
            $(this).attr("id","next").attr("title","Last Image").prop("disabled",true).css("background-color","darkgrey");
        } else {
            $(this).attr("id","next").attr("title","Next Image").prop("disabled",false).css("background-color","black");
        }

        
    }

    // Function to Change Caption Color
    function changeCaptionColor() {
        colIterations++;
        $("#img-caption").css("color",CAPTION_COLORS[colIterations % CAPTION_COLORS.length]);

    }

    // Viewer Buttons

    // Move to previous image when the button with Angle Left icon is clicked
    $("#prev").click(previousImage);

    // Change caption color when the button with Adjust icon is clicked
    $("#settings").click(changeCaptionColor);

    // Reset to First Image
    $("#reset").click(resetImage);

    // Move to next image when the button with Angle Right icon is clicked
    $("#next").click(nextImage);

});