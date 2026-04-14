'use client';

import { Suspense } from 'react';
import LandingPage from '@/components/landing-page';

export default function Home() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <LandingPage />
    </Suspense>
  );
}
