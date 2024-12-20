import { motion } from 'framer-motion';
import { TrustBadge as TrustBadgeType } from './types';

interface TrustBadgeProps {
  badge: TrustBadgeType;
  index: number;
}

export default function TrustBadge({ badge, index }: TrustBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-2 bg-purple-900/20 px-3 py-1.5 rounded-full border border-purple-500/20"
    >
      <badge.icon className="w-4 h-4 text-green-500" />
      <span className="text-gray-300 text-sm">{badge.text}</span>
    </motion.div>
  );
}