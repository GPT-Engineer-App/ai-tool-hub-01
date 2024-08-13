import React from 'react';
import { Search, BarChart, LineChart, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">SEO Analytics Pro</div>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Features', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Supercharge Your SEO Strategy</h1>
          <p className="text-xl mb-8">Advanced analytics and AI-powered insights to boost your search rankings</p>
          <div className="flex justify-center">
            <Input type="email" placeholder="Enter your email" className="w-64 mr-2" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Start Free Trial</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Powerful SEO Analytics Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart className="text-blue-500 mb-4" size={48} />, title: "Keyword Performance", description: "Track and analyze your keyword rankings over time." },
              { icon: <LineChart className="text-green-500 mb-4" size={48} />, title: "Traffic Analysis", description: "Dive deep into your website traffic sources and patterns." },
              { icon: <PieChart className="text-purple-500 mb-4" size={48} />, title: "Competitor Insights", description: "Benchmark your performance against top competitors." }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your SEO?</h2>
          <p className="text-xl mb-8">Join thousands of marketers who've improved their search rankings with SEO Analytics Pro</p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SEO Analytics Pro</h3>
            <p className="text-gray-400">Empowering marketers with data-driven SEO insights.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Blog', 'Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest SEO trends</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-l-md" />
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-r-md">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
