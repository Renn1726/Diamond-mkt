// Data
const creatives = [
  {
    id: 1,
    title: "Campanha Digital",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    category: "Social Media",
  },
  {
    id: 2,
    title: "Identidade Visual",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    category: "Branding",
  },
  {
    id: 3,
    title: "Anúncios Digitais",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=500&fit=crop",
    category: "Ads",
  },
  {
    id: 4,
    title: "Design Gráfico",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "Design",
  },
  {
    id: 5,
    title: "Conteúdo Editorial",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    category: "Conteúdo",
  },
];

const clients = [
  {
    name: "São Benedito",
    logo: "./assets/images/clients/SB.png",
  },
  {
    name: "Ubajara",
    logo: "./assets/images/clients/Ubajara.png",
  },
  {
    name: "Carnaubal",
    logo: "./assets/images/clients/Carnaubal.png",
  },
  {
    name: "Saul",
    logo: "./assets/images/clients/SAUl.png",
  },
  {
    name: "Chiquinho",
    logo: "./assets/images/clients/CHIQUINHO.png",
  },
  {
    name: "Agnes",
    logo: "./assets/images/clients/AGNES.png",
  },
  {
    name: "Juciane",
    logo: "./assets/images/clients/Juciane.png",
  },
  {
    name: "Mactube",
    logo: "./assets/images/clients/MACTUBE.png",
  },
  {
    name: "Cachaça Isaías",
    logo: "./assets/images/clients/CACHAÇA LOGO.png",
  },
  {
    name: "PRINCESA DA SERRA",
    logo: "./assets/images/clients/PRINCESA LOGO.png",
  },
  {
    name: "Espettu`s",
    logo: "./assets/images/clients/ES.png",
  },
  {
    name: "Lymax",
    logo: "./assets/images/clients/LYMAX.png",
  },
  {
    name: "Casa do plantador",
    logo: "./assets/images/clients/CASA DO PLANTADOR.png",
  },
  {
    name: "3 Marias",
    logo: "./assets/images/clients/3MARIAS.png",
  },
  {
    name: "Contmac",
    logo: "./assets/images/clients/CONTMAC.png",
  },
  {
    name: "Daniel",
    logo: "./assets/images/clients/DANIEL LOGO.png",
  },
  {
    name: "Graça",
    logo: "./assets/images/clients/GRAÇA LOGO.png",
  },
  {
    name: "OCULARE",
    logo: "./assets/images/clients/OCULARE LOGO.png",
  },
  {
    name: "POVO",
    logo: "./assets/images/clients/POVO LOGO.png",
  },
  {
    name: "LINHARES",
    logo: "./assets/images/clients/LINHARES LOGO.png",
  },
  {
    name: "Posto SB",
    logo: "./assets/images/clients/POSTO LOGO.png",
  },
  {
    name: "PONTO DA CONSTRUÇÃO",
    logo: "./assets/images/clients/PCONS LOGO.png",
  },
];

const projectsData = {
  politico: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=600&fit=crop",
      title: "Campanha Municipal 2024",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=600&fit=crop",
      title: "Gestão de Imagem Política",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      title: "Comunicação Estratégica",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551135049-22a0f67a5229?w=800&h=600&fit=crop",
      title: "Marketing Eleitoral",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1591696331096-f7b1cf270b7b?w=800&h=600&fit=crop",
      title: "Redes Sociais Políticas",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&h=600&fit=crop",
      title: "Branding Político",
    },
  ],
  audiovisual: [
    {
      id: 1,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Vídeo Institucional Empresa XYZ",
      thumb:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=450&fit=crop",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Campanha Publicitária 2024",
      thumb:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Documentário Corporativo",
      thumb:
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?w=800&h=450&fit=crop",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Motion Graphics - Lançamento",
      thumb:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop",
    },
  ],
  empresarial: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      title: "Identidade Visual Completa",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      title: "Marketing Digital 360°",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Gestão de Redes Sociais",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      title: "Branding Empresarial",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      title: "Estratégia de Conteúdo",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      title: "Campanhas de Performance",
    },
  ],
};

const categoryInfo = {
  politico: {
    title: "Campanhas Políticas",
    gradient: "from-blue-500 to-indigo-600",
  },
  audiovisual: {
    title: "Audiovisual",
    gradient: "from-red-500 to-rose-600",
  },
  empresarial: {
    title: "Setor Empresarial",
    gradient: "from-emerald-500 to-teal-600",
  },
};

// Loading Screen
let loadingProgress = 0;
const loadingInterval = setInterval(() => {
  loadingProgress += 5;
  document.getElementById("loading-progress-fill").style.width =
    loadingProgress + "%";
  document.getElementById("loading-percent").textContent =
    loadingProgress + "%";

  if (loadingProgress >= 100) {
    clearInterval(loadingInterval);
    setTimeout(() => {
      document.getElementById("loading-screen").classList.add("hidden");
    }, 300);
  }
}, 40);

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Creatives Carousel - Infinite Slide
const carousel = document.getElementById("creatives-carousel");

let currentIndex = 1;
let slideWidth;
let track;

function initCreativesCarousel() {
  track = document.createElement("div");
  track.className = "carousel-track";

  const slides = creatives.map(createCreativeSlide);

  const firstClone = createCreativeSlide(creatives[0]);
  firstClone.id = "firstClone";

  const lastClone = createCreativeSlide(creatives[creatives.length - 1]);
  lastClone.id = "lastClone";

  track.appendChild(lastClone);
  slides.forEach((slide) => track.appendChild(slide));
  track.appendChild(firstClone);

  carousel.appendChild(track);

  slideWidth = carousel.offsetWidth;
  track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

  track.addEventListener("transitionend", handleInfiniteLoop);

  autoplayInterval = setInterval(nextCreative, 5000);
}

function createCreativeSlide(creative) {
  const slide = document.createElement("div");
  slide.className = "carousel-slide";
  slide.innerHTML = `
    <img src="${creative.image}" alt="${creative.title}">
    <div class="carousel-overlay"></div>
    <div class="carousel-content">
      <span class="carousel-category">${creative.category}</span>
      <h3 class="carousel-title">${creative.title}</h3>
    </div>
  `;
  return slide;
}

function nextCreative() {
  currentIndex++;
  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function prevCreative() {
  currentIndex--;
  track.style.transition = "transform 0.6s ease";
  track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function handleInfiniteLoop() {
  const slides = track.querySelectorAll(".carousel-slide");

  if (slides[currentIndex].id === "firstClone") {
    track.style.transition = "none";
    currentIndex = 1;
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  if (slides[currentIndex].id === "lastClone") {
    track.style.transition = "none";
    currentIndex = slides.length - 2;
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }
}

// Clients Carousel
function initClientsCarousel() {
  const track = document.getElementById("clients-track");
  const duplicatedClients = [...clients, ...clients];

  duplicatedClients.forEach((client) => {
    const card = document.createElement("div");
    card.className = "client-card";
    card.innerHTML = `<img src="${client.logo}" alt="${client.name}">`;
    track.appendChild(card);
  });
}

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId + "-modal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  document.getElementById(modalId + "-modal").classList.remove("active");
  document.body.style.overflow = "";
}

function openCategoryModal(category) {
  const projects = projectsData[category];
  const info = categoryInfo[category];
  const isAudiovisual = category === "audiovisual";

  let content = `
                <div class="modal-header">
                    <h2 class="modal-title" style="background: linear-gradient(to right, #3b82f6, #6366f1); -webkit-background-clip: text; background-clip: text; color: transparent;">${info.title}</h2>
                    <p class="modal-subtitle">Confira nossos trabalhos realizados</p>
                </div>
            `;

  if (isAudiovisual) {
    content += '<div class="category-projects-grid">';
    projects.forEach((project, index) => {
      content += `
                        <div class="video-card" onclick="openVideoModal('${
                          project.video
                        }')" style="animation-delay: ${index * 0.1}s">
                            <div class="video-thumbnail">
                                <img src="${project.thumb}" alt="${
        project.title
      }">
                                <div class="video-overlay">
                                    <div class="play-button">
                                        <svg fill="white" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="video-info">
                                <h3>${project.title}</h3>
                            </div>
                        </div>
                    `;
    });
    content += "</div>";
  } else {
    const gradientClass =
      category === "politico" ? "gradient-blue" : "gradient-green";
    content += `
                    <div class="projects-carousel-wrapper">
                        <div class="projects-gradient-left"></div>
                        <div class="projects-gradient-right"></div>
                        <div class="projects-track">
                `;
    [...projects, ...projects].forEach((project) => {
      content += `
                        <div class="project-card">
                            <div class="project-image ${gradientClass}">
                                <img src="${project.image}" alt="${project.title}">
                            </div>
                            <div class="project-info">
                                <h3>${project.title}</h3>
                            </div>
                        </div>
                    `;
    });
    content += "</div></div>";
  }

  document.getElementById("category-content").innerHTML = content;
  document.getElementById("category-modal").classList.add("active");
}

function closeCategoryModal() {
  document.getElementById("category-modal").classList.remove("active");
}

function openVideoModal(videoUrl) {
  document.getElementById("video-iframe").src = videoUrl;
  document.getElementById("video-modal").classList.add("active");
}

function closeVideoModal() {
  document.getElementById("video-iframe").src = "";
  document.getElementById("video-modal").classList.remove("active");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initCreativesCarousel();
  initClientsCarousel();
});

// Close modals on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach((modal) => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    });
    closeVideoModal();
  }

  window.addEventListener("resize", () => {
    slideWidth = carousel.offsetWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  });
});
