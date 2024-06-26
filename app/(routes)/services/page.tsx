import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="flex items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-10">
                   <div  >
                   <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 mb-5" style={{ marginTop: '65px' }}>Mis <span className="font-bold text-secondary"  >servicios.</span></h1>
                    <p className="mb-0 md:mb-3 m-2 text-xl text-gray-300">Ofrezco servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS ,JavaScript, React-js , Node, Boostrap, Css tailwind diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                    <button className="mt-12 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                    </div>
                </div>

 </div>
                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
           
        </>
    );
}

export default ServicesPage;