
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, LOCAL_IMAGES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

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

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader title="Our Services" subtitle="Comprehensive solutions for every need" bgImage={LOCAL_IMAGES[0]} />
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ScrollReveal key={service.id} delay={`${index * 100}ms`}>
                <Link to={`/services/${service.id}`} className="block bg-off-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-accent/10 p-3 rounded-full mr-4">
                      <service.icon className="w-8 h-8 text-teal-accent" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-midnight-blue">{service.title}</h3>
                  </div>
                  <p className="text-steel-navy mb-4 h-24">{service.shortDescription}</p>
                  <span className="font-bold text-teal-accent flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
