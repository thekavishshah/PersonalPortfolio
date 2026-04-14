'use client';

import { Suspense } from 'react';
import Chat from '@/components/chat/chat';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChatPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-4 top-4 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium shadow-md transition-all hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Chat Component */}
      <Suspense fallback={<div>Loading chat...</div>}>
        <Chat />
      </Suspense>
    </div>
  );
}
