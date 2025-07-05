import { Book } from "lucide-react";
import { NewFooter } from "./NewFooter";

export const Footer = () => {
  return (
    <>
      <NewFooter />
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
                <Book className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Library Management System
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with React & RTK Query</span>
              <span>•</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
