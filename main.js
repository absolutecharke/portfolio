const techInfo = {
    "HTML": {
      icon: "🌐",
      description: "The standard markup language for creating web pages. HTML defines the structure and content of every page on the web using a system of elements and tags."
    },
    "CSS": {
      icon: "🎨",
      description: "Cascading Style Sheets control the visual presentation of HTML elements layout, colors, fonts, animations, and responsive design across all screen sizes."
    },
    "JavaScript": {
      icon: "⚡",
      description: "The programming language of the web. JavaScript brings interactivity to pages, handles logic, manipulates the DOM, and powers both front-end and back-end development."
    },
    "Java": {
      icon: "☕",
      description: "A robust, object-oriented programming language designed for portability and performance. Widely used for backend systems, enterprise applications, and Android development."
    },
    "MySQL": {
      icon: "🗄️",
      description: "An open-source relational database management system. MySQL uses structured query language (SQL) to store, retrieve, and manage structured data efficiently."
    },
    "PostgreSQL": {
      icon: "🐘",
      description: "A powerful, open-source object-relational database known for its reliability and advanced features like JSON support, full-text search, and complex queries."
    },
    "Git": {
      icon: "🔀",
      description: "A distributed version control system that tracks changes in source code. Git enables collaboration, branching, and a full history of every project modification."
    },
    "GitHub": {
      icon: "🐙",
      description: "A cloud-based platform built on Git for hosting repositories, collaborating on code, tracking issues, and managing project workflows with teams."
    },
    "VS Code": {
      icon: "💻",
      description: "A lightweight but powerful source code editor by Microsoft. VS Code supports dozens of languages with extensions, debugging, Git integration, and a rich ecosystem."
    },
    "Netbeans": {
      icon: "🧰",
      description: "An open-source integrated development environment (IDE) primarily used for Java development. NetBeans offers tools for coding, debugging, and project management."
    }
  };
  
  const spideyGif = document.createElement('img');
spideyGif.src = 'spidangle.gif';
spideyGif.alt = 'Spider-Man dangling';
spideyGif.style.cssText = `
  position: fixed;
  top: 0px;
  left: 8px;
  width: 240px;
  height: auto;
  z-index: 9999;
  pointer-events: none;
  display: none;
`;
document.body.appendChild(spideyGif);
 
document.querySelectorAll('.stack-item').forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    const tech = item.getAttribute('data-tech');
    const info = techInfo[tech];
    if (!info) return;
 
    // Show spidey when alert opens
    spideyGif.style.display = 'block';
 
    Swal.fire({
      title: `${info.icon} ${tech}`,
      text: info.description,
      width: 600,
      padding: "3em",
      color: "black",
      FontFace: "'Syne', sans-serif",
      background: "#fff url(spidey pic.gif)",
      confirmButtonText: "Got it",
      confirmButtonColor: "#c8f04a",
      customClass: {
        title: 'swal-title',
        confirmButton: 'swal-btn'
      }
    }).then(() => {
      // Hide spidey when alert is dismissed
      spideyGif.style.display = 'none';
    });
  });
});
 
// Entrance animation
anime({
  targets: '.stack-item',
  translateY: [50, 0],
  opacity: [0, 1],
  scale: [0.9, 1],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutBack'
});
 
// Spider animation
const spiderEl = document.querySelector('.spider-swing');
if (spiderEl) {
  spiderEl.addEventListener('mouseenter', () => spiderEl.style.animationPlayState = 'paused');
  spiderEl.addEventListener('mouseleave', () => spiderEl.style.animationPlayState = 'running');
}