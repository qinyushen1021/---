/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, StructureScene } from './components/QuantumScene';
import { FundFlowDiagram, ProcessLoopDiagram, ValueMetricsDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, CheckCircle, Shield, Zap, TrendingUp, Users, LayoutDashboard } from 'lucide-react';

const HighlightCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-start p-6 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full hover:border-dougong-gold/50 h-full" style={{ animationDelay: delay }}>
      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-dougong-gold mb-4 group-hover:bg-dougong-gold group-hover:text-white transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-serif text-xl text-stone-900 mb-3 font-bold">{title}</h3>
      <p className="text-sm text-stone-500 leading-relaxed text-justify">{desc}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-dougong-gold selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-dougong-gold rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm">斗</div>
            <div className="flex flex-col">
                 <span className={`font-bold text-lg tracking-wide leading-none transition-opacity text-stone-900 font-serif`}>
                  斗栱云 <span className="font-normal text-stone-500 text-sm">工程项目管理</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400">DOUGONG CLOUD</span>
            </div>
           
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#challenge" onClick={scrollToSection('challenge')} className="hover:text-dougong-gold transition-colors cursor-pointer">核心挑战</a>
            <a href="#solution" onClick={scrollToSection('solution')} className="hover:text-dougong-gold transition-colors cursor-pointer">解决方案</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-dougong-gold transition-colors cursor-pointer">数字化成果</a>
            <a 
              href="#" 
              className="px-5 py-2 bg-dougong-blue text-white rounded hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              申请演示
            </a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#challenge" onClick={scrollToSection('challenge')} className="hover:text-dougong-gold transition-colors cursor-pointer">核心挑战</a>
            <a href="#solution" onClick={scrollToSection('solution')} className="hover:text-dougong-gold transition-colors cursor-pointer">解决方案</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-dougong-gold transition-colors cursor-pointer">数字化成果</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.85)_0%,rgba(249,248,244,0.95)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-dougong-gold text-dougong-gold text-xs tracking-[0.1em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/50">
            精品客户案例：豪饰好（上海）建筑材料有限公司
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight mb-8 text-stone-900 drop-shadow-sm">
            攻克“挂靠模式”财务难点<br/>
            <span className="text-dougong-blue">实现业务精细化管控</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-12">
            豪饰好通过斗栱云工程项目管理系统，成功解决了困扰行业的“挂靠模式”下复杂的资金流与成本核算难题，并全面推动了业务全链路的数字化、标准化管理。
          </p>
          
          <div className="flex justify-center">
             <a href="#challenge" onClick={scrollToSection('challenge')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>探索案例详情</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Challenge Section */}
        <section id="challenge" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-400 uppercase">I. 背景与挑战</div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight text-stone-900">客户背景与核心痛点</h2>
              <div className="w-16 h-1 bg-dougong-gold mb-6"></div>
              <p className="text-stone-500 leading-relaxed mb-6 text-justify">
                豪饰好作为工程行业的中小企业，致力于提升项目管理效率。在数字化转型过程中，面临着行业内普遍存在的“流程非标”与“挂靠核算难”等复杂挑战。
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#F9F8F4] rounded-lg border-l-2 border-stone-300">
                    <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2"><LayoutDashboard size={18}/> 流程非标与数据混乱</h3>
                    <p className="text-sm text-stone-600">缺乏全周期标准化流程，导致部门间重复沟通和数据混乱。急需一套成熟的模板解决<strong>“不会建流程”</strong>的痛点。</p>
                </div>
                <div className="p-6 bg-[#F9F8F4] rounded-lg border-l-2 border-red-400">
                    <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2"><Shield size={18} className="text-red-500"/> 挂靠模式财务失真 (核心)</h3>
                    <p className="text-sm text-stone-600"><strong>痛点：</strong> 项目挂靠大集团，款项先进集团账户。若所有支出混同核算，会导致项目总支出虚高，严重影响利润核算准确性。</p>
                </div>
                 <div className="p-6 bg-[#F9F8F4] rounded-lg border-l-2 border-stone-300">
                    <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2"><Users size={18}/> 系统实施初期摩擦</h3>
                    <p className="text-sm text-stone-600">初期流程复杂导致员工表示“感觉有时候整的有点烦了”，影响了团队对系统全面投入使用的信心。</p>
                </div>
            </div>
          </div>
        </section>

        {/* Solution: The Affiliation Mode */}
        <section id="solution" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-dougong-blue/10 text-dougong-blue text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-dougong-blue/20">
                            <Shield size={14}/> 核心解决方案
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-900">解决“挂靠模式”资金与成本隔离难题</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed text-justify">
                           针对挂靠模式下建工集团代收代付的核心问题，斗栱云通过<strong>“资金调拨”</strong>功能实现创新管理。
                        </p>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed text-justify">
                            将建工账户收到的资金调拨至实际运营账户（如“豪饰好”）。这一操作不改变项目总余额，避免了重复计算，确保了项目成本核算的准确性。同时，建议新增<strong>“内部协议”</strong>表单，单独登记挂靠协议，实现内部交易与主合同分离。
                        </p>
                    </div>
                    <div>
                        <FundFlowDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Solution: Full Link Management */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-dougong-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-dougong-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                        系统架构赋能
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-6 text-white">收支与成本的精细化管控</h2>
                    <p className="text-lg text-stone-400 leading-relaxed">
                        斗栱云以其覆盖收入线、支出线、施工线的流程闭环，为豪饰好提供了全面解决方案。
                    </p>
                </div>

                <ProcessLoopDiagram />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700">
                        <h4 className="text-dougong-gold font-bold mb-2 text-lg">预算与支出关联管控</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">支出合同时，系统关联预算项并实时显示预算使用率，从源头防止项目超支。</p>
                    </div>
                    <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700">
                        <h4 className="text-dougong-gold font-bold mb-2 text-lg">资金闭环与预警</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">系统自动统计合同已结算、未开票、已收款、未收款金额。收款计划支持预警提醒，防止坏账。</p>
                    </div>
                    <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700">
                        <h4 className="text-dougong-gold font-bold mb-2 text-lg">劳务与人工费用管理</h4>
                        <p className="text-stone-400 text-sm leading-relaxed">通过“自由劳务”方式记录临时用工（点工），确保财务根据记录发放薪资，支付金额不超过已完成工作量。</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Results */}
        <section id="results" className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="order-2 lg:order-1 relative h-96 rounded-xl overflow-hidden shadow-xl border border-stone-200">
                        <StructureScene />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded border-l-4 border-dougong-gold">
                             <p className="font-serif italic text-stone-800 text-lg">
                                “我们也想把这一块给用起来……这个我要用好了才能推。”
                            </p>
                            <p className="text-xs text-stone-500 mt-2 text-right">— 客户对系统价值验证的评价</p>
                        </div>
                     </div>
                     
                     <div className="order-1 lg:order-2">
                         <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">III. 成果</div>
                         <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-900">数字化成果与价值</h2>
                         <p className="text-lg text-stone-600 leading-relaxed mb-8 text-justify">
                            通过斗栱云的全面应用，豪饰好实现了流程标准化、数据透明化和成本控制精细化的目标。解决了初期“烦恼”，为系统的全面启用奠定了基础。
                         </p>
                         <ValueMetricsDiagram />
                     </div>
                </div>
            </div>
        </section>

        {/* Future Outlook / Features */}
        <section className="py-24 bg-white border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">展望未来</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-4 text-stone-900">未来智能经营展望</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">从被动管理到主动决策的升级，引入 AI 能力实现更智能的经营。</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <HighlightCard 
                        title="AI 风险诊断" 
                        desc="一键 360° 诊断项目风险，使得未来的经营更智能、更高效，提前识别潜在问题。"
                        icon={Shield}
                        delay="0s" 
                    />
                    <HighlightCard 
                        title="AI 成本预测" 
                        desc="预测项目动态成本与总盈亏，帮助管理层在项目中途即可掌握最终利润情况。"
                        icon={Zap}
                        delay="0.1s" 
                    />
                    <HighlightCard 
                        title="管理流程标准化" 
                        desc="明确岗位职责划分（商务录入，施工执行，财务收支），杜绝线上线下双轨运行，确保数据一致性。"
                        icon={CheckCircle}
                        delay="0.2s" 
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">斗栱云 Dougong Cloud</div>
                <p className="text-sm">工程项目数字化管理专家，赋能中小企业精细化管控。</p>
            </div>
            <div className="flex gap-8 text-sm">
                <a href="#" className="hover:text-white transition-colors">产品功能</a>
                <a href="#" className="hover:text-white transition-colors">解决方案</a>
                <a href="#" className="hover:text-white transition-colors">联系我们</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600 border-t border-stone-800 pt-8">
            &copy; 2024 Dougong Cloud. All rights reserved. 客户案例：豪饰好（上海）建筑材料有限公司.
        </div>
      </footer>
    </div>
  );
};

export default App;