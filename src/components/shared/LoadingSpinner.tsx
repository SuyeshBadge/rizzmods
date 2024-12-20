import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="relative">
        {/* Outer spinning ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-purple-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner spinning ring */}
        <motion.div
          className="absolute inset-0 w-16 h-16 rounded-full border-4 border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute mt-24 text-purple-400 text-sm font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  )
} 