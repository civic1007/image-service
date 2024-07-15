const imageList = [
    { title: 'avatar', url: '/pages/avatar.html', img: '/images/avatar.png' },
    { title: 'cat', url: '/pages/silly_cats.html', img: '/images/silly_cats.png' },
    { title: 'smile', url: '/pages/smile.html', img: '/images/smile.png' },
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
document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};
