const item_types = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo,
}

function drawImage(el) {
    const itemImg = document.createElement('img');
    itemImg.src = el.file;
    itemImg.alt = "photo";
    itemImg.classList = "gallery-item__img";

    return itemImg;
}

function drawAudio(el) {
    const itemAudio = document.createElement('audio');
    itemAudio.src = el.file
    itemAudio.classList = "gallery-item__audio";
    itemAudio.controls = true;

    return itemAudio;
}

function drawVideo(el) {
    const itemVideo = document.createElement('video');
    itemVideo.src = el.file
    itemVideo.classList = "gallery-item__video";
    itemVideo.controls = true;

    return itemVideo;
}

export function drawGallery(item) {
    const itemEl = document.createElement('div');
    itemEl.classList = "gallery-item";

    const fileWrap = document.createElement('div');
    fileWrap.classList = 'gallery-item__file-wrap';

    const drawerForType = item_types[item.type];
    fileWrap.appendChild(drawerForType(item));

    const itemTitle = document.createElement('span');
    itemTitle.classList = "gallery-item__title";
    itemTitle.textContent = item.title;

    itemEl.appendChild(fileWrap);
    itemEl.appendChild(itemTitle);

    return itemEl;
}