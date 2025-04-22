"use client";

import { Button } from "./ui/button";
import { Printer, FileText, Layout } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./ui/drawer";
import { useState } from "react";

export const PrintDrawer = () => {
  const [useCompactMode, setUseCompactMode] = useState(true);
  const [includeOnePager, setIncludeOnePager] = useState(true);
  const [includePdfCover, setIncludePdfCover] = useState(true);
  const [optimizePrint, setOptimizePrint] = useState(true);
  
  const handlePrint = () => {
    // Apply print settings
    document.documentElement.classList.remove('compact-print', 'show-one-pager', 'show-pdf-cover', 'optimize-print');
    
    if (useCompactMode) {
      document.documentElement.classList.add('compact-print');
    }
    
    if (includeOnePager) {
      document.documentElement.classList.add('show-one-pager');
    }
    
    if (includePdfCover) {
      document.documentElement.classList.add('show-pdf-cover');
    }
    
    if (optimizePrint) {
      document.documentElement.classList.add('optimize-print');
    }
    
    // Print the document
    setTimeout(() => {
      window.print();
      
      // Reset classes after printing
      setTimeout(() => {
        document.documentElement.classList.remove('compact-print', 'show-one-pager', 'show-pdf-cover', 'optimize-print');
      }, 1000);
    }, 300);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="fixed bottom-4 right-4 size-16 rounded-full shadow-2xl print:hidden">
          <Printer />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Print Resume</DrawerTitle>
            <DrawerDescription>Optimize your resume for printing</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="compact-mode" className="text-sm font-medium">Compact Layout</label>
                <p className="text-xs text-muted-foreground">Reduces spacing to fit more content</p>
              </div>
              <input 
                id="compact-mode" 
                type="checkbox"
                checked={useCompactMode}
                onChange={(e) => setUseCompactMode(e.target.checked)}
                className="h-4 w-4"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="pdf-cover" className="text-sm font-medium">Include PDF Cover</label>
                <p className="text-xs text-muted-foreground">Use uploaded PDF as first page</p>
              </div>
              <input 
                id="pdf-cover" 
                type="checkbox"
                checked={includePdfCover}
                onChange={(e) => setIncludePdfCover(e.target.checked)}
                className="h-4 w-4"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="one-pager" className="text-sm font-medium">Include One-Page Summary</label>
                <p className="text-xs text-muted-foreground">Adds ATS-friendly summary for scanners</p>
              </div>
              <input 
                id="one-pager" 
                type="checkbox"
                checked={includeOnePager}
                onChange={(e) => setIncludeOnePager(e.target.checked)}
                className="h-4 w-4"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label htmlFor="optimize" className="text-sm font-medium">Optimize for Print</label>
                <p className="text-xs text-muted-foreground">Apply extra optimization for PDF quality</p>
              </div>
              <input 
                id="optimize" 
                type="checkbox"
                checked={optimizePrint}
                onChange={(e) => setOptimizePrint(e.target.checked)}
                className="h-4 w-4"
              />
            </div>
            
            <div className="flex flex-col space-y-2 border rounded-lg p-3">
              <div className="flex items-center text-sm">
                <FileText className="mr-2 h-4 w-4" />
                <span>PDF Settings Recommendations:</span>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 ml-6 list-disc">
                <li>Set margins to &ldquo;Minimum&rdquo; or &ldquo;None&rdquo;</li>
                <li>Select &ldquo;Fit to page&rdquo; or 95% scaling</li>
                <li>Choose &ldquo;Portrait&rdquo; orientation</li>
                <li>Disable headers and footers</li>
                <li>In &ldquo;More settings&rdquo;, choose &ldquo;Background graphics&rdquo;</li>
              </ul>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handlePrint} className="w-full">Print Resume</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
