let allImageCollection = ((async () => {
    let fetchDataCollectionFromServer = await fetch('https://tboss09.github.io/data/gallery.json');// This fetches the data from Json file hosted on github
    let data = await fetchDataCollectionFromServer.json();// This parses it and turns it to a Javascript Object making it available to use
    let template = '';// This would output the data into the dom Element
    let collectionContainer = document.querySelector('.js-collection-container'); //Conatiner to Inject the data into
    // const 3 = Math.floor(Math.random() * data[0]["images"].length); //create random images 

    data.forEach((elem, index) => {// for each item in data element, do this

        template += `
<div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="harvest-day.html?id=${elem.id}">
                        <img oncontextmenu="return false;" src="https://media.publit.io/file/w_1280/${elem["images"][3]}" >
</a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7"><strong>${elem.title}</strong></h5>


                        </div>

                    </div>
                </div>`
        collectionContainer.innerHTML = template;
    });


}))();
