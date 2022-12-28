async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    const data = await fetch(url);
    const json = await data.json();
    return json;
}

function loadposts() {
    getPosts().then((data) => {
        data.map( (post) => {
            const { title, url, thumbnailUrl } = post;
            const postContainer = document.getElementById('posts');
            const postElement = document.createElement('div');
            postElement.innerHTML = `

                <div class="card m-2" style="width: 200px; height: 360px;">
                    <img src="${thumbnailUrl}" class="card-img-top" alt="${title}">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="fs-6">${title}</h5>
                        <a href="${url}" target"_blank" class="btn btn-primary ">Ver Imagem</a>
                    </div>
                </div>
            `;
            postContainer.appendChild(postElement);
        } )
    });
}

loadposts();