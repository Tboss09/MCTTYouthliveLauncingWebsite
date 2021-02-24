let slickJs = (function () {
    $('.slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
        nextArrow: `<button type="button" class="slick-next">Next</button>`,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }


        ]
    })
})()


// Show Blogs
const showBlogs = (function () {
    const blogsTemplate = async () => {
        const data = await fetch('http://localhost:3000/blogs');
        const blogs = await data.json();
        const blogsContainer = document.querySelector('.blog-container')
        // To show the blogs Out

        let template = ``;
        // To Show the blogs Out

        let url = window.location.pathname;
        let fileName = url.substring(url.lastIndexOf('/') + 1);

        if (fileName !== "blogs.html") {
            blogs.length = 3;
        }

        blogs.forEach(blog => {
            template += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="${blog.img}" alt="MCTT Church Images ">
                        </div>

                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-5">
                                <a href="${fileName !== 'blogs.html' ? './blogs/' : ''}blog.html?id=${blog.id}" class="text-primary">
                                    ${blog.title}
                                    
                                </a>
                            </h5>

                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                <small> <em>${blog.author} 10-10-2025</em> </small>
                            </h6>

                            <p class="mbr-text mbr-fonts-style mt-3 display-7">
                            ${blog.body.slice(0, 100)}
                                <a href="${fileName !== 'blogs.html' ? './blogs/' : ''}blog.html?id=${blog.id}" class="text-primary"> Read more....</a>
                                    </p>
                        </div>
                    </div>
                </div> 
            `
            // Log The Blog From The Server Side
            blogsContainer.innerHTML = template;
        });

    }

    window.addEventListener("DOMContentLoaded", () => blogsTemplate())
})()