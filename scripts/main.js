const mainPage = (function () {

    const blogsTemplate = async () => {
        const data = await fetch('http://localhost:3000/blogs');
        const blogs = await data.json();
        console.log(blogs, data);
        const blogsContainer = document.querySelector('.blog-container')

        let template = ``; //THis houses the data

        blogs.forEach(blog => {
            template += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="${blog.img}" alt="MCTT Church Images ">
                        </div>

                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-5">
                                <a href="#top" class="text-primary">
                                    ${blog.title}
                                    
                                </a>
                            </h5>

                            <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                <strong>${blog.likes}</strong>
                                <em> 10-10-2025</em>
                            </h6>

                            <p class="mbr-text mbr-fonts-style mt-3 display-7">
                            ${blog.body.slice(0, 150)};
                                <a href="/blog.html" class="text-primary"> Read more..</a>
                                    </p>
                        </div>
                    </div>
                </div> 
            `
            blogsContainer.innerHTML = template;
        });

    }

    window.addEventListener("DOMContentLoaded", () => blogsTemplate())
})()