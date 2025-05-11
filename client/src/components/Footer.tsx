import { userData } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 px-6 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-openSans">&copy; {currentYear} {userData.name}. All rights reserved.</p>
          </div>
          <div>
            <p className="font-openSans">
              Designed and built with
              <svg className="inline-block h-5 w-5 text-secondary mx-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
