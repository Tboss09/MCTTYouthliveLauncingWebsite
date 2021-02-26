

// Slider
let slickJs = (function () {
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
})()
// Slider


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
                            <img src="${fileName !== 'index.html' ? '../' : './'}${blog.img}" alt="MCTT Church Images ">
                        </div>

                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-5">
                                <a href="${fileName !== 'blogs.html' ? '../blogs/' : ''}blog.html?id=${blog.id}" class="text-primary">
                                    ${blog.title}
                                    
                                </a>
                            </h5>

                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                <small> ${blog.author}<em> ${blog.date}</em> </small>
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

        blogsContainer.innerHTML = template;

    }
    window.addEventListener("DOMContentLoaded", () => blogsTemplate());

})()
// Show Blogs

// WatchLive Timer
let url = window.location.pathname;
let fileName = url.substring(url.lastIndexOf('/') + 1);

if (fileName == 'live.html') {
    let curDay;
    let secTime;
    let ticker;

    let youTubeVideoLiveEverySunday = document.querySelector('.js-youtube-video');


    function getSeconds() {
        let nowDate = new Date();
        let dy = 0; //Sunday through Saturday, 0 to 6        
        var counterTime = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 08, 00, 00); //20 out of 24 hours = 8pm
        let curTime = nowDate.getTime(); //current time
        let atime = counterTime.getTime(); //countdown time
        let diff = parseInt((atime - curTime) / 1000);
        if (diff > 0) { curDay = dy - nowDate.getDay() }
        else { curDay = dy - nowDate.getDay() - 1 } //after countdown time
        if (curDay < 0) { curDay += 7; } //already after countdown time, switch to next week
        if (diff <= 0) { diff += (86400 * 7) }
        startTimer(diff);
    }

    function startTimer(secs) {
        secTime = parseInt(secs);
        ticker = setInterval("tick()", 1000);
        tick(); //initial count display
    }

    function tick() {
        let secs = secTime;
        if (secs >= 0) {
            secTime--;
            youTubeVideoLiveEverySunday.style.display = 'none';
        }

        else {
            clearInterval(ticker);

            youTubeVideoLiveEverySunday.style.display = 'block';
            // console.log('hello,Are you there eee');
            getSeconds(); //start over
        }

        let days = Math.floor(secs / 86400);
        secs %= 86400;
        let hours = Math.floor(secs / 3600);
        secs %= 3600;
        let mins = Math.floor(secs / 60);
        secs %= 60;

        // 2021/02/28 08:00:00

        //update the time display
        document.getElementById("days").innerHTML = `${curDay < 10 ? "0" : ''}${curDay}`;
        document.getElementById("hours").innerHTML = ((hours < 10) ? "0" : "") + hours;
        document.getElementById("minutes").innerHTML = ((mins < 10) ? "0" : "") + mins;
        document.getElementById("seconds").innerHTML = ((secs < 10) ? "0" : "") + secs;
    }


    $(document).ready(function () {
        getSeconds();
    })

}




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
            console.log(btn);
            return;
        }
    });
})()


    // countDownToSundayTimer()
