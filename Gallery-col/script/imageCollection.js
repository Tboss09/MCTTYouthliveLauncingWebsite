const id = new URLSearchParams(window.location.search).get('id');

const imageCollection = async () => {
    const galleryImages = await fetch(`https://tboss09.github.io/data/gallery.json`)

    let res = await galleryImages.json(); // THis gets the gallery Images
    console.log(res)

    res.forEach(image => {
        if (image.id == id)
            console.log(image);
    });
}
imageCollection();