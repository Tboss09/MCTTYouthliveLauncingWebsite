let allImageCollection = ((async () => {
    let fetchDataCollectionFromServer = await fetch('https://my-json-server.typicode.com/Tboss09/mcttYouthData/gallery');// This fetches the data from the server (data/db.json) hosted on github
    let data = await fetchDataCollectionFromServer.json();// This parses it and turns it to a Javascript Object making it available to use
    let template = '';// This would output the data into the dom Element
    let collectionContainer = document.querySelector('.js-collection-container');
    const idx = Math.floor(Math.random() * data[0]["images"].length); //create random 


    data.forEach(elem => {// for each item in data element, do this
        template += `
<div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="easter-festive.html?id=${elem.id}"><img src="https://cdn.statically.io/gh/Tboss09/mcttImages/bcc113aa/${elem["images"][idx]}"
                                    alt="${elem.alt}" title="" data-slide-to="1"></a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7"><strong>${elem.title}</strong></h5>


                        </div>

                    </div>
                </div>`
        collectionContainer.innerHTML = template;
    });
}))();
