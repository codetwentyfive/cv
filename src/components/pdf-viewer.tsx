"use client";

import { useEffect, useState } from "react";

interface PDFViewerProps {
  pdfPath: string;
  showInPrint?: boolean;
}

export function PDFViewer({ pdfPath, showInPrint = false }: PDFViewerProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  // Detect print mode
  useEffect(() => {
    // Add event listener for beforeprint
    const handleBeforePrint = () => setIsPrinting(true);
    // Add event listener for afterprint
    const handleAfterPrint = () => setIsPrinting(false);

    // Add listeners
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    // Remove listeners on cleanup
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  // Don't render anything for printing if not configured to show
  if (isPrinting && !showInPrint) {
    return null;
  }

  // Classes to control visibility
  const displayClasses = showInPrint 
    ? "block pdf-cover print-force-new-page" 
    : "block print:hidden";

  return (
    <div className={displayClasses}>
      <iframe
        src={`${pdfPath}#toolbar=0&view=FitH&scrollbar=0`}
        className="w-full min-h-[calc(100vh-6rem)] print:min-h-[280mm]"
        style={{ border: 'none' }}
      />
    </div>
  );
} 