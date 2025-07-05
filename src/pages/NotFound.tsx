import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 rounded-xl shadow-lg bg-white animate-fade-in">
        <div className="flex justify-center mb-6">
          {/* SVG Illustration */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce-slow"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="#e0e7ff"
              stroke="#6366f1"
              strokeWidth="4"
            />
            <ellipse
              cx="60"
              cy="80"
              rx="28"
              ry="8"
              fill="#6366f1"
              opacity="0.15"
            />
            <circle cx="45" cy="55" r="6" fill="#6366f1" />
            <circle cx="75" cy="55" r="6" fill="#6366f1" />
            <path
              d="M50 75 Q60 85 70 75"
              stroke="#6366f1"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold text-primary mb-2 tracking-tight">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
          <br />
          Let's get you back on track!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white font-bold rounded-lg shadow hover:bg-primary-hover transition-colors duration-200"
        >
          Return Home
        </a>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.5s infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
