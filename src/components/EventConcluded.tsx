import { MessageCircle, Mail, ArrowRight, TreePine, Sparkles } from "lucide-react";
import greenBg from "@/assets/green-bg.jpg";
import iluLogo from "@/assets/ilu-logo.png";

const EventConcluded = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col min-h-screen bg-card">
      {/* === NAVBAR === */}
      <nav className="w-full shrink-0 bg-card px-5 md:px-8 py-4 flex items-center justify-between border-b border-border/20">
        <div className="flex items-center gap-4">
          <img
            src={iluLogo}
            alt="International Leadership University"
            className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md"
            loading="eager"
          />
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-card-foreground leading-none tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ILU Green Day
            </h2>
            <p className="text-xs md:text-sm text-primary font-medium mt-0.5">
              Environmental Initiative
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1.5">
          <TreePine className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">6 March 2026</span>
        </div>
      </nav>

      {/* === HERO SECTION === */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${greenBg})`, filter: "blur(8px) brightness(0.7)", transform: "scale(1.15)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-card/40 to-card/90" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-lg mx-auto px-5 py-8 md:py-12">
          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-card-foreground">Event Concluded</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-card rounded-3xl shadow-2xl border border-border/30 overflow-hidden">
            {/* Green accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="p-6 md:p-10 text-center space-y-5">
              {/* Headline */}
              <div>
                <h1
                  className="text-3xl md:text-4xl font-extrabold text-card-foreground leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Oops, You Just
                  <br />
                  <span className="text-primary">Missed It!</span> 😅
                </h1>
              </div>

              {/* Body */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                <strong className="text-card-foreground">ILU Green Day</strong> went down on <strong className="text-card-foreground">6th March 2026</strong> and it was absolutely <em>legendary</em>. 🌍
              </p>

              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                Trees were planted 🌳 Speeches were made 🎤
                <br />
                The planet breathed a tiny sigh of relief 🌬️
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-border/50" />
                <span className="text-xs text-muted-foreground font-medium">Want in next time?</span>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href="https://wa.me/254713225339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-2xl text-base transition-all active:scale-[0.97] shadow-lg hover:shadow-xl group"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <a
                  href="mailto:midwinter@ilusa.ac.ke"
                  className="w-full flex items-center justify-center gap-3 bg-card hover:bg-secondary/50 text-card-foreground font-bold py-4 rounded-2xl text-base transition-all active:scale-[0.97] border-2 border-border hover:border-primary/40 group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  Send an Email
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </a>
              </div>

              {/* Contact person */}
              <div className="pt-3 border-t border-border/30">
                <p className="text-card-foreground font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  Midwinter Nyambura
                </p>
                <p className="text-muted-foreground text-xs">President, ILUSA</p>
              </div>
            </div>

            {/* Footer bar */}
            <div className="bg-secondary/20 border-t border-border/20 px-6 py-3 flex items-center justify-center gap-2">
              <span className="text-muted-foreground text-[11px]">Powered by</span>
              <img src={iluLogo} alt="ILU" className="w-7 h-7 object-contain" loading="eager" />
              <span className="text-card-foreground text-xs font-bold">International Leadership University</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventConcluded;
