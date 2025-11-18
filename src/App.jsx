import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import MarkdownPage from './components/MarkdownPage';
import ResumePDF from './components/ResumePDF';

import cs_fraud from '../public/case-studies/cs_fraud.md?raw';
import cs_migration from '../public/case-studies/cs_migration.md?raw';
import cs_riskengine from '../public/case-studies/cs_riskengine.md?raw';
import cs_apimarket from '../public/case-studies/cs_apimarket.md?raw';
import cs_monolith from '../public/case-studies/cs_monolith.md?raw';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/case-study/fraud" element={<MarkdownPage content={cs_fraud} />} />
      <Route path="/case-study/migration" element={<MarkdownPage content={cs_migration} />} />
      <Route path="/case-study/riskengine" element={<MarkdownPage content={cs_riskengine} />} />
      <Route path="/case-study/apimarket" element={<MarkdownPage content={cs_apimarket} />} />
      <Route path="/case-study/monolith" element={<MarkdownPage content={cs_monolith} />} />
      <Route path="/resume" element={<ResumePDF />} />
    </Routes>
  );
}
