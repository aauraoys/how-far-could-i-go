'use client';

import Profile from '@/app/components/profile';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Crafting beautiful and performant web experiences
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/aauraoys" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:auraoys@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/%EC%9C%A4%EC%84%9D-%EC%98%A4-a7b417175/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Profile Section with Work Experience */}
      <Profile />
    </main>
  );
}