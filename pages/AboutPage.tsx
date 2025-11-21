
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { LOCAL_IMAGES } from '../constants';

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

const AboutPage: React.FC = () => {
  const coreValues = [
    { title: 'Excellence', description: 'We strive for the highest quality in every detail of our work.' },
    { title: 'Integrity', description: 'Our business is built on honesty, transparency, and ethical practices.' },
    { title: 'Safety', description: 'The well-being of our team and communities is our paramount concern.' },
    { title: 'Innovation', description: 'We embrace new technologies and methods to deliver superior results.' },
    { title: 'Community Impact', description: 'We are committed to building infrastructure that uplifts and empowers.' },
  ];

  return (
    <div>
      <PageHeader title="About Us" subtitle="The foundation of our success" bgImage={LOCAL_IMAGES[1]} />

      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-4xl font-serif font-bold text-deep-navy mb-6">Company Overview</h2>
              <p className="text-lg text-steel-navy leading-relaxed mb-4">
                Buyunga Construction Group is an engineering-driven construction firm committed to delivering quality infrastructure, modern building projects, and sustainable solutions across the region.
              </p>
              <p className="text-lg text-steel-navy leading-relaxed">
                Founded on a principle of excellence, we have grown to become a trusted name in the industry, known for our skilled team, innovative approach, and unwavering commitment to client satisfaction.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <img src={LOCAL_IMAGES[3]} alt="Construction site meeting" className="rounded-lg shadow-xl w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight-blue text-off-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h3 className="text-3xl font-serif font-bold mb-4 text-teal-accent">Our Vision</h3>
            <p className="text-lg leading-relaxed text-off-white/90">
              To be the most trusted and innovative construction partner, uplifting communities through world-class infrastructure.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h3 className="text-3xl font-serif font-bold mb-4 text-teal-accent">Our Mission</h3>
            <p className="text-lg leading-relaxed text-off-white/90">
              To provide durable, safe, and cost-efficient construction solutions centered on quality, ethics, and client satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-deep-navy">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {coreValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={`${index * 100}ms`}>
                <div className="bg-off-white p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-2xl font-serif font-bold text-teal-accent mb-2">{value.title}</h4>
                  <p className="text-steel-navy">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-6">Meet Our Leadership</h2>
                <p className="text-lg text-steel-navy max-w-3xl mx-auto leading-relaxed mb-10">
                    Our team is composed of seasoned industry professionals with decades of experience in engineering, construction, and project management. Their collective expertise and forward-thinking leadership are the driving forces behind our success, ensuring every project is executed with precision and vision.
                </p>
                <Link to="/contact" className="bg-teal-accent text-off-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Connect With Our Team
                </Link>
            </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
