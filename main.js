document.addEventListener('DOMContentLoaded', function() {
    initCheckout();
    
    function initCheckout() {
        if (!document.getElementById('step-1')) return;
        
        let currentStep = 1;
        const totalSteps = 3;

        function updateStepIndicators() {
            for (let i = 1; i <= totalSteps; i++) {
                const stepElement = document.getElementById(`step-${i}`);
                const lineElement = document.getElementById(`line-${i}`);
                
                if (i <= currentStep) {
                    stepElement.classList.add('bg-white');
                    stepElement.classList.remove('bg-gray-700');
                    if (i > 1) {
                        stepElement.classList.add('text-dark');
                        stepElement.classList.remove('text-light');
                    } else {
                        stepElement.classList.add('text-dark');
                        stepElement.classList.remove('text-light');
                    }
                    if (lineElement) {
                        lineElement.classList.add('bg-white');
                        lineElement.classList.remove('bg-gray-700');
                    }
                } else {
                    stepElement.classList.add('bg-gray-700');
                    stepElement.classList.remove('bg-white');
                    stepElement.classList.add('text-light');
                    stepElement.classList.remove('text-dark');
                    if (lineElement) {
                        lineElement.classList.add('bg-gray-700');
                        lineElement.classList.remove('bg-white');
                    }
                }
            }
        }

        function showStep(step) {
            currentStep = step;
            updateStepIndicators();
            
            document.querySelectorAll('.step-content').forEach(stepElement => {
                stepElement.classList.add('hidden');
            });
            document.getElementById(`step${step}`).classList.remove('hidden');
        }

        function nextStep() {
            if (currentStep < totalSteps) {
                showStep(currentStep + 1);
            }
        }

        function previousStep() {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        }

        function startDeliveryAnimation() {
            document.getElementById('step3').classList.add('hidden');
            document.getElementById('delivery-animation').classList.remove('hidden');
            
            const car = document.getElementById('car');
            const deliveryMessage = document.getElementById('delivery-message');
            const confirmation = document.getElementById('order-confirmation');
            
            // Animar o carro até o final da tela
            const containerWidth = car.parentElement.offsetWidth;
            car.style.transform = `translateX(${containerWidth - car.offsetWidth}px)`;
            
            deliveryMessage.textContent = "Seu pedido está sendo enviado...";
            deliveryMessage.classList.remove('hidden');
            
            setTimeout(() => {
                deliveryMessage.classList.add('hidden');
                document.getElementById('delivery-animation').classList.add('hidden');
                confirmation.classList.remove('hidden');
                confirmation.classList.add('fade-in');
                displayOrderSummary();
            }, 2000); // Diminuído para 2 segundos para corresponder à nova duração da animação
        }

        function displayOrderSummary() {
            const name = document.getElementById('name').value;
            const street = document.getElementById('street').value;
            const number = document.getElementById('number').value;
            const complement = document.getElementById('complement').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const cep = document.getElementById('cep').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const orderId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
            
            document.getElementById('confirm-name').textContent = name;
            document.getElementById('confirm-email').textContent = email;
            document.getElementById('confirm-phone').textContent = phone;
            document.getElementById('confirm-street').textContent = street;
            document.getElementById('confirm-number').textContent = number;
            document.getElementById('confirm-complement').textContent = complement || '-';
            document.getElementById('confirm-city').textContent = city;
            document.getElementById('confirm-state').textContent = state;
            document.getElementById('confirm-cep').textContent = cep;
            document.getElementById('order-id').textContent = `#${orderId}`;
            
            localStorage.removeItem('carrinho');
        }

        function applyInputMasks() {
            const cepInput = document.getElementById('cep');
            const phoneInput = document.getElementById('phone');
            const cardNumberInput = document.getElementById('card-number');
            const expiryDateInput = document.getElementById('expiry-date');
            const cvvInput = document.getElementById('cvv');
            
            if (cepInput) {
                cepInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 5) {
                        value = value.substring(0, 5) + '-' + value.substring(5, 8);
                    }
                    e.target.value = value;
                });
            }
            
            if (phoneInput) {
                phoneInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 2) {
                        value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
                        if (value.length > 9) {
                            value = value.substring(0, 9) + '-' + value.substring(9, 13);
                        }
                    }
                    e.target.value = value;
                });
            }
            
            if (cardNumberInput) {
                cardNumberInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    value = value.match(/.{1,4}/g)?.join(' ') || value;
                    e.target.value = value;
                });
            }
            
            if (expiryDateInput) {
                expiryDateInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 2) {
                        value = value.substring(0, 2) + '/' + value.substring(2, 4);
                    }
                    e.target.value = value;
                });
            }
            
            if (cvvInput) {
                cvvInput.addEventListener('input', function(e) {
                    let value = e.target.value.replace(/\D/g, '');
                    e.target.value = value.substring(0, 3);
                });
            }
        }

        showStep(1);
        applyInputMasks();
        
        document.getElementById('personal-data-form').addEventListener('submit', (e) => {
            e.preventDefault();
            nextStep();
        });
        
        document.getElementById('address-form').addEventListener('submit', (e) => {
            e.preventDefault();
            nextStep();
        });
        
        document.getElementById('payment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            startDeliveryAnimation();
        });
        
        document.getElementById('back-to-step-1').addEventListener('click', previousStep);
        document.getElementById('back-to-step-2').addEventListener('click', previousStep);
    }

    // Menu mobile toggle
    function initMobileMenu() {
        const menuButton = document.getElementById('menu-button');
        const closeMenuButton = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && closeMenuButton && mobileMenu) {
            menuButton.addEventListener('click', function() {
                mobileMenu.classList.add('menu-active');
            });
            
            closeMenuButton.addEventListener('click', function() {
                mobileMenu.classList.remove('menu-active');
            });
        }
    }

    // Animações no scroll
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-active');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Slider do banner principal
    function initMainBanner() {
        const slides = document.querySelectorAll('.main-banner .slide');
        const dots = document.querySelectorAll('.main-banner .dot');
        const prevButton = document.querySelector('.main-banner .prev');
        const nextButton = document.querySelector('.main-banner .next');
        
        let currentSlide = 0;
        const slideInterval = 5000;
        let slideTimer;
        
        function showSlide(index) {
            slides.forEach(slide => slide.style.opacity = 0);
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].style.opacity = 1;
            dots[index].classList.add('active');
            
            currentSlide = index;
        }
        
        function nextSlide() {
            const newIndex = (currentSlide + 1) % slides.length;
            showSlide(newIndex);
        }
        
        function prevSlide() {
            const newIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(newIndex);
        }
        
        function startSlideTimer() {
            slideTimer = setInterval(nextSlide, slideInterval);
        }
        
        function resetSlideTimer() {
            clearInterval(slideTimer);
            startSlideTimer();
        }
        
        // Iniciar com o primeiro slide
        showSlide(0);
        startSlideTimer();
        
        // Botões de navegação
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetSlideTimer();
            });
            
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetSlideTimer();
            });
        }
        
        // Click nos pontos de navegação
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetSlideTimer();
            });
        });
    }

    // Funções para a página de finalização de compra
    function initCheckoutPage() {
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const deliveryAnimation = document.getElementById('delivery-animation');
        const orderConfirmation = document.getElementById('order-confirmation');
        
        const step1Indicator = document.getElementById('step-1');
        const step2Indicator = document.getElementById('step-2');
        const step3Indicator = document.getElementById('step-3');
        
        const line1 = document.getElementById('line-1');
        const line2 = document.getElementById('line-2');
        
        const personalDataForm = document.getElementById('personal-data-form');
        const addressForm = document.getElementById('address-form');
        const paymentForm = document.getElementById('payment-form');
        
        const backToStep1 = document.getElementById('back-to-step-1');
        const backToStep2 = document.getElementById('back-to-step-2');
        
        // Se os elementos não existirem, estamos em outra página
        if (!step1) return;
        
        // Manipuladores de eventos dos formulários
        personalDataForm.addEventListener('submit', function(e) {
            e.preventDefault();
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            
            step2Indicator.classList.remove('bg-gray-700');
            step2Indicator.classList.add('bg-white');
            step2Indicator.classList.remove('text-light');
            step2Indicator.classList.add('text-dark');
            
            line1.classList.remove('bg-gray-700');
            line1.classList.add('bg-white');
            
            const nextStep = document.querySelector('#step2');
            nextStep.scrollIntoView({ behavior: 'smooth' });
        });
        
        addressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            step2.classList.add('hidden');
            step3.classList.remove('hidden');
            
            step3Indicator.classList.remove('bg-gray-700');
            step3Indicator.classList.add('bg-white');
            step3Indicator.classList.remove('text-light');
            step3Indicator.classList.add('text-dark');
            
            line2.classList.remove('bg-gray-700');
            line2.classList.add('bg-white');
            
            const nextStep = document.querySelector('#step3');
            nextStep.scrollIntoView({ behavior: 'smooth' });
        });
        
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            step3.classList.add('hidden');
            deliveryAnimation.classList.remove('hidden');
            
            // Animar o carro
            const car = document.getElementById('car');
            const road = document.getElementById('road');
            const containerWidth = car.parentElement.offsetWidth;
            
            // Mover o carro até o final da tela (com offset para ficar dentro da visualização)
            car.style.transform = `translateX(${containerWidth - car.offsetWidth}px)`;
            
            // Após a animação do carro, mostrar a confirmação do pedido
            setTimeout(function() {
                deliveryAnimation.classList.add('hidden');
                orderConfirmation.classList.remove('hidden');
                
                // Preencher informações do cliente
                document.getElementById('confirm-name').textContent = document.getElementById('name').value;
                document.getElementById('confirm-email').textContent = document.getElementById('email').value;
                document.getElementById('confirm-phone').textContent = document.getElementById('phone').value;
                
                // Preencher endereço
                document.getElementById('confirm-street').textContent = document.getElementById('street').value;
                document.getElementById('confirm-number').textContent = document.getElementById('number').value;
                document.getElementById('confirm-complement').textContent = document.getElementById('complement').value;
                document.getElementById('confirm-city').textContent = document.getElementById('city').value;
                document.getElementById('confirm-state').textContent = document.getElementById('state').value;
                document.getElementById('confirm-cep').textContent = document.getElementById('cep').value;
                
                orderConfirmation.scrollIntoView({ behavior: 'smooth' });
            }, 2000); // Ajustado para corresponder à duração da animação
        });
        
        // Botões de voltar
        backToStep1.addEventListener('click', function() {
            step2.classList.add('hidden');
            step1.classList.remove('hidden');
            
            step2Indicator.classList.add('bg-gray-700');
            step2Indicator.classList.remove('bg-white');
            step2Indicator.classList.add('text-light');
            step2Indicator.classList.remove('text-dark');
            
            line1.classList.add('bg-gray-700');
            line1.classList.remove('bg-white');
        });
        
        backToStep2.addEventListener('click', function() {
            step3.classList.add('hidden');
            step2.classList.remove('hidden');
            
            step3Indicator.classList.add('bg-gray-700');
            step3Indicator.classList.remove('bg-white');
            step3Indicator.classList.add('text-light');
            step3Indicator.classList.remove('text-dark');
            
            line2.classList.add('bg-gray-700');
            line2.classList.remove('bg-white');
        });
    }

    // Inicializar os recursos apropriados quando o DOM estiver carregado
    initMobileMenu();
    
    // Inicializar as animações de scroll
    initScrollAnimations();
    
    // Inicializar o slider do banner principal se existir na página
    const mainBanner = document.querySelector('.main-banner');
    if (mainBanner) {
        initMainBanner();
    }
    
    // Inicializar a página de checkout se estiver nessa página
    initCheckoutPage();
}); 