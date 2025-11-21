
import React, { useState } from 'react';
import { PROJECTS, LOCAL_IMAGES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import Lightbox from '../components/Lightbox';

type Category = 'All' | 'Residential' | 'Commercial' | 'Civil Works';

const PageHeader: React.FC<{ title: string; subtitle: string; bgImage: string }> = ({ title, subtitle, bgImage }) => (
    <div
      className="relative h-80 bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-deep-navy/70"></div>
      <div className="relative z-10 px-4 text-off-white">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-2">{title}</h1>
        <p className="text-lg md:text-xl font-sans italic">{subtitle}</p>
      </div>
    </div>
);

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<{ images: string[], startIndex: number } | null>(null);

  const categories: Category[] = ['All', 'Residential', 'Commercial', 'Civil Works'];

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const openLightbox = (projectImages: string[], imageIndex: number) => {
    setLightbox({ images: projectImages, startIndex: imageIndex });
  };
  
  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div>
      <PageHeader title="Our Projects" subtitle="A portfolio of excellence and precision" bgImage={LOCAL_IMAGES[3]} />
      
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-md shadow-sm">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${filter === cat ? 'bg-teal-accent text-white shadow' : 'text-steel-navy hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={`${index * 50}ms`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden group h-full flex flex-col">
                  <div className="relative">
                    <img src={project.images[0]} alt={project.title} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openLightbox(project.images, 0)} className="text-white bg-teal-accent px-4 py-2 rounded-md">View Gallery</button>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-sm text-teal-accent font-semibold">{project.category}</span>
                    <h3 className="text-2xl font-serif font-bold text-midnight-blue mt-1 mb-2">{project.title}</h3>
                    <p className="text-steel-navy mb-4 flex-grow">{project.description}</p>
                    <div>
                      <h4 className="font-bold text-deep-navy">Scope:</h4>
                      <p className="text-steel-navy">{project.scope}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {lightbox && (
        <Lightbox images={lightbox.images} startIndex={lightbox.startIndex} onClose={closeLightbox} />
      )}
    </div>
  );
};

export default ProjectsPage;
