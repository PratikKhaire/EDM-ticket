import Image from "next/image";
import FullLogo from "@/assets/full_logo.png";

export const Header = () => {
  return (
    <header className="sticky z-20 top-0 backdrop-blur-sm">
      <div className="py-5">
        <div className="container lg:px-20">
          <div className="flex items-center justify-between">
            <Image src={FullLogo} alt="Saas Logo" height={100} width={100} />
            
            <nav className="hidden text-xl md:flex text-black/60 gap-10 items-center">
              <a href="#">Events</a>
              <a href="#">About</a>
              <a href="#">Help</a>
              
              <button className="bg-black text-white px-4 py-1 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Login</button>
            </nav>

          </div>
        </div>

      </div>

    </header>
  );
};


