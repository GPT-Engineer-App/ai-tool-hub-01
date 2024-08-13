import React from 'react';
import { TrendingUp, Search, BarChart2, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TrendCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    {icon}
    <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
  </div>
);

const Trends = () => {
  const trendingTopics = [
    {
      icon: <Search className="text-blue-500" size={32} />,
      title: "AI-Powered SEO Tools",
      description: "Discover the latest AI tools revolutionizing keyword research and content optimization."
    },
    {
      icon: <BarChart2 className="text-green-500" size={32} />,
      title: "SEM Automation Trends",
      description: "Explore how AI is streamlining paid search campaigns and improving ROI."
    },
    {
      icon: <Share2 className="text-purple-500" size={32} />,
      title: "SMMA AI Innovations",
      description: "Learn about AI-driven social media management and analytics tools for agencies."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">SEO, SEM, & SMMA Trends</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-blue-600" />
            Latest Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingTopics.map((topic, index) => (
              <TrendCard key={index} {...topic} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured AI Resources</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Top 10 AI-Powered SEO Tools for 2023</a>
                <p className="text-gray-600 mt-1">A comprehensive guide to the most effective AI tools for search engine optimization.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">The Future of SEM: AI and Machine Learning</a>
                <p className="text-gray-600 mt-1">Explore how artificial intelligence is shaping the future of search engine marketing.</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">AI for Social Media: A Game-Changer for SMMA</a>
                <p className="text-gray-600 mt-1">Discover how AI is transforming social media marketing agencies and their strategies.</p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="mb-4">Subscribe to our newsletter for the latest AI trends in SEO, SEM, and SMMA.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email address" className="flex-grow mr-2" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SEO Analytics Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Trends;
