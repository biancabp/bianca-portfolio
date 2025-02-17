import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileJson, 
  Code2, 
  Compass, 
  Coffee,
  Palette,
  Layout,
  FileCode2,
  Database
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "TypeScript", icon: FileJson, color: "#2F74C0" },
    { name: "React.js", icon: Code2, color: "#61DAFB" },
    { name: "Node.js", icon: FileCode2, color: "#539E43" },
    { name: "Java", icon: Coffee, color: "#E76F00" },
    { name: "HTML5", icon: Layout, color: "#E34F26" },
    { name: "CSS3", icon: Palette, color: "#264DE4" },
    { name: "JavaScript", icon: Compass, color: "#F7DF1E" },
    { name: "WordPress", icon: Database, color: "#21759B" }
  ];

  const projects = [
    {
      title: "AssetHub - Gestão de Ativos Industriais",
      description: "Uma plataforma web para gerenciamento e automação de ativos industriais, desenvolvida em parceria com o centro de pesquisa da Petrobras (CENPES). Participo do desenvolvimento tanto do UX/UI quanto do front e back-end do projeto.",
      techStack: ["TypeScript", "React.js", "Node.js", "Ant Design", "Figma", "Gitlab"],
      liveUrl: "https://assethub.imd.ufrn.br/asset-manager/submodels",
      image: "/assethub.svg"
    },
    {
      title: "Sistema Informatizado de Gestão de Laboratórios",
      description: "o SILab foi desenvolvido como uma solução do problema de gestão de laboratórios do campus do IFRN-ZN, proporcionando recursos de registro, controle e planejamento das atividades.",
      techStack: ["Bootstrap", "Sass", "HTML5", "CSS", "JavaScript"],
      liveUrl: "https://github.com/biancabp/SiLab",
      image: "/silab.svg"
    },
    {
      title: "Programa de Remoção de Dados Espúrios",
      description: "Esse sistema, desenvolvido em JavaScript, busca estimar a vazão de um fluido que passa por uma placa de orifício de uma refinaria de petróleo da Petrobras.",
      techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "https://github.com/biancabp/desafio-petrobras",
      image: "/sistema.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section id="home" className="min-h-screen hero-gradient flex items-center section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-up opacity-0 translate-y-10 transition-all duration-700">
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary">
                Desenvolvedora Front-End
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary">
                Bianca Bezerra Pires
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
              Olá, me chamo Bianca, tenho 19 anos, sou formada em <strong>Informática para Internet pelo IFRN </strong> e estou no 3° período de <strong>Tecnologia da Informação na UFRN</strong>. No IFRN tive muitas experiências com a área e foi o que me despertou o interesse em desenvolvimento web.<br></br>
              </p>
              <p className="text-lg text-gray-600 max-w-xl">Atualmente, participo de um projeto de Gestão de Ativos Industriais 
              em colaboração com o <strong>Centro de Pesquisa da Petrobras no IMD-UFRN</strong>.</p>
             
              <div className="flex gap-4">
                <a href="tel:+5584996383482" className="button-primary">
                  Meu contato
                </a>
                <a href="#projects" className="button-secondary">
                 Projetos
                </a>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="https://github.com/biancabp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/bianca-bezerra-pires/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:bianca.bezerra.713@ufrn.edu.br" className="text-gray-600 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+5584996383482" className="text-gray-600 hover:text-primary transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="w-80 h-83 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/ba020250-0f4c-4c1d-ab7f-178a179fb3c9.png"
                  alt="Profile"
                  className="object-cover w-full h-full object-[center_top]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4">
              Habilidades & Technologias
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">
              Conhecimento Técnico
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="fade-up opacity-0 translate-y-10 transition-all duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-accent hover:bg-accent/60 transition-colors">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm">
                      <skill.icon 
                        size={32} 
                        style={{ color: skill.color }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="font-medium text-secondary">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-padding bg-accent">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-up opacity-0 translate-y-10 transition-all duration-700">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4">
              Projetos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Trabalhos recentes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="fade-up opacity-0 translate-y-10 transition-all duration-700" style={{ animationDelay: `${index * 200}ms` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
