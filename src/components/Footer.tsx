import React from 'react';
import { Mail, MapPin, Phone, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020B17] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Company Name */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg transform rotate-45"></div>
              <div>
                <h2 className="text-xl font-bold text-blue-400">Invictus Engineers</h2>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Our Services</h3>
            <ul className="space-y-2">
              <li>Python Core Advanced Training</li>
              <li>Data Analytics With Pandas Training</li>
              <li>Data Science using Python Training</li>
              <li>Data Visualization Using Matplotlib Training</li>
              <li>Data Visualization using DASH Training</li>
              <li>Data Wrangling Training</li>
              <li>Python Full Stack</li>
              <li>Machine Learning Training</li>
              <li>Data Engineering Training</li>
              <li>Java Full Stack Training</li>
              <li>Dot Net Full Stack Training</li>
              <li>AWS & DevOps Training</li>
              <li>Salesforce Training</li>
              <li>Salesforce Marketing Cloud Training</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+919966633097" className="flex items-center gap-2 hover:text-blue-400">
                <Phone size={20} />
                <span>+91-99666 33097</span>
              </a>
              <a href="mailto:enquiry@invictusengineers.com" className="flex items-center gap-2 hover:text-blue-400">
                <Mail size={20} />
                <span>enquiry@invictusengineers.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <p>
                  Invictus Engineers<br />
                  2rd Floor, Surviba Towers, Plot No.247/3RT,<br />
                  Near Umesh Chandra Statue, Sanjeeva Reddy Nagar,<br />
                  Hyderabad, Telangana - 500038.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">Follow Us:-</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
                  <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-blue-400"><Youtube size={24} /></a>
                  <a href="#" className="hover:text-blue-400"><Instagram size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          Copyright © 2023-2025 Invictusengineers. All rights reserved. Build with Digital GYB
        </div>
      </div>
    </footer>
  );
}