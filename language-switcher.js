/* Mayor Excelsior — Language switcher (EN/ES) */
(function () {
  const translations = {
    /* NAV */
    "nav-commercial": { en: "Commercial", es: "Comercial" },
    "nav-residential": { en: "Residential", es: "Residencial" },
    "nav-how-it-works": { en: "How It Works", es: "Cómo funciona" },
    "nav-our-story": { en: "Our Story", es: "Nuestra historia" },
    "nav-gallery": { en: "Gallery", es: "Galería" },
    "nav-quote": { en: "Quote", es: "Cotización" },
    "nav-faq": { en: "FAQ", es: "Preguntas" },
    "nav-email": { en: "Email Us", es: "Escríbenos" },
    "nav-whatsapp": { en: "Chat on WhatsApp", es: "Chat en WhatsApp" },
    "nav-book": { en: "Book Now", es: "Reservar" },

    /* HERO */
    "hero-kicker": {
      en: "Residential & Commercial Cleaning",
      es: "Limpieza residencial y comercial",
    },
    "hero-headline": {
      en: "Show up to a clean home or business. Every time.",
      es: "Llega a un hogar o negocio limpio. Siempre.",
    },
    "hero-subtitle": {
      en: "Reliable cleaning across Salt Lake County and Utah County. Deep cleaning, recurring maintenance, and commercial, with clear scope, reliable communication, and checklist-driven service.",
      es: "Limpieza confiable en Salt Lake County y Utah County. Limpieza profunda, mantenimiento recurrente y comercial, con alcance claro, comunicación confiable y servicio con listas de verificación.",
    },
    "hero-cta-quote": { en: "Get My Free Quote", es: "Obtener cotización gratis" },
    "hero-cta-whatsapp": { en: "Chat on WhatsApp", es: "Chat en WhatsApp" },
    "hero-bullet-1": {
      en: "Deep cleaning for first-time clients",
      es: "Limpieza profunda para nuevos clientes",
    },
    "hero-bullet-2": {
      en: "Weekly, bi-weekly, and monthly service",
      es: "Servicio semanal, quincenal y mensual",
    },
    "hero-bullet-3": {
      en: "Commercial cleaning available",
      es: "Limpieza comercial disponible",
    },

    /* COMMERCIAL */
    "comm-eyebrow": { en: "For Businesses", es: "Para empresas" },
    "comm-title": {
      en: "Commercial Cleaning Services",
      es: "Servicios de limpieza comercial",
    },
    "comm-subtitle": {
      en: "Professional cleaning for offices and commercial spaces across Salt Lake County and Utah County. Flexible scheduling, clear scope, and pricing by square footage. No surprises.",
      es: "Limpieza profesional para oficinas y espacios comerciales en Salt Lake County y Utah County. Horarios flexibles, alcance claro y precios por pie cuadrado. Sin sorpresas.",
    },
    "comm-card1-title": { en: "Small Offices & Suites", es: "Oficinas pequeñas y suites" },
    "comm-card1-desc": {
      en: "Perfect for professional offices, medical suites, real estate offices, and small business spaces that need consistent, reliable maintenance.",
      es: "Ideal para oficinas profesionales, consultorios médicos, inmobiliarias y pequeños negocios que necesitan mantenimiento constante y confiable.",
    },
    "comm-card2-title": {
      en: "Large Office Buildings",
      es: "Edificios de oficinas grandes",
    },
    "comm-card2-desc": {
      en: "Multi-floor offices, corporate spaces, larger commercial properties, schools, and universities. We coordinate with your facilities team for a seamless experience.",
      es: "Oficinas de varios pisos, espacios corporativos, propiedades comerciales más grandes, escuelas y universidades. Coordinamos con su equipo de instalaciones para una experiencia sin fricción.",
    },
    "comm-badge": { en: "Coming Soon", es: "Próximamente" },
    "comm-card3-title": { en: "Gyms & Spas", es: "Gimnasios y spas" },
    "comm-card3-desc": {
      en: "High-traffic spaces that demand thorough sanitization. We're expanding into fitness and wellness. Reach out if you're interested.",
      es: "Espacios de alto tráfico que exigen una sanitización profunda. Nos expandimos al sector fitness y bienestar. Escríbenos si te interesa.",
    },
    "comm-includes-title": {
      en: "What's Included in Every Commercial Clean",
      es: "Qué incluye cada limpieza comercial",
    },
    "comm-inc-1": { en: "Vacuuming and mopping all floors", es: "Aspirado y trapeado de todos los pisos" },
    "comm-inc-2": {
      en: "Restroom sanitization (sinks, toilets, counters)",
      es: "Sanitización de baños (lavabos, inodoros, mesones)",
    },
    "comm-inc-3": {
      en: "Break room and kitchen area cleaning",
      es: "Limpieza de sala de descanso y cocina",
    },
    "comm-inc-4": {
      en: "Trash removal and liner replacement",
      es: "Retiro de basura y cambio de bolsas",
    },
    "comm-inc-5": {
      en: "Dusting surfaces, desks, and common areas",
      es: "Desempolvado de superficies, escritorios y áreas comunes",
    },
    "comm-inc-6": {
      en: "Door handles, light switches, and high-touch surfaces sanitized",
      es: "Sanitización de manijas, interruptores y superficies de alto contacto",
    },
    "comm-inc-7": {
      en: "Window sills, ledges, and baseboards, cleaned on a rotating schedule based on service frequency",
      es: "Alféizares, repisas y rodapiés, limpiados en rotación según la frecuencia del servicio",
    },
    "comm-pricing1-title": {
      en: "Pricing by Square Footage",
      es: "Precios por pie cuadrado",
    },
    "comm-pricing1-desc": {
      en: "Every commercial space is different. We price by square footage so you get a fair, transparent quote based on your actual space, not a generic rate.",
      es: "Cada espacio comercial es distinto. Cotizamos por pie cuadrado para que obtengas una cotización justa y transparente según tu espacio real, no una tarifa genérica.",
    },
    "comm-pricing1-note": {
      en: "Final pricing depends on the current condition of the space, frequency of service, and any add-ons. We'll walk through everything before you commit to anything.",
      es: "El precio final depende del estado del espacio, la frecuencia del servicio y los extras. Revisamos todo contigo antes de que te comprometas.",
    },
    "comm-pricing2-title": { en: "Flexible Scheduling", es: "Horarios flexibles" },
    "comm-pricing2-desc": {
      en: "We work around your business hours. Early morning, after hours, weekends. We coordinate with you so cleaning never interrupts your operations.",
      es: "Nos adaptamos a tu horario comercial. Madrugada, fuera de horario, fines de semana. Coordinamos para que la limpieza no interrumpa tus operaciones.",
    },
    "comm-pricing2-note": {
      en: "We work around your business needs. Recurring schedules can range from daily service up to 1 day per week, including any custom frequency in between. We also offer one-time deep cleans to kick off a new contract, after special events, or for specific areas of your space that need extra attention.",
      es: "Nos adaptamos a tus necesidades. Los horarios recurrentes pueden ir de servicio diario hasta 1 día por semana, con cualquier frecuencia a medida. También ofrecemos limpiezas profundas puntuales para iniciar un contrato, tras eventos o zonas que requieran atención extra.",
    },
    "comm-cta-text": {
      en: "Ready to keep your workspace consistently clean?",
      es: "¿Listo para mantener tu espacio de trabajo siempre limpio?",
    },
    "comm-cta-quote": {
      en: "Get a Commercial Quote",
      es: "Cotización comercial",
    },
    "comm-cta-wa": { en: "Chat on WhatsApp", es: "Chat en WhatsApp" },

    /* RESIDENTIAL — header + frequency + disclaimer */
    "res-eyebrow": { en: "Residential Cleaning", es: "Limpieza residencial" },
    "res-title": {
      en: "Pick the Cleaning That Fits Your Home",
      es: "Elige la limpieza ideal para tu hogar",
    },
    "res-subtitle": {
      en: "Every home is unique. All services are confirmed during your initial quote. Final scope and pricing depend on the size and current condition of your home.",
      es: "Cada hogar es único. Todos los servicios se confirman en tu cotización inicial. El alcance y precio final dependen del tamaño y estado actual de tu hogar.",
    },
    "res-freq-label": { en: "Available Frequencies", es: "Frecuencias disponibles" },
    "res-freq-1": { en: "Daily", es: "Diario" },
    "res-freq-2": { en: "Weekly", es: "Semanal" },
    "res-freq-3": { en: "Bi-Weekly", es: "Quincenal" },
    "res-freq-4": { en: "Once a Month", es: "Una vez al mes" },
    "res-disclaimer": {
      en: "* Every home is unique. Final pricing depends on the size and current condition of your home. Homes requiring extra time due to heavy buildup or special conditions will be quoted accordingly. We confirm everything before you commit to anything.",
      es: "* Cada hogar es único. El precio final depende del tamaño y estado actual. Los hogares que requieran tiempo extra por acumulación o condiciones especiales se cotizan aparte. Confirmamos todo antes de que te comprometas.",
    },

    "res-card-badge-popular": { en: "Most Popular", es: "Más popular" },
    "res-card-deep-title": { en: "Deep Clean", es: "Limpieza profunda" },
    "res-card-deep-desc": {
      en: "A thorough top-to-bottom clean, ideal for first-time clients or homes that need a full reset.",
      es: "Limpieza completa de arriba a abajo, ideal para nuevos clientes o hogares que necesitan un reinicio total.",
    },
    "res-deep-1": {
      en: "Kitchen, counters, backsplash, sink, inside microwave, face of cabinets & appliances",
      es: "Cocina, mesones, salpicadero, fregadero, microondas por dentro, frente de gabinetes y electrodomésticos",
    },
    "res-deep-2": {
      en: "Bathrooms, counters, backsplash, sinks, tubs, toilets & showers",
      es: "Baños, mesones, salpicadero, lavabos, tinas, inodoros y regaderas",
    },
    "res-deep-3": { en: "Floors vacuumed & mopped throughout", es: "Pisos aspirados y trapeados en toda la casa" },
    "res-deep-4": {
      en: "Switch plates, door knobs & hand rails sanitized",
      es: "Placas de interruptores, pomos y pasamanos sanitizados",
    },
    "res-deep-5": {
      en: "Ceiling fans, lights & lampshades dusted",
      es: "Ventiladores de techo, luces y pantallas de lámpara desempolvados",
    },
    "res-deep-6": { en: "Blinds & top of drapes dusted", es: "Persianas y parte superior de cortinas desempolvadas" },
    "res-deep-7": {
      en: "Scrub & removal of light to moderate buildup in kitchen and bathrooms",
      es: "Fregado y eliminación de acumulación leve a moderada en cocina y baños",
    },
    "res-card-rec-title": { en: "Recurring Cleaning", es: "Limpieza recurrente" },
    "res-card-rec-desc": {
      en: "Consistent maintenance on your schedule, weekly, bi-weekly, or monthly. Never come home to a messy house again.",
      es: "Mantenimiento constante según tu calendario: semanal, quincenal o mensual. No vuelvas a un hogar desordenado.",
    },
    "res-rec-1": { en: "Kitchen & bathrooms cleaned and sanitized", es: "Cocina y baños limpiados y sanitizados" },
    "res-rec-2": { en: "Floors vacuumed & mopped throughout", es: "Pisos aspirados y trapeados en toda la casa" },
    "res-rec-3": {
      en: "Switch plates, door knobs & hand rails sanitized",
      es: "Placas de interruptores, pomos y pasamanos sanitizados",
    },
    "res-rec-4": {
      en: "Dusting of surfaces, furniture & common areas",
      es: "Desempolvado de superficies, muebles y áreas comunes",
    },
    "res-rec-5": { en: "Trash removal", es: "Retiro de basura" },
    "res-card-move-title": { en: "Move-In / Move-Out", es: "Mudanza entrada / salida" },
    "res-card-move-desc": {
      en: "A complete clean for empty properties. Getting your space ready to move into or leaving it spotless for the next occupant.",
      es: "Limpieza completa para propiedades vacías. Deja tu espacio listo para entrar o impecable para el siguiente inquilino.",
    },
    "res-move-1": {
      en: "Kitchen, counters, backsplash, sink, inside microwave, face of cabinets & appliances",
      es: "Cocina, mesones, salpicadero, fregadero, microondas por dentro, frente de gabinetes y electrodomésticos",
    },
    "res-move-2": {
      en: "Bathrooms, full sanitization of all surfaces",
      es: "Baños, sanitización completa de todas las superficies",
    },
    "res-move-3": { en: "Floors vacuumed & mopped throughout", es: "Pisos aspirados y trapeados en toda la casa" },
    "res-move-4": {
      en: "Switch plates, door knobs & hand rails sanitized",
      es: "Placas de interruptores, pomos y pasamanos sanitizados",
    },
    "res-move-5": {
      en: "Ceiling fans, lights & lampshades dusted",
      es: "Ventiladores de techo, luces y pantallas de lámpara desempolvados",
    },
    "res-move-6": { en: "Blinds & top of drapes dusted", es: "Persianas y parte superior de cortinas desempolvadas" },
    "res-move-7": {
      en: "Baseboards, molding & stairs cleaned",
      es: "Rodapiés, molduras y escaleras limpios",
    },
    "res-move-8": {
      en: "Inside cabinets, if empty prior to service",
      es: "Interior de gabinetes, si están vacíos antes del servicio",
    },
    "res-move-9": { en: "Inside fridge & oven included", es: "Nevera y horno por dentro incluidos" },
    "res-move-10": {
      en: "Walls, vents & up to 10 windows, light surface wipe only. Heavy staining requires a custom quote.",
      es: "Paredes, rejillas y hasta 10 ventanas, solo limpieza superficial. Manchas fuertes requieren cotización aparte.",
    },
    "res-move-scope-note": {
      en: "* Final scope confirmed during walkthrough based on condition of the property.",
      es: "* Alcance final confirmado en el recorrido según el estado de la propiedad.",
    },
    "res-addons-label": { en: "Add-Ons Available Upon Request", es: "Extras disponibles bajo solicitud" },
    "res-addon-beds": { en: "Making beds", es: "Tender camas" },
    "res-addon-fridge": { en: "Inside fridge", es: "Nevera por dentro" },
    "res-addon-oven": { en: "Inside oven", es: "Horno por dentro" },
    "res-addon-extra-br": { en: "Extra bedroom / bathroom, $10 each", es: "Habitación / baño extra, $10 c/u" },
    "res-addon-extra-hr": { en: "Extra hour, $65", es: "Hora extra, $65" },
    "res-base-note": {
      en: "Base quote: 3 bed / 2 bath, 2,500 sq ft or under",
      es: "Cotización base: 3 rec / 2 baños, 2,500 pies² o menos",
    },
    "res-card-cta": { en: "Get a Quote", es: "Solicitar cotización" },

    /* HOW IT WORKS */
    "hiw-eyebrow": { en: "How it works", es: "Cómo funciona" },
    "hiw-title": {
      en: "A cleaner space in four simple steps.",
      es: "Un espacio más limpio en cuatro pasos simples.",
    },
    "hiw-step1-title": { en: "Request a quote", es: "Solicita una cotización" },
    "hiw-step1-desc": {
      en: "Tell us about your home, office, school, or facility in Salt Lake County, Utah County, or a nearby community.",
      es: "Cuéntanos sobre tu hogar, oficina, escuela o instalación en Salt Lake County, Utah County o una comunidad cercana.",
    },
    "hiw-step2-title": { en: "Walk the space", es: "Recorremos el espacio" },
    "hiw-step2-desc": {
      en: "We confirm your priorities, access needs, schedule, and the details that matter most.",
      es: "Confirmamos tus prioridades, acceso, horario y los detalles que más importan.",
    },
    "hiw-step3-title": { en: "Clean with a checklist", es: "Limpieza con lista de verificación" },
    "hiw-step3-desc": {
      en: "Your crew follows a clear scope and documents completion so nothing important gets skipped.",
      es: "Tu equipo sigue un alcance claro y documenta lo hecho para no omitir lo importante.",
    },
    "hiw-step4-title": { en: "Relax and review", es: "Relájate y revisa" },
    "hiw-step4-desc": {
      en: "You get dependable service, easy communication, and fast touch-ups when needed.",
      es: "Obtienes servicio confiable, comunicación sencilla y retoques rápidos cuando haga falta.",
    },
    "hiw-cta": { en: "Start With Step 1", es: "Empezar con el paso 1" },

    /* STORY */
    "story-eyebrow": { en: "Our Story", es: "Nuestra historia" },
    "story-title": { en: "Built from the Inside Out", es: "Construidos desde adentro" },
    "story-p1": {
      en: "Mayor Excelsior didn't start as a company. It started with work. Learning firsthand what it really means to clean a space, meet high standards, and understand that cleaning isn't just about appearances. It's about trust.",
      es: "Mayor Excelsior no empezó como empresa. Empezó con trabajo. Aprendiendo de primera mano qué significa limpiar un espacio, cumplir estándares altos y entender que la limpieza no es solo apariencia. Es confianza.",
    },
    "story-p2": {
      en: "We worked across different cleaning companies, watching how things were done right and how often they weren't. Rushed jobs, lack of detail, poor communication, and inconsistent results. That's when we made a decision: if we're going to do this, we're going to do it better.",
      es: "Trabajamos en distintas empresas de limpieza y vimos qué se hacía bien y qué no. Trabajos apresurados, poco detalle, mala comunicación y resultados inconsistentes. Ahí decidimos: si vamos a hacer esto, lo haremos mejor.",
    },
    "story-why-title": { en: "Why Mayor Excelsior", es: "Por qué Mayor Excelsior" },
    "story-p3": {
      en: "We built Mayor Excelsior with one clear idea: not just to clean, but to deliver peace of mind. We wanted every client to walk into their home or business and not have to check, not have to worry, not have to wonder if something was done. Just trust.",
      es: "Construimos Mayor Excelsior con una idea clara: no solo limpiar, sino dar tranquilidad. Queremos que cada cliente entre a su hogar o negocio sin revisar, sin preocuparse ni dudar si algo se hizo. Solo confianza.",
    },
    "story-how-title": { en: "How We Work", es: "Cómo trabajamos" },
    "story-p4": {
      en: "We start with a Deep Clean when needed to set the standard. We work with detailed checklists on every job, maintain direct communication with every client, and focus on consistency. Not just doing it well once, but every single time.",
      es: "Empezamos con una limpieza profunda cuando hace falta para fijar el estándar. Usamos listas detalladas en cada trabajo, comunicación directa y foco en la consistencia. No solo bien una vez, sino siempre.",
    },
    "story-closing": {
      en: "Mayor Excelsior is a company built on real work, direct experience, and a genuine commitment to doing things right. We're not just another cleaning company.",
      es: "Mayor Excelsior es una empresa hecha con trabajo real, experiencia directa y un compromiso genuino de hacer las cosas bien. No somos solo otra empresa de limpieza.",
    },
    "story-closing-bold": { en: "We're one you can count on.", es: "Somos de las que puedes confiar." },
    "story-signature": { en: "Victor Mayor, Founder", es: "Victor Mayor, fundador" },
    "story-cta": { en: "Get My Free Quote", es: "Obtener cotización gratis" },
    "story-val1-title": { en: "Detail", es: "Detalle" },
    "story-val1-desc": {
      en: "Every corner, every surface. Done right.",
      es: "Cada rincón, cada superficie. Bien hecho.",
    },
    "story-val2-title": { en: "Communication", es: "Comunicación" },
    "story-val2-desc": {
      en: "You always know what's happening and when.",
      es: "Siempre sabes qué pasa y cuándo.",
    },
    "story-val3-title": { en: "Consistency", es: "Consistencia" },
    "story-val3-desc": {
      en: "The same high standard, every single visit.",
      es: "El mismo alto estándar en cada visita.",
    },
    "story-val4-title": { en: "Trust", es: "Confianza" },
    "story-val4-desc": {
      en: "We earn it with every job, not just the first one.",
      es: "Nos la ganamos en cada trabajo, no solo en el primero.",
    },

    /* GALLERY */
    "gallery-eyebrow": { en: "Before / After", es: "Antes / Después" },
    "gallery-title": {
      en: "Transformation Standards",
      es: "Estándares de transformación",
    },
    "gallery-subtitle": {
      en: "Drag each image to see the kind of visible reset Mayor Excelsior looks for: clearer surfaces, brighter rooms, better presentation, and spaces that feel ready again.",
      es: "Arrastra cada imagen para ver el tipo de cambio visible que busca Mayor Excelsior: superficies más claras, habitaciones más luminosas, mejor presentación y espacios que vuelven a sentirse listos.",
    },
    "gallery-sub-res": { en: "Residential", es: "Residencial" },
    "gallery-sub-com": { en: "Commercial", es: "Comercial" },
    "gallery-cap-1": {
      en: "Kitchen reset. Dull surfaces to bright counters.",
      es: "Cocina renovada. Superficies opacas a mesones brillantes.",
    },
    "gallery-cap-2": {
      en: "Bedroom reset. Visual clutter to calm, ready space.",
      es: "Dormitorio ordenado. Del desorden visual a un espacio calmado y listo.",
    },
    "gallery-cap-3": {
      en: "Bathroom reset. Water spots to fresh fixtures.",
      es: "Baño renovado. Manchas de agua a accesorios impecables.",
    },
    "gallery-cap-4": {
      en: "Office reset. Dusty work zones to client-ready.",
      es: "Oficina lista. Zonas polvorientas a espacio presentable.",
    },
    "gallery-cap-5": {
      en: "Reception reset. Foot traffic to polished entry.",
      es: "Recepción impecable. Tránsito diario a entrada pulida.",
    },
    "gallery-cap-6": {
      en: "Meeting room reset. Smudges to presentation-ready.",
      es: "Sala de juntas lista. Marcas a espacio listo para presentar.",
    },
    "gallery-ba-before": { en: "Before", es: "Antes" },
    "gallery-ba-after": { en: "After", es: "Después" },

    /* QUOTE */
    "quote-eyebrow": { en: "Free quote", es: "Cotización gratis" },
    "quote-title": {
      en: "Ready to stop worrying about the cleaning?",
      es: "¿Listo para dejar de preocuparte por la limpieza?",
    },
    "quote-intro-p": {
      en: "Tell us what you need cleaned and how often. We will help you choose the right plan for your home or business in Salt Lake County, Utah County, or a nearby community.",
      es: "Cuéntanos qué necesitas limpiar y con qué frecuencia. Te ayudamos a elegir el plan adecuado para tu hogar o negocio en Salt Lake County, Utah County o una comunidad cercana.",
    },
    "quote-email-line": {
      en: 'Prefer email? Write to <a href="mailto:mayorexcelsiorllc@gmail.com">mayorexcelsiorllc@gmail.com</a>.',
      es: '¿Prefieres correo? Escríbenos a <a href="mailto:mayorexcelsiorllc@gmail.com">mayorexcelsiorllc@gmail.com</a>.',
    },
    "quote-trust": {
      en: "Trusted by homes, offices, schools, and facilities across Salt Lake County, Utah County, and nearby communities.",
      es: "Hogares, oficinas, escuelas e instalaciones en Salt Lake County, Utah County y comunidades cercanas confían en nosotros.",
    },
    "quote-point-1": { en: "No-pressure walkthrough", es: "Recorrido sin presión" },
    "quote-point-2": { en: "Clear written scope", es: "Alcance por escrito claro" },
    "quote-point-3": {
      en: "15% first-month offer for new recurring clients",
      es: "15% el primer mes para nuevos clientes recurrentes",
    },
    "form-label-name": { en: "Name", es: "Nombre" },
    "form-ph-name": { en: "Your name", es: "Tu nombre" },
    "form-label-contact": { en: "Email or phone", es: "Correo o teléfono" },
    "form-ph-contact": { en: "Best way to reach you", es: "Mejor forma de contactarte" },
    "form-label-type": {
      en: "What type of cleaning do you need?",
      es: "¿Qué tipo de limpieza necesitas?",
    },
    "form-opt-service": { en: "Select a service", es: "Elige un servicio" },
    "form-opt-deep": { en: "First-Time Deep Clean", es: "Limpieza profunda primera vez" },
    "form-opt-recurring": { en: "Recurring Cleaning", es: "Limpieza recurrente" },
    "form-opt-commercial": { en: "Commercial Cleaning", es: "Limpieza comercial" },
    "form-opt-move": { en: "Move-In / Move-Out", es: "Mudanza entrada/salida" },
    "form-opt-post": { en: "Post-Construction", es: "Post-construcción" },
    "form-opt-unsure": { en: "Not sure", es: "No estoy seguro" },
    "form-label-freq": {
      en: "How often do you need cleaning?",
      es: "¿Con qué frecuencia necesitas limpieza?",
    },
    "form-opt-freq": { en: "Select frequency", es: "Elige frecuencia" },
    "form-opt-once": { en: "One-time", es: "Una vez" },
    "form-opt-weekly": { en: "Weekly", es: "Semanal" },
    "form-opt-biweekly": { en: "Bi-weekly", es: "Quincenal" },
    "form-opt-monthly": { en: "Monthly", es: "Mensual" },
    "form-opt-3x": { en: "3x per week commercial", es: "3x por semana (comercial)" },
    "form-opt-5x": { en: "5x per week commercial", es: "5x por semana (comercial)" },
    "form-opt-daily": { en: "Daily", es: "Diario" },
    "form-opt-custom": { en: "Custom", es: "Personalizado" },
    "form-label-message": { en: "What should we know?", es: "¿Qué debemos saber?" },
    "form-ph-message": {
      en: "Square footage, address area, schedule, and priorities",
      es: "Metros/pies cuadrados, zona, horario y prioridades",
    },
    "form-submit": { en: "Get My Free Quote Now", es: "Enviar cotización gratis" },
    "form-assure-1": { en: "No spam", es: "Sin spam" },
    "form-assure-2": {
      en: "Fast response (usually within 1 hour)",
      es: "Respuesta rápida (normalmente en 1 hora)",
    },
    "form-assure-3": { en: "No obligation", es: "Sin compromiso" },
    "form-disclaimer": {
      en: "For first-time residential clients, we may recommend a Deep Clean before recurring service.",
      es: "Para clientes residenciales nuevos, podemos recomendar una limpieza profunda antes del servicio recurrente.",
    },

    /* FAQ header */
    "faq-eyebrow": { en: "Common Questions", es: "Preguntas frecuentes" },
    "faq-title": {
      en: "Frequently Asked Questions",
      es: "Preguntas frecuentes",
    },
    "faq-subtitle": {
      en: "Everything you need to know before booking. Still have questions? Chat with us on WhatsApp.",
      es: "Todo lo que debes saber antes de reservar. ¿Sigues con dudas? Escríbenos por WhatsApp.",
    },
    "faq-tab-homes": { en: "🏠 Homes", es: "🏠 Hogares" },
    "faq-tab-business": { en: "🏢 Business", es: "🏢 Empresas" },
    "faq-cta-text": { en: "Still have a question?", es: "¿Sigues con una duda?" },
    "faq-cta-btn": { en: "Chat on WhatsApp", es: "Chat en WhatsApp" },

    /* FOOTER */
    "footer-brand-domain": {
      en: "Residential & commercial cleaning",
      es: "Limpieza residencial y comercial",
    },
    "footer-tagline": {
      en: "Reliable cleaning in Salt Lake County and Utah County. Clear scope, checklist-based service, and dependable communication.",
      es: "Limpieza confiable en Salt Lake County y Utah County. Alcance claro, servicio con lista de verificación y comunicación confiable.",
    },
    "footer-wa": { en: "Chat on WhatsApp", es: "Chat en WhatsApp" },
    "footer-cta": { en: "Get My Free Quote", es: "Obtener cotización gratis" },
    "footer-col-res": { en: "Residential", es: "Residencial" },
    "footer-col-company": { en: "Company", es: "Empresa" },
    "footer-col-why": { en: "Why us", es: "Por qué nosotros" },
    "footer-col-legal": { en: "Legal", es: "Legal" },
    "footer-link-home": { en: "Home", es: "Inicio" },
    "footer-link-story": { en: "Our Story", es: "Nuestra historia" },
    "footer-link-gallery": { en: "Gallery", es: "Galería" },
    "footer-link-free-quote": { en: "Free Quote", es: "Cotización gratis" },
    "footer-blurb": {
      en: "Because your space deserves cleaners who show up, follow a clear plan, and communicate. No guessing what was included. No surprises.",
      es: "Porque tu espacio merece quienes llegan, siguen un plan claro y comunican. Sin adivinar qué incluía el servicio. Sin sorpresas.",
    },
    "footer-terms": { en: "Terms of Service", es: "Términos del servicio" },
    "footer-privacy": { en: "Privacy Policy", es: "Política de privacidad" },
    "footer-copy": {
      en: "© 2026 Mayor Excelsior LLC. All rights reserved. Utah, USA.",
      es: "© 2026 Mayor Excelsior LLC. Todos los derechos reservados. Utah, EE. UU.",
    },

    "float-wa-label": { en: "Chat with us", es: "Chatea con nosotros" },
  };

  const faqHomes = [
    {
      q: ["Do I have to be home when you clean?", "¿Debo estar en casa cuando limpian?"],
      a: [
        "No, you don't need to be home. Most of our clients aren't. You can share a door code, key location, or garage code with our team. If you prefer to be home during the cleaning, that works too. Whatever makes you most comfortable.",
        "No, no necesitas estar en casa. La mayoría de nuestros clientes no lo están. Puedes compartir código de puerta, ubicación de llave o del garaje con el equipo. Si prefieres estar durante la limpieza, también funciona. Lo que te haga sentir más cómodo.",
      ],
    },
    {
      q: ["How many cleaners will be in my home?", "¿Cuántas personas limpiarán en mi hogar?"],
      a: [
        "For recurring cleanings you can expect a team of 2. For deep cleans, depending on the size and condition of the home, you may have a team of 2 to 4 cleaners.",
        "En limpiezas recurrentes suele haber un equipo de 2. En limpiezas profundas, según tamaño y estado, puede ser de 2 a 4 personas.",
      ],
    },
    {
      q: ["Do I need to provide supplies or equipment?", "¿Debo proveer productos o equipo?"],
      a: [
        "No. Our teams come fully prepared with everything needed. If you have a specific product you'd like us to use, just leave it out and let us know. We're happy to accommodate.",
        "No. Nuestros equipos traen todo lo necesario. Si quieres un producto específico, déjalo indicado y avísanos. Con gusto lo usamos.",
      ],
    },
    {
      q: ["What if I need to reschedule or cancel?", "¿Qué pasa si debo reprogramar o cancelar?"],
      a: [
        "Life happens. We get it. We just ask that you let us know at least 24 to 48 hours before your scheduled cleaning. Same-day cancellations may be subject to a fee.",
        "La vida pasa. Solo pide avisar con 24 a 48 horas de anticipación. Cancelaciones el mismo día pueden tener cargo.",
      ],
    },
    {
      q: ["Do I have to sign a contract?", "¿Debo firmar un contrato?"],
      a: [
        "No contracts. We believe our quality of work is enough to earn your continued trust. No paperwork required.",
        "Sin contratos. Creemos que la calidad del trabajo basta para ganarnos tu confianza. Sin papeleo obligatorio.",
      ],
    },
    {
      q: ["What about my pets?", "¿Y mis mascotas?"],
      a: [
        "We love them! We do ask that pets are kept in a single area or behind a closed door during the cleaning so our team can work efficiently. Feel free to share your pet's name with us. Our cleaners love knowing who they might run into.",
        "¡Las queremos! Pedimos que durante la limpieza estén en un solo lugar o tras puerta cerrada para trabajar con eficiencia. Cuéntanos sus nombres; al equipo le encanta saberlo.",
      ],
    },
    {
      q: ["How do I pay?", "¿Cómo pago?"],
      a: [
        "We offer a few options: card on file charged after the cleaning, a direct payment link sent to your email, or Venmo. All payments are collected after the service is completed.",
        "Varias opciones: tarjeta guardada cobrada después del servicio, enlace de pago por correo o Venmo. Todo se cobra al terminar.",
      ],
    },
    {
      q: ["Do you do dishes or laundry?", "¿Lavan ropa o lavan los platos?"],
      a: [
        "We don't offer laundry service. Dishes can be added as an extra upon request. Just let us know when booking.",
        "No ofrecemos lavandería. Los platos pueden añadirse como extra si lo pides al reservar.",
      ],
    },
    {
      q: [
        "Will I have the same cleaning team every time?",
        "¿Tendré el mismo equipo de limpieza cada vez?",
      ],
      a: [
        "We do our best to send the same team each visit. It helps them learn your home and be more efficient over time. Occasionally a team may change due to scheduling, but we'll always keep your preferences on file.",
        "Hacemos lo posible por enviar el mismo equipo. Así conocen tu hogar y ganan eficiencia. A veces cambia por agenda, pero guardamos tus preferencias.",
      ],
    },
    {
      q: ["How long does a cleaning take?", "¿Cuánto dura una limpieza?"],
      a: [
        "It depends on your home and the service. Recurring cleanings typically take 90 to 120 minutes. Deep cleans can take anywhere from 3 to 6 hours depending on size and condition.",
        "Depende del hogar y del servicio. Lo recurrente suele tardar 90–120 min. Lo profundo puede llevar de 3 a 6 horas según tamaño y estado.",
      ],
    },
    {
      q: [
        "Is there anything I need to do before the cleaners arrive?",
        "¿Debo hacer algo antes de que lleguen?",
      ],
      a: [
        "We ask that you pick up any clutter, including clothing, toys, and personal items, so our team can focus on actually cleaning. You'll receive a pre-cleaning checklist by email before each appointment as a reminder.",
        "Recoge desorden, ropa, juguetes y objetos personales para que el equipo se enfoque en limpiar. Recibirás una lista previa por correo como recordatorio.",
      ],
    },
    {
      q: ["Do you require a deep clean to start?", "¿Exigen limpieza profunda para empezar?"],
      a: [
        "No. You can start with a recurring cleaning if you'd like. That said, a deep clean is recommended for first-time clients to set a solid baseline before ongoing maintenance.",
        "No. Puedes empezar con recurrente si quieres. Aun así, para nuevos clientes recomendamos una profunda primero para fijar una base sólida.",
      ],
    },
    {
      q: ["What if the job takes longer than expected?", "¿Y si el trabajo tarda más de lo previsto?"],
      a: [
        "We work with flat rates based on the information provided during quoting. If extra time is needed due to unforeseen conditions, a team member will reach out to discuss options before any additional charges are applied. Nothing is added without your approval.",
        "Trabajamos con tarifas planas según lo acordado en la cotización. Si hace falta más tiempo, el equipo contacta para opciones antes de cargos extra. Nada sin tu aprobación.",
      ],
    },
    {
      q: [
        "What if only certain areas need to be cleaned?",
        "¿Y si solo ciertas áreas necesitan limpieza?",
      ],
      a: [
        "No problem. Just let us know when booking and we'll note it on your profile. Our cleaners work directly from your profile, so specific requests are always accounted for.",
        "Sin problema. Avísalo al reservar y lo anotamos en tu perfil. El equipo trabaja según ese perfil.",
      ],
    },
    {
      q: ["Are you licensed and insured?", "¿Están autorizados y asegurados?"],
      a: [
        "Yes, on both counts. Mayor Excelsior is fully licensed and insured so you can have complete peace of mind every time we're in your home.",
        "Sí, en ambos aspectos. Mayor Excelsior está autorizado y asegurado para tu tranquilidad.",
      ],
    },
    {
      q: ["What if the cleaners missed a spot?", "¿Y si se pasaron un lugar?"],
      a: [
        "Let us know and we'll make it right, whether that's a re-clean or a discount. Communication is everything and we're always here to help.",
        "Avísanos y lo corregimos: nueva pasada o ajuste. La comunicación lo es todo.",
      ],
    },
    {
      q: [
        "Do you offer one-time cleanings for special occasions?",
        "¿Ofrecen limpiezas puntuales para ocasiones especiales?",
      ],
      a: [
        "Absolutely. Whether it's before a holiday gathering, after a party, or just a one-time reset, we offer one-time cleanings with no commitment required. Just let us know the occasion and we'll tailor the service to what you need.",
        "Sí. Antes de una reunión, después de una fiesta o un reset único, sin compromiso. Cuéntanos la ocasión y adaptamos el servicio.",
      ],
    },
  ];

  const faqBiz = [
    {
      q: [
        "What commercial cleaning services do you offer?",
        "¿Qué servicios de limpieza comercial ofrecen?",
      ],
      a: [
        "We offer office cleaning, janitorial maintenance, restroom sanitization, carpet cleaning, high-touch surface disinfection, and general commercial space cleaning for offices and office buildings across Salt Lake County and Utah County.",
        "Limpieza de oficinas, mantenimiento, baños, alfombras, desinfección de superficies de contacto y limpieza general en Salt Lake y Utah County.",
      ],
    },
    {
      q: [
        "Do you offer carpet cleaning for commercial spaces?",
        "¿Limpian alfombras en espacios comerciales?",
      ],
      a: [
        "Yes. We offer carpet cleaning for commercial spaces as an add-on or standalone service. It helps extend the life of your carpets, removes stains and allergens, and improves the overall appearance of your space.",
        "Sí, como extra o servicio aparte. Alarga la vida de la alfombra, quita manchas y alérgenos y mejora la apariencia.",
      ],
    },
    {
      q: [
        "How flexible is your scheduling for businesses?",
        "¿Qué tan flexible es el horario para empresas?",
      ],
      a: [
        "Very flexible. We work around your business hours, including early morning, after hours, or weekends. The goal is to never interrupt your operations. Recurring schedules can be daily, weekly, bi-weekly, or monthly depending on your needs.",
        "Muy flexible. Madrugada, fuera de horario o fines de semana. El objetivo es no interrumpir operaciones. Recurrente diario, semanal, quincenal o mensual.",
      ],
    },
    {
      q: ["How is commercial cleaning priced?", "¿Cómo se cotiza la limpieza comercial?"],
      a: [
        "Commercial cleaning is priced by square footage. Every space is different, so we provide a custom quote based on the size, condition, frequency, and scope of work. Final pricing is always confirmed before we begin.",
        "Por pie cuadrado. Cada espacio es distinto; cotizamos según tamaño, estado, frecuencia y alcance. El precio final se confirma antes de empezar.",
      ],
    },
    {
      q: [
        "Are your commercial cleaning services customizable?",
        "¿Los servicios comerciales son personalizables?",
      ],
      a: [
        "Yes. We tailor every commercial plan to the specific needs of your space. Whether you need daily janitorial service or a one-time deep clean, we build around your schedule and priorities.",
        "Sí. Adaptamos cada plan a tu espacio: conserjería diaria o limpieza profunda única, según tu agenda y prioridades.",
      ],
    },
    {
      q: ["What is included in office cleaning?", "¿Qué incluye la limpieza de oficina?"],
      a: [
        "Our office cleaning includes vacuuming and mopping all floors, restroom sanitization, break room and kitchen cleaning, trash removal, dusting of surfaces and common areas, and sanitization of high-touch areas like door handles and light switches.",
        "Aspirado y trapeado, baños, sala de descanso y cocina, basura, desempolvado y sanitización de zonas de alto contacto.",
      ],
    },
    {
      q: [
        "Do you provide disinfecting services for commercial spaces?",
        "¿Desinfectan espacios comerciales?",
      ],
      a: [
        "Yes. High-touch surface disinfection is included in all our commercial services. This covers door handles, light switches, countertops, and any other frequently contacted surfaces to keep your workspace healthy.",
        "Sí. La desinfección de superficies de contacto frecuente va incluida: manijas, interruptores, mesones, etc.",
      ],
    },
    {
      q: [
        "Are you licensed and insured for commercial work?",
        "¿Están autorizados y asegurados para trabajo comercial?",
      ],
      a: [
        "Yes. Mayor Excelsior is fully licensed and insured for both residential and commercial cleaning. You can count on us to protect your space and your business.",
        "Sí. Mayor Excelsior está autorizado y asegurado para residencial y comercial.",
      ],
    },
    {
      q: ["How do we get started with commercial cleaning?", "¿Cómo empezamos con limpieza comercial?"],
      a: [
        "Just reach out through our quote form or WhatsApp. We'll discuss your space, schedule, and needs, and get you a clear, no-surprise quote before anything is confirmed.",
        "Escríbenos por el formulario o WhatsApp. Revisamos espacio, horario y necesidades y te damos una cotización clara antes de confirmar.",
      ],
    },
  ];

  faqHomes.forEach(function (item, i) {
    var n = i + 1;
    translations["faq-homes-" + n + "-q"] = { en: item.q[0], es: item.q[1] };
    translations["faq-homes-" + n + "-a"] = { en: item.a[0], es: item.a[1] };
  });
  faqBiz.forEach(function (item, i) {
    var n = i + 1;
    translations["faq-business-" + n + "-q"] = { en: item.q[0], es: item.q[1] };
    translations["faq-business-" + n + "-a"] = { en: item.a[0], es: item.a[1] };
  });

  let currentLang = "en";

  function normalizeLang(lang) {
    return lang === "es" ? "es" : "en";
  }

  function updateToggle(lang) {
    var btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.textContent = lang === "en" ? "ES" : "EN";
    btn.setAttribute("aria-label", lang === "en" ? "Cambiar idioma a espanol" : "Switch language to English");
    btn.classList.toggle("es-active", lang === "es");
  }

  function applyLang(lang) {
    currentLang = normalizeLang(lang);
    Object.keys(translations).forEach(function (key) {
      document.querySelectorAll('[data-lang="' + key + '"]').forEach(function (el) {
        var entry = translations[key];
        if (!entry || entry[currentLang] === undefined) return;
        var t = entry[currentLang];
        if (el.hasAttribute("data-lang-html")) {
          el.innerHTML = t;
        } else {
          el.textContent = t;
        }
      });
    });
    document.querySelectorAll("[data-lang-ph]").forEach(function (el) {
      var key = el.getAttribute("data-lang-ph");
      var entry = key && translations[key];
      if (entry && entry[currentLang] !== undefined) {
        el.setAttribute("placeholder", entry[currentLang]);
      }
    });
    document.documentElement.lang = currentLang;
    updateToggle(currentLang);
  }

  window.toggleLang = function () {
    applyLang(currentLang === "en" ? "es" : "en");
    try {
      localStorage.setItem("me-lang", currentLang);
    } catch (e) {}
  };

  document.addEventListener("DOMContentLoaded", function () {
    var saved = null;
    try {
      saved = localStorage.getItem("me-lang");
    } catch (e) {}
    applyLang(normalizeLang(saved));
  });
})();
