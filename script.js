document.addEventListener('DOMContentLoaded', function() {
    // Animação de elementos na rolagem
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Menu mobile
    const menuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            mobileMenu.classList.toggle('active');
        });
    }

    if (closeMenuButton && mobileMenu) {
        closeMenuButton.addEventListener('click', () => {
            document.body.style.overflow = '';
            mobileMenu.classList.remove('active');
        });
    }

    // Fechar menu ao clicar em um link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.style.overflow = '';
            mobileMenu.classList.remove('active');
        });
    });

    // Slider de produtos
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-item');
    const sliderDots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;
    
    if (totalSlides > 0) {
        // Função para mostrar slide atual
        function showSlide(index) {
            if (index === currentSlide) return;
            
            // Remover classe active de todos os slides e adicionar ao slide atual
            slides.forEach((slide, i) => {
                if (i === index) {
                    // Preparar próximo slide antes de começar transição
                    slide.style.transform = 'translateX(30px)';
                    slide.style.opacity = '0';
                    slide.classList.add('active');
                    
                    // Dar tempo para o navegador processar as mudanças
                    setTimeout(() => {
                        // Iniciar a transição do novo slide
                        slide.style.transform = 'translateX(0)';
                        slide.style.opacity = '1';
                    }, 50);
                } else if (i === currentSlide) {
                    // Fade out do slide atual
                    slide.style.opacity = '0';
                    slide.style.transform = 'translateX(-30px)';
                    
                    // Remover classe active do slide anterior após a transição
                    setTimeout(() => {
                        slide.classList.remove('active');
                    }, 800);
                }
            });
            
            // Atualizar dots
            if (sliderDots.length > 0) {
                sliderDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                    dot.classList.toggle('opacity-100', i === index);
                    dot.classList.toggle('opacity-50', i !== index);
                    
                    // Atualizar atributos de acessibilidade
                    dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
                });
            }
            
            // Atualizar atributos ARIA nos slides
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.setAttribute('aria-hidden', 'false');
                    slide.setAttribute('tabindex', '0');
                } else {
                    slide.setAttribute('aria-hidden', 'true');
                    slide.setAttribute('tabindex', '-1');
                }
            });
            
            currentSlide = index; // Atualiza o índice do slide atual
        }
        
        // Inicializar primeiro slide
        slides[0].classList.add('active');
        slides[0].style.opacity = '1';
        slides[0].style.transform = 'translateX(0)';
        
        // Atualizar dot inicial
        if (sliderDots.length > 0) {
            sliderDots[0].classList.add('active');
            sliderDots[0].classList.add('opacity-100');
            sliderDots[0].classList.remove('opacity-50');
        }
        
        // Eventos para os botões de navegação
        const nextButton = document.getElementById('next-slide');
        const prevButton = document.getElementById('prev-slide');
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const nextIndex = (currentSlide + 1) % totalSlides;
                showSlide(nextIndex);
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(prevIndex);
            });
        }

        // Eventos para os dots
        sliderDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showSlide(index);
            });
        });
        
        // Adicionar swipe para dispositivos móveis
        const sliderContainer = document.querySelector('.slider-container');
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
            
            function handleSwipe() {
                // Swipe para a esquerda (próximo slide)
                if (touchEndX < touchStartX - 50) {
                    const nextIndex = (currentSlide + 1) % totalSlides;
                    showSlide(nextIndex);
                }
                
                // Swipe para a direita (slide anterior)
                if (touchEndX > touchStartX + 50) {
                    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
                    showSlide(prevIndex);
                }
            }
            
            // Adicionar autoplay para o slider
            let sliderInterval = setInterval(() => {
                const nextIndex = (currentSlide + 1) % totalSlides;
                showSlide(nextIndex);
            }, 5000);
            
            // Parar autoplay quando o mouse estiver sobre o slider
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(sliderInterval);
            });
            
            sliderContainer.addEventListener('touchstart', () => {
                clearInterval(sliderInterval);
            }, { passive: true });
            
            sliderContainer.addEventListener('mouseleave', () => {
                sliderInterval = setInterval(() => {
                    const nextIndex = (currentSlide + 1) % totalSlides;
                    showSlide(nextIndex);
                }, 5000);
            });
            
            sliderContainer.addEventListener('touchend', () => {
                sliderInterval = setInterval(() => {
                    const nextIndex = (currentSlide + 1) % totalSlides;
                    showSlide(nextIndex);
                }, 5000);
            }, { passive: true });
        }
    }

    // Navegação suave ao clicar nos links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Carrinho de compras simulado
    let carrinho = [];
    
    // Carregar carrinho do localStorage, se existir
    if (localStorage.getItem('carrinho')) {
        try {
            carrinho = JSON.parse(localStorage.getItem('carrinho'));
        } catch (e) {
            carrinho = [];
        }
    }

    // Adicionar ao carrinho (simulação)
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.getAttribute('data-product');
            
            // Adicionar produto ao carrinho
            const produtoExistente = carrinho.find(item => item.nome === productName);
            
            if (produtoExistente) {
                produtoExistente.quantidade += 1;
            } else {
                carrinho.push({
                    nome: productName,
                    quantidade: 1,
                    preco: getProductPrice(productName)
                });
            }
            
            // Salvar carrinho no localStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            
            // Animação de confirmação
            const notification = document.createElement('div');
            notification.textContent = `${productName} adicionado ao carrinho!`;
            notification.className = 'fixed bottom-4 right-4 bg-light text-dark py-2 px-4 rounded-md shadow-lg z-50 opacity-0';
            notification.style.transform = 'translateY(20px)';
            notification.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.opacity = '1';
                notification.style.transform = 'translateY(0)';
            }, 10);
            
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 2500);
            
            button.classList.add('scale-110');
            setTimeout(() => {
                button.classList.remove('scale-110');
            }, 300);
        });
    });
    
    // Função para obter preço de um produto pelo nome
    function getProductPrice(productName) {
        const precos = {
            'Urban Runner': 399.90,
            'Street Classic': 349.90,
            'Metro Flex': 429.90,
            'Urban Hiker': 469.90,
            'Street Shadow X9': 599.90,
            'Street Flow Elite': 549.90,
            'Court Champion': 479.90
        };
        
        return precos[productName] || 0;
    }

    // Formulário de newsletter
    const newsletterForm = document.querySelector('form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                // Simulação de envio bem-sucedido
                emailInput.value = '';
                
                const notification = document.createElement('div');
                notification.textContent = 'E-mail cadastrado com sucesso!';
                notification.className = 'fixed bottom-4 right-4 bg-light text-dark py-2 px-4 rounded-md shadow-lg z-50 opacity-0';
                notification.style.transform = 'translateY(20px)';
                notification.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.opacity = '1';
                    notification.style.transform = 'translateY(0)';
                }, 10);
                
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        notification.remove();
                    }, 500);
                }, 2500);
                
                const button = this.querySelector('button[type="submit"]');
                button.classList.add('scale-110');
                setTimeout(() => {
                    button.classList.remove('scale-110');
                }, 300);
            }
        });
    }
}); 