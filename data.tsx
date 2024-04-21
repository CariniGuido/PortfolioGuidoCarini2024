import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UC2McqRWxqQNBs-AiAV-V07Q" ,
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carini-demarchi-9a886223b/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://twitter.com/GuidoCarini",
    },
 
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer / React",
        subtitle: "Coderhouse",
        description: " desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Mar 2021 ",
    },
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Argentina programa 4.0",
        description: " desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Sep 2021 ",
    },
    {
        id: 3,
        title: " Desarrollo Frontend",
        subtitle: "Desarrollador Freelance",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2022",
    },
    {
        id: 4,
        title: "Desarrollo full stack java/springboot",
        subtitle: "TodoCode Academy.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2023",
    },
    {
        id: 5,
        title: "storytelling en el Marketing Digital",
        subtitle: "Santander Open Academy",
        description: "Arte de contar historias. En el marketing digital, el storytelling es una técnica para transmitir mensajes persuasivos a través de narrativas impactantes.        ",
        date: "Ago 2023",
    },
    {
        id: 6,
        title: "Análisis de datos con Python",
        subtitle: "Desafío Latam",
        description: "Descubrir patrones, Detectar anomalías, Probar hipótesis, Verificar suposiciones, Identificar datos faltantes, Detectar valores atípicos, Examinar la distribución de los datos, Seleccionar características más relevantes para el análisis.  ",
        date: "Mar 2024",
    },

    {
        id: 7,
        title: "Power BI",
        subtitle: "Curso",
        description: "Unir diferentes fuentes de datos, analizarlos y presentar un análisis de estos a través de informes y paneles.  ",
        date: "Abril 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 36,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 1,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Analista de datos",
        description: "Analisis y representación de datos ",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "quiz React para programadores",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/CariniGuido/quiz-react.git",
        urlDemo: "https://quiz-react-woad.vercel.app/",
    },
    {
        id: 2,
        title: "Netflix Cover",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/CariniGuido/netflixcover.git",
        urlDemo: "https://netflixcover.vercel.app/",
    },
    {
        id: 3,
        title: "Ecommerce ModaLuna",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/CariniGuido/paypalmanga.git",
        urlDemo: "https://modaluna.vercel.app/",
    },
    {
        id: 4,
        title: "Landing Page Electro Los Toldos",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/CariniGuido/ElectroLT",
        urlDemo: "https://electro-lt.vercel.app/",
    },
    {
        id: 5,
        title: "EstelaresYA",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "https://estelares-ya.vercel.app/",
    },
    {
        id: 6,
        title: "Analisis De Datos powerbi",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7186174529122037760/",
    },
  
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Nico M",
        description:
         "Muy satisfecho con el resultado de mi pagina web!!",
        imageUrl: "/profile1.png",
    },

 
    {
        id: 2,
        name: "Nancy Luna",
        description:
            "Contenta con el resultado de mi ecommerce modaluna, y con el metodo de pago",
        imageUrl: "/profile4.png",
    },
  
    {
        id: 3,
        name: "Antonio Martínez",
        description:
            "Gracias a Guido pude lograr obtener mi primer landing page y acelerar las ventas a través de sus estrategias de marketing",
        imageUrl: "/profile6.png",
    },
];