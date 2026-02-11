'use client';

import { motion } from 'framer-motion';
import { Download, File, ExternalLink } from 'lucide-react';
import { resumeDetails } from '@/lib/config-loader';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-pdf to avoid SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

// Configure PDF.js worker only on client side
if (typeof window !== 'undefined') {
  import('react-pdf').then((mod) => {
    mod.pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
  });
}

export function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownload = () => {
    // For external URLs, open in a new tab
    window.open(resumeDetails.downloadUrl, '_blank');
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log('PDF loaded successfully! Pages:', numPages);
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError(`Failed to load resume: ${error.message}`);
    setLoading(false);
  }

  return (
    <div className="mx-auto w-full py-8 font-sans">
      {/* Resume Card */}
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-accent p-0 transition-all duration-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.0, ease: 'easeOut' }}
      >
        {/* Details area */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download button */}
            <motion.button
              onClick={handleDownload}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-black/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download PDF"
            >
              <Download className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* PDF Preview - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full rounded-xl overflow-hidden border bg-white shadow-lg"
      >
        <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <File className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Resume Preview</span>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            Open Full
          </button>
        </div>
        
        <div className="w-full bg-gray-50 flex flex-col items-center justify-center overflow-auto p-4">
          {/* Resume PDF Preview */}
          <div className="w-full max-w-4xl">
            {loading && (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <File className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-700 text-lg font-medium mb-2">
                  Resume Preview Unavailable
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {error}
                </p>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <Download className="h-5 w-5" />
                  Download PDF
                </button>
              </div>
            )}

            {!error && mounted && (
              <Document
                file="/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                }
                className="flex flex-col items-center"
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={Math.min(800, typeof window !== 'undefined' ? window.innerWidth - 100 : 800)}
                    className="mb-4 shadow-lg"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                ))}
              </Document>
            )}

            {!error && !mounted && (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;