import { useState } from "react";
import { toast } from "sonner";
import greenBg from "@/assets/green-bg.jpg";
import { Leaf, MapPin, Calendar, Clock, Users, Send } from "lucide-react";

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    attending: "",
    people: "1",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.attending) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("RSVP submitted successfully!");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        {!submitted ? (
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

            {/* Contact */}
            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-1.5">
                Phone or Email <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                required
                placeholder="name@example.com or +254..."
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-1.5">
                Will you be attending? <span className="text-destructive">*</span>
              </label>
              <div className="flex gap-3 mt-1">
                {["Yes", "No", "Maybe"].map((opt) => (
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
                Number of People <span className="text-destructive">*</span>
              </label>
              <select
                name="people"
                value={form.people}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-1.5">
                Comments / Special Notes
              </label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                rows={3}
                placeholder="Any dietary requirements, questions, etc."
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              Submit RSVP
            </button>
          </form>
        ) : (
          <div className="bg-card/90 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 p-10 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-card-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground">
              Your RSVP has been received. We look forward to seeing you at ILU Green Day!
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", contact: "", attending: "", people: "1", comments: "" }); }}
              className="mt-6 text-sm text-primary hover:underline font-medium"
            >
              Submit another response
            </button>
          </div>
        )}

        <footer className="text-center mt-8 text-xs text-muted-foreground/60">
          © 2026 ILU Kitengela. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;
