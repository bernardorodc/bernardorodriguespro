// Language Switch Functionality

const translations = {
    "pt": {
        "nav_inicio": "Início",
        "nav_servicos": "Serviços",
        "nav_portfolio": "Portfólio",
        "nav_curriculo": "Currículo",
        "nav_contato": "Contato",
        "hero_h1_prefix": "Bernardo Rodrigues | WAV: ",
        "hero_p": "Transformo desafios complexos em resultados concretos, combinando expertise multidisciplinar em Marketing, Design, Tecnologia e Inteligência Artificial para impulsionar o crescimento do seu negócio.",
        "hero_btn1": "Conheça meus Serviços",
        "hero_btn2": "Vamos Conversar?",
        "sobre_h2": "Sobre Bernardo Rodrigues",
        "sobre_p1": "Olá! Sou Bernardo Rodrigues, um <strong>empreendedor e estrategista</strong> apaixonado pela dinâmica do <strong>marketing digital, tecnologia e inovação</strong>. Minha trajetória é marcada pela busca constante por <strong>soluções criativas e eficazes</strong>, combinando uma <strong>visão estratégica</strong> apurada com a <strong>execução prática</strong> em diversas frentes.",
        "sobre_h4_1": "Minha Jornada",
        "sobre_p2": "Desde cedo, mergulhei no universo do marketing, fundando a <strong>WAV Enterprise</strong> como uma agência focada em entregar <strong>resultados tangíveis</strong>. Ao longo dos anos, liderei projetos para uma variedade de clientes, adquirindo um <strong>profundo entendimento</strong> das necessidades de negócios em <strong>diferentes setores</strong>.",
        "sobre_h4_2": "Paixão por IA",
        "sobre_p3": "Minha curiosidade me levou a explorar as <strong>fronteiras da tecnologia</strong>, especializando-me em <strong>Inteligência Artificial</strong> e suas <strong>aplicações práticas</strong> no marketing e em operações empresariais. Acredito que a combinação de <strong>estratégia de marketing, design centrado no usuário, tecnologia de ponta</strong> e o <strong>poder transformador da IA</strong> é a chave para criar <strong>experiências memoráveis</strong> e impulsionar um <strong>crescimento sustentável</strong>.",
        "sobre_h4_3": "Parceria Estratégica",
        "sobre_p4": "Meu objetivo é atuar como um <strong>parceiro estratégico</strong>, utilizando minha <strong>expertise multidisciplinar</strong> para desenvolver <strong>soluções personalizadas</strong> que não apenas atendam, mas <strong>superem as suas expectativas</strong>. Vamos juntos transformar suas ideias em <strong>resultados concretos</strong>?",
        "servicos_h2": "Meus Serviços: Soluções Completas para o seu Sucesso Digital",
        "servicos_p": "Ofereço uma gama completa de serviços, combinando estratégias comprovadas de marketing digital com o poder inovador da Inteligência Artificial. Minha abordagem é personalizada, focada em entender suas necessidades específicas e entregar resultados mensuráveis que impulsionam o seu crescimento.",
        "servicos_h3_1": "Marketing Digital e Criação",
        "servicos_card1_h4": "Design Gráfico",
        "servicos_card1_p": "Criação de identidades visuais marcantes, materiais gráficos (online e offline) e layouts que comunicam a essência da sua marca.",
        "servicos_card2_h4": "Audiovisual",
        "servicos_card2_p": "Produção de vídeos institucionais, promocionais, animações e conteúdo para redes sociais, contando sua história de forma envolvente.",
        "servicos_card3_h4": "Social Media",
        "servicos_card3_p": "Gestão estratégica de redes sociais, criação de conteúdo relevante e construção de uma comunidade forte para sua marca.",
        "servicos_card4_h4": "Gestão de Tráfego",
        "servicos_card4_p": "Planejamento e execução de campanhas de anúncios pagos (Google Ads, Meta Ads, etc.) para atrair tráfego qualificado e gerar leads.",
        "servicos_card5_h4": "Desenvolvimento de Sites",
        "servicos_card5_p": "Criação de sites institucionais, landing pages e e-commerces modernos, responsivos e otimizados para performance e UX.",
        "servicos_card6_h4": "Copywriting",
        "servicos_card6_p": "Redação de textos persuasivos e estratégicos para sites, anúncios, emails e redes sociais, conectando-se com seu público.",
        "servicos_h3_2": "Soluções com Inteligência Artificial",
        "servicos_card7_h4": "AI Agents",
        "servicos_card7_p": "Assistentes virtuais para automatizar vendas, agendamento, suporte e atendimento ao cliente 24/7.",
        "servicos_card8_h4": "AI Agents System",
        "servicos_card8_p": "Sistemas integrados com múltiplos agentes de IA colaborando para otimizar processos complexos.",
        "servicos_card9_h4": "Desenvolvimento de Aplicações de IA",
        "servicos_card9_p": "Implementação de soluções de IA personalizadas para resolver desafios específicos do seu negócio.",
        "servicos_card10_h4": "Dashboards em Tempo Real",
        "servicos_card10_p": "Painéis de controle interativos que integram e visualizam dados complexos para tomada de decisão estratégica.",
        "servicos_card11_h4": "Lançamento de Experts (com IA)",
        "servicos_card11_p": "Estratégias e ferramentas de IA para otimizar lançamentos digitais, da análise de público à automação.",
        "servicos_card12_h4": "Geração de Imagens com IA",
        "servicos_card12_p": "Criação de imagens únicas e de alta qualidade para campanhas, produtos e conceitos visuais.",
        "servicos_card13_h4": "Geração de Identidade Visual com IA",
        "servicos_card13_p": "Desenvolvimento de logos, paletas e tipografias completos para sua marca usando IA.",
        "servicos_card14_h4": "Geração de Avatares Personalizados",
        "servicos_card14_p": "Criação de avatares digitais realistas ou estilizados para representar sua marca ou persona.",
        "servicos_card15_h4": "Sincronização Labial para Vídeos",
        "servicos_card15_p": "Aplicação de IA para sincronizar perfeitamente o movimento labial em vídeos com diferentes áudios.",
        "servicos_card16_h4": "Clonagem de Voz",
        "servicos_card16_p": "Criação de réplica digital da sua voz para uso em narrações, assistentes virtuais e outras aplicações.",
        "servicos_card17_h4": "Clonagem de Avatar com IA",
        "servicos_card17_p": "Desenvolvimento de um avatar digital 3D realista baseado em você para vídeos e aplicações interativas.",
        "luna_h2": "Luna AI System: Sua Operação Inteligente 24/7",
        "luna_p": "A Luna AI System é uma solução de Inteligência Artificial desenvolvida por mim do zero. É uma tecnologia robusta, versátil e integrada, que pode ser aplicada em qualquer tipo de empresa — desde vendas automatizadas até agendamentos e suporte completo. Tudo isso com linguagem natural e conexão com os sistemas da empresa.",
        "luna_card1_h4": "Vendas Inteligentes",
        "luna_card1_p": "Pode vender qualquer tipo de produto, serviço, curso, assinatura ou pacote personalizado.",
        "luna_card2_h4": "Agendamentos Automatizados",
        "luna_card2_p": "Ideal para consultórios médicos, clínicas odontológicas, psicologia, estética, academias e muito mais.",
        "luna_card3_h4": "Suporte ao Cliente",
        "luna_card3_p": "Responde dúvidas e oferece suporte completo, com linguagem humanizada e natural.",
        "luna_card4_h4": "Atendimento Personalizado",
        "luna_card4_p": "Entende contexto, se adapta à identidade da marca, e pode simular o estilo do CEO ou equipe.",
        "luna_card5_h4": "Integrações Profundas",
        "luna_card5_p": "Se conecta com CRMs, ERPs, bancos de dados, planilhas, APIs externas e sistemas internos.",
        "luna_card6_h4": "Operação 24/7",
        "luna_card6_p": "Funciona 100% do tempo, sem pausas, oferecendo estabilidade e produtividade contínua.",
        "luna_btn1": "Quero a Luna na minha empresa",
        "luna_btn2": "Saber mais",
        "casos_uso_h2": "Aplicações Práticas da Luna AI",
        "casos_uso_p": "Veja como a Luna AI System pode transformar operações em diversos setores, automatizando tarefas e otimizando resultados.",
        "casos_uso_card1_h4": "Psicologia",
        "casos_uso_card1_p": "Agendamento inteligente de sessões, triagem inicial de pacientes e envio de lembretes automáticos.",
        "casos_uso_card2_h4": "Clínicas Médicas",
        "casos_uso_card2_p": "Gestão de agenda médica, confirmação de consultas, respostas a dúvidas frequentes sobre procedimentos.",
        "casos_uso_card3_h4": "Estética",
        "casos_uso_card3_p": "Agendamento de tratamentos, informações sobre serviços, promoções e acompanhamento pós-procedimento.",
        "casos_uso_card4_h4": "Infoprodutores",
        "casos_uso_card4_p": "Suporte a alunos, vendas de cursos, recuperação de carrinho abandonado e qualificação de leads.",
        "casos_uso_card5_h4": "E-commerce",
        "casos_uso_card5_p": "Atendimento ao cliente, rastreamento de pedidos, recomendação de produtos e suporte pós-venda.",
        "casos_uso_card6_h4": "Agências",
        "casos_uso_card6_p": "Qualificação de leads, agendamento de reuniões, onboarding de clientes e suporte técnico inicial.",
        "diferenciais_h2": "Minha Abordagem: Visão Integrada para Resultados Superiores",
        "diferenciais_p": "O que me diferencia é a capacidade de integrar conhecimentos de Marketing, Design, Tecnologia e Inteligência Artificial em uma abordagem única e focada em resultados. Não ofereço soluções genéricas; mergulho no seu negócio para entender seus desafios e objetivos, criando estratégias personalizadas que realmente funcionam.",
        "diferenciais_item1_h4": "Visão Multidisciplinar",
        "diferenciais_item1_p": "Conecto os pontos entre estratégia de marketing, UX, design impactante e tecnologia de ponta para o máximo impacto.",
        "diferenciais_item2_h4": "Estratégia Personalizada",
        "diferenciais_item2_p": "Desenvolvo planos de ação sob medida, baseados em análise de dados e nas particularidades do seu mercado e público.",
        "diferenciais_item3_h4": "Foco em Resultados",
        "diferenciais_item3_p": "Minha prioridade é gerar crescimento mensurável para o seu negócio, com métricas claras e acompanhamento contínuo.",
        "diferenciais_item4_h4": "Inovação Contínua",
        "diferenciais_item4_p": "Estou sempre atualizado sobre as últimas tendências e tecnologias, buscando novas formas de otimizar suas estratégias.",
        "curriculo_h2": "Minha Trajetória",
        "curriculo_p": "Minha jornada profissional é uma combinação de formação contínua e experiência prática diversificada, sempre buscando conectar marketing, tecnologia e estratégia.",
        "curriculo_card1_h4": "Formação Acadêmica e Complementar",
        "curriculo_card1_li1": "Marketing e Ciência de Dados (CEUB, 2024)",
        "curriculo_card1_li2": "Multi AI Agent Systems with crewAI (DeepLearning.AI, 2025)",
        "curriculo_card1_li3": "NewSociety AI Agent (2025)",
        "curriculo_card1_li4": "Ensino Médio Completo (Sigma/Alub, 2020)",
        "curriculo_card2_h4": "Experiência Profissional Chave",
        "curriculo_card2_li1": "<strong>CEO / Fundador - Wav Enterprise (2023):</strong> Concepção e gestão de agência, atendendo +20 clientes.",
        "curriculo_card2_li2": "<strong>Marketing – Happy Harry (2024):</strong> Produção audiovisual, design gráfico e UI/UX",
        "curriculo_card2_li3": "<strong>Marketing – Mr Brownie (2024):</strong> Criação de conteúdo audiovisual, peças gráficas e identidade visual para rebranding",
        "curriculo_card2_li4": "<strong>Desenvolvedor de IA – IFP (2025):</strong> Criação e implantação de sistema multiagente de IA para agendamento, atendimento e suporte",
        "curriculo_card3_h4": "Principais Habilidades",
        "curriculo_card3_li1": "Marketing Estratégico e Digital",
        "curriculo_card3_li2": "Inteligência Artificial Aplicada (AI Agents, Dev)",
        "curriculo_card3_li3": "Design Gráfico e UI/UX",
        "curriculo_card3_li4": "Desenvolvimento Web e Gestão de Tráfego",
        "curriculo_card3_li5": "Produção Audiovisual e Copywriting",
        "curriculo_card3_li6": "Liderança e Gestão de Projetos",
        "curriculo_card3_li7": "Análise de Dados",
        "curriculo_card4_h4": "Idiomas",
        "curriculo_card4_li1": "Inglês (Avançado/Fluente)",
        "curriculo_card4_li2": "Espanhol (Intermediário)",
        "contato_h2": "Vamos Transformar suas Ideias em Resultados?",
        "contato_p1": "Estou pronto para ouvir sobre seus desafios e objetivos. Seja para discutir um novo projeto, tirar dúvidas sobre meus serviços ou solicitar um orçamento personalizado, entre em contato. Vamos encontrar a melhor forma de aplicar minha expertise em marketing, design, tecnologia e IA para impulsionar o seu negócio.",
        "contato_btn_wpp": "Conversar pelo WhatsApp",
        "contato_email_label": "E-mail:",
        "contato_tel_label": "Telefone:",
        "contato_form_nome": "Nome",
        "contato_form_email": "Email",
        "contato_form_assunto": "Assunto (Opcional)",
        "contato_form_msg": "Sua Mensagem",
        "contato_form_submit": "Enviar Mensagem",
        "footer_copyright": "&copy; 2025 Bernardo Rodrigues | WAV"
    },
    "en": {
        "nav_inicio": "Home",
        "nav_servicos": "Services",
        "nav_portfolio": "Portfolio",
        "nav_curriculo": "Resume",
        "nav_contato": "Contact",
        "hero_h1_prefix": "Bernardo Rodrigues | WAV: ", // Typed text will remain
        "hero_p": "I transform complex challenges into concrete results, combining multidisciplinary expertise in Marketing, Design, Technology, and Artificial Intelligence to boost your business growth.",
        "hero_btn1": "Explore my Services",
        "hero_btn2": "Let's Talk?",
        "sobre_h2": "About Bernardo Rodrigues",
        "sobre_p1": "Hello! I'm Bernardo Rodrigues, an <strong>entrepreneur and strategist</strong> passionate about the dynamics of <strong>digital marketing, technology, and innovation</strong>. My journey is marked by a constant search for <strong>creative and effective solutions</strong>, combining a sharp <strong>strategic vision</strong> with <strong>practical execution</strong> on multiple fronts.",
        "sobre_h4_1": "My Journey",
        "sobre_p2": "Early on, I dove into the marketing universe, founding <strong>WAV Enterprise</strong> as an agency focused on delivering <strong>tangible results</strong>. Over the years, I led projects for a variety of clients, gaining a <strong>deep understanding</strong> of business needs across <strong>different sectors</strong>.",
        "sobre_h4_2": "Passion for AI",
        "sobre_p3": "My curiosity led me to explore the <strong>frontiers of technology</strong>, specializing in <strong>Artificial Intelligence</strong> and its <strong>practical applications</strong> in marketing and business operations. I believe that the combination of <strong>marketing strategy, user-centered design, cutting-edge technology</strong>, and the <strong>transformative power of AI</strong> is the key to creating <strong>memorable experiences</strong> and driving <strong>sustainable growth</strong>.",
        "sobre_h4_3": "Strategic Partnership",
        "sobre_p4": "My goal is to act as a <strong>strategic partner</strong>, using my <strong>multidisciplinary expertise</strong> to develop <strong>customized solutions</strong> that not only meet but <strong>exceed your expectations</strong>. Shall we transform your ideas into <strong>concrete results</strong> together?",
        "servicos_h2": "My Services: Complete Solutions for Your Digital Success",
        "servicos_p": "I offer a full range of services, combining proven digital marketing strategies with the innovative power of Artificial Intelligence. My approach is personalized, focused on understanding your specific needs and delivering measurable results that drive your growth.",
        "servicos_h3_1": "Digital Marketing and Creation",
        "servicos_card1_h4": "Graphic Design",
        "servicos_card1_p": "Creation of striking visual identities, graphic materials (online and offline), and layouts that communicate the essence of your brand.",
        "servicos_card2_h4": "Audiovisual",
        "servicos_card2_p": "Production of institutional and promotional videos, animations, and social media content, telling your story engagingly.",
        "servicos_card3_h4": "Social Media",
        "servicos_card3_p": "Strategic social media management, creation of relevant content, and building a strong community for your brand.",
        "servicos_card4_h4": "Traffic Management",
        "servicos_card4_p": "Planning and execution of paid ad campaigns (Google Ads, Meta Ads, etc.) to attract qualified traffic and generate leads.",
        "servicos_card5_h4": "Website Development",
        "servicos_card5_p": "Creation of modern, responsive institutional websites, landing pages, and e-commerces optimized for performance and UX.",
        "servicos_card6_h4": "Copywriting",
        "servicos_card6_p": "Writing persuasive and strategic texts for websites, ads, emails, and social media, connecting with your audience.",
        "servicos_h3_2": "Solutions with Artificial Intelligence",
        "servicos_card7_h4": "AI Agents",
        "servicos_card7_p": "Virtual assistants to automate sales, scheduling, support, and customer service 24/7.",
        "servicos_card8_h4": "AI Agents System",
        "servicos_card8_p": "Integrated systems with multiple AI agents collaborating to optimize complex processes.",
        "servicos_card9_h4": "AI Application Development",
        "servicos_card9_p": "Implementation of custom AI solutions to solve specific business challenges.",
        "servicos_card10_h4": "Real-Time Dashboards",
        "servicos_card10_p": "Interactive control panels that integrate and visualize complex data for strategic decision-making.",
        "servicos_card11_h4": "Expert Launches (with AI)",
        "servicos_card11_p": "AI strategies and tools to optimize digital launches, from audience analysis to automation.",
        "servicos_card12_h4": "AI Image Generation",
        "servicos_card12_p": "Creation of unique, high-quality images for campaigns, products, and visual concepts.",
        "servicos_card13_h4": "AI Visual Identity Generation",
        "servicos_card13_p": "Development of complete logos, palettes, and typography for your brand using AI.",
        "servicos_card14_h4": "Custom Avatar Generation",
        "servicos_card14_p": "Creation of realistic or stylized digital avatars to represent your brand or persona.",
        "servicos_card15_h4": "Lip Sync for Videos",
        "servicos_card15_p": "Application of AI to perfectly synchronize lip movement in videos with different audios.",
        "servicos_card16_h4": "Voice Cloning",
        "servicos_card16_p": "Creation of a digital replica of your voice for use in narrations, virtual assistants, and other applications.",
        "servicos_card17_h4": "AI Avatar Cloning",
        "servicos_card17_p": "Development of a realistic 3D digital avatar based on you for videos and interactive applications.",
        "luna_h2": "Luna AI System: Your Intelligent 24/7 Operation",
        "luna_p": "Luna AI System is an Artificial Intelligence solution developed by me from scratch. It is a robust, versatile, and integrated technology that can be applied in any type of company — from automated sales to scheduling and complete support. All with natural language and connection to the company's systems.",
        "luna_card1_h4": "Intelligent Sales",
        "luna_card1_p": "Can sell any type of product, service, course, subscription, or personalized package.",
        "luna_card2_h4": "Automated Scheduling",
        "luna_card2_p": "Ideal for medical offices, dental clinics, psychology, aesthetics, gyms, and more.",
        "luna_card3_h4": "Customer Support",
        "luna_card3_p": "Answers questions and offers complete support, with humanized and natural language.",
        "luna_card4_h4": "Personalized Service",
        "luna_card4_p": "Understands context, adapts to the brand identity, and can simulate the style of the CEO or team.",
        "luna_card5_h4": "Deep Integrations",
        "luna_card5_p": "Connects with CRMs, ERPs, databases, spreadsheets, external APIs, and internal systems.",
        "luna_card6_h4": "24/7 Operation",
        "luna_card6_p": "Works 100% of the time, without breaks, offering stability and continuous productivity.",
        "luna_btn1": "I want Luna in my company",
        "luna_btn2": "Learn more",
        "casos_uso_h2": "Practical Applications of Luna AI",
        "casos_uso_p": "See how Luna AI System can transform operations in various sectors, automating tasks and optimizing results.",
        "casos_uso_card1_h4": "Psychology",
        "casos_uso_card1_p": "Intelligent session scheduling, initial patient screening, and automatic reminder sending.",
        "casos_uso_card2_h4": "Medical Clinics",
        "casos_uso_card2_p": "Medical schedule management, appointment confirmation, answers to frequently asked questions about procedures.",
        "casos_uso_card3_h4": "Aesthetics",
        "casos_uso_card3_p": "Treatment scheduling, information about services, promotions, and post-procedure follow-up.",
        "casos_uso_card4_h4": "Infoproducers",
        "casos_uso_card4_p": "Student support, course sales, abandoned cart recovery, and lead qualification.",
        "casos_uso_card5_h4": "E-commerce",
        "casos_uso_card5_p": "Customer service, order tracking, product recommendation, and after-sales support.",
        "casos_uso_card6_h4": "Agencies",
        "casos_uso_card6_p": "Lead qualification, meeting scheduling, client onboarding, and initial technical support.",
        "diferenciais_h2": "My Approach: Integrated Vision for Superior Results",
        "diferenciais_p": "What sets me apart is the ability to integrate knowledge of Marketing, Design, Technology, and Artificial Intelligence into a unique, results-focused approach. I don't offer generic solutions; I dive into your business to understand your challenges and goals, creating personalized strategies that truly work.",
        "diferenciais_item1_h4": "Multidisciplinary Vision",
        "diferenciais_item1_p": "I connect the dots between marketing strategy, UX, impactful design, and cutting-edge technology for maximum impact.",
        "diferenciais_item2_h4": "Personalized Strategy",
        "diferenciais_item2_p": "I develop tailor-made action plans based on data analysis and the specifics of your market and audience.",
        "diferenciais_item3_h4": "Focus on Results",
        "diferenciais_item3_p": "My priority is to generate measurable growth for your business, with clear metrics and continuous monitoring.",
        "diferenciais_item4_h4": "Continuous Innovation",
        "diferenciais_item4_p": "I am always updated on the latest trends and technologies, seeking new ways to optimize your strategies.",
        "curriculo_h2": "My Trajectory",
        "curriculo_p": "My professional journey is a combination of continuous education and diverse practical experience, always seeking to connect marketing, technology, and strategy.",
        "curriculo_card1_h4": "Academic and Complementary Education",
        "curriculo_card1_li1": "Marketing and Data Science (CEUB, 2024)",
        "curriculo_card1_li2": "Multi AI Agent Systems with crewAI (DeepLearning.AI, 2025)",
        "curriculo_card1_li3": "NewSociety AI Agent (2025)",
        "curriculo_card1_li4": "High School Diploma (Sigma/Alub, 2020)",
        "curriculo_card2_h4": "Key Professional Experience",
        "curriculo_card2_li1": "<strong>CEO / Founder - Wav Enterprise (2023):</strong> Agency conception and management, serving +20 clients.",
        "curriculo_card2_li2": "<strong>Marketing – Happy Harry (2024):</strong> Audiovisual production, graphic design, and UI/UX",
        "curriculo_card2_li3": "<strong>Marketing – Mr Brownie (2024):</strong> Audiovisual content creation, graphic pieces, and visual identity for rebranding",
        "curriculo_card2_li4": "<strong>AI Developer – IFP (2025):</strong> Creation and deployment of multi-agent AI system for scheduling, service, and support",
        "curriculo_card3_h4": "Main Skills",
        "curriculo_card3_li1": "Strategic and Digital Marketing",
        "curriculo_card3_li2": "Applied Artificial Intelligence (AI Agents, Dev)",
        "curriculo_card3_li3": "Graphic Design and UI/UX",
        "curriculo_card3_li4": "Web Development and Traffic Management",
        "curriculo_card3_li5": "Audiovisual Production and Copywriting",
        "curriculo_card3_li6": "Leadership and Project Management",
        "curriculo_card3_li7": "Data Analysis",
        "curriculo_card4_h4": "Languages",
        "curriculo_card4_li1": "English (Advanced/Fluent)",
        "curriculo_card4_li2": "Spanish (Intermediate)",
        "contato_h2": "Let's Transform Your Ideas into Results?",
        "contato_p1": "I'm ready to hear about your challenges and goals. Whether to discuss a new project, ask questions about my services, or request a personalized quote, get in touch. Let's find the best way to apply my expertise in marketing, design, technology, and AI to boost your business.",
        "contato_btn_wpp": "Chat on WhatsApp",
        "contato_email_label": "E-mail:",
        "contato_tel_label": "Phone:",
        "contato_form_nome": "Name",
        "contato_form_email": "Email",
        "contato_form_assunto": "Subject (Optional)",
        "contato_form_msg": "Your Message",
        "contato_form_submit": "Send Message",
        "footer_copyright": "&copy; 2025 Bernardo Rodrigues | WAV"
    }
};

let currentLang = "pt"; // Default language

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"; // Update html lang attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Update button text
    document.getElementById('lang-switch-btn').textContent = lang.toUpperCase();
    // Update Typed.js strings if needed (example, needs adjustment based on actual Typed.js usage)
    // if (typedInstance) { // Assuming 'typedInstance' holds the Typed object
    //     typedInstance.strings = translations[lang].typed_strings; // Assuming you add 'typed_strings' to translations
    //     typedInstance.reset();
    // }
}

// Event Listener for Language Switch Button
document.getElementById('lang-switch-btn').addEventListener('click', () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(newLang);
    // Optional: Save preference to localStorage
    // localStorage.setItem('preferredLang', newLang);
});

// Optional: Load preferred language from localStorage on page load
// document.addEventListener('DOMContentLoaded', () => {
//     const preferredLang = localStorage.getItem('preferredLang');
//     if (preferredLang) {
//         setLanguage(preferredLang);
//     }
// });





// Theme Switch Functionality
const themeSwitchBtn = document.getElementById('theme-switch-btn');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const logoImg = document.querySelector('.logo img');
const originalLogoSrc = 'assets/logo_wav_preto.webp';
const darkLogoSrc = 'assets/logo_wav_branco.webp'; // Assuming a white logo exists

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitchBtn.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
        if (logoImg) logoImg.src = darkLogoSrc; // Change logo to white version
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        themeSwitchBtn.innerHTML = '<i class="fas fa-sun"></i>'; // Change icon to sun
        if (logoImg) logoImg.src = originalLogoSrc; // Change logo back to original
        localStorage.setItem('theme', 'light');
    }
}

// Apply initial theme
if (currentTheme === 'dark') {
    setTheme('dark');
} else {
    // Optional: Check for user's system preference if no theme is saved
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // if (prefersDark) {
    //     setTheme('dark');
    // } else {
        setTheme('light'); // Default to light
    // }
}

// Event Listener for Theme Switch Button
themeSwitchBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(newTheme);
});

// --- Mobile Menu Toggle --- (Assuming this exists or needs to be added)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active'); // Optional: for styling the toggle itself
    });
}

// --- Back to Top Button --- (Assuming this exists or needs to be added)
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

