/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, DollarSign, Building2, Briefcase, FileText, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

// --- AFFILIATION MODE FINANCIAL FLOW DIAGRAM ---
// Visualizes the "Fund Allocation" solution for the anchoring/affiliation problem
export const FundFlowDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-2 text-dougong-dark font-bold">核心方案：挂靠模式资金隔离</h3>
      <p className="text-sm text-stone-500 mb-8 text-center max-w-md">
        通过“资金调拨”将建工集团代收资金转移至实际运营账户，实现成本真实核算。
      </p>
      
      <div className="relative w-full max-w-2xl h-64 bg-[#F5F4F0] rounded-lg border border-stone-200 p-6 flex items-center justify-between">
         
         {/* CLIENT */}
         <div className="flex flex-col items-center z-10">
            <div className="w-16 h-16 bg-stone-800 text-white rounded-lg flex items-center justify-center shadow-lg">
                <Building2 size={24} />
            </div>
            <span className="text-xs font-bold mt-2 uppercase tracking-wider">甲方/业主</span>
         </div>

         {/* Arrow 1 */}
         <div className="flex-1 h-[2px] bg-stone-300 relative mx-4">
             {step === 0 && (
                 <motion.div 
                    initial={{ x: 0, opacity: 0 }} 
                    animate={{ x: "100%", opacity: 1 }} 
                    className="absolute -top-3 w-16 h-6 bg-green-500 rounded text-white flex items-center justify-center text-[10px]"
                 >
                    支付款项
                 </motion.div>
             )}
         </div>

         {/* GROUP ACCOUNT (ANCHOR) */}
         <div className="flex flex-col items-center z-10">
            <div className={`w-16 h-16 border-2 border-dashed border-stone-400 bg-white rounded-lg flex items-center justify-center transition-all ${step === 1 ? 'ring-4 ring-dougong-blue/20 border-dougong-blue' : ''}`}>
                <Building2 size={24} className="text-stone-400" />
            </div>
            <span className="text-xs font-bold mt-2 uppercase tracking-wider text-center text-stone-500">建工集团账户<br/>(挂靠方)</span>
            <span className="text-[10px] text-red-500 font-mono mt-1 px-2 py-0.5 bg-red-50 rounded">
                {step === 0 ? "余额: 0" : step === 1 ? "余额: +100w" : "余额: 0"}
            </span>
         </div>

         {/* Arrow 2 (The Solution) */}
         <div className="flex-1 h-[2px] bg-dougong-blue/30 relative mx-4 flex flex-col items-center">
             <span className="text-[10px] font-bold text-dougong-blue mb-1">资金调拨</span>
             {step === 2 && (
                 <motion.div 
                    initial={{ x: "-50%", opacity: 0 }} 
                    animate={{ x: "50%", opacity: 1 }} 
                    className="absolute -top-3 w-16 h-6 bg-dougong-blue rounded text-white flex items-center justify-center text-[10px]"
                 >
                    内部流转
                 </motion.div>
             )}
         </div>

         {/* OPERATION ACCOUNT (REAL) */}
         <div className="flex flex-col items-center z-10">
            <div className={`w-16 h-16 bg-dougong-gold text-white rounded-lg flex items-center justify-center shadow-lg transition-all ${step === 3 ? 'scale-110' : ''}`}>
                <Briefcase size={24} />
            </div>
            <span className="text-xs font-bold mt-2 uppercase tracking-wider text-center text-dougong-gold">实际运营账户<br/>(豪饰好)</span>
            <span className="text-[10px] text-green-600 font-mono mt-1 px-2 py-0.5 bg-green-50 rounded">
                {step >= 3 ? "余额: +100w" : "余额: 0"}
            </span>
         </div>

      </div>

      <div className="flex gap-2 mt-6">
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 0 ? 'w-8 bg-stone-800' : 'w-2 bg-stone-300'}`}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-stone-800' : 'w-2 bg-stone-300'}`}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-dougong-blue' : 'w-2 bg-stone-300'}`}></div>
          <div className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-8 bg-dougong-gold' : 'w-2 bg-stone-300'}`}></div>
      </div>
      
      <div className="mt-4 h-6 text-sm font-serif italic text-stone-600 text-center">
        {step === 0 && "1. 甲方将款项支付给建工集团..."}
        {step === 1 && "2. 资金暂存在挂靠方账户 (直接核算会导致成本虚高)"}
        {step === 2 && "3. 系统执行“资金调拨”操作，将资金转入运营账套..."}
        {step === 3 && "4. 收入确认，项目支出与此资金关联，利润核算准确。"}
      </div>
    </div>
  );
};

// --- PROCESS CONTROL DIAGRAM ---
export const ProcessLoopDiagram: React.FC = () => {
    const phases = [
        { name: "预算", icon: <FileText size={18}/>, desc: "总控目标" },
        { name: "合同", icon: <Briefcase size={18}/>, desc: "预算关联" },
        { name: "施工执行", icon: <Building2 size={18}/>, desc: "劳务/材料" },
        { name: "结算", icon: <CheckCircle size={18}/>, desc: "资金闭环" },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8 w-full">
            {phases.map((phase, idx) => (
                <React.Fragment key={phase.name}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col items-center bg-white p-6 rounded-xl border border-stone-200 shadow-sm w-40 hover:border-dougong-gold transition-colors"
                    >
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-3">
                            {phase.icon}
                        </div>
                        <h4 className="font-bold text-stone-800 text-sm mb-1">{phase.name}</h4>
                        <p className="text-[10px] text-stone-500 uppercase tracking-wider">{phase.desc}</p>
                    </motion.div>
                    
                    {idx < phases.length - 1 && (
                        <ArrowRight className="text-stone-300 hidden md:block" />
                    )}
                    {idx < phases.length - 1 && (
                        <ArrowRight className="text-stone-300 md:hidden rotate-90 my-2" />
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

// --- VALUE METRICS DIAGRAM ---
export const ValueMetricsDiagram: React.FC = () => {
    const metrics = [
        { label: "财务核算准确性", before: 60, after: 99, color: "bg-dougong-blue" },
        { label: "流程标准化程度", before: 30, after: 100, color: "bg-dougong-gold" },
        { label: "风险可视度", before: 20, after: 95, color: "bg-stone-700" },
    ];

    return (
        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto bg-white/5 p-6 rounded-xl border border-white/10">
            {metrics.map((m) => (
                <div key={m.label} className="w-full">
                    <div className="flex justify-between text-xs text-stone-400 mb-2 font-bold tracking-wider uppercase">
                        <span>{m.label}</span>
                        <div className="flex gap-4">
                            <span className="text-stone-600">上线前</span>
                            <span className="text-white">上线后</span>
                        </div>
                    </div>
                    <div className="h-4 bg-stone-800 rounded-full overflow-hidden relative flex items-center">
                        {/* Before Marker */}
                        <div 
                            className="absolute h-full w-1 bg-stone-600 z-10" 
                            style={{ left: `${m.before}%` }}
                        />
                        {/* After Bar */}
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${m.after}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${m.color}`}
                        />
                    </div>
                </div>
            ))}
            <div className="mt-4 flex items-start gap-3 p-3 bg-dougong-gold/10 rounded border border-dougong-gold/20">
                <TrendingUp size={16} className="text-dougong-gold mt-1 min-w-[16px]" />
                <p className="text-xs text-stone-300 leading-relaxed text-justify">
                    通过实施“资金调拨”功能和强制流程标准化，豪饰好实现了财务数据与业务执行的完美对齐，消除了账外风险。
                </p>
            </div>
        </div>
    )
}