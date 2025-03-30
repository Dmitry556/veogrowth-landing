
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="text-center glass-card p-8 max-w-md">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-white/70 mb-8">Oops! Page not found</p>
          <p className="mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col space-y-4">
            <Button asChild>
              <Link to="/">Go to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-2" />
                Browse Articles
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
