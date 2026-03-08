import { useState } from "react";
import { toast } from "sonner";
import greenBg from "@/assets/green-bg.jpg";
import iluLogo from "@/assets/ilu-logo.png";
import { Leaf, MapPin, Calendar, Clock, Users, Send, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const EventOverOverlay = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-auto">
      {/* Navbar - white bg for logo visibility */}
      <div className="w-full shrink-0 bg-card border-b border-border/40 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <img src={iluLogo} alt="ILU Logo" className="w-9 h-9 object-contain" loading="eager" />
          <span className="text-base font-bold text-card-foreground" style={{ fontFamily: "var(--font-display)" }}>ILU Green Day</span>
        </div>
        <span className="text-xs text-muted-foreground font-medium">🌿 March 2026</span>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Blurred green background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${greenBg})`, filter: "blur(10px)", transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-background/75" />

        {/* Card */}
        <div className="relative z-10 max-w-md w-full mx-4 my-6 bg-card/95 backdrop-blur-sm rounded-2xl border border-border/50 shadow-2xl p-6 md:p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="text-5xl md:text-6xl leading-none">🌿</div>

          <h2
            className="text-2xl md:text-3xl font-bold text-card-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            You Just Missed It! 😅
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            <strong className="text-primary">ILU Green Day</strong> happened on{" "}
            <strong>6th March 2026</strong> and it was <em>legendary</em>. 🌍🎉
            <br />
            Trees were planted. Speeches were made. The planet breathed a tiny sigh of relief.
          </p>

          <div className="bg-secondary/30 border border-border/40 rounded-xl p-3 text-sm text-card-foreground">
            <p className="font-semibold text-primary">Interested in future events?</p>
            <p className="text-muted-foreground text-xs mt-1">
              Reach out and we'll keep you in the loop! 🌱
            </p>
          </div>

          <div className="space-y-0.5">
            <p className="text-card-foreground font-bold text-base" style={{ fontFamily: "var(--font-display)" }}>
              Midwinter Nyambura
            </p>
            <p className="text-muted-foreground text-xs font-medium">President, ILUSA</p>
            <div className="flex items-center justify-center gap-3 mt-1">
              <a href="https://wa.me/254713225339" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-medium">📱 WhatsApp</a>
              <span className="text-border">|</span>
              <a href="mailto:midwinter@ilusa.ac.ke" className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-medium">📩 Email</a>
            </div>
          </div>

          {/* Big obvious button */}
          <button
            onClick={() => setDismissed(true)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl text-base transition-all active:scale-[0.97] shadow-lg"
          >
            Show me the form anyway 👀
          </button>

          <p className="text-muted-foreground/50 text-[11px] italic">
            (Submissions are closed, but you can admire the design)
          </p>

          {/* Powered by ILU */}
          <div className="flex items-center justify-center gap-2 pt-2 border-t border-border/30">
            <span className="text-muted-foreground/60 text-[11px]">Powered by</span>
            <img src={iluLogo} alt="ILU" className="w-5 h-5 object-contain" loading="eager" />
            <span className="text-muted-foreground/60 text-[11px] font-semibold">ILU</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    attending: "",
    people: "1",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.attending) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("fullname", form.name);     // ← Fixed: matches script expectation
      formData.append("contact", form.contact);
      formData.append("attending", form.attending);
      formData.append("numpeople", form.people);  // ← Fixed: matches script expectation

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxTrem6Pqoxyl-lhGpKkl1qJJQTHsFZm0IEmppv_WSn7XuvCO0X-vlCUmw3SJvpNnQA/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Server responded with error");
      }

      setShowSuccess(true);
      setForm({ name: "", contact: "", attending: "", people: "1" });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <EventOverOverlay />
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${greenBg})`, filter: "blur(12px)", transform: "scale(1.1)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Content */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <Leaf className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              Environmental Initiative
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-3">
            ILU <span className="text-primary">GREEN</span> DAY
          </h1>
          <p className="text-lg text-muted-foreground font-medium italic">
            Leading through Environmental Stewardship
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              6th March 2026
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              8:00 AM – 4:00 PM
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              ILU Kitengela Campus
            </span>
          </div>
        </header>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold text-card-foreground text-center mb-2">
            RSVP Now
          </h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-1.5">
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-1.5">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
              placeholder="+254..."
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>

          {/* Attendance */}
          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-1.5">
              Will you be attending? <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-3 mt-1">
              {["Yes", "No"].map((opt) => (
                <label
                  key={opt}
                  className={`flex-1 cursor-pointer text-center rounded-lg border-2 py-2.5 text-sm font-semibold transition-all ${
                    form.attending === opt
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border bg-secondary/50 text-card-foreground hover:border-primary/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="attending"
                    value={opt}
                    checked={form.attending === opt}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label className="block text-sm font-semibold text-card-foreground mb-1.5">
              <Users className="inline w-4 h-4 mr-1 -mt-0.5" />
              Number of People (including yourself) <span className="text-destructive">*</span>
            </label>
            <input
              type="number"
              name="people"
              value={form.people}
              onChange={handleChange}
              min={1}
              placeholder="1"
              className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {submitting ? "Submitting..." : "Submit RSVP"}
          </button>
        </form>

        {/* Success Dialog */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="bg-card border-border text-card-foreground text-center max-w-md">
            <DialogHeader className="items-center">
              <CheckCircle className="w-16 h-16 text-primary mb-2" />
              <DialogTitle className="text-2xl font-bold">RSVP Submitted!</DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mt-2">
                Thank you! We look forward to seeing you at ILU Green Day on 6th March 2026.
              </DialogDescription>
            </DialogHeader>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl transition-all"
            >
              Back to Form
            </button>
          </DialogContent>
        </Dialog>

        <footer className="text-center mt-8 text-xs text-muted-foreground/60">
          © 2026 Midwinter Nyambura, President, ILUSA. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;
