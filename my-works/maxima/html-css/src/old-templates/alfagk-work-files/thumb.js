// OBJECTS__IMG SETTINGS
let imgContainers = document.querySelectorAll('.covered-thumb');

window.onload = function(){
    thumbSetup();
}

window.onresize = function(){
    thumbSetup();
}

function thumbSetup() {
    if(imgContainers){
        for(let i = 0; i < imgContainers.length; i++) {

            let imgContainer            = imgContainers[i],
                imgContainerWidth       = imgContainer.offsetWidth,
                imgContainerHeight      = imgContainer.offsetHeight,
                imgContainerAspectRatio = imgContainerWidth/imgContainerHeight,
                img                     = imgContainer.firstElementChild,
                imgAspectRatio          = img.naturalWidth/img.naturalHeight,
                imgScaledWidth,
                imgScaledHeight;

            if(img.naturalWidth < imgContainerWidth){
                imgScaledWidth = imgContainerWidth;
                imgScaledHeight = imgScaledWidth * img.naturalHeight / img.naturalWidth;

                if (imgScaledHeight < imgContainerHeight) {
                    imgScaledHeight = imgContainerHeight;
                    imgScaledWidth  = img.naturalWidth * imgContainerHeight / img.naturalHeight;
                }

                img.style.width = imgScaledWidth + 'px';
                img.style.height = imgScaledHeight + 'px';
            } 
            
            if(imgAspectRatio > imgContainerAspectRatio) {
                img.style.maxWidth = 'none';
                img.style.height = '100%';
            }
        }
    }
}