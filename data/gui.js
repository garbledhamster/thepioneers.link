document.addEventListener('DOMContentLoaded',function(){
    feather.replace();
    AOS.init();
    const swiper=new Swiper('.swiper-container',{
        pagination:{el:'.swiper-pagination',clickable:true},
        slidesPerView:1,
        spaceBetween:20,
        breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}
    });
    tippy('[data-tippy-content]',{theme:'light',placement:'top'});
    MicroModal.init();
    const validation=new JustValidate('#contact-form');
    validation.addField('#name',[{rule:'required',errorMessage:'Name is required'},{rule:'minLength',value:2,errorMessage:'Name must have at least 2 characters'}])
    .addField('#email',[{rule:'required',errorMessage:'Email is required'},{rule:'email',errorMessage:'Please enter a valid email'}])
    .onSuccess((event)=>{event.preventDefault();alert('Form submitted successfully!');});
    particlesJS("particles-js",{
        "particles":{
            "number":{"value":60,"density":{"enable":true,"value_area":800}},
            "color":{"value":"#ffffff"},
            "shape":{"type":"circle"},
            "opacity":{"value":0.5,"random":false},
            "size":{"value":2,"random":true},
            "line_linked":{"enable":true,"distance":120,"color":"#ffffff","opacity":0.4,"width":1},
            "move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"bounce":false,"attract":{"enable":false}}
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},
            "modes":{"grab":{"distance":140,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":20,"duration":2,"opacity":8},"repulse":{"distance":200},"push":{"particles_nb":4}}
        },
        "retina_detect":true
    });
});
