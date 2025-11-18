
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold">Service Not Found</h1>
          <Link to="/services" className="text-teal-accent mt-4 inline-block">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${service.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-deep-navy/70"></div>
        <div className="relative z-10 px-4 text-off-white">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold">{service.title}</h1>
        </div>
      </div>
      
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-3xl font-serif font-bold text-deep-navy mb-6">Service Description</h2>
                <p className="text-lg text-steel-navy leading-relaxed">{service.longDescription}</p>
              </ScrollReveal>

              <ScrollReveal className="mt-12">
                <h3 className="text-3xl font-serif font-bold text-deep-navy mb-6">Our Process</h3>
                <div className="space-y-6">
                  {service.process.map((p, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-teal-accent text-off-white rounded-full flex items-center justify-center font-bold text-xl mr-6">{index + 1}</div>
                      <div>
                        <h4 className="font-bold text-xl text-midnight-blue">{p.step}</h4>
                        <p className="text-steel-navy">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-teal-accent mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-steel-navy">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal className="mt-8">
                <div className="bg-teal-accent text-off-white p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">Need this Service?</h3>
                    <p className="mb-6">Contact us today to discuss your project requirements and get a custom quote.</p>
                    <Link to="/contact" className="bg-off-white text-deep-navy font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors w-full block">Request a Quote</Link>
                    <a href="https://wa.me/256755390643" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-off-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors w-full block mt-4">Chat on WhatsApp</a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-deep-navy">Related Project Photos</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.projectImages.map((img, index) => (
              <ScrollReveal key={index} delay={`${index * 100}ms`}>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={img} alt={`${service.title} project ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailPage;
