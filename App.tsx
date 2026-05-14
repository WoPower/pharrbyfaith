import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Flower2, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  Heart, 
  UserRoundCheck, 
  Scale, 
  ShieldPlus, 
  Brain, 
  FileText, 
  Home, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Globe, 
  Share2, 
  Church, 
  Handshake,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-serif font-medium text-primary"
        >
          Pharr By Faith
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button className="text-sm font-semibold tracking-wide text-primary hover:opacity-70 transition-opacity uppercase">
            Get Help
          </button>
          <button className="bg-primary text-on-primary px-8 py-2 rounded-full text-sm font-semibold tracking-wide hover:shadow-lg active:scale-95 transition-all uppercase">
            Donate
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-outline-variant/30 px-6 py-6 space-y-4"
        >
          <button className="block w-full text-left text-sm font-semibold tracking-wide text-primary uppercase">
            Get Help
          </button>
          <button className="block w-full bg-primary text-on-primary px-8 py-3 rounded-full text-sm font-semibold tracking-wide text-center uppercase">
            Donate
          </button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0ujUwg6ke4Qqbj1ab_GXU9gdVNUWAWMJKn-1G5u1JOvoyEBD0W185ek8ll1xT3mhQl20TTAwaiTeMASpjbf7SMRWUckdRMhwZuQnGvZNXIv8074V80jAlNWiYgody2_1czcJv-JcSFcMloPYDBrBSkFYIrFgbwMhm6EpfcDK-jR4HUr9OkX1A5Tv24cwV8xSw4hKHCfyXWTnNnzAtJl5fTXeaR5s7xT1dyBctlegEbSE36q-b6kd6bdY_WYN" 
          alt="Lavender field background" 
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl leading-tight text-on-surface">
            A safe place for <br />
            <span className="italic text-primary">healing & recovery.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-md leading-relaxed">
            We provide a compassionate, faith-centered sanctuary for women navigating the journey to wholeness, renewal, and lasting freedom.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full text-sm font-semibold tracking-wider flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase">
              Inquiry for Care
              <ArrowRight size={18} />
            </button>
            <button className="border border-outline text-on-surface px-10 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-surface-container transition-all uppercase">
              Explore Programs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PullQuote = () => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.blockquote 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-serif italic text-secondary leading-relaxed opacity-80"
        >
          "Healing is not a linear path, but a communal journey walked in grace and grounded in faith."
        </motion.blockquote>
        <div className="mt-8 flex justify-center">
          <div className="w-12 h-[1px] bg-outline-variant"></div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden soft-glow">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0ugVTej_osTRkPw4Eg_Fa_363k61V1tcuUr3I__PKgfC1a1ivPwr2Lc4rpn3WS0Dwl_SpnIni6ix9g5UGjYEECC_6hD31GEkUaQoKsJrDoJgztIBDUUpCTuLtNT4AM2Mak_iOZAg8mDwNZmUr1hf0r9kiSz30u1iauWteAHKKYGCmq4yPOZhc6b-wNHvrFJyVEliR0QBhYX7KmdJYgiB2LnnxRhMCQlcckURQVJg30H2WhgqGa3p6z0Q3WHM" 
                alt="Women in circle support" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-tertiary-container p-8 rounded-2xl hidden md:block max-w-[280px] shadow-lg"
            >
              <p className="text-sm font-semibold italic text-on-tertiary-container leading-relaxed">
                "I found more than sobriety here; I found my sisters and my soul again."
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Mission</span>
            <h2 className="text-4xl md:text-5xl text-on-surface leading-tight">Cultivating a Community of Transformation</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Pharr By Faith was founded on the belief that every woman deserves a sanctuary where she can heal without judgment. We bridge the gap between clinical recovery and spiritual restoration, offering a holistic environment that addresses the mind, body, and spirit.
              </p>
              <p>
                Our approach is trauma-informed and deeply personal. We don't just see a patient; we see a sister, a mother, a daughter—a woman with a divine purpose.
              </p>
            </div>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-primary pt-1"><Flower2 size={24} /></div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">Holistic Care</h4>
                  <p className="text-sm text-on-surface-variant">Focusing on total wellness.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary pt-1"><Users size={24} /></div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider">Sisterhood</h4>
                  <p className="text-sm text-on-surface-variant">Unwavering social support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Director = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="max-w-[400px] aspect-[1/1.4] rounded-3xl overflow-hidden soft-glow bg-white shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_j0nJhaWijW0YnDx6ES3Rc55HPDUCL6orGMH5z8_4nscgN_jgejBTCGbh-UlX9LRBjIe1rOSpSOr_C-Gl8qaIV9uP4H5k02Rlt5nCp4XPsQNnd4vi0u2Wad6l-2mkBfoKUe63yghKp7eH-9A7s83rVCirMPo9QSOFCZtLaTHCc6c7qfAU80IvRGm3-ADWRbhzzqVOdhVlLIUSw03kf21PjYLA16m47adlW4H7OQD8ydKIFqLjhwkogWlkZogCHW-_xYG98cyaiypq_Os" 
                alt="Marsha - Director" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Leadership</span>
            <h2 className="text-4xl md:text-5xl text-on-surface leading-tight">Meet Our Director</h2>
            <div className="w-12 h-[1px] bg-primary/30"></div>
            <p className="text-xl md:text-2xl text-on-surface-variant italic leading-relaxed">
              At the heart of Pharr By Faith is a leader who deeply understands the journey.
            </p>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Shaped by lived experience, she leads with faith, empathy, and unshakable resilience—offering more than guidance, but clarity, connection, and direction. Her approach is intentional: meet people where they are, walk alongside them, and help them rise with confidence and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Foundation = () => {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Values</span>
          <h2 className="text-4xl md:text-5xl text-on-surface">Our Foundation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl text-primary border-b border-outline-variant pb-4">Who We Serve</h3>
            <p className="text-on-surface">Women in recovery seeking stability, support, and growth.</p>
            <ul className="space-y-3">
              {[
                "Substance use recovery",
                "Mental health support",
                "Structure and stability",
                "Healing and personal growth"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container p-10 rounded-3xl space-y-8 shadow-sm">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Vision</h4>
              <p className="text-on-surface-variant italic leading-relaxed">
                "Restore Faith, Rebuild Lives, and Revive Destiny and Purpose in the Lives of Women."
              </p>
            </div>
            <div className="w-8 h-[1px] bg-outline-variant"></div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Mission</h4>
              <p className="text-sm text-on-surface leading-loose">
                Provide quality residential, aftercare, support services and training to ex-offenders and individuals recovering from substance abuse.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl text-primary border-b border-outline-variant pb-4">What We Provide</h3>
            <ul className="space-y-4">
              {[
                { icon: <Flower2 size={18} />, text: "A safe, stable, substance-free environment designed to support healing and progress" },
                { icon: <HeartHandshake size={18} />, text: "Trauma-informed, compassionate care" },
                { icon: <Heart size={18} />, text: "Mental health and recovery support" },
                { icon: <UserRoundCheck size={18} />, text: "Personalized guidance and case management" },
                { icon: <Scale size={18} />, text: "Clear structure and accountability balanced with empathy" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-primary shrink-0 mt-0.5">{item.icon}</div>
                  <span className="text-sm text-on-surface-variant leading-tight">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Substance Use Recovery",
      desc: "Evidence-based treatment blended with faith-based grounding. We offer structured 12-step integration, group therapy, and individual counseling sessions.",
      icon: <ShieldPlus />,
      color: "bg-surface",
      colSpan: "md:col-span-7",
      textColor: "text-primary"
    },
    {
      title: "Mental Wellness",
      desc: "Targeted support for dual-diagnosis, anxiety, and trauma through restorative mindfulness and cognitive healing.",
      icon: <Brain />,
      color: "bg-secondary-container/30 border border-secondary-container/50",
      colSpan: "md:col-span-5",
      textColor: "text-secondary"
    },
    {
      title: "Successful Re-entry",
      desc: "Providing the tools, documentation, and life-skills needed to reintegrate into society with confidence and dignity.",
      icon: <FileText />,
      color: "bg-tertiary-container/20 border border-tertiary-container/40",
      colSpan: "md:col-span-5",
      textColor: "text-tertiary"
    },
    {
      title: "Supportive Housing",
      desc: "Safe, sober living environments that provide a stable foundation while you transition back to independent life.",
      icon: <Home />,
      color: "bg-surface",
      colSpan: "md:col-span-7",
      textColor: "text-primary"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Pathways to Recovery</span>
          <h2 className="text-4xl md:text-5xl text-on-surface">Core Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${p.colSpan} ${p.color} p-10 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 soft-glow`}
            >
              <div className="space-y-6">
                <div className={`w-12 h-12 ${p.textColor === 'text-primary' ? 'bg-primary-container' : p.textColor === 'text-secondary' ? 'bg-secondary-container' : 'bg-tertiary-container'} rounded-full flex items-center justify-center shrink-0`}>
                  {p.icon}
                </div>
                <h3 className="text-2xl font-serif">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
              <button className={`mt-10 text-xs font-bold tracking-widest ${p.textColor} flex items-center gap-2 uppercase`}>
                Learn More 
                <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-surface-container rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="p-10 md:p-16 lg:w-3/5">
            <h2 className="text-4xl text-on-surface mb-6">Inquiry for Care</h2>
            <p className="text-on-surface-variant mb-12 max-w-lg">
              Take the first step toward your new beginning. Fill out the form below, and our compassionate intake team will reach out within 24 hours.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" type="text" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Preferred Contact</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Email or Phone" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Program Interest</label>
                <select className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                  <option>Substance Use Recovery</option>
                  <option>Mental Wellness</option>
                  <option>Re-entry Support</option>
                  <option>Housing Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">How can we help you?</label>
                <textarea className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" rows={4} placeholder="Tell us a little bit about your needs..."></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full text-sm font-bold tracking-[0.2em] shadow-lg hover:shadow-2xl active:scale-[0.98] transition-all uppercase">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Hotline & Visual Side */}
          <div className="lg:w-2/5 relative bg-primary flex flex-col justify-center p-10 md:p-16 text-on-primary overflow-hidden">
            <div className="absolute inset-0 opacity-20 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0ujdPusAHNi0AJQ1N0ctLr6QD8UF8oSAFjS4CAc3_n893L3neO1UVnO3NEG1WgzjPgmoEplm0XPgaIJl2ID31-j4Bz6quf7fFJ_WnY21pyAEkHt6LA-54jBEIvgyeLxqepVjkubaNgEmbsvHoBz36wgxfmjoWgeR0yx8kLQ-9_Ff0nZaV8MhF5XUF4Y-KBvEUBssxTWs7EdF9u4cJAfv0KnQr0VNCMLtmVQuDH4qt-69_jp2l7cWciXW5EQI" 
                alt="Support staff" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 space-y-12">
              <div className="bg-on-primary/10 backdrop-blur-xl p-8 rounded-3xl border border-on-primary/20 shadow-2xl">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">Immediate Support</span>
                <h3 className="text-3xl font-serif mt-2">Crisis Hotline</h3>
                <p className="text-4xl font-bold mt-6 tracking-tight font-sans">704-806-2449</p>
                <p className="text-sm mt-6 opacity-90 leading-relaxed font-sans font-normal">
                  Available 24/7 for emergency guidance and emotional support. You are not alone.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-serif">Other ways to reach us</h4>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="opacity-70" />
                  <p className="text-sm font-semibold tracking-wide font-sans">thispharrbyfaith@hotmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="opacity-70" />
                  <p className="text-sm font-semibold tracking-wide font-sans">PO Box 16940, Charlotte, NC 28297</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "Unity Health Alliance", icon: <Users /> },
    { name: "Grace Community", icon: <Church /> },
    { name: "Hope Foundation", icon: <Handshake /> },
    { name: "Sisters in Spirit", icon: <Heart /> }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl text-on-surface mb-16">Together for Transformation</h2>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {React.cloneElement(p.icon as React.ReactElement, { size: 48 })}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaysToGive = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteer */}
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 flex flex-col justify-end min-h-[450px] text-on-primary group shadow-xl">
            <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif">Volunteer Your Heart</h3>
              <p className="text-on-primary/90 max-w-sm leading-relaxed">
                Join our network of mentors, cooks, and community builders. Your time can change a life.
              </p>
              <button className="bg-on-primary text-secondary px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-surface-container-low transition-all uppercase">
                Sign Up to Volunteer
              </button>
            </div>
          </div>
          {/* Donate */}
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 flex flex-col justify-end min-h-[450px] text-on-primary group shadow-xl">
            <div className="absolute inset-0 bg-primary group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif">Support the Sanctuary</h3>
              <p className="text-on-primary/90 max-w-sm leading-relaxed">
                Your donations directly fund housing, therapy, and meals for women in recovery.
              </p>
              <button className="bg-on-primary text-primary px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-surface-container-low transition-all uppercase">
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-2xl font-serif text-primary">Pharr By Faith</div>
          <p className="text-xs text-on-surface-variant/80 tracking-wide">
            © 2024 Pharr By Faith. A Sanctuary for Healing & Recovery.
          </p>
        </div>
        <div className="flex gap-4">
          {[
            { icon: <Globe size={18} />, href: "#" },
            { icon: <Share2 size={18} />, href: "#" }
          ].map((item, i) => (
            <a 
              key={i}
              href={item.href} 
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary hover:text-primary hover:shadow-md transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PullQuote />
        <Mission />
        <Director />
        <Foundation />
        <Programs />
        <Contact />
        <Partners />
        <WaysToGive />
      </main>
      <Footer />
    </div>
  );
}
