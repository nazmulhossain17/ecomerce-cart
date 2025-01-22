
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {


  // Safely access the data when it's available
  const detail1 = "+44 207 112 82 85";
  const detail2 = "contact@nazmul.com";

  return (
    <footer className="w-full bg-white px-6 py-16 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-16">
        {/* Left Section */}
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 font-bold leading-tight">
            <span style={{ fontFamily: 'Onest, sans-serif' }}>We specialize in creating seamless, and innovative solutions designed to showcase and sell your brand on our platform.</span>
          </h2>

          <div className="space-y-6" style={{ fontFamily: 'Onest, sans-serif' }}>
            <p className="text-gray-500">Get in touch</p>
            <p className="text-xl font-bold">{detail1}</p>
            <p className="text-xl font-bold">{detail2}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-96">
          <div className="flex flex-col space-y-8">
            {/* Social as */}
            <div className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-between">
              <span>Follow us</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:opacity-80">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:opacity-80">
                  <span className="font-medium">W.</span>
                </a>
              </div>
            </div>

            {/* Get Started Card */}
            <div className="bg-gray-100 p-8 rounded-3xl">
              <div className="space-y-4">
                <h3 className="text-3xl font-normal">Let&apos;s get started</h3>
                <p className="text-gray-600">We&apos;d love to hear about your project.</p>
                <a
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-4 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-500 text-sm">© 2025 Nazmul Ltd · All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-500 hover:text-gray-700 text-sm">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
