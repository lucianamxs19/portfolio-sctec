// Interatividade personalizada para o Portfólio da Luciana (SCTec)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Rolagem suave para os links de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Apenas aplica rolagem suave se for um link interno
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Ajuste para o header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Efeito de destaque ao rolar a página
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Mensagem de boas-vindas personalizada no console
    console.log("%c Olá, Luciana! ", "background: #6c5ce7; color: #fff; font-size: 20px; font-weight: bold; padding: 10px; border-radius: 5px;");
    console.log("Sua primeira landing page funcional da SCTec foi carregada com sucesso!");
});
