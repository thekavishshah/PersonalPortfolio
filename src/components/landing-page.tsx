'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Briefcase, Code, Mail, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getConfig, profileInfo } from '@/lib/config-loader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import AllProjects from '@/components/projects/AllProjects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export function LandingPage() {
  const config = getConfig();
  const profile = profileInfo;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center px-4 py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {config.personal.name}
                  </span>
                </h1>
                <p className="text-2xl font-medium text-muted-foreground sm:text-3xl">
                  {config.personal.title}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Computer Science Honors student at ASU with a passion for AI/ML and full-stack development.
                  Currently building AI-powered solutions at Green On Demand.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link href="/chat">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-purple-500/50"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Chat with AI Assistant
                  </motion.button>
                </Link>

                <a href={config.resume.downloadUrl} download>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-all hover:bg-accent hover:shadow-lg"
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </motion.button>
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-2">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="relative mx-auto aspect-square w-full max-w-lg"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border shadow-2xl">
                <Image
                  src={profile.src}
                  alt={profile.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = profile.fallbackSrc;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
                {config.personal.bio}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="border-t bg-accent/30 px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="h-9 w-9 text-primary" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Experience</h2>
            </div>
            <div className="grid gap-6">
              {config.experience.slice(0, 3).map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 space-y-2">
                            <h3 className="text-2xl font-bold">{exp.position}</h3>
                            <p className="text-xl font-semibold text-primary">{exp.company}</p>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              <span>{exp.duration}</span>
                              {exp.location && (
                                <>
                                  <span>•</span>
                                  <span>{exp.location}</span>
                                </>
                              )}
                              {exp.workType && (
                                <>
                                  <span>•</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {exp.workType}
                                  </Badge>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-primary/30 text-sm font-medium">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-t px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <Code className="h-9 w-9 text-primary" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h2>
            </div>
            <AllProjects />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t bg-accent/30 px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Skills />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t px-4 py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <Mail className="h-9 w-9 text-primary" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h2>
            </div>
            <Contact />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 px-4 py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative mx-auto w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Want to know more about me?
            </h2>
            <p className="text-xl text-white/90 sm:text-2xl">
              Chat with my AI assistant to learn about my projects, experience, and skills
            </p>
            <Link href="/chat">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-purple-600 shadow-2xl transition-all hover:shadow-white/20"
              >
                <MessageSquare className="h-6 w-6" />
                Start Chatting
                <ArrowRight className="h-6 w-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background px-4 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <p className="text-base font-semibold">{config.personal.name}</p>
              <p className="text-sm text-muted-foreground">
                © 2026 All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <Link
                href="/chat"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageSquare className="h-4 w-4" />
                Chat
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
