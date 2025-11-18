
import type { Service, Project, Testimonial } from './types';
import React from 'react';

// Local images from the `public/` folder (percent-encoded to handle spaces)
export const LOCAL_IMAGES = [
  '/WhatsApp%20Image%202025-11-18%20at%2004.45.58_fd2f5ad2.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2004.45.59_b6e04bc0.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2004.46.01_0c47a306.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2004.46.02_2f135f73.jpg',
  '/WhatsApp%20Image%202025-11-18%20at%2004.46.03_02791a04.jpg',
];

// Icons for services and features
const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
);
const RoadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
);
const ProjectIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
);
const RenovationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M5.222 18.222a8 8 0 100-12.444m13.556 0a8 8 0 100 12.444" /></svg>
);
const SustainableIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const StructureIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" /></svg>
);


export const SERVICES: Service[] = [
  {
    id: 'building-construction',
    title: 'Building Construction',
    shortDescription: 'From residential homes to large-scale commercial complexes, we deliver robust and modern structures.',
    longDescription: 'Our Building Construction service covers residential, commercial, and industrial projects. We manage everything from foundation work, intricate brickwork, and roofing, to final finishing touches, always emphasizing durability, aesthetic excellence, and strict compliance with building codes.',
    icon: BuildingIcon,
    bannerImage: LOCAL_IMAGES[0],
    process: [
        { step: 'Consultation & Design', description: 'Collaborating with clients and architects to finalize blueprints and project scope.' },
        { step: 'Site Preparation & Foundation', description: 'Ensuring a solid start with expert ground-leveling and foundation laying.' },
        { step: 'Structural Framing & Roofing', description: 'Erecting the core structure and ensuring it is weatherproof and secure.' },
        { step: 'Finishing & Handover', description: 'Applying final touches and conducting rigorous checks before client handover.' },
    ],
    benefits: ['High-Quality Materials', 'Adherence to Timelines', 'Certified Professionals', 'Full Compliance with Regulations'],
    projectImages: [LOCAL_IMAGES[1], LOCAL_IMAGES[2], LOCAL_IMAGES[3]]
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering & Infrastructure',
    shortDescription: 'Developing essential infrastructure like roads, bridges, and water systems for community growth.',
    longDescription: 'We undertake major civil engineering projects that form the backbone of communities. This includes roadworks, bridge construction, drainage systems, and public utility infrastructure. Our focus is on creating sustainable and resilient solutions that stand the test of time.',
    icon: RoadIcon,
    bannerImage: LOCAL_IMAGES[4],
    process: [
        { step: 'Feasibility Study & Surveying', description: 'Conducting in-depth analysis of the terrain and project requirements.' },
        { step: 'Detailed Engineering Design', description: 'Creating precise plans for construction, materials, and logistics.' },
        { step: 'Execution & Earthworks', description: 'Implementing the design with heavy machinery and skilled labor.' },
        { step: 'Quality Control & Commissioning', description: 'Testing the infrastructure to ensure it meets all safety and performance standards.' },
    ],
    benefits: ['Enhances Public Mobility', 'Long-Term Durability', 'Use of Advanced Technology', 'Eco-Friendly Practices'],
    projectImages: [LOCAL_IMAGES[0], LOCAL_IMAGES[1], LOCAL_IMAGES[2]]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDescription: 'Expert oversight to ensure your project is completed on time, within budget, and to the highest standards.',
    longDescription: 'Our project management services provide end-to-end oversight for construction projects of any scale. We handle scheduling, budgeting, contractor coordination, and quality control, ensuring a seamless process from conception to completion and providing you with peace of mind.',
    icon: ProjectIcon,
    bannerImage: LOCAL_IMAGES[2],
    process: [
        { step: 'Project Initiation & Planning', description: 'Defining goals, scope, budget, and timeline.' },
        { step: 'Resource Allocation', description: 'Assigning the right team, equipment, and materials for the job.' },
        { step: 'Execution & Monitoring', description: 'Overseeing daily operations and tracking progress against key milestones.' },
        { step: 'Project Closure & Review', description: 'Finalizing all details and delivering the completed project.' },
    ],
    benefits: ['Budget & Cost Control', 'Risk Mitigation', 'Clear Communication & Reporting', 'Efficient Timeline Management'],
    projectImages: [LOCAL_IMAGES[3], LOCAL_IMAGES[4], LOCAL_IMAGES[0]]
  },
  {
    id: 'renovation-maintenance',
    title: 'Renovation & Maintenance',
    shortDescription: 'Breathing new life into existing structures with modern upgrades and reliable maintenance.',
    longDescription: 'We specialize in transforming and maintaining existing properties. Our renovation services modernize spaces for improved functionality and aesthetics, while our maintenance programs ensure the longevity and safety of your buildings and infrastructure.',
    icon: RenovationIcon,
    bannerImage: LOCAL_IMAGES[3],
    process: [
        { step: 'Assessment & Consultation', description: 'Evaluating the current state and discussing renovation goals.' },
        { step: 'Design & Material Selection', description: 'Creating a new vision and choosing the right materials.' },
        { step: 'Demolition & Construction', description: 'Carefully deconstructing and rebuilding according to plan.' },
        { step: 'Final Inspection & Polish', description: 'Ensuring every detail is perfect before completion.' },
    ],
    benefits: ['Increased Property Value', 'Improved Functionality', 'Modern Aesthetic Appeal', 'Scheduled Maintenance Plans'],
    projectImages: [LOCAL_IMAGES[4], LOCAL_IMAGES[0], LOCAL_IMAGES[1]]
  },
  {
    id: 'sustainable-construction',
    title: 'Sustainable Construction',
    shortDescription: 'Building for the future with eco-friendly materials and energy-efficient designs.',
    longDescription: 'Our commitment to the environment is reflected in our sustainable construction practices. We utilize green building materials, implement energy-efficient designs, and focus on waste reduction to create structures that are both high-performing and environmentally responsible.',
    icon: SustainableIcon,
    bannerImage: LOCAL_IMAGES[1],
    process: [
        { step: 'Green Design Strategy', description: 'Integrating sustainability principles from the earliest design stages.' },
        { step: 'Sourcing Eco-Friendly Materials', description: 'Prioritizing recycled, renewable, and low-impact materials.' },
        { step: 'Energy-Efficient Systems', description: 'Installing systems for solar power, water harvesting, and efficient HVAC.' },
        { step: 'Waste Management & Recycling', description: 'Minimizing landfill waste through on-site sorting and recycling.' },
    ],
    benefits: ['Lower Operational Costs', 'Reduced Carbon Footprint', 'Healthier Living/Working Environment', 'Future-Proof Investment'],
    projectImages: [LOCAL_IMAGES[0], LOCAL_IMAGES[2], LOCAL_IMAGES[3]]
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering Support',
    shortDescription: 'Providing the expert analysis and design that ensures the integrity and safety of every structure.',
    longDescription: 'Our in-house structural engineering team provides critical support for all our projects. They perform detailed analysis, design robust structural systems, and ensure that every building can withstand environmental loads and meet rigorous safety standards.',
    icon: StructureIcon,
    bannerImage: LOCAL_IMAGES[4],
    process: [
        { step: 'Load Calculation & Analysis', description: 'Determining the forces the structure will face from use and environment.' },
        { step: 'System Design & Material Spec', description: 'Designing the skeletal system and specifying materials like steel and concrete.' },
        { step: 'Blueprint & Drawing Review', description: 'Creating and reviewing detailed technical drawings for construction.' },
        { step: 'On-site Inspections', description: 'Verifying that construction follows the engineering plans accurately.' },
    ],
    benefits: ['Guaranteed Structural Safety', 'Optimized Material Usage', 'Innovative Design Solutions', 'Compliance with All Codes'],
    projectImages: [LOCAL_IMAGES[1], LOCAL_IMAGES[2], LOCAL_IMAGES[3]]
  },
];

export const PROJECTS: Project[] = [
  { id: 1, title: 'Lakeside Residential Complex', category: 'Residential', description: 'A multi-unit housing development with modern amenities.', scope: 'Full building construction from foundation to finishing.', images: [LOCAL_IMAGES[0], LOCAL_IMAGES[1], LOCAL_IMAGES[2]]},
  { id: 2, title: 'Downtown Corporate Tower', category: 'Commercial', description: 'A 20-story office building featuring a state-of-the-art glass facade.', scope: 'Structural engineering, project management, and construction.', images: [LOCAL_IMAGES[3], LOCAL_IMAGES[4]]},
  { id: 3, title: 'Highway 401 Expansion', category: 'Civil Works', description: 'Expansion of a major highway to ease traffic congestion.', scope: 'Civil engineering, roadworks, and bridge construction.', images: [LOCAL_IMAGES[1], LOCAL_IMAGES[2], LOCAL_IMAGES[3]]},
  { id: 4, title: 'Heritage Building Renovation', category: 'Commercial', description: 'Modernization of a historic downtown building while preserving its facade.', scope: 'Renovation, structural reinforcement, and interior finishing.', images: [LOCAL_IMAGES[4]]},
  { id: 5, title: 'Eco-Villa Community', category: 'Residential', description: 'A community of sustainable homes with solar power and rainwater harvesting.', scope: 'Sustainable construction and project management.', images: [LOCAL_IMAGES[0], LOCAL_IMAGES[1]]},
  { id: 6, title: 'City Main Water Pipeline', category: 'Civil Works', description: 'Installation of a new primary water pipeline for the metropolitan area.', scope: 'Civil engineering, excavation, and utility installation.', images: [LOCAL_IMAGES[2], LOCAL_IMAGES[3], LOCAL_IMAGES[4]]},
  { id: 7, title: 'The Grand Mall', category: 'Commercial', description: 'Construction of a large shopping mall with over 200 retail spaces.', scope: 'Full building construction, structural engineering, and project management.', images: [LOCAL_IMAGES[1], LOCAL_IMAGES[2]]},
  { id: 8, title: 'Riverside Park Bridge', category: 'Civil Works', description: 'A pedestrian bridge connecting two parts of a city park.', scope: 'Civil engineering and structural design.', images: [LOCAL_IMAGES[3], LOCAL_IMAGES[4]]},
  { id: 9, title: 'Modern Suburban Homes', category: 'Residential', description: 'Development of 50 single-family homes in a new suburb.', scope: 'Building construction and site infrastructure.', images: [LOCAL_IMAGES[0], LOCAL_IMAGES[1]]},
];


export const TESTIMONIALS: Testimonial[] = [
    { quote: 'Buyunga Construction Group transformed our vision into a reality. Their professionalism and attention to detail were second to none. The project was delivered on time and exceeded our expectations.', name: 'John D.', projectType: 'Commercial Build' },
    { quote: 'The entire team was exceptional. From the initial planning stages to the final handover, their communication was clear and consistent. We couldn\'t be happier with our new corporate headquarters.', name: 'Jane S.', projectType: 'Corporate Tower' },
    { quote: 'Safety and quality were clearly their top priorities. The civil works project they handled for our municipality was complex, but they managed it flawlessly. Highly recommended for any large-scale infrastructure work.', name: 'Robert M.', projectType: 'Civil Infrastructure' },
];

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];
