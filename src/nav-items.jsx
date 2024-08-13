import { Home, BarChart, TrendingUp, BookOpen, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";
import Trends from "./pages/Trends.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <BarChart className="h-4 w-4" />,
    page: <div>Features Page</div>,
  },
  {
    title: "Trends",
    to: "/trends",
    icon: <TrendingUp className="h-4 w-4" />,
    page: <Trends />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: <div>Blog Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];
