const photos = [
    {
        "height": 1365,
        "photo_reference": "CmRaAAAANej8gm3Tl7TZHVI59LAD8RFFePLz3UB0We0WFIv08t924FAmD-r0JD-r_iQQwF0mHPmZbPx0zc62zcGYyMSkIo9wwjHNDUdOczaiIKkqCX8C_qMr521YW-_3cpxHSJIHEhCwfi2bsGzb4y4XiI52GYKPGhRaObnNtVBIpwggVWDVrV72MVfHAQ",
        "width": 2048
    },
    {
        "height": 1365,
        "photo_reference": "CmRaAAAAV1lHKr9tY5Bmc7iglJqNbv_1_QSmxxeT2Y6Vi-ANhsKzEclq2EXB6gPeCBT8ZFZDRezkXML1cOKYixxrlC7o145kC2qq3vjbDSgLEHfAk6YdIHZUdhoSNwH-Ax9biS9IEhDrR-5SFUmt1zXpU1HHeJu-GhRoNlgr28-0bKRTER2w_Ld_vErWQQ",
        "width": 2048
    },
    {
        "height": 2048,
        "html_attributions": [
            "\u003ca href=\"https://maps.google.com/maps/contrib/108745540829695441635/photos\"\u003eAxel Kiefer\u003c/a\u003e"
        ],
        "photo_reference": "CmRaAAAAfXVpytQ_jD3C09vCMfHMhl04_d0Ixs0VtJ2_nmtZag3YZsze-ij9OKcEE9dFyhVPHHk3n23xCwc2e6ApfNzcyt0Nmw4lfE8IyEUaZXH1ig8uTD6YWrFJ2UBTf42557COEhAiMkGEm05NycrM6mqq40kBGhR7JeePie38IR-rqATZWCeLEHXgaQ",
        "width": 1536
    },
    {
        "height": 1377,
        "photo_reference": "CmRaAAAAZaMJ90eZ62zuLr6Nk_S2L8cZN19W_ac5wlX5NpTglrpPgO9IbfzMpDZTU3UxCUlKxREbcdgHaK459zKh3ELC9C4A141tg1hUKTPDjAgL6Mo02SInOMnfs2GdIM2WRuM3EhCDJ6vkC0_R1nfqKIfeHAeBGhT59p0fD7_7fxiriqE8W9rpnDWddw",
        "width": 2048
    },
    {
        "height": 1408,
        "photo_reference": "CmRaAAAAnl5uFMf8HHGk4c3S_xRjmeMGMcHqAXc5ddOxZo0aTwUN9_pu9msaGk9By2aQpV6th5l5J9br2ddV6r3CIQUYQnpgC007tW3ffN-lYTxKA6ZqzZGfxYIP6-tgOMjjsAFVEhA6u4cwALZKtwe4ws3EWxMOGhT8e8mPs9vl_OycYvs1Qi26C6ywKQ",
        "width": 2048
    },
    {
        "height": 1366,
        "photo_reference": "CmRaAAAAA66SqjbUQ8hoDaDK5NNYXep6oiFEHfBzhLTe6AvQK8JQlfA0cGFUihhtsi2QlJlBtsIYnf-Fi9LF36pW8_FvXAxl2jqZQKLA39q7Od_McXaiFhXzq7-jm5N4pzIShHx1EhAHN-8TQ5SvfOweMBWcm6YsGhQAM2cV7ck7GYg10aTQIa4OnqxvBA",
        "width": 2048
    },
    {
        "height": 1365,
        "photo_reference": "CmRaAAAA1M46lgBmHr6JJLmxikguwSq6m3Muf4umnS5qI0LDamKcr_GRHE5aa8J6PWB9MGdOz6lqa5nkcXwgNoTfLCd6idYMqFXvVtjFUX-Hk5GUaFTwGv3dV2G2XqygtNKTZaYJEhAv70XukZrDKOqE4oFWWqpIGhSbW1ZhCl2P_SIFjUxLmIXXmTi-DQ",
        "width": 2048
    },
    {
        "height": 1365,
        "photo_reference": "CmRaAAAAQn7w3VEvnte7lvfUhqLkBkaU6AyK0jTMNSfJP4TPpWIsptp3m0ApQqUFK2V0boo0mT5QvN3s5XW5dVTIRj1exiGRo96Tke38TjG6nAbhesXqWR-bKAGi2wwooBGK7GcaEhDMUfwqFpZKoghvNsLfipPdGhQLyNBmDSMdCsjeDxp_jsyUvK-tMg",
        "width": 2048
    },
    {
        "height": 1365,
        "photo_reference": "CmRaAAAA5kqt8mCZaK8sioeybbLZnyPJe-iBWCD1DjnPFD7EDKT9cqfm5mUk3LscptchCiGokzNFnBiqXu-HEY9EJ1vK7w_pUPzap5DSbjopVEZxTaRDvhA61bNLB9EAzZPtKBIIEhCQdBMT1ig73BYJSD3Pp_fdGhTCYY5zwxyvN3d6b91Gl29M6bONwg",
        "width": 2048
    },
    {
        "height": 1365,
        "photo_reference": "CmRaAAAAnudVSZ-dANEQ4MUDGy5uECTwL0MRhsYYIHowhf8G75NifD4irJywI8VEAOajr4mN-EjHe5bw8tHcf5zStI30qV3pomlwOOo8sF7bEmpV2ipLVItWANc849z6tDtcn_c6EhAMmcfG3JUNcSUFLLz7SOgIGhR3K47h4MwcgZp_2NHTWTUrGDmlEw",
        "width": 2048
    }
];

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
        node.parentNode.style.backgroundImage = 'url(' + node.dataset.src + ')';
    });
}

function handleFirstLorySlide(e) {
    const items = e.target.querySelectorAll('[data-src]');
    console.log(items);
    [].slice.call(items).forEach(loadDeferedSrc);

    e.target.removeEventListener('before.lory.slide', handleFirstLorySlide);
}

const slider = document.querySelector('.js_slider');
const sliderFrame = slider.querySelector('.js_frame');

appendPhotos(sliderFrame);

document.addEventListener('DOMContentLoaded', function () {
    lory(slider, {
        infinite: 1
    });
});

slider.addEventListener('before.lory.slide', handleFirstLorySlide);
