
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, FolderOpen, X } from "lucide-react";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup when component mounts (user enters site)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Small delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleHireMe = () => {
    window.open('mailto:arunpandi47777@gmail.com', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900 pr-6">
            Hi there! 👋
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 h-6 w-6"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-gray-700 leading-relaxed">
            I'm <span className="font-semibold text-amber-600">Arunpandian</span>, a creative mind passionate about posters, graphics, websites & tech.
          </p>
          <p className="text-gray-700 leading-relaxed">
            📌 This is my personal design space — where ideas become reality.
            Look around, explore my works, and if something clicks…
          </p>
          <p className="text-lg font-semibold text-gray-900 text-center">
            👉 Let's Work Together!
          </p>
          <div className="flex gap-3 justify-center pt-4">
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={handleHireMe}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                window.open('https://github.com/Arunpandian-AISION2030', '_blank');
                setIsOpen(false);
              }}
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              See My Work
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
