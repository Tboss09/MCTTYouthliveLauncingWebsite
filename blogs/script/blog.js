const id = new URLSearchParams(window.location.search).get('id');
console.log(id)



const blogHeader = document.querySelector('.headerText'),
    blogBody = document.querySelector('.bodyText');


const renderDetails = async () => {
    const res = await fetch(`https://tboss09.github.io/data/blogs.json`) //Fetches the data from github
    const blogs = await res.json();  //Parses the data

    blogs.forEach(blog => {
        if (blog.id == id)  {
            const headerTemplate =
                `<div class="title col-md-12 col-lg-12">
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                        <strong>${blog.title}</strong></h3>
                </div>` //THis is the blog title and header


                
            //blog Body
            const bodyTemplate =
                `<h3 class="mbr-section-title mbr-fonts-style mb-2 display-7">
        <em>By ${blog.author}</em>
                    <br> <small>${blog.date}</small></h3>
                    <br>
                    <p class="mbr-text mbr-fonts-style display-7">${blog.body}<br></p>` //THis is the blog body

            // Blog Header
            blogHeader.innerHTML = headerTemplate;
            // Blog Header

            // Blog Body
            blogBody.innerHTML = bodyTemplate;
        }
    });



}

window.addEventListener('DOMContentLoaded', () => renderDetails());