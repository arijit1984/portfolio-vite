import React from 'react';

export default function ResumePDF() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Resume / Print</h2>
        <div className="flex gap-2">
          <a href="/resume.pdf" className="px-3 py-1 border rounded-lg">Download PDF</a>
          <button onClick={()=>window.print()} className="px-3 py-1 bg-slate-900 text-white rounded-lg">Print / Save as PDF</button>
        </div>
      </div>
      <iframe src="/resume.pdf" className="w-full h-[80vh] border rounded-lg" title="Resume"/>
    </div>
  );
}
