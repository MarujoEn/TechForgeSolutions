document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONTROLE DO MENU MOBILE (HAMBÚRGUER) ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (no celular)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- EFEITO DE SCROLL REVEAL (ANIMAÇÃO AO ROLAR A PÁGINA) ---
    const sections = document.querySelectorAll('.section');
    
    // Configuração do Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // A animação começa quando 15% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, observerOptions);

    // Prepara as seções para a animação (invisíveis e um pouco para baixo)
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // --- BOTÃO VOLTAR AO TOPO (OPCIONAL) ---
    // Criando o botão dinamicamente via JS
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.id = 'backToTop';
    document.body.appendChild(backToTopBtn);

    // Estilo do botão (pode ser movido para o CSS se preferir)
    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#004AAD',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        opacity: '0',
        pointerEvents: 'none',
        transition: 'opacity 0.3s, transform 0.3s',
        zIndex: '999'
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
            backToTopBtn.style.transform = 'translateY(20px)';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});