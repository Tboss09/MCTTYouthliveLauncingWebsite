const id = new URLSearchParams(window.location.search).get('id');

const imageCollection = (async () => {
    const singleCollection = await fetch(`http://localhost:3000/gallery/${id}`)
    let res = await singleCollection.json();
    let allImagesCollection = res['images'];
    let bodyTemplate; // This is the Body Image Template
    const imageCollectionHeader = document.querySelector('.js-image-gallery-header'); //Image Collection Header 
    const imageCollectionBody = document.querySelector('.js-galleryImages'); //Image Collection Body

    let headerTemplate = `

    <section class="mbr-section content5 cid-sphVhZ8BP5 mbr-parallax-background" id="content5-n"
        style="background-image: url('../assets/images/${res["images"][3]}');">
        <div class="mbr-overlay" style="opacity: 0.7; background-color: rgb(42, 22, 111);">
        </div>

        <div class="container">
            <div class="media-container-row js-image-gallery-header">
                <div class="title col-12 col-md-8">
                    <h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-2">${res.title}</h2>
                    <h3 class="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">
                        ${res.dateOfEvent}</h3>


                </div>

            </div>
        </div>
    </section>

    `

    allImagesCollection.map((img, index) => {
        bodyTemplate += `
            <div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false"
                data-tags="Awesome">
                <div href="#lb-gallery3-p" data-slide-to="${index}" data-toggle="modal">
                <img src="assets/images/${img}" alt="${res.alt}">
                    <span class="icon-focus"></span></div>
        </div>
        `

        
        imageCollectionBody.innerHTML = bodyTemplate; // This prints out the images 
    });

    imageCollectionHeader.innerHTML = headerTemplate;
})
window.addEventListener("DOMContentLoaded", imageCollection)