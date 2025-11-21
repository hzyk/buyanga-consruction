
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode, bgColor: string }> = ({ href, children, bgColor }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bgColor} hover:opacity-80 transition-opacity`}>
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-navy text-off-white/80 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-off-white mb-4">Buyunga Group</h3>
            <p className="max-w-xs">Building With Integrity. Engineering With Impact.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-off-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-teal-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-off-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@buyungagroup.com" className="hover:text-teal-accent transition-colors">info@buyungagroup.com</a></li>
              <li><a href="tel:+256755390643" className="hover:text-teal-accent transition-colors">+256 755 390643</a></li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-off-white mb-4">Follow Us</h4>
            <div className="flex space-x-3">
                <SocialIcon href="https://wa.me/256755390643" bgColor="bg-green-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.905 6.166l-1.138 4.162 4.273-1.12z" /></svg>
                </SocialIcon>
                 <SocialIcon href="#" bgColor="bg-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
                 </SocialIcon>
                 <SocialIcon href="#" bgColor="bg-blue-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.336.213-2.033.184.606 1.92 2.347 3.314 4.422 3.352-1.693 1.325-3.832 2.115-6.157 2.115-.401 0-.796-.023-1.185-.069 2.189 1.407 4.795 2.229 7.623 2.229 9.141 0 14.307-7.721 13.995-14.646.959-.693 1.788-1.56 2.457-2.549z"/></svg>
                 </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-steel-navy pt-6 text-center text-off-white/60">
          <p>&copy; {new Date().getFullYear()} Buyunga Construction Group. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
