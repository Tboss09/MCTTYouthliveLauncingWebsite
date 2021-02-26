let galleryCollections = (async () => {
    // This Fetches The fetchImagesFromServer

    let fetchImagesFromServer = await fetch('http://localhost:3000/gallery'),
        res = await fetchImagesFromServer.json(),
        template = '',
        galleryCollection = document.querySelector(".gallery-collection");
    console.log(res);

    function webLocation() {
        
        let url = window.location.pathname;
        let fileName = url.substring(url.lastIndexOf('/') + 1);
        return fileName;

    }

    // If Website Location is not gallery-section.html,Then don't show

    function displayCertainImageToWebLocation() {
        if (webLocation() !== "gallery-section.html") {
            console.log("wrong Address")
            return;
        }

        // This Displays the Data {Images and title} into the web browesr
        res.forEach(collection => {
            template +=
                `<div class="item features-image сol-12 col-md-6 col-lg-3">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="easter-festive.html?id=${collection.id}">
                                <img src="assets/images/${collection.img}" alt="Easter Festive images"
                                    data-slide-to="${collection.id}"></a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7">
                                <strong>${collection.title}</strong>
                            </h5>
                    </div>
                    </div>
                </div> `
            console.log(res);

        })
        galleryCollection.innerHTML = template;
        console.log("wrong Address")
    }


    displayCertainImageToWebLocation();

    return {
        webLocation: webLocation()
    }
})()

window.addEventListener("DOMContentLoaded", () => galleryCollections);