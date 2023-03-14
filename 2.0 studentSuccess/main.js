// preloader
$(document).ready(function() {
    let count = 0;  // 
    let counter = setInterval(function() {

        if(count < 101) {
            $('.counter').text(count + '%');
            $('.bar').css('width', count + '%')
            if (count % 10 == 0)
                $('.loading').text ('loading' + '...');
                else
                $('.loading').text ('loading' + '.');
            count++
        }
    }, 70)
    
});

gsap.to('.container', 2, {
    delay: 7.5,
    y: "-100%",
    ease: Expo.EaseInOut
});

// about us section
const aboutNumberElements = document.querySelectorAll('.about-number');
const numberTextElements = document.querySelectorAll('.number-text');

aboutNumberElements.forEach((aboutNumberElement) => {
aboutNumberElement.addEventListener('click', () => {
    aboutNumberElements.forEach((el) => {
        el.style.backgroundColor = '';
    });
    aboutNumberElement.style.backgroundColor = '#FFE428';
    
    const correspondingNumberTextElement = document.querySelector(`.number-${aboutNumberElement.textContent}-text`);
    
    numberTextElements.forEach((numberTextElement) => {
        numberTextElement.style.display = 'none';
    });
    
    correspondingNumberTextElement.style.display = 'block';

    aboutNumberElements.forEach((aboutNumberElement) => {
        aboutNumberElement.style.transform = 'rotate(-45deg)';
    });
    
    aboutNumberElement.style.transform = 'rotate(0deg)';

});
});

let number1 = document.querySelector('.number-01');
let number2 = document.querySelector('.number-02');
let number3 = document.querySelector('.number-03');

number1.style.backgroundColor = '#FFE428';
number1.style.transform = 'rotate(0deg)';

let title = document.querySelector(".about-title");
let info = document.querySelector(".about-info");

let aboutTitle = "ABOUT US"
let aboutInfo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eius deserunt consequuntur, impedit labore amet beatae natus placeat autem odio aut officia omnis assumenda optio distinctio dicta consectetur vel."
let missionTitle = "OUR MISSION"
let missionInfo = "Ipsum dolor sit, amet consectetur adipisicing elit. Minima eius deserunt consequuntur, impedit labore amet beatae natus placeat autem odio aut officia omnis assumenda optio distinctio dicta."
let projectTitle = "THIS PROJECT"
let projectInfo = "Dolor sit, amet consectetur adipisicing elit. Minima eius deserunt consequuntur, impedit labore amet beatae natus placeat autem odio aut officia omnis assumenda optio "

function toAbout() {
    title.textContent = aboutTitle;
    info.textContent = aboutInfo;
}

function toMission() {
    title.textContent = missionTitle;
    info.textContent = missionInfo;
}

function toProject() {
    title.textContent = projectTitle;
    info.textContent = projectInfo;
}

number1.addEventListener("click", toAbout);
number2.addEventListener("click", toMission);
number3.addEventListener("click", toProject);

// Get the hero-time element
const heroTimeElement = document.querySelector('.hero-time');

// Update the text content with the current time and timezone
function updateTime() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' });
  heroTimeElement.textContent = currentTime;
}

// Call updateTime() function every second
setInterval(updateTime, 1000);



