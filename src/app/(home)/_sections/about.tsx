"use client";
import { motion } from "framer-motion";
import { Code2, Gamepad2, Globe, Smartphone } from "lucide-react";

export default function AboutSection() {
  const GetMyAge = () => {
    const today = new Date();
    const birthDate = new Date("2000-12-20");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const features = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating modern, responsive web applications with cutting-edge technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Building cross-platform mobile applications with React Native",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Developing engaging games and interactive experiences with Unity",
    },
    {
      icon: Code2,
      title: "Backend Systems",
      description: "Architecting scalable server-side solutions and APIs",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent font-medium">
                About Me
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}                className="text-4xl md:text-5xl font-bold text-foreground">
                Passionate Developer & Problem Solver
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-accent font-semibold">Osama Hussein</span>, a {GetMyAge()}-year-old Computer Science Engineer in Egypt. As a
                self-taught developer since 2015, I've built everything from Discord bots serving{" "}
                <span className="text-accent font-semibold">300,000+ users</span> to modern web applications and mobile games.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}                  className="group p-4 bg-card/80 rounded-xl hover:bg-card transition-all duration-300 cursor-pointer">
                  <feature.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            <div className="relative h-[500px] w-full">
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
              />

              {/* Code Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 h-full flex items-center justify-center">                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 max-w-sm w-full border border-border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }} className="space-y-3">
                      <div className="text-green-400 font-mono text-sm">{"const developer = {"}</div>
                      <div className="text-muted-foreground font-mono text-sm pl-4">
                        name: <span className="text-yellow-400">"Osama Hussein"</span>,
                      </div>
                      <div className="text-muted-foreground font-mono text-sm pl-4">
                        age: <span className="text-blue-400">{GetMyAge()}</span>,
                      </div>
                      <div className="text-muted-foreground font-mono text-sm pl-4">
                        experience: <span className="text-yellow-400">"9+ years"</span>,
                      </div>
                      <div className="text-muted-foreground font-mono text-sm pl-4">
                        passion: <span className="text-yellow-400">"Creating digital magic"</span>
                      </div>
                      <div className="text-green-400 font-mono text-sm">{"};"}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                <Code2 className="w-8 h-8 text-accent" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}                className="absolute bottom-10 left-10 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
