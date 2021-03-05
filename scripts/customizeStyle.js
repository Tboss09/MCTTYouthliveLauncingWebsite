// 
window.onload = function () { document.querySelector(".preloader").style.display = "none"; }


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
        if (btn.innerHTML === "Back") {
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
    const liveVideoSource = document.querySelector('.video-link')
    const getVideoLinkFromServer = await fetch('https://tboss09.github.io/data/videoLink.json')
    const res = await getDateFromServer.json();

    // THis get the live Sunday Video
    const videoRes = await getVideoLinkFromServer.json();
    // THis get the live Sunday Video

    // THis controls the date
    const dateController = document.querySelector('.js-countdown');
    // THis controls the date

    let url = window.location.pathname;
    let fileName = url.substring(url.lastIndexOf('/') + 1);

    // if We are in the live.html folder then do this 

    if (fileName == 'live.html') {
        liveVideoSource.src = `${videoRes.video}?rel=0&amp;enablejsapi=1`
        dateController.dataset.dueDate = `${res.date}`
        liveVideoSource.src = "https://www.youtube.com/embed/IQDgJz6dQ9Y";
    }
})()
// if We are in the live.html folder then do this 

// Changing Logo Code Here   
const changeLogoEverySecond = (function () {
    let lastLogo;
    const mcttYouthLogo = document.querySelector('.navbar-logo img')
    const interChangingLogo = [`https://media.publit.io/file/logo-96x98.webp`,
        'https://media.publit.io/file/red-mctt-logo.webp']

    /* 
    This generates the Random Logo on the website
    */
    function randomLogo() {
        const idx = Math.floor(Math.random() * interChangingLogo.length);
        const logo = interChangingLogo[idx];
        if (logo === lastLogo) { return randomLogo; }
        mcttYouthLogo.src = logo;
        mcttYouthLogo.style.transition = '0.3s ease';
        lastLogo = logo;
        return logo;
    }


    setInterval(randomLogo, 2000);

})()
// Changing Logo Code Here


// YouTube  Video Link 
const youTubeVideoLink = (async () => {
    const youTubeVideoLink = await fetch('')
    const res = await youTubeVideoLink.json();

})()
