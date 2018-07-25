function collectFotos(list) {
    const key = ' AIzaSyDn83rvM43t_4IZu6nwgTwV5ul_DtqYlfQ';
    const urls = list.map(function (item) {
        return 'https://maps.googleapis.com/maps/api/place/photo?' + 'key=' + key + '&photoreference=' + item['photo_reference'] + '&maxwidth=640&maxheight=426';
    });

    const imageNodes = urls.map(function (item, index) {
        const imgNode = document.createElement('img');
        if (index < 2) {
            imgNode.src = item;
        } else {
            imgNode.dataset.src = item;
        }
        return imgNode;
    })

    return imageNodes;
}

function appendPhotos(parentNode) {
    const slidesContainer = document.createElement('ul');
    slidesContainer.classList.add('slides');
    slidesContainer.classList.add('js_slides');
    const imageNodes = collectFotos(photos);

    const slides = imageNodes.forEach(function (node) {
        const li = document.createElement('li');
        li.classList.add('js_slide');
        li.appendChild(node)

        slidesContainer.appendChild(li);
    });

    parentNode.appendChild(slidesContainer);
}

function loadDeferedSrc(node) {
    window.requestAnimationFrame(function () {
        node.src = node.dataset.src;
        node.parentNode.style.backgroundImage = 'url(\'' + node.dataset.src + '\')';
    });
}

function handleFirstLorySlide(e) {
    const items = e.target.querySelectorAll('[data-src]');
    [].slice.call(items).forEach(loadDeferedSrc);

    e.target.removeEventListener('before.lory.slide', handleFirstLorySlide);
}

const slider = document.querySelector('.js_slider');
const sliderFrame = slider.querySelector('.js_frame');

// appendPhotos(sliderFrame);

document.addEventListener('DOMContentLoaded', function () {
    lory(slider, {
        infinite: 1
    });
});

slider.addEventListener('before.lory.slide', handleFirstLorySlide);
