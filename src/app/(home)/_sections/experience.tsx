"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Users, Lightbulb, BriefcaseBusiness } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Full-Stack Engineer",
      organization: "Tafawwaq",
      location: "Remote",
      period: "Jul 2025 - Present",
      employmentType: "Hourly",
      icon: BriefcaseBusiness,
      description:
        "Built Tafawwaq from scratch — a multi-sided marketplace connecting students with tutors for live 1-on-1 sessions. Sole engineer across the entire stack.",
      achievements: [
        "Next.js frontend with Node.js/Express.js backend, fully in TypeScript, deployed on AWS EC2 with Docker and Nginx",
        "Integrated VideoSDK for real-time tutoring sessions with automated room creation, lifecycle management, and attendance tracking",
        "Built a complete booking lifecycle engine with full status history and transition logic",
        "Stripe checkout for student payments with invoice PDF generation; Stripe Connect for teacher payouts with a balance ledger, hold periods, and withdrawal tracking",
        "Bidirectional Socket.io layer for live notifications, session state, and in-session chat",
        "Redis for job queuing and caching",
        "Admin panel covering user management, tutor review, booking oversight, payout management, refund processing, and platform analytics",
        "Role-specific dashboards with booking management, billing history, session recordings, notifications, and onboarding flows",
        "SEO system with dynamic metadata, JSON-LD structured data, and a built-in blog engine",
      ],
    },
    {
      type: "work",
      title: "Full-Stack Developer",
      organization: "Makan Design",
      location: "Remote",
      period: "Jul 2024 - Apr 2026 (Full-time) • Apr 2026 - Present (Hourly)",
      employmentType: "Hourly",
      icon: BriefcaseBusiness,
      description:
        "Built the company's internal operational backbone — a custom CRM platform and a set of automation systems that replaced fragmented workflows across spreadsheets, Airtable, and third-party SaaS tools.",
      achievements: [
        "Custom full-stack CRM centralizing projects, clients, quotations, vendors, and financials into one system",
        "Quotation engine with versioning, product catalogs, payment terms, timelines, secure sharing links, and e-signature via Signit",
        "Product catalog with multi-tier pricing, SEO metadata, tagging, and AI-powered multilingual translations",
        "Vendor management with multi-currency support, exchange rates, shipping configs, and project bill linkage",
        "Custom Node.js API syncing products, orders, and shipment statuses between Airtable and Shopify, replacing multiple paid integrations",
        "Make.com automation workflows for inventory sync between Airtable and Shopify",
        "Shopify theme customization using Liquid, eliminating dependency on several third-party apps",
        "Internal CRM workflows with Jet Admin and Next.js, role-based access control",
        "Custom file management and quotation platform with a Google Drive-style UX for non-technical staff",
        "Hosted on AWS EC2 with S3 for file and asset storage",
      ],
    },
    {
      type: "education",
      title: "B.S. Computer Science",
      organization: "Nahda University",
      location: "Beni Suef, Egypt",
      icon: GraduationCap,
      period: "2020 - 2024",
      description: "Graduated with a degree in Computer Science.",
      achievements: [],
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
        return "text-primary";
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
            className="inline-block px-4 py-2 bg-accent/20 rounded-full text-primary font-medium">
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
                      exp.type,
                    )} backdrop-blur-sm border flex items-center justify-center`}>
                    <exp.icon className={`w-8 h-8 ${getIconColor(exp.type)}`} />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className={`flex-1 ml-24 mt-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
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
                        <h3 className="text-2xl font-bold text-slate-200 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-primary font-semibold">{exp.organization}</p>
                          {exp.employmentType && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30">
                              {exp.employmentType}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">{exp.description}</p>

                    {/* Achievements */}
                    {!!exp.achievements.length && (
                      <div className="space-y-3">
                        <h4 className="text-slate-200 font-semibold flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
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
                    )}

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
