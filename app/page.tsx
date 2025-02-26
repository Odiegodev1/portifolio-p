import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import Reacts from '../public/React.svg'

import Nodes from '../public/Node_js.svg'
import Git from '../public/GitHub.svg'
import vetor from '../public/Vector.png'
import JavaScript from '../public/JavaScript.svg'
import HTML from '../public/HTML.svg'
import Css from '../public/CSS.svg'

import uni from '../public/Untitled-2.png'
import uni2 from '../public/Untitled-3.png'
import uni3 from '../public/Untitled-4.png'


import icon from '../public/Devices.png'
import icon2 from '../public/Infinity.png'
import icon3 from '../public/HardDrives.png'
import seta from '../public/ArrowUpRight.png'
import Linkend from '../public/LinkedinLogo.png'
import Instend from '../public/InstagramLogo.png'
import Mailed from '../public/EnvelopeSimple.png'
import Githubed from '../public/GithubLogo.png'
const Header = () => (
  <section className="h-screen bg-[url('/Background.png')] bg-cover bg-center">
    <main className='flex flex-col pb-28 justify-center h-full items-center px-4 sm:px-8'>
      <Image src={Logo} alt="Diego Santos Logo" className='h-32 w-32 sm:h-40 sm:w-40 border-4 border-red-500 rounded-full' />
      <div className='text-center mt-14 sm:mt-28 w-full sm:w-[80%] md:w-[60%] lg:w-[40%]'>
        <p className='text-lg sm:text-xl text-zinc-400 font-normal mb-8 sm:mb-14'>Hello world! Me chamo <span className='text-red-500'>Diego Santos</span> e sou</p>
        <h1 className='text-2xl sm:text-4xl font-bold text-zinc-300 mb-6 sm:mb-8'>Desenvolvedor Front-End</h1>
        <p className='text-xs sm:text-sm text-zinc-400 font-normal'>Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo sistemas através da tecnologia, buscando sempre a minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
      </div>
      <nav className='flex flex-wrap justify-center gap-4 sm:gap-8 mt-10 sm:mt-20 text-zinc-500'>
        {[
          { src: Reacts, alt: "React Logo", text: "React" },
          { src: Css, alt: "CSS Logo", text: "CSS" },
          { src: Nodes, alt: "Node Logo", text: "Node" },
          { src: Git, alt: "Git Logo", text: "GitHub" },
          { src: HTML, alt: "HTML Logo", text: "HTML" },
          { src: JavaScript, alt: "JavaScript Logo", text: "JavaScript" }
        ].map((item, index) => (
          <a key={index} href="" className='flex items-center gap-2 sm:gap-3 mb-4 bg-zinc-800 p-2 px-4 sm:px-5 rounded-3xl font-normal text-sm sm:text-base'>
            <Image src={item.src} alt={item.alt} className='h-6 w-6 sm:h-8 sm:w-8' /> {item.text}
          </a>
        ))}
      </nav>
      <Image src={vetor} alt="Vetor" className='h-5 w-5 absolute bottom-0' />
    </main>
  </section>
);

const Projects = () => (
  <main className='h-auto sm:h-screen bg-[#16181D] bg-cover bg-center flex flex-col items-center pt-20 sm:pt-32 px-4 sm:px-8'>
    <h1 className='text-md font-normal text-red-400'>meu trabalho</h1>
    <h1 className='text-xl sm:text-2xl font-bold text-zinc-300'>veja os projetos em destaque</h1>
    <div className='flex flex-col sm:flex-row gap-8 items-center justify-center mt-10 sm:mt-20 w-full mb-4'>
      {[
        { src: uni, alt: "Remove.Bg Ia",link:"https://bgremove-six.vercel.app/",  title: "Remove.Bg Ia", description: "Remove fundo de suas fotos com Inteligência Artificial" },
        { src: uni2, alt: "Pais no mundo", link:"https://paisesnomundo.vercel.app/", title: "Pais no mundo", description: "Oferece uma lista interativa de países com informações detalhadas, como o nome e a população de cada um." },
        { src: uni3, alt: "LinkTreen.P", link:"https://linktree-one-chi.vercel.app/", title: "LinkTreen.P", description: "O site personalizado para o artista 'Dadin' centraliza seus links de redes sociais e plataformas de música em um único lugar." }
      ].map((item, index) => (
        <div key={index} className='bg-zinc-950 p-4 pb-8 sm:pb-14 rounded-3xl w-full sm:w-[80%] md:w-[30%] lg:w-[20%] text-zinc-200'>
          <a href={item.link}><Image src={item.src} alt={item.alt} className='rounded-3xl mb-3 w-full' width={500} height={300} />{item.title}</a>
          <p className='mt-4 text-sm text-zinc-500'>{item.description}</p>
        </div>
      ))}
    </div>
    <Image src={vetor} alt="Vetor" className='h-5 w-5 absolute bottom-0' />
  </main>
);

const Services = () => (
  <main className='h-auto sm:h-[600px] bg-zinc-950 bg-cover bg-center flex flex-col items-center pt-20 sm:pt-32 px-4 sm:px-8 '>
    <h1 className='text-md font-normal text-red-400'>Meus serviços</h1>
    <h1 className='text-xl sm:text-2xl font-bold text-zinc-300'>Como posso ajudar seu negócio</h1>
    <div className='flex flex-col sm:flex-row gap-8 items-center justify-center mt-10 sm:mt-20 w-full'>
      {[
        { src: icon, alt: "Websites e Aplicativos", title: "Websites e Aplicativos", description: "Desenvolvimento de interfaces" },
        { src: icon2, alt: "Automação de Processos", title: "Automação de Processos", description: "Implementação e gestão de fluxos automatizados" },
        { src: icon3, alt: "API e banco de dados", title: "API e banco de dados", description: "Criação de serviços do sistema" }
      ].map((item, index) => (
        <div key={index} className='bg-zinc-950 p-4 pb-8 sm:pb-14 rounded-3xl w-full sm:w-[80%] md:w-[40%] lg:w-[30%] text-zinc-200'>
          <a href=""><Image src={item.src} alt={item.alt} className='w-12 h-12 rounded-3xl mb-3' width={500} height={500} />{item.title}</a>
          <p className='mt-4 text-sm text-zinc-500'>{item.description}</p>
        </div>
      ))}
    </div>
    <Image src={vetor} alt="Vetor" className='h-5 w-5 relative top-20 sm:top-48' />
  </main>
);

const Contact = () => (
  <main className='h-auto sm:h-screen bg-[url("/Background_Contacts.png")] bg-cover bg-center flex flex-col items-center pt-20 sm:pt-32 px-4 sm:px-8'>
    <h1 className='text-md font-normal text-red-400 mt-10 sm:mt-20'>contato</h1>
    <h1 className='text-xl sm:text-2xl font-bold text-zinc-300'>Gostou do meu trabalho?</h1>
    <p className='text-md font-normal text-zinc-500'>Entre em contato ou acompanhe as minhas redes sociais!</p>
    <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-20 w-full mb-4'>
      {[
        { src: Mailed, alt: "E-mail",  link:"mailto:odiegodev10@gmail.com",text: "E-mail" },
        { src: Instend, alt: "Instagram", text: "Instagram" },
        { src: Linkend, alt: "Linkedin", link:"https://www.linkedin.com/in/diego-santos-aa7982321/" ,text: "Linkedin" },
        { src: Githubed, alt: "GitHub", link:"https://github.com/Odiegodev1", text: "GitHub" }
      ].map((item, index) => (
        <a key={index} href={item.link} className='bg-slate-600 p-3 sm:p-4 flex items-center justify-between rounded-3xl w-full sm:w-[80%] md:w-[50%] lg:w-[30%] text-zinc-200'>
          <Image src={item.src} alt={item.alt} className='w-6 h-6 sm:w-8 sm:h-8 rounded-3xl' width={500} height={500} />{item.text} <Image src={seta} alt="Seta" className='w-6 h-6 sm:w-8 sm:h-8 rounded-3xl' width={500} height={500} />
        </a>
      ))}
    </div>
  </main>
);

const Footer = () => (
  <footer className='bg-zinc-950 h-20 flex items-center justify-center'>
    <h1 className='text-center text-white text-sm sm:text-base'>@2025 - Todos os direitos reservados</h1>
  </footer>
);

const HomePage = () => (
  <>
    <Header />
    <Projects />
    <Services />
    <Contact />
    <Footer />
  </>
);

export default HomePage;
