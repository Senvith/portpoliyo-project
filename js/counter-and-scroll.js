const counts = document.querySelectorAll('.count');
const speed = 45;


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}


function startCounting(counter) {
    counter.innerText = 0; 
    function upDate() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.floor(inc + count);
            setTimeout(upDate, 15);
        } else {
            counter.innerText = target;
        }
    }
    upDate();
}


function checkScroll() {
    counts.forEach((counter) => {
        if (isElementInViewport(counter)) {
            startCounting(counter); 
        }
    });
}


window.addEventListener('scroll', checkScroll);


checkScroll();
