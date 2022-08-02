$(document).ready(function() {
    $('select').niceSelect();
  });
  $('#head_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `
    <button type="button" class="slick_prev"><i class="fa-solid fa-angle-left"></i></button>
    `,
    nextArrow: `
    <button type="button" class="slick_next"><i class="fa-solid fa-angle-right"></i></button>
    `,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3,
      margin:20,
      nav:true,
      
    });
  });

  $('.product-slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `
      <button type="button" class="slider-previous"><i class="fa-solid fa-angle-left"></i></button>
    `,
    nextArrow: `
      <button type="button" class="slider-nextt"><i class="fa-solid fa-angle-right"></i></button>
    `,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
});
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.categoriesSlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
if(localStorage.getItem('basket') === null){
  localStorage.setItem('basket',JSON.stringify([]))
}
let add_btns = document.querySelectorAll('#addtocart')

for (let btn of add_btns) {
  btn.addEventListener('click',(event) => {
    event.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'))
    let p_id = event.target.parentElement.parentElement.parentElement.id;
    let p_img = event.target.parentElement.parentElement.previousElementSibling.children[0].src
    let p_name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].innerText
    let p_price = event.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].children[0].innerText
    let current_product = basket.find(x => x.id === p_id)
    
    if(current_product === undefined)
    {
      basket.push({
        id:p_id,
        name:p_name,
        img:p_img,
        price : p_price.replace('US $',''),
        count : 1
        
      })
    }
    else{
      current_product.count+=1
    }


    localStorage.setItem('basket',JSON.stringify(basket))
    ShowCount();
   
  })
}

function ShowCount()
{
  let basket = JSON.parse(localStorage.getItem('basket'))
  let count = basket.length;
  document.querySelector('#countspan').innerHTML = count;
}
ShowCount();

window.onscroll = () => stickHeader();

let header = document.querySelector(".header_bottom");
let sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

let categoryToggleBtn = document.querySelector(".drpdwn-category");

categoryToggleBtn.addEventListener("click", () => {
  let categoryMenu = $(".category-menu");
  categoryMenu.slideToggle();
})