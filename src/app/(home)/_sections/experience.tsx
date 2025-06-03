"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Users, Lightbulb } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Fullstack Developer",
      organization: "Makan Design",
      location: "Remote",
      period: "Jul 2024 - Present",
      description:
        "Leading full-stack development initiatives, optimizing automation pipelines, and creating custom solutions that drive business efficiency and growth.",
      icon: Users,
      achievements: [
        "Rebuilt automation pipeline reducing costs by 100%",
        "Increased sync speed by +50% with Node.js optimization",
        "Developed custom CRM with Jet Admin and Next.js",
        "Revamped Shopify store themes with modern UI",
        "Built company portfolio using Webflow",
        "Streamlined lead management workflows",
      ],
    },
    {
      type: "education",
      title: "Computer Science Engineering",
      organization: "Nahda University",
      location: "Egypt",
      period: "2020 - 2024",
      description:
        "Specialized in software engineering, algorithms, and system design. Graduated with comprehensive knowledge in computer science fundamentals.",
      icon: GraduationCap,
      achievements: ["Focus on Software Engineering", "Algorithm Design & Analysis", "Database Management Systems", "Computer Networks"],
    },
    {
      type: "project",
      title: "Discord Bot Developer",
      organization: "Personal Project",
      location: "Remote",
      period: "2018 - Present",
      description:
        "Developed and maintained Discord bots serving over 300,000 users across multiple servers, handling real-time interactions and complex automation.",
      icon: Award,
      achievements: ["300,000+ Active Users", "Real-time Message Processing", "Server Automation Features", "Custom API Integrations"],
    },
    {
      type: "journey",
      title: "Self-Taught Developer Journey",
      organization: "Independent Learning",
      location: "Egypt",
      period: "2015 - Present",
      description: "Started with HTML/CSS blogging, evolved to full-stack development. Continuously learning and adapting to new technologies.",
      icon: Lightbulb,
      achievements: ["9+ Years of Coding", "Web to Mobile Development", "Game Development with Unity", "Backend Systems Architecture"],
    },
  ];
  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30";
      case "education":
        return "from-blue-500/20 to-blue-600/20 border-blue-500/30";
      case "project":
        return "from-green-500/20 to-green-600/20 border-green-500/30";
      case "journey":
        return "from-primary/20 to-primary/30 border-primary/30";
      default:
        return "from-accent/20 to-accent/30 border-accent/30";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "work":
        return "text-emerald-400";
      case "education":
        return "text-blue-400";
      case "project":
        return "text-green-400";
      case "journey":
        return "text-primary";
      default:
        return "text-accent";
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium">
            My Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground">
            Experience & Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From a curious teenager writing blogs to a full-stack developer building impactful applications
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-primary/50 to-accent/50 transform md:-translate-x-0.5" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${getTypeColor(
                      exp.type
                    )} backdrop-blur-sm border flex items-center justify-center`}>
                    <exp.icon className={`w-8 h-8 ${getIconColor(exp.type)}`} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-accent/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="space-y-4 mb-6">
                      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-200 group-hover:text-accent transition-colors duration-300">{exp.title}</h3>
                        <p className="text-accent font-semibold mt-1">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-slate-200 font-semibold flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 + 0.5 }}
                            className="flex items-center gap-2 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl p-8 border border-accent/30 backdrop-blur-sm max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-500 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-200">Currently Available</h3>
              <p className="text-slate-300 leading-relaxed">
                Open to new opportunities and exciting projects. Let's build something amazing together!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
