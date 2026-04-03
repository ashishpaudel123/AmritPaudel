import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  X,
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import { services } from "@/lib/utils";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  title = "Get Free Consultation",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-orange-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-2">
                Free Consultation
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
              <p className="text-orange-100 mt-1">
                Let's discuss how I can help grow your business
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service (optional)</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Describe your current marketing challenges, goals, and what you'd like to achieve..."
                />
              </div>

              {/* What to Expect */}
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                  What to expect:
                </h4>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Free 30-minute strategy consultation call</li>
                  <li>• Personalized marketing audit & recommendations</li>
                  <li>• Custom proposal with pricing & timeline</li>
                  <li>• No obligation or pressure - just valuable insights</li>
                </ul>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.message
                }
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending Message...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Free Consultation Request
                  </div>
                )}
              </Button>

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                By submitting this form, you agree to receive communication from
                Amritya Digital Marketing.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Request Sent Successfully! 🎉
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                Thank you for your interest! I'll review your request and get
                back to you within 24 hours with next steps.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20 rounded-xl p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>What's next:</strong> I'll send you a calendar link to
                  schedule your free 30-minute strategy call where we can
                  discuss your specific needs and goals.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
