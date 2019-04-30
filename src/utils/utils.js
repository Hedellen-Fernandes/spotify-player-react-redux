let audioObject = null;

export const convertToHumanTime = duration => {
    let s = parseInt((duration / 1000) % 60, 10);
    const m = parseInt((duration / (1000 * 60)) % 60, 10);

    s = (s < 10) ? `0${s}` : `${s}`;

    return `${m}:${s}`;
}


export const playlistTrigger = e => {
    const target = e.target.parentNode;

    if(target.classList.contains('active')) {
        audioObject.pause();
    } else {
       
        if(audioObject) {
            audioObject.pause();
        }
        
        audioObject = new Audio(target.getAttribute('data-track-preview'));
        audioObject.play();
        target.classList.add('active');

        audioObject.addEventListener('ended', () => {
            target.classList.remove('active');
        });

        audioObject.addEventListener('pause', () => {
            target.classList.remove('active');
        });
    }
}