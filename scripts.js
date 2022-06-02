/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

const datos = [
    {
        picsum: "https://picsum.photos/id/133/900/600",
        title: "Jaguar",
        text: "Una mirada retrospectiva al pasado de Jaguar y cómo ha ido adaptando su imagen y marca al mercado contemporáneo.",
    },
    {
        picsum: "https://picsum.photos/id/250/900/600",
        title: "El ojo del pasado",
        text: "Exposición de fotos tomadas con cámaras análogas.",
    },
    {
        picsum: "https://picsum.photos/id/460/900/600",
        title: "未来",
        text: "Revista que reflexiona sobre el futuro de Japón.",
    },
    {
        picsum: "https://picsum.photos/id/274/900/600",
        title: "Luces",
        text: "Colores transformando una ciudad.",
    },
    {
        picsum: "https://picsum.photos/id/60/900/600",
        title: "Setup",
        text: "La importancia de tener un lugar de trabajo ordenado.",
    },
    {
        picsum: "https://picsum.photos/id/1040/900/600",
        title: "Carcassonne Project",
        text: "Videojuego sobre la histórica ciudad de Carcassonne.",
    }
];

datos.forEach((d) => {
  let contenedor = document.getElementById("fotos")
  let item = document.createElement("div");
  item.className = "col-lg-6"
  let html =
    '<a class="portfolio-item" href="#!">' +
    '<div class="caption">' +
    '<div class="caption-content">' +
    `<div class="h2">${d.title}</div>` +
    `<p class="mb-0">${d.text}</p>` +
    '</div>' +
    '</div>' +
    `<img class="img-fluid" src="${d.picsum}" alt="..." />` +
    '</a>'
    item.innerHTML = html
    contenedor.appendChild(item)
})
// <div class="col-lg-6">
//     <a class="portfolio-item" href="#!">
//         <div class="caption">
//             <div class="caption-content">
//                 <div class="h2">Workspace</div>
//                 <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
//             </div>
//         </div>
//         <img class="img-fluid" src="assets/img/portfolio-4.jpg" alt="..." />
//     </a>
// </div>
