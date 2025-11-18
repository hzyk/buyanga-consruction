
import React, { useState } from 'react';
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

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

  return (
    <div>
    <PageHeader title="Contact Us" subtitle="Let's build the future together" bgImage={LOCAL_IMAGES[4]} />
      
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-4xl font-serif font-bold text-deep-navy mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-steel-navy font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-accent" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-steel-navy font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-accent" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-steel-navy font-bold mb-2">Phone</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-accent" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-steel-navy font-bold mb-2">Service Required</label>
                        <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-accent bg-white">
                            <option value="">Select a service...</option>
                            <option value="Building Construction">Building Construction</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Project Management">Project Management</option>
                            <option value="Renovation">Renovation & Maintenance</option>
                            <option value="Sustainable Construction">Sustainable Construction</option>
                            <option value="Structural Engineering">Structural Engineering Support</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-steel-navy font-bold mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-accent"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-teal-accent text-off-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="space-y-8">
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Contact Information</h3>
                    <div className="space-y-4 text-lg">
                        <p className="flex items-center"><span className="font-bold w-28">Address:</span>Kampala, Uganda</p>
                        <p className="flex items-center"><span className="font-bold w-28">Email:</span> <a href="mailto:info@buyungagroup.com" className="text-teal-accent hover:underline">info@buyungagroup.com</a></p>
                        <p className="flex items-center"><span className="font-bold w-28">Phone:</span> <a href="tel:+256755390643" className="text-teal-accent hover:underline">+256 755 390643</a></p>
                    </div>
                    <a href="https://wa.me/256755390643" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.905 6.166l-1.138 4.162 4.273-1.12z"/></svg>
                        Chat on WhatsApp
                    </a>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Business Hours</h3>
                    <p className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></p>
                    <p className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 1:00 PM</span></p>
                    <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                </div>
            </div>
        </div>
      </section>

      <div className="w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255343.8349271604!2d32.42843793266228!3d0.3135118228185016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f9d74b39b%3A0x45353d0ba9cc4b28!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1695000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map of Kampala, Uganda"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
