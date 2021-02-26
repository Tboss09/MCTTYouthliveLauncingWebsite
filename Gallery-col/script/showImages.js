const id = new URLSearchParams(window.location.search).get('id');
const showImagesFromCollection = async () => {
    const res = await fetch(` http://localhost:3000/gallery/${id}`)
    const imageCollection = await res.json();
    // const collectionImage = images["images"];
    const collectionHeader = document.querySelector('.collection-header');
    // const imagesLink = document.querySelectorAll('.carousel-item img');

    const headerTemplate = `  
    <section class="mbr-section content5 cid-sphVhZ8BP5
     mbr-parallax-background" id="content5-n" style="background-image: url('./assets/images/${imageCollection.img}');">
            <div class="mbr-overlay" style="opacity: 0.7; background-color: rgb(42, 22, 111);">
            </div>
            <div class="container">
    <div class="media-container-row">
                <div class="title col-12 col-md-8">
                    <h2 class="align-center mbr-bold mbr-white pb-3 mbr-fonts-style display-2">${imageCollection.title}</h2>
<h3 class="mbr-section-subtitle align-center mbr-light mbr-white pb-3 mbr-fonts-style display-5">${imageCollection.dateOfEvent}</h3>
                </div>
            </div>

            </div>
        </section>`;
    collectionHeader.innerHTML = headerTemplate;
    
    
    collectionImage.forEach(img => {
        const bodyImageTemplate = `

        `
    })



}
window.addEventListener("DOMContentLoaded", () => showImagesFromCollection())