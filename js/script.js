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
            "caption": "Thames Polytechnic Presentation Ceremony, Royal Festival Hall, London",
            "source": "images/presentation-ceremony-derek.jpg"        
        }, 

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
            "caption": "Lido de Paris, September 2013",
            "source": "images/lido-de-paris.jpg"
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
            "caption": "Torremolinos, Spain",
            "source": "images/torremolinos.JPG"
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

    const CAPTION_COLORS = ["black","blue","purple","green","darkorange","red","brown"];

    resetImage();

    // Function to Reset Image
    function resetImage() {
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
        $("#pos-info").html(`<p>Position ${idx + 1} of ${IMAGES.length}</p>`);
    }

    // Function to Move to Previous Image
    function previousImage() {
        if (idx > 0) {
            idx -= 1;
            $("#next").prop("title","Next Image").prop("disabled",false).css("background-color","black");
        }

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
        if (idx < IMAGES.length - 1) {
            idx += 1;
            $("#prev").prop("title","Previous Image").prop("disabled",false).css("background-color","black");
            
        }
       
        displayImage(IMAGES[idx]["source"], IMAGES[idx]["caption"]);
        displayCaption(IMAGES[idx]["caption"]);
        displayPosition(idx);      

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