
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, TESTIMONIALS, LOCAL_IMAGES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import type { Testimonial } from '../types';

const HeroSection: React.FC = () => (
  <div
    className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-center"
    style={{ backgroundImage: `url('${LOCAL_IMAGES[0]}')` }}
  >
    <div className="absolute inset-0 bg-deep-navy/70"></div>
    <div className="relative z-10 px-4 text-off-white">
      <h1 className="text-4xl md:text-7xl font-serif font-extrabold mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Building Excellence. Engineering the Future.
      </h1>
      <p className="text-lg md:text-2xl font-sans italic mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        Premium construction, civil engineering, and project management solutions.
      </p>
      <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <Link to="/services" className="bg-teal-accent text-off-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
          View Our Services
        </Link>
        <Link to="/contact" className="bg-off-white text-deep-navy font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
);

const AboutPreview: React.FC = () => (
  <section className="py-20 bg-off-white">
    <div className="container mx-auto px-6 text-center">
      <ScrollReveal>
        <h2 className="text-4xl font-serif font-bold text-deep-navy mb-6">Your Trusted Construction Partner</h2>
        <p className="text-lg text-steel-navy max-w-3xl mx-auto leading-relaxed">
          Buyunga Construction Group is an engineering-driven firm committed to delivering quality infrastructure, modern building projects, and sustainable solutions. We combine innovation with integrity to build a better future for communities across the region.
        </p>
        <Link to="/about" className="mt-8 inline-block text-teal-accent font-bold hover:underline">Learn More About Us &rarr;</Link>
      </ScrollReveal>
    </div>
  </section>
);

const FeaturedServices: React.FC = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">Our Core Services</h2>
        <p className="text-lg text-steel-navy max-w-2xl mx-auto">We offer a comprehensive range of services to meet the diverse needs of our clients.</p>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.slice(0, 6).map((service, index) => (
          <ScrollReveal key={service.id} delay={`${index * 100}ms`}>
            <Link to={`/services/${service.id}`} className="block bg-off-white p-8 rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
              <service.icon className="w-12 h-12 text-teal-accent mb-4" />
              <h3 className="text-2xl font-serif font-bold text-midnight-blue mb-2">{service.title}</h3>
              <p className="text-steel-navy mb-4">{service.shortDescription}</p>
              <span className="font-bold text-teal-accent">Learn More &rarr;</span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPreview: React.FC = () => (
    <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">Our Featured Projects</h2>
                <p className="text-lg text-steel-navy max-w-2xl mx-auto">A glimpse into the quality and scale of our completed work.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.slice(0, 3).map((project, index) => (
                    <ScrollReveal key={project.id} delay={`${index * 100}ms`}>
                        <div className="relative group overflow-hidden rounded-lg shadow-lg">
                            <img src={project.images[0]} alt={project.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-deep-navy/60 group-hover:bg-deep-navy/80 transition-all duration-500 flex flex-col justify-end p-6 text-off-white">
                                <h3 className="text-2xl font-serif font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                <p className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 delay-100">{project.description}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/projects" className="bg-teal-accent text-off-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">View All Projects</Link>
            </div>
        </div>
    </section>
);

const WhyChooseUs: React.FC = () => {
    const reasons = [
        { title: 'Expertise', description: 'Decades of combined experience in complex construction and engineering projects.' },
        { title: 'Safety First', description: 'Uncompromising commitment to the highest safety standards on all our sites.' },
        { title: 'Quality Assurance', description: 'Rigorous quality control at every stage to ensure durable, lasting results.' },
        { title: 'Timely Delivery', description: 'Proven track record of completing projects on schedule and within budget.' },
        { title: 'Certified & Professional', description: 'A fully certified team of engineers, architects, and project managers.' },
    ];
    return (
        <section className="py-20 bg-midnight-blue text-off-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                    <h2 className="text-4xl font-serif font-bold mb-6">Why Choose Us?</h2>
                    <p className="text-lg mb-8 leading-relaxed">We are more than just builders. We are partners in your success, dedicated to bringing your vision to life with precision and passion.</p>
                    <div className="grid grid-cols-1 gap-6">
                        {reasons.map(reason => (
                            <div key={reason.title} className="bg-steel-navy/50 p-4 rounded-md">
                                <h3 className="font-bold text-xl text-teal-accent">{reason.title}</h3>
                                <p className="text-off-white/80">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
                <ScrollReveal className="relative h-96 md:h-auto md:min-h-[500px] rounded-lg overflow-hidden">
                    <img src={LOCAL_IMAGES[2]} alt="Engineers planning" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-blue to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div>
                                <AnimatedCounter end={15} className="text-5xl font-bold text-teal-accent" />
                                <p className="font-bold">Years Experience</p>
                            </div>
                            <div>
                                <AnimatedCounter end={200} className="text-5xl font-bold text-teal-accent" />
                                <p className="font-bold">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

const TestimonialsSection: React.FC = () => (
    <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-4">What Our Clients Say</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial: Testimonial, index) => (
                    <ScrollReveal key={index} delay={`${index * 100}ms`}>
                        <div className="bg-off-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                            <p className="text-steel-navy italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-midnight-blue text-xl">{testimonial.name}</p>
                                <p className="text-teal-accent">{testimonial.projectType}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
);

const QuickContactStrip: React.FC = () => (
    <section className="bg-teal-accent text-off-white py-12">
        <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
                <h3 className="text-3xl font-serif font-bold mb-4">Ready to Start Your Next Project?</h3>
                <p className="text-lg mb-6">Let's build something extraordinary together. Contact us today for a consultation.</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    <a href="https://wa.me/256755390643" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline">WhatsApp Us</a>
                    <a href="tel:+256755390643" className="font-bold text-xl hover:underline">Call: +256 755 390643</a>
                    <a href="mailto:info@buyungagroup.com" className="font-bold text-xl hover:underline">Email Us</a>
                </div>
            </ScrollReveal>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <AboutPreview />
            <FeaturedServices />
            <ProjectsPreview />
            <WhyChooseUs />
            <TestimonialsSection />
            <QuickContactStrip />
        </div>
    );
};

export default HomePage;
