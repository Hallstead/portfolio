import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectShowcase = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get('tech') || 'All';

  const [filter, setFilter] = useState(initialFilter);

  const allProjects = [
    {
      title: 'Hill Mobile Tech Website',
      description:
        "Designed and developed a responsive business website for Hill Mobile Tech, a mobile computer repair and technology support company. Built a multi-page static website featuring custom branding, service descriptions, contact information, SEO optimization, and responsive layouts. Deployed the site using GitHub Pages with a custom domain and integrated it with the company's online presence.",
      tech: ["HTML", "CSS", "SEO", "UI/UX"],
      liveLink: 'https://www.gethillmobiletech.com',
      githubLink: 'https://github.com/Hallstead/',
    },
    {
      title: "Bill's PC API",
      description:
        "A RESTful Pokémon storage API inspired by Bill’s PC system from the Pokémon games. Built with TypeScript using a layered backend architecture with DAOs, services, routers, and models. Features authenticated user storage, CRUD operations, data validation, automated testing, external API integration with PokeAPI, and AWS-hosted persistence.",
      tech: ['TypeScript', 'AWS', 'REST API', 'HTML', 'CSS', 'JavaScript'],
      liveLink: '',
      githubLink: 'https://github.com/Hallstead/Bills-PC-API',
    },
    {
      title: 'AP-Pokeclicker',
      description:
        'An open-source adaptation of Pokeclicker that integrates Archipelago multiworld randomizer support into the game. Implemented client-server communication systems to connect with Archipelago servers, synchronize progression, transmit location checks, and receive randomized item data within the game experience.',
      tech: ['TypeScript', 'HTML', 'JavaScript', 'Python'],
      liveLink: 'https://hallstead.github.io/AP-Pokeclicker/',
      githubLink: 'https://github.com/Hallstead/AP-Pokeclicker',
    },
    {
      title: 'Battle RPG',
      description:
        'An original Python/Pygame RPG featuring randomized map generation, turn-based combat, enemy AI behaviors, status effects, and character-specific abilities. Players navigate a dynamically generated forest, solve puzzles, manage inventory and combat resources, and battle enemies through a state-driven GUI combat system.',
      tech: ['Python', 'Pygame'],
      liveLink: '',
      githubLink: 'https://github.com/JordonHillKirk/battle-rpg',
    },
    {
      title: 'Portfolio',
      description:
        'A responsive developer portfolio built with React and SCSS to showcase professional and personal projects, technical skills, and contact information. Features adaptive dark/light theme support based on user system preferences and a flexible layout optimized for multiple viewport sizes.',
      tech: ['React', 'JavaScript', 'HTML', 'SASS/SCSS', 'UI/UX'],
      liveLink: 'https://hallstead.github.io',
      githubLink: 'https://github.com/Hallstead/Hill-Mobile-Tech-Website',
    },
    // Add more projects
  ];

  const techOptions = [
    'All',
    ...[...new Set(allProjects.flatMap((p) => p.tech))].sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  const filteredProjects =
    filter === 'All'
      ? allProjects
      : allProjects.filter((project) => project.tech.includes(filter));

  // Update filter if URL param changes
  useEffect(() => {
    const techParam = searchParams.get('tech');
    if (techParam && techParam !== filter) {
      setFilter(techParam);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const selectedTech = e.target.value;
    setFilter(selectedTech);
    setSearchParams(selectedTech === 'All' ? {} : { tech: selectedTech });
  };

  return (
    <section className="project-showcase">
      <h2 className="project-showcase__title">Projects</h2>

      <label className="project-showcase__filter-label" htmlFor="tech-filter">
        Filter by tech:
      </label>
      <select
        id="tech-filter"
        value={filter}
        onChange={handleChange}
        className="project-showcase__filter-dropdown"
      >
        {techOptions.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>

      <div className="project-showcase__grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
