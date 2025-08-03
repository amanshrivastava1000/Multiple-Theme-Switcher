import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@themeswitch.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Design Street, Web City, WC 12345',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri 9AM-6PM EST',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`mb-6 ${
              themeConfig.layout === 'grid' ? 'text-5xl' : 'text-4xl'
            } font-bold`}
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'grid' ? 'Let\'s Chat!' : 'Get in Touch'}
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fontFamily,
            }}
          >
            {themeConfig.layout === 'sidebar' ?
              'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.' :
             themeConfig.layout === 'grid' ?
              'We love hearing from our users! Drop us a message and we\'ll get back to you super quick!' :
              'Have questions about our themes? Want to collaborate? We\'d love to hear from you.'}
          </p>
        </div>

        <div className={`grid gap-12 ${
          themeConfig.layout === 'sidebar' ? 'lg:grid-cols-5' : 'lg:grid-cols-2'
        }`}>
          {/* Contact Information */}
          <div className={themeConfig.layout === 'sidebar' ? 'lg:col-span-2' : ''}>
            <h2
              className="text-2xl font-bold mb-8"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fontFamily,
              }}
            >
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    themeConfig.layout === 'grid' ? 'bg-gradient-to-r from-blue-100 to-purple-100' : ''
                  }`}
                  style={{
                    backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
                    border: `1px solid ${themeConfig.colors.border}`,
                  }}
                >
                  <info.icon
                    size={24}
                    style={{ color: themeConfig.colors.primary }}
                  />
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: themeConfig.colors.text }}
                    >
                      {info.label}
                    </h3>
                    <p
                      style={{ color: themeConfig.colors.textSecondary }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-8">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: themeConfig.colors.text }}
              >
                Quick Contact
              </h3>
              <div className="flex space-x-4">
                <button
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: themeConfig.colors.primary,
                    color: '#FFFFFF',
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Live Chat</span>
                </button>
                <button
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: themeConfig.colors.surface,
                    color: themeConfig.colors.text,
                    border: `1px solid ${themeConfig.colors.border}`,
                  }}
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={themeConfig.layout === 'sidebar' ? 'lg:col-span-3' : ''}>
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-lg ${
                themeConfig.layout === 'grid' ? 'bg-gradient-to-br from-pink-50 to-yellow-50' : ''
              }`}
              style={{
                backgroundColor: themeConfig.layout === 'grid' ? undefined : themeConfig.colors.surface,
                border: `1px solid ${themeConfig.colors.border}`,
              }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fontFamily,
                }}
              >
                Send us a Message
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeConfig.colors.text }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: themeConfig.colors.background,
                        color: themeConfig.colors.text,
                        border: `1px solid ${themeConfig.colors.border}`,
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeConfig.colors.text }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: themeConfig.colors.background,
                        color: themeConfig.colors.text,
                        border: `1px solid ${themeConfig.colors.border}`,
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeConfig.colors.text }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      color: themeConfig.colors.text,
                      border: `1px solid ${themeConfig.colors.border}`,
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeConfig.colors.text }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      color: themeConfig.colors.text,
                      border: `1px solid ${themeConfig.colors.border}`,
                    }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 disabled:opacity-50 ${
                    themeConfig.layout === 'grid' ? 'text-white' : ''
                  }`}
                  style={{
                    backgroundColor: themeConfig.colors.primary,
                    color: themeConfig.layout === 'grid' ? '#FFFFFF' : themeConfig.colors.background,
                  }}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;