"use client";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightToSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Navbar = () => {

  const {data:session} = authClient.useSession()
  const user = session?.user
  console.log(user, 'user geting');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const handleLogOut = async()=>{
  await authClient.signOut()
  toast.success('Logout Successfull')
  }

  const links = (
    <>
      <li
        className={`font-medium text-sm
        ${pathName === "/" ? "border-b-2 border-accent" : ""}
        hover:border-b-2 border-accent`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`font-medium text-sm 
        ${pathName === "/all-pets" ? "border-b-2 border-accent" : ""}
        hover:border-b-2 border-accent`}
      >
        <Link href="/all-pets">All Pets</Link>
      </li>
      <li
        className={`font-medium text-sm 
        ${pathName === "/add-pet" ? "border-b-2 border-accent" : ""}
        hover:border-b-2 border-accent`}
      >
        <Link href="add-pet">Add Pet</Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/60 backdrop-blur-lg">
      <header className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="font-semibold text-2xl">
            <Link href={"/"}>
              <span className="text-accent">Peto</span>
              <span className="text-secondary">Raa</span>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <div>

          {
            
           user? <div className="flex gap-2 items-center">
            <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>

      <Button size="sm" onClick={handleLogOut} className={"bg-accent px-5 py-1 font-semibold text-sm rounded-lg"}>Logout</Button>
           </div> :
            <Button
            size="sm"
            className={"bg-accent px-5 py-1 font-semibold text-sm rounded-lg"}
          >
            <ArrowRightToSquare></ArrowRightToSquare>
            <Link href={"/login"}>Login</Link>
          </Button>}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
