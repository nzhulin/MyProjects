let slides = document.querySelectorAll('.slide-single');
console.log(slides);
let slide = [];
for (let i = 0; i < slides.length; i++) {
    slide[i] = slides[i].src
    slides[i].remove()
}
console.log(slide)

let step = 0;
let offset = 0;


function draw() {
    let img = document.createElement('img');
    img.src = slide[step];
    img.classList.add('slide-single');
    img.style.left = offset * 562 + 'px';
    document.querySelector('#slide').appendChild(img);
    step++;
    if (step + 1 == slide.length) {
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}

function left() {
    slides2 = document.querySelectorAll('.slide-single');
    console.log(slides2)
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 562 - 562 + 'px';
        offset2++;
    }
    setTimeout(function () {
        slides2[0].remove();
        draw();
    }, 1000)
}

draw(); draw();
document.onclick = left;

const t = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let str = t.split('');
console.log(t.split('').length);



function typeText() {
    let count = 0;
    let out = ' '
    htmlOut = document.querySelector('.row');

    function typeLine() {
        let interval = setTimeout(function () {
            out += t.split('')[count];

            htmlOut.innerHTML = out;
            count++;
            if (count >= t.split('').length) {
                clearTimeout(interval);
                return true;
            }

            typeLine()
        }, 50)

    }
    typeLine()

}

setInterval(typeText, 5000);