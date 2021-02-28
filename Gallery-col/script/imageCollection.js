const id = new URLSearchParams(window.location.search).get('id');

const imageCollection = async () => {
    const singleGalleryCollection = await fetch(`http://localhost:3000/gallery/${id}`)
    let res = await singleGalleryCollection.json();
    let imageBody = document.querySelector('.js-image-body')
    let singleImageCollection = res["images"];
    let bodyTemplate = '';
    let carouselTemplate = '';

    const carouselInner = document.querySelector('.js-carousel-inner');

    // console.log(singleImageCollection);

    singleImageCollection.forEach((img, index) => {
        bodyTemplate += `
        <div class="mbr-gallery-item mbr-gallery-item--p2">
        <div href="#lb-gallery3-p" data-slide-to="${index}" data-toggle="modal"><img
            src="https://cdn.statically.io/gh/Tboss09/mcttImages/bcc113aa/${img}" width= "290px" height="100%" alt="${res.alt}"
            title=""><span class="icon-focus"></span></div></div> 
        `

        // carouselTemplate += `
        //     <div  class="carousel-item" >
        //         <img src="assets/images/${img}"
        //             alt="${res.alt}">
        //                             </div>`


        // carouselInner.innerHTML = carouselTemplate;
        // console.log(carouselInner.innerHTML);
        imageBody.innerHTML = bodyTemplate;
    })


    //    


}

window.addEventListener("DOMContentLoaded", () => imageCollection());
