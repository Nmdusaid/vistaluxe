const button1 = document.getElementById('btn');
const city = document.getElementById('city');
const login=document.getElementById('login')
 const faq1=document.getElementById('faq1')
 let faqp=document.getElementById('faq1p')
let faq2= document.getElementById('faq2')
let faqp2=document.getElementById('faq2p')

let faq3=document.getElementById('faq3')
let faq3p=document.getElementById('faq3p')
let faq4=document.getElementById('faq4')
let faq4p=document.getElementById('faq4p')
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

button1.addEventListener('click', () => {
    if (city.value === '') {
        alert('Enter your city name');
    } else {
        alert(`Welcome to ${city.value}`);
setTimeout(() => {
    
    
    window.location.href = 'bookkingpage.html';
},2000 );
        
    }

}); 
login.addEventListener('click',() => {
    window.location.href = 'loginpage.html';
})

function myFunc() {
    gsap.from('#faq1p', {
        scale: 0,        // Start with a scale of 0 (completely zoomed out)
        duration: 0.5,   // Duration of the animation
        ease: 'power2.inOut' // Easing for a smooth effect
    });
    faq1.classList.toggle('usaid');

    if (faq1.classList.contains('usaid')) {
        faqp.style.fontFamily = 'monospace';
        faqp.style.fontSize = '20px';
        faqp.style.color = 'black';
        faqp.innerHTML = `Check-in time is from 2:00 PM onwards, and check-out time is before 11:00 AM.`;
    } else {
        faqp.innerHTML = '';
    }
}
function myFunc2() {
    gsap.from('#faq2p', {
        scale: 0,        // Start with a scale of 0 (completely zoomed out)
        duration: 0.5,   // Duration of the animation
        ease: 'power2.inOut' // Easing for a smooth effect
    });
faq2.classList.toggle('active')
if(faq2.classList.contains('active')){
    faqp2.style.fontFamily = 'monospace';
    faqp2.style.fontSize = '20px';
    faqp2.style.color = 'black';
    faqp2.innerHTML = `Yes, a complimentary breakfast is included with your stay. It is served daily in our dining area from 7:00 AM to 10:00 AM.`;
}else{
    faqp2.innerHTML = '';
}
}
faq3.addEventListener('click',() => {
    gsap.from('#faq3p', {
        scale: 0,        // Start with a scale of 0 (completely zoomed out)
        duration: 0.5,   // Duration of the animation
        ease: 'power2.inOut' // Easing for a smooth effect
    });
        faq3.classList.toggle('active1')
        if (faq3.classList.contains('active1')) {
            faq3p.style.fontSize='20px'
            faq3p.style.fontFamily = 'monospace';
            faq3p.innerHTML=`Vista Luxe provides a rooftop infinity pool, fitness center, free Wi-Fi, 24/7 room service, luxury spa, and fine dining options`
        }
        else{
            faq3p.innerHTML=''
        }
    }
)




faq4.addEventListener('click',() =>{
    gsap.from('#faq4p', {
        scale: 0,        // Start with a scale of 0 (completely zoomed out)
        duration: 0.5,   // Duration of the animation
        ease: 'power2.inOut' // Easing for a smooth effect
    });
    faq4.classList.toggle('active4')
    if (faq4.classList.contains('active4')) {
        faq4p.style.fontSize = '20px'
        faq4p.style.fontFamily='monospace'
        faq4p.innerHTML=`Yes, we offer modern facilities for meetings, weddings, and special events with dedicated event planning services.`
        
    }else{
        faq4p.innerHTML=''
    }
})

faq1.addEventListener('click', () => {
    myFunc();
});
faq2.addEventListener('click', () => {
myFunc2();
});
    
offerbtn.addEventListener
('click',() => {
 
    offerbtn.classList.toggle('offer')
   if(offerbtn.classList.contains('offer')){offercard.style.height='25px'
offercard.style.fontSize='22px'


offercard.style.fontFamily='monospace'
offercard.style.padding='10px'
offercard.style.backgroundColor='black'

offercard.style.color='white'
        offercard.innerHTML=`"Experience luxury like never before at Vista Luxe • 60% off for new visitors • Where elegance meets comfort."`
   }
   else{
    offercard.style.backgroundColor=''
    offercard.innerHTML=''
    }
})