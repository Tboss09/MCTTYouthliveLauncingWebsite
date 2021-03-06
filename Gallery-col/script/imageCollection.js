const id = new URLSearchParams(window.location.search).get('id');

const imageCollection = async () => {
    const galleryImages = await fetch(`https://tboss09.github.io/data/gallery.json`)  //THis gets the images from the server (github)
    let res = await galleryImages.json(); // This gets the gallery Images
    let imageGallery = '';
    let imgGalleryHeader = '';

    const galleryImagesContainer = document.querySelector('.js-images-container');
    const galleryImagesHeader = document.querySelector('.js-media-container');
    // console.log(res)

    res.forEach(imgProperties => {
        if (imgProperties.id == id) {
            console.log(imgProperties.alt)


            allThatHasToDoWithAnImageCollection()


            function allThatHasToDoWithAnImageCollection() {


                // THis has to do with the gallery Header
                imgGalleryHeader = `
            <div class="title col-12 col-md-8">
                    <h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-2">
                        ${imgProperties.title}</h2>
                    <h3 class="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">
                        ${imgProperties.dateOfEvent}</h3>
                </div>
                  `
                // Change Document Title
                document.title = `${imgProperties.title} | Community Of Vibrant Believers running with the commission Methodist Church Nigeria`
                // Change Document Title
                galleryImagesHeader.innerHTML = imgGalleryHeader; //Header Of the Image Gallery

                // THis has to do with the gallery Header

                // Image Body 
                // So for each image in the Json file hosted on github, This displays it 

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
                // Image Body


            }
        }
    })

}
window.addEventListener('load', () => imageCollection())






