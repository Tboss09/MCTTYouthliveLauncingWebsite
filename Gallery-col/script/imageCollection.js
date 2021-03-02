const id = new URLSearchParams(window.location.search).get('id');

const imageCollection = async () => {
    const galleryImages = await fetch(`https://tboss09.github.io/data/gallery.json`)  //THis gets the images from the server (github)
    let res = await galleryImages.json(); // This gets the gallery Images
    let imageGallery = '';
    const galleryImagesContainer = document.querySelector('.js-images-container');
    // console.log(res)

    res.forEach(imgProperties => {
        if (imgProperties.id == id) {
            console.log(imgProperties.alt)

            imgProperties["images"].forEach((img, index) => {
                imageGallery = `<div class="mbr-gallery-item mbr-gallery-item--p4" 
                data - video - url="false" data - tags="Awesome" >
                    <div href="#lb-gallery3-13" class="imageContainer" data-slide-to="${index}" data-toggle="modal">
                    
                        <img oncontextmenu="return false;" src="https://media.publit.io/file/w_1280/${img}" 
                        srcset="https://media.publit.io/file/w_320/${img} 320w,
                         https://media.publit.io/file/w_640/${img} 640w,
                          https://media.publit.io/file/w_1024/${img} 1024w, 
                          https://media.publit.io/file/w_1280/${img} 1280w,
                           https://media.publit.io/file/w_2048/${img} 1400w"
                            sizes="100vw" alt="img-20191124-142414-9-3120x4160" />

                            </div>

                    </div>`


                galleryImagesContainer.innerHTML += imageGallery;

                // console.log(galleryImagesContainer)
            })

        }
    })

}
window.addEventListener('load', () => imageCollection())



$(document).ready(function () {
    $('.imageContainer').magnificPopup({
        delegate: 'img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'

        }
    });
});



