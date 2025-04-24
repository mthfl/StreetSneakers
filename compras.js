document.addEventListener('DOMContentLoaded', function() {
    // Database de produtos
    const produtos = [
        {
            id: 1,
            nome: "Urban Runner",
            categoria: "running",
            preco: 399.90,
            descricao: "Estilo urbano com máximo conforto",
            imagem: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 2,
            nome: "Street Classic",
            categoria: "lifestyle",
            preco: 349.90,
            descricao: "Clássico reinventado para as ruas",
            imagem: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42]
        },
        {
            id: 3,
            nome: "Metro Flex",
            categoria: "running",
            preco: 429.90,
            descricao: "Flexibilidade para o dia a dia",
            imagem: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 4,
            nome: "Urban Hiker",
            categoria: "lifestyle",
            preco: 469.90,
            descricao: "Performance urbana em qualquer terreno",
            imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44]
        },
        {
            id: 5,
            nome: "Street Shadow X9",
            categoria: "lifestyle",
            preco: 599.90,
            descricao: "A nova linha Street Shadow traz inovação em design e conforto",
            imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 6,
            nome: "Street Flow Elite",
            categoria: "running",
            preco: 549.90,
            descricao: "Para quem busca performance sem abrir mão do estilo",
            imagem: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            tamanhos: [38, 39, 40, 41, 42]
        },
        {
            id: 7,
            nome: "Skate Pro",
            categoria: "skate",
            preco: 389.90,
            descricao: "Desenvolvido para os que dominam as manobras",
            imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 8,
            nome: "Court Champion",
            categoria: "basketball",
            preco: 479.90,
            descricao: "Desempenho e estabilidade nas quadras",
            imagem: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [40, 41, 42, 43, 44, 45]
        },
        {
            id: 9,
            nome: "City Walker",
            categoria: "lifestyle",
            preco: 329.90,
            descricao: "Conforto para caminhar pela cidade",
            imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 10,
            nome: "Street Art Limited",
            categoria: "lifestyle",
            preco: 649.90,
            descricao: "Edição limitada com arte urbana exclusiva",
            imagem: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 11,
            nome: "Boost Runner",
            categoria: "running",
            preco: 519.90,
            descricao: "Tecnologia de amortecimento avançada",
            imagem: "https://images.unsplash.com/photo-1580902394836-21e0d429b7f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 12,
            nome: "Skate Fusion",
            categoria: "skate",
            preco: 359.90,
            descricao: "Versatilidade e resistência para o skate",
            imagem: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 13,
            nome: "Air Street Pro",
            categoria: "basketball",
            preco: 599.90,
            descricao: "Design ousado para as quadras urbanas",
            imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44, 45]
        },
        {
            id: 14,
            nome: "Urban Street X",
            categoria: "lifestyle",
            preco: 499.90,
            descricao: "Estilo premium para o cotidiano urbano",
            imagem: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 15,
            nome: "Wave Runner Pro",
            categoria: "running",
            preco: 459.90,
            descricao: "Tecnologia avançada para corridas de longa distância",
            imagem: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 16,
            nome: "Skate Legend",
            categoria: "skate",
            preco: 389.90,
            descricao: "Durabilidade e aderência para manobras radicais",
            imagem: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 17,
            nome: "Trail Explorer",
            categoria: "running",
            preco: 479.90,
            descricao: "Projetado para trilhas e terrenos irregulares",
            imagem: "https://images.unsplash.com/photo-1584735175315-9d5df23be605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 18,
            nome: "Urban Bounce",
            categoria: "lifestyle",
            preco: 419.90,
            descricao: "Leve e confortável para o uso diário urbano",
            imagem: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42]
        },
        {
            id: 19,
            nome: "Pro Skate Elite",
            categoria: "skate",
            preco: 399.90,
            descricao: "Desenvolvido com especialistas em skate para desempenho máximo",
            imagem: "https://images.unsplash.com/photo-1626379801357-537728756769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 20,
            nome: "Court Dominator",
            categoria: "basketball",
            preco: 549.90,
            descricao: "Performance superior em quadras internas e externas",
            imagem: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44, 45, 46]
        },
        {
            id: 21,
            nome: "Retro Runner '88",
            categoria: "lifestyle",
            preco: 449.90,
            descricao: "Inspirado nos clássicos de corrida dos anos 80",
            imagem: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 22,
            nome: "High Top Street",
            categoria: "basketball",
            preco: 529.90,
            descricao: "Cano alto para suporte e estilo nas ruas e quadras",
            imagem: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44, 45]
        },
        {
            id: 23,
            nome: "Skate Low Rider",
            categoria: "skate",
            preco: 379.90,
            descricao: "Perfil baixo para maior sensibilidade no skate",
            imagem: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 24,
            nome: "Speed Runner Evo",
            categoria: "running",
            preco: 559.90,
            descricao: "Evolução em velocidade e leveza para corredores",
            imagem: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=881&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 25,
            nome: "Classic Canvas Low",
            categoria: "lifestyle",
            preco: 289.90,
            descricao: "Simplicidade e estilo em lona resistente",
            imagem: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42]
        },
        {
            id: 26,
            nome: "Performance Max Runner",
            categoria: "running",
            preco: 619.90,
            descricao: "Amortecimento superior para corredores de elite",
            imagem: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44]
        },
        {
            id: 27,
            nome: "Skate Vulc Pro",
            categoria: "skate",
            preco: 409.90,
            descricao: "Solado vulcanizado para maior aderência e controle",
            imagem: "https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 28,
            nome: "Urban Commuter",
            categoria: "lifestyle",
            preco: 359.90,
            descricao: "Conforto e estilo para o deslocamento diário",
            imagem: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 29,
            nome: "Court Master Low",
            categoria: "basketball",
            preco: 499.90,
            descricao: "Versão low-top do clássico de basquete",
            imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44, 45]
        },
        {
            id: 30,
            nome: "Trail Blazer Mid",
            categoria: "running",
            preco: 499.90,
            descricao: "Suporte e tração para trilhas desafiadoras",
            imagem: "https://images.unsplash.com/photo-1593081891905-1ead93671363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 31,
            nome: "Street Mesh Light",
            categoria: "lifestyle",
            preco: 319.90,
            descricao: "Leveza e respirabilidade com cabedal em mesh",
            imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41]
        },
        {
            id: 32,
            nome: "Skate Classic High",
            categoria: "skate",
            preco: 429.90,
            descricao: "Cano alto clássico com reforço para skate",
            imagem: "https://images.unsplash.com/photo-1611884659118-e75095a6d211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 33,
            nome: "Urban Explorer Boot",
            categoria: "lifestyle",
            preco: 579.90,
            descricao: "Estilo bota robusto para exploração urbana",
            imagem: "https://images.unsplash.com/photo-1604481209176-1358e6e45647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44]
        },
        {
            id: 34,
            nome: "Sprint Runner Lite",
            categoria: "running",
            preco: 489.90,
            descricao: "Modelo minimalista para velocidade e agilidade",
            imagem: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            tamanhos: [38, 39, 40, 41, 42]
        },
        {
            id: 35,
            nome: "Court Retro High",
            categoria: "basketball",
            preco: 559.90,
            descricao: "Visual retrô inspirado nas quadras dos anos 90",
            imagem: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [40, 41, 42, 43, 44, 45, 46]
        },
        {
            id: 36,
            nome: "Casual Slip-On",
            categoria: "lifestyle",
            preco: 299.90,
            descricao: "Praticidade e conforto no estilo slip-on",
            imagem: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42]
        },
        {
            id: 37,
            nome: "Skate Grip Max",
            categoria: "skate",
            preco: 399.90,
            descricao: "Máxima aderência com solado de borracha especial",
            imagem: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 38,
            nome: "Ultra Distance Runner",
            categoria: "running",
            preco: 649.90,
            descricao: "Projetado para longas distâncias e ultra maratonas",
            imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            tamanhos: [39, 40, 41, 42, 43, 44, 45]
        },
        {
            id: 39,
            nome: "Street Canvas High",
            categoria: "lifestyle",
            preco: 329.90,
            descricao: "Versão cano alto do clássico de lona",
            imagem: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 40,
            nome: "Retro Wave Premium",
            categoria: "lifestyle",
            preco: 389.90,
            descricao: "Design inspirado nos anos 80 com tecnologia moderna",
            imagem: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            cores: [
                {
                    nome: "Azul/Branco",
                    imagem: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    nome: "Preto/Vermelho",
                    imagem: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80"
                }
            ],
            tamanhos: [38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 41,
            nome: "Urban Minimalist",
            categoria: "lifestyle",
            preco: 349.90,
            descricao: "Design minimalista para o dia a dia urbano",
            imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            cores: [
                {
                    nome: "Branco",
                    imagem: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                },
                {
                    nome: "Preto",
                    imagem: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
                }
            ],
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 42,
            nome: "Marathon Endurance",
            categoria: "running",
            preco: 599.90,
            descricao: "Projetado para longas distâncias com máxima absorção de impacto",
            imagem: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            cores: [
                {
                    nome: "Verde Neon",
                    imagem: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                },
                {
                    nome: "Azul/Laranja",
                    imagem: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                }
            ],
            tamanhos: [39, 40, 41, 42, 43, 44, 45]
        },
        {
            id: 43,
            nome: "Skate Street Flex",
            categoria: "skate",
            preco: 389.90,
            descricao: "Flexibilidade e proteção para skatistas urbanos",
            imagem: "https://images.unsplash.com/photo-1532471968167-007088bc3428?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43]
        },
        {
            id: 44,
            nome: "Dunk Master Pro",
            categoria: "basketball",
            preco: 579.90,
            descricao: "Tecnologia de salto e aterrissagem para jogadores ofensivos",
            imagem: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80",
            tamanhos: [40, 41, 42, 43, 44, 45, 46]
        },
        {
            id: 45,
            nome: "Air Cushion Ultra",
            categoria: "running",
            preco: 529.90,
            descricao: "Sistema de amortecimento de ar para corridas mais suaves",
            imagem: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 46,
            nome: "Vintage Classic",
            categoria: "lifestyle",
            preco: 299.90,
            descricao: "Releitura moderna dos clássicos dos anos 70",
            imagem: "https://images.unsplash.com/photo-1518049362265-d5b2a6b00b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
            tamanhos: [36, 37, 38, 39, 40, 41, 42]
        },
        {
            id: 47,
            nome: "Street Drifter",
            categoria: "skate",
            preco: 419.90,
            descricao: "Design para manobras técnicas de street skate",
            imagem: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 48,
            nome: "Night Runner Reflex",
            categoria: "running",
            preco: 459.90,
            descricao: "Detalhes reflexivos para corridas noturnas com segurança",
            imagem: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [37, 38, 39, 40, 41, 42, 43, 44]
        },
        {
            id: 49,
            nome: "All Court Performer",
            categoria: "basketball",
            preco: 539.90,
            descricao: "Versatilidade para jogar em qualquer tipo de quadra",
            imagem: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            tamanhos: [40, 41, 42, 43, 44, 45]
        },
        {
            id: 50,
            nome: "Court Pro Elite",
            categoria: "basketball",
            preco: 649.90,
            descricao: "Desempenho profissional com tecnologia de amortecimento avançada",
            imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            cores: [
                {
                    nome: "Preto/Dourado",
                    imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                },
                {
                    nome: "Vermelho/Preto",
                    imagem: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                }
            ],
            tamanhos: [40, 41, 42, 43, 44, 45, 46]
        },
        {
            id: 51,
            nome: "Skate Street Pro",
            categoria: "skate",
            preco: 329.90,
            descricao: "Desenvolvido com skatistas profissionais para alta durabilidade",
            imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
            cores: [
                {
                    nome: "Preto/Branco",
                    imagem: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                },
                {
                    nome: "Azul Marinho",
                    imagem: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
                }
            ],
            tamanhos: [38, 39, 40, 41, 42, 43]
        },
        {
            id: 52,
            nome: "Trail Explorer",
            categoria: "trail",
            preco: 479.90,
            descricao: "Projetado para trilhas com sola de alta tração e proteção contra impactos",
            imagem: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
            cores: [
                {
                    nome: "Verde Militar",
                    imagem: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
                },
                {
                    nome: "Cinza/Laranja",
                    imagem: "https://images.unsplash.com/photo-1584545284372-f22510acf950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                }
            ],
            tamanhos: [39, 40, 41, 42, 43, 44]
        }
    ];

    // Estado da aplicação
    let state = {
        produtos: produtos,
        produtosFiltrados: produtos,
        paginaAtual: 1,
        itensPorPagina: 8,
        carrinho: [],
        totalPaginas: Math.ceil(produtos.length / 8),
        ultimosVistos: [],
        filtros: {
            cor: '',
            tamanho: ''
        }
    };

    // Elementos DOM
    const productsGrid = document.getElementById('products-grid');
    const cartModal = document.getElementById('cart-modal');
    const cartButton = document.getElementById('cart-button');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartShipping = document.getElementById('cart-shipping');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const checkoutBtn = document.getElementById('checkout-button');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    
    // Filtros
    const searchInput = document.getElementById('search');
    const categorySelect = document.getElementById('category');
    const priceSelect = document.getElementById('price');
    const colorFilter = document.getElementById('color-filter');
    const sizeFilter = document.getElementById('size-filter');

    // Inicialização
    renderProducts();
    updatePagination();
    loadCartFromLocalStorage();
    loadFilterPreferences();
    loadRecentlyViewed();
    updateCartCount();
    initScrollAnimation();
    renderColorAndSizeFilters();

    // Event Listeners
    cartButton.addEventListener('click', () => {
        cartModal.style.opacity = '0';
        cartModal.classList.remove('hidden');
        setTimeout(() => {
            cartModal.style.opacity = '1';
        }, 10);
        renderCart();
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.opacity = '0';
        setTimeout(() => {
            cartModal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 400);
    });

    continueShoppingBtn.addEventListener('click', () => {
        cartModal.style.opacity = '0';
        setTimeout(() => {
            cartModal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 400);
    });

    checkoutBtn.addEventListener('click', () => {
        if (state.carrinho.length > 0) {
            window.location.href = 'finalizacao.html';
        }
    });

    closeCheckout.addEventListener('click', () => {
        checkoutModal.style.opacity = '0';
        setTimeout(() => {
            checkoutModal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 400);
    });

    prevPageBtn.addEventListener('click', () => {
        if (state.paginaAtual > 1) {
            state.paginaAtual--;
            fadeOutAndRenderProducts();
            updatePagination();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (state.paginaAtual < state.totalPaginas) {
            state.paginaAtual++;
            fadeOutAndRenderProducts();
            updatePagination();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Event listeners para filtros
    searchInput.addEventListener('input', applyFilters);
    categorySelect.addEventListener('change', applyFilters);
    priceSelect.addEventListener('change', applyFilters);
    if (colorFilter) colorFilter.addEventListener('change', applyFilters);
    if (sizeFilter) sizeFilter.addEventListener('change', applyFilters);

    // Funções
    function initScrollAnimation() {
        // Animação de header ao rolar a página
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('py-2');
                header.classList.remove('shadow-lg');
            }
        });

        // Animação para itens na tela quando visíveis
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.product-card').forEach(item => {
            observer.observe(item);
        });
    }

    function fadeOutAndRenderProducts() {
        productsGrid.style.opacity = '0';
        productsGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            renderProducts();
            setTimeout(() => {
                productsGrid.style.opacity = '1';
                productsGrid.style.transform = 'translateY(0)';
            }, 50);
        }, 400);
    }

    function renderProducts() {
        productsGrid.innerHTML = '';
        productsGrid.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        const inicio = (state.paginaAtual - 1) * state.itensPorPagina;
        const fim = inicio + state.itensPorPagina;
        const produtosPagina = state.produtosFiltrados.slice(inicio, fim);
        
        if (produtosPagina.length === 0) {
            productsGrid.innerHTML = '<p class="col-span-full text-center text-gray-400 py-12">Nenhum produto encontrado</p>';
            return;
        }
        
        produtosPagina.forEach((produto, index) => {
            const produtoEl = document.createElement('div');
            produtoEl.className = 'product-card bg-accent rounded-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02]';
            produtoEl.style.opacity = '0';
            produtoEl.style.transform = 'translateY(20px)';
            
            // Verifica se este produto está nos últimos vistos
            const isRecentlyViewed = state.ultimosVistos.includes(produto.id);
            
            produtoEl.innerHTML = `
                <div class="relative overflow-hidden group">
                    <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110">
                    ${index % 4 === 0 ? '<div class="absolute top-2 right-2 bg-light text-dark text-xs font-bold px-2 py-1 rounded-full">TOP</div>' : ''}
                    ${index % 5 === 0 ? '<div class="absolute top-2 right-2 bg-light text-dark text-xs font-bold px-2 py-1 rounded-full">-10%</div>' : ''}
                    ${isRecentlyViewed ? '<div class="absolute bottom-2 left-2 bg-gray-800 text-light text-xs px-2 py-1 rounded-full">Visto recentemente</div>' : ''}
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <button class="view-details-btn bg-light text-dark px-3 py-2 rounded-md text-sm font-bold transform scale-0 transition-transform duration-300 group-hover:scale-100" data-id="${produto.id}">VER DETALHES</button>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-1">${produto.nome}</h3>
                    <p class="text-gray-400 mb-2">${produto.descricao}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-xl">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                        <button class="add-to-cart-btn btn-primary px-3 py-2 rounded-md text-sm transition-transform duration-300 hover:scale-105 active:scale-95" data-id="${produto.id}">COMPRAR</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(produtoEl);
            
            setTimeout(() => {
                produtoEl.style.opacity = '1';
                produtoEl.style.transform = 'translateY(0)';
            }, 100 + index * 100);
            
            const addToCartBtn = produtoEl.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', () => addToCart(produto));
            
            const viewDetailsBtn = produtoEl.querySelector('.view-details-btn');
            viewDetailsBtn.addEventListener('click', () => viewProductDetails(produto));
        });
    }

    function viewProductDetails(produto) {
        // Adicionar aos últimos vistos
        if (!state.ultimosVistos.includes(produto.id)) {
            state.ultimosVistos.unshift(produto.id);
            
            // Manter apenas os últimos 5 vistos
            if (state.ultimosVistos.length > 5) {
                state.ultimosVistos.pop();
            }
            
            // Salvar no localStorage
            localStorage.setItem('ultimosVistos', JSON.stringify(state.ultimosVistos));
        }
        
        // Criar modal de detalhes do produto
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.4s ease';
        
        // Definir a imagem padrão (primeira cor)
        const imagemPadrao = produto.imagem;
        
        modal.innerHTML = `
            <div class="bg-dark border border-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto p-6 transform transition-all duration-500 scale-95">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">${produto.nome}</h2>
                    <button class="close-details text-gray-400 hover:text-light transition-colors duration-300 hover:rotate-90 transform">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="overflow-hidden rounded-lg">
                        <img id="produto-imagem" src="${imagemPadrao}" alt="${produto.nome}" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700">
                    </div>
                    
                    <div>
                        <p class="text-gray-400 mb-4">${produto.descricao}</p>
                        <p class="text-xl font-bold mb-4">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                        
                        <div class="mb-6">
                            <h3 class="text-sm font-semibold mb-2">Tamanhos disponíveis:</h3>
                            <div class="flex flex-wrap gap-2">
                                ${produto.tamanhos.map(tamanho => `
                                    <label class="size-option cursor-pointer">
                                        <input type="radio" name="tamanho" value="${tamanho}" class="sr-only">
                                        <span class="inline-block w-10 h-10 flex items-center justify-center border border-gray-700 rounded-md hover:border-light transition-all duration-300">${tamanho}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                        
                        <button class="add-to-cart-details bg-light text-dark py-3 px-6 rounded-md font-bold hover:bg-gray-300 transition-all duration-300 w-full transform hover:scale-105 active:scale-95">
                            ADICIONAR AO CARRINHO
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.scale-95').classList.remove('scale-95');
        }, 10);
        
        // Event listeners para o modal
        modal.querySelector('.close-details').addEventListener('click', () => {
            modal.style.opacity = '0';
            modal.querySelector('.bg-dark').classList.add('scale-95');
            
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
            }, 400);
        });
        
        // Selecionar cores e tamanhos
        const sizeOptions = modal.querySelectorAll('.size-option');
        const produtoImagem = modal.querySelector('#produto-imagem');
        
        // Selecionar o primeiro por padrão
        if (sizeOptions.length > 0) {
            sizeOptions[0].querySelector('input').checked = true;
            sizeOptions[0].querySelector('span').classList.add('border-light');
        }
        
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                sizeOptions.forEach(opt => opt.querySelector('span').classList.remove('border-light'));
                option.querySelector('span').classList.add('border-light');
            });
        });
        
        // Adicionar ao carrinho com as opções selecionadas
        modal.querySelector('.add-to-cart-details').addEventListener('click', () => {
            const selectedSize = modal.querySelector('input[name="tamanho"]:checked').value;
            
            const existingItem = state.carrinho.find(item => 
                item.produto.id === produto.id && 
                item.tamanho === parseInt(selectedSize)
            );
            
            if (existingItem) {
                existingItem.quantidade += 1;
            } else {
                state.carrinho.push({
                    produto: produto,
                    quantidade: 1,
                    tamanho: parseInt(selectedSize)
                });
            }
            
            saveCartToLocalStorage();
            updateCartCount();
            
            // Fechar o modal com animação
            modal.style.opacity = '0';
            modal.querySelector('.bg-dark').classList.add('scale-95');
            
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
                
                // Mostrar notificação
                const notification = document.createElement('div');
                notification.textContent = `${produto.nome} adicionado ao carrinho!`;
                notification.className = 'fixed bottom-4 right-4 bg-light text-dark py-2 px-4 rounded-md shadow-lg z-50';
                notification.style.opacity = '0';
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
            }, 400);
        });
    }

    function addToCart(produto) {
        const existingItem = state.carrinho.find(item => item.produto.id === produto.id);
        
        if (existingItem) {
            existingItem.quantidade += 1;
        } else {
            state.carrinho.push({
                produto: produto,
                quantidade: 1,
                tamanho: produto.tamanhos[0]
            });
        }
        
        saveCartToLocalStorage();
        updateCartCount();
        
        const notification = document.createElement('div');
        notification.textContent = `${produto.nome} adicionado ao carrinho!`;
        notification.className = 'fixed bottom-4 right-4 bg-light text-dark py-2 px-4 rounded-md shadow-lg z-50';
        notification.style.opacity = '0';
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
    }

    function renderCart() {
        if (state.carrinho.length === 0) {
            cartItems.innerHTML = '';
            emptyCart.classList.remove('hidden');
            checkoutBtn.disabled = true;
            updateCartTotals();
            return;
        }
        
        emptyCart.classList.add('hidden');
        checkoutBtn.disabled = false;
        cartItems.innerHTML = '';
        
        state.carrinho.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'flex border border-gray-800 rounded-lg p-4 opacity-0';
            cartItem.style.transform = 'translateY(20px)';
            cartItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            cartItem.innerHTML = `
                <img src="${item.produto.imagem}" alt="${item.produto.nome}" class="w-20 h-20 object-cover rounded-md">
                <div class="ml-4 flex-grow">
                    <div class="flex justify-between">
                        <h3 class="font-semibold">${item.produto.nome}</h3>
                        <button class="remove-item text-gray-500 hover:text-gray-300" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-sm text-gray-400">Tamanho: ${item.tamanho}</p>
                    <div class="flex justify-between items-center mt-2">
                        <div class="flex items-center">
                            <button class="decrement-qty bg-dark px-2 rounded-l-md border border-gray-700 transition-all duration-300">-</button>
                            <span class="item-qty bg-dark px-3 py-1 border-t border-b border-gray-700">${item.quantidade}</span>
                            <button class="increment-qty bg-dark px-2 rounded-r-md border border-gray-700 transition-all duration-300">+</button>
                        </div>
                        <span class="font-semibold">R$ ${(item.produto.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
            
            setTimeout(() => {
                cartItem.style.opacity = '1';
                cartItem.style.transform = 'translateY(0)';
            }, 100 + index * 100);
            
            cartItem.querySelector('.remove-item').addEventListener('click', () => removeCartItem(index));
            cartItem.querySelector('.decrement-qty').addEventListener('click', () => updateCartItemQuantity(index, -1));
            cartItem.querySelector('.increment-qty').addEventListener('click', () => updateCartItemQuantity(index, 1));
        });
        
        updateCartTotals();
    }

    function removeCartItem(index) {
        const cartItems = document.querySelectorAll('#cart-items > div');
        const itemToRemove = cartItems[index];
        
        itemToRemove.style.opacity = '0';
        itemToRemove.style.transform = 'translateX(100px)';
        
        setTimeout(() => {
            state.carrinho.splice(index, 1);
            saveCartToLocalStorage();
            renderCart();
            updateCartCount();
        }, 400);
    }

    function updateCartItemQuantity(index, change) {
        const item = state.carrinho[index];
        item.quantidade += change;
        
        if (item.quantidade < 1) {
            item.quantidade = 1;
        }
        
        const qtdElement = document.querySelectorAll('.item-qty')[index];
        if (qtdElement) {
            qtdElement.classList.add('scale-125');
            qtdElement.textContent = item.quantidade;
            
            setTimeout(() => {
                qtdElement.classList.remove('scale-125');
            }, 200);
        }
        
        saveCartToLocalStorage();
        updateCartTotals();
        updateCartCount();
    }

    function updateCartTotals() {
        const subtotal = state.carrinho.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
        const shipping = subtotal > 0 ? (subtotal >= 300 ? 0 : 20) : 0;
        const total = subtotal + shipping;
        
        cartSubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        cartShipping.textContent = shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2).replace('.', ',')}`;
        cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        
        cartTotal.classList.add('scale-110');
        setTimeout(() => {
            cartTotal.classList.remove('scale-110');
        }, 300);
    }

    function updateCartCount() {
        const count = state.carrinho.reduce((total, item) => total + item.quantidade, 0);
        
        if (count !== parseInt(cartCount.textContent)) {
            cartCount.classList.add('scale-150');
            cartCount.textContent = count;
            
            setTimeout(() => {
                cartCount.classList.remove('scale-150');
            }, 300);
            
            const cartIcon = cartButton.querySelector('svg');
            if (cartIcon) {
                cartIcon.classList.add('scale-125');
                setTimeout(() => {
                    cartIcon.classList.remove('scale-125');
                }, 300);
            }
        } else {
            cartCount.textContent = count;
        }
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('carrinho', JSON.stringify(state.carrinho));
    }

    function loadCartFromLocalStorage() {
        const savedCart = localStorage.getItem('carrinho');
        if (savedCart) {
            try {
                state.carrinho = JSON.parse(savedCart);
            } catch (e) {
                state.carrinho = [];
            }
        }
    }

    function loadRecentlyViewed() {
        const savedViewed = localStorage.getItem('ultimosVistos');
        if (savedViewed) {
            try {
                state.ultimosVistos = JSON.parse(savedViewed);
            } catch (e) {
                state.ultimosVistos = [];
            }
        }
    }

    function renderColorAndSizeFilters() {
        if (!colorFilter || !sizeFilter) return;
        
        // Obter todos os tamanhos únicos
        const allSizes = [];
        produtos.forEach(produto => {
            produto.tamanhos.forEach(tamanho => {
                if (!allSizes.includes(tamanho)) {
                    allSizes.push(tamanho);
                }
            });
        });
        
        // Ordenar tamanhos
        allSizes.sort((a, b) => a - b);
        
        // Renderizar filtro de tamanhos
        sizeFilter.innerHTML = `
            <option value="">Todos os tamanhos</option>
            ${allSizes.map(tamanho => `<option value="${tamanho}">${tamanho}</option>`).join('')}
        `;
    }

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        const maxPrice = priceSelect.value ? parseFloat(priceSelect.value) : Infinity;
        const selectedSize = sizeFilter ? sizeFilter.value : '';
        
        state.filtros.tamanho = selectedSize ? parseInt(selectedSize) : '';
        
        state.produtosFiltrados = state.produtos.filter(produto => {
            const matchesSearch = produto.nome.toLowerCase().includes(searchTerm) || 
                               produto.descricao.toLowerCase().includes(searchTerm);
            const matchesCategory = category === '' || produto.categoria === category;
            const matchesPrice = produto.preco <= maxPrice;
            
            const matchesSize = selectedSize === '' || produto.tamanhos.includes(parseInt(selectedSize));
            
            return matchesSearch && matchesCategory && matchesPrice && matchesSize;
        });
        
        state.totalPaginas = Math.ceil(state.produtosFiltrados.length / state.itensPorPagina);
        state.paginaAtual = 1;
        fadeOutAndRenderProducts();
        updatePagination();
        
        // Salvar preferências de filtro
        saveFilterPreferences();
        
        // Animar o filtro de tamanho
        animateFilterSelection();
    }

    function animateFilterSelection() {
        // Animar o filtro de categoria
        const categoryOptions = categorySelect.querySelectorAll('option');
        categoryOptions.forEach(option => {
            if (option.value === categorySelect.value) {
                categorySelect.classList.add('pulse-once');
                setTimeout(() => {
                    categorySelect.classList.remove('pulse-once');
                }, 600);
            }
        });
        
        // Animar o filtro de preço
        if (priceSelect.value) {
            priceSelect.classList.add('pulse-once');
            setTimeout(() => {
                priceSelect.classList.remove('pulse-once');
            }, 600);
        }
        
        // Animar o filtro de tamanho
        if (sizeFilter && sizeFilter.value) {
            sizeFilter.classList.add('pulse-once');
            setTimeout(() => {
                sizeFilter.classList.remove('pulse-once');
            }, 600);
        }
    }

    function saveFilterPreferences() {
        const preferences = {
            searchTerm: searchInput.value,
            category: categorySelect.value,
            maxPrice: priceSelect.value,
            size: sizeFilter ? sizeFilter.value : ''
        };
        
        localStorage.setItem('filterPreferences', JSON.stringify(preferences));
    }
    
    function loadFilterPreferences() {
        const savedPreferences = localStorage.getItem('filterPreferences');
        if (savedPreferences) {
            try {
                const preferences = JSON.parse(savedPreferences);
                
                if (preferences.searchTerm) {
                    searchInput.value = preferences.searchTerm;
                }
                
                if (preferences.category) {
                    categorySelect.value = preferences.category;
                }
                
                if (preferences.maxPrice) {
                    priceSelect.value = preferences.maxPrice;
                }
                
                if (preferences.size && sizeFilter) {
                    sizeFilter.value = preferences.size;
                    state.filtros.tamanho = preferences.size ? parseInt(preferences.size) : '';
                }
                
                // Aplicar os filtros carregados
                applyFilters();
            } catch (e) {
                console.error('Erro ao carregar preferências de filtro:', e);
            }
        }
    }

    function updatePagination() {
        currentPageSpan.textContent = state.paginaAtual;
        totalPagesSpan.textContent = state.totalPaginas;
        
        prevPageBtn.disabled = state.paginaAtual === 1;
        nextPageBtn.disabled = state.paginaAtual === state.totalPaginas;
        
        if (prevPageBtn.disabled) {
            prevPageBtn.classList.add('opacity-50');
        } else {
            prevPageBtn.classList.remove('opacity-50');
        }
        
        if (nextPageBtn.disabled) {
            nextPageBtn.classList.add('opacity-50');
        } else {
            nextPageBtn.classList.remove('opacity-50');
        }
    }

    // Menu Mobile
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

    // Adicionar efeito de scroll suave para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    cartModal.style.transition = 'opacity 0.4s ease';
    checkoutModal.style.transition = 'opacity 0.4s ease';
}); 