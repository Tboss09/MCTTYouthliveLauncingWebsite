const id = new URLSearchParams(window.location.search).get('id');
const renderDetails = async () => {
    const res = await fetch(`http://localhost:3000/blogs/${id} `)
    const blog = await res.json();

    const blogHeader = document.querySelector('.headerText'),
        blogBody = document.querySelector('.bodyText');

    const headerTemplate =
        `<div class="title col-md-12 col-lg-12">
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                        <strong>${blog.title}</strong></h3>
                </div>`

    //blog Body
    const bodyTemplate =

        `<h3 class="mbr-section-title mbr-fonts-style mb-2 display-7">
        <em>By ${blog.author}</em>
                    <br> <small>${blog.date}</small></h3>
                    <br>
                    <p class="mbr-text mbr-fonts-style display-7">${blog.body}<br></p>
                `

    // Blog Header
    blogHeader.innerHTML = headerTemplate;
    // Blog Header

    // Blog Body
    blogBody.innerHTML = bodyTemplate;
    // Blog Body

}

window.addEventListener('DOMContentLoaded', () => renderDetails());