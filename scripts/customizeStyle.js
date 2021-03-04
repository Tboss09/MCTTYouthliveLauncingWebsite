let slickJs = () => {
    $('.slick').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        preletrow: `<button type="button" class="slick-prev">Previous</button>`,
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
}




// Slider
// Slider


// Show Blogs
const showBlogs = (function () {
    const blogsTemplate = async () => {
        const data = await fetch('https://tboss09.github.io/data/blogs.json');
        const blogs = await data.json();
        const blogsContainer = document.querySelector('.blog-container')


        // To show the blogs Out
        let template = ``;
        // To Show the blogs Out

        let url = window.location.pathname;
        let fileName = url.substring(url.lastIndexOf('/') + 1);


        if (fileName !== "blogs.html") {
            blogs.length = 3;
        } //If we are not in the blog section, Then display only 3 Articles



        blogs.forEach(blog => {
            template += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="${fileName !== 'index.html' ? '../' : './'}${blog.img}" alt="MCTT Church Images ">
                        </div>

                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-5">
                                <a href="${fileName !== 'blogs.html' ? '../blogs/' : ''}blog.html?id=${blog.id}" class="text-primary">
                                    ${blog.title}

                                </a>
                            </h5>

                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                ${blog.author}<em></em> <small> ${blog.date} </small>
                            </h6>

                            <p class="mbr-text mbr-fonts-style mt-3 display-7">
                            ${blog.body.slice(0, 100)}
                                <a href="${fileName !== 'blogs.html' ? '../blogs/' : ''}blog.html?id=${blog.id}" class="text-primary"> Read more....</a>
                                    </p>
                        </div>
                    </div>
                </div> 
            `
            // Log The Blog From The Server Side
        });

        blogsContainer.innerHTML = template; //THis displays the data
    }
    window.addEventListener("DOMContentLoaded", () => blogsTemplate());

})()
// Show Blogs

// WatchLive Timer
let url = window.location.pathname;
let fileName = url.substring(url.lastIndexOf('/') + 1);




// Back Button
const backButton = (function () {
    const allButton =
        document.querySelectorAll(".btn");

    allButton.forEach(btn => {
        if (btn.innerHTML === "Back" || "Previous") {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                history.back();
            });
            // console.log(btn);
            return;
        }
    });
})()


// countDownToSundayTimer()


$('document').ready(
    slickJs()
)



// Live Countdown
const watchLiveEverySundayCountdown = (async () => {
    const getDateFromServer = await fetch('https://tboss09.github.io/data/date.json')
    const res = await getDateFromServer.json();

    let url = window.location.pathname;
    let fileName = url.substring(url.lastIndexOf('/') + 1);


    if (fileName == 'live.html') {
        dateController.dataset.dueDate = `${res.date}`
    }
})()
