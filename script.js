const imageList = [
    { title: 'avatar', url: '/pages/avatar.html', img: '/images/avatar.png' },
    { title: 'cat', url: '/pages/silly_cats.html', img: '/images/silly_cats.png' },
];

function displayImageButtons() {
    const imageButtonsContainer = document.getElementById('image-buttons');
    imageList.forEach(image => {
        const imageButton = document.createElement('button');
        imageButton.className = 'image-button';

        const img = document.createElement('img');
        img.src = image.img;
        img.alt = image.title;

        const title = document.createElement('div');
        title.className = 'image-title';
        title.innerText = image.title;

        imageButton.appendChild(img);
        imageButton.appendChild(title);
        imageButton.addEventListener('click', () => {
            window.location.href = image.url;
        });

        imageButtonsContainer.appendChild(imageButton);
    });
}

document.addEventListener('DOMContentLoaded', displayImageButtons);
