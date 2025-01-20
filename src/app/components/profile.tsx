'use client';

import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Project = {
  id: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  techStack: string[];
  startDate: string;
  endDate?: string;
  details?: string;
  websiteUrl?: string;
};

type Company = {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  position: string;
  description?: string;
  projects: Project[];
  websiteUrl?: string;
};

type Education = {
  id: string;
  title: string;
  institute: string;
  date: string;
};

type Skill = {
  id: string;
  category: string;
  items: string[];
};

type Certificate = {
  id: string;
  name: string;
};

type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  companies: Company[];
  education: Education[];
  skills: Skill[];
  certificates: Certificate[];
};

function ProfileContent() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data);
        setProfile(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center py-20"><div className="animate-pulse">Loading...</div></div>;
  if (!profile) return null;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* 프로필 헤더 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
          {profile.name}
        </h1>
        <div className="text-gray-600 dark:text-gray-400 space-y-1">
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      </motion.div>
      
      {/* 스킬 섹션 */}
      {profile.skills && profile.skills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.skills.map((skill) => (
              <div key={skill.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 경력 섹션 */}
      {profile.companies && profile.companies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Work Experience</h2>
          <div className="space-y-16">
            {profile.companies.map((company, index) => (
              <motion.div 
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-indigo-600"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
                      {company.name}
                    </h3>
                    {company.websiteUrl && (
                      <a 
                        href={`https://${company.websiteUrl}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 text-sm"
                      >
                        {company.websiteUrl}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {new Date(company.startDate).toLocaleDateString('ko-KR', { 
                      year: 'numeric', 
                      month: 'long' 
                    })} - {
                      company.endDate 
                        ? new Date(company.endDate).toLocaleDateString('ko-KR', { 
                            year: 'numeric', 
                            month: 'long' 
                          })
                        : '현재'
                    }
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {company.position}
                  </p>
                </div>
                
                {/* 프로젝트 목록 */}
                <div className="space-y-6">
                  {company.projects.map((project, projectIndex) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (projectIndex * 0.1) }}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        {project.websiteUrl && (
                          <a 
                            href={`https://${project.websiteUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 text-sm"
                          >
                            {project.websiteUrl}
                          </a>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      {project.bulletPoints && project.bulletPoints.length > 0 && (
                        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400">
                          {project.bulletPoints.map((point, i) => (
                            <li key={i} className="mb-1">{point}</li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.details && (
                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                          {project.details}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 교육 섹션 */}
      {profile.education && profile.education.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Education</h2>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div 
                key={edu.id} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {edu.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.institute}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(edu.date).toLocaleDateString('ko-KR', { 
                    year: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 자격증 섹션 */}
      {profile.certificates && profile.certificates.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Certificates</h2>
          <div className="flex flex-wrap gap-3">
            {profile.certificates.map((cert) => (
              <span 
                key={cert.id}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 dark:from-purple-900 dark:to-pink-900 dark:text-purple-300"
              >
                {cert.name}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Profile() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20">Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
}