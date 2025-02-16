
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
      {image && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/5 text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
