'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

const slideUp: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-20 rounded-full"></div>
          <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 relative z-10">
            Hello World
          </h1>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Welcome to Builder.io Test
          </p>
          <p className="text-base md:text-lg text-gray-400">
            Testing space creation and Vercel deployment
          </p>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/50 cursor-pointer"
          >
            Get Started
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full text-gray-300 font-semibold hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Learn More
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast</h3>
            <p className="text-gray-400 text-sm">Built with Next.js 16 for optimal performance</p>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-colors">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Beautiful</h3>
            <p className="text-gray-400 text-sm">Modern dark mode design with smooth animations</p>
          </div>
          <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-pink-500/50 transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Ready</h3>
            <p className="text-gray-400 text-sm">Integrated with Builder.io for visual editing</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="pt-16 text-gray-500 text-sm"
        >
          <p>Powered by Next.js 16 • React 19 • Tailwind CSS • Framer Motion</p>
        </motion.div>
      </motion.div>
    </main>
  );
}