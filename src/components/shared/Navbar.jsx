"use client";
import { useEffect, useRef, useState } from "react";
import { Avatar, Button, Separator } from "@heroui/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { ArrowRightToSquare, ChevronDown } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(user, "user geting");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashOpen, setIsDashOpen] = useState(false);
  const pathName = usePathname();

  const dropdownRef = useRef(null);

  const handleLogOut = async () => {
    await authClient.signOut();
    toast.success("Logout Successfull");
    redirect("/");
  };

  const handleDashboard = (e) => {
    setIsDashOpen(!isDashOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDashOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <Link href="/add-pet">Add Pet</Link>
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
              <span className="text-foreground">Raa</span>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        {/* themeToggle and user Data */}

        <div className="flex gap-2 items-center">
          {/* themetoggle */}

          <div>
            <ThemeToggle></ThemeToggle>
          </div>

          {/* user */}
          <div>
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={handleDashboard}
                  className="flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Avatar size="sm">
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                  </Avatar>
                  <h3>{user?.name}</h3>
                  <ChevronDown
                    className={`${isDashOpen ? "rotate-0" : "rotate-180"}`}
                  ></ChevronDown>
                </div>

                {isDashOpen && (
                  <div className="absolute right-0 top-14 w-72 bg-background border border-gray-200 rounded-2xl shadow-xl p-5 z-50">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={user?.image || "https://i.pravatar.cc/100"}
                        alt={user?.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover border"
                      />

                      <div>
                        <h2 className="font-semibold text-lg text-foreground">
                          {user?.name}
                        </h2>

                        <p className="text-sm text-gray-400">{user?.email}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-4 border-t"></div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-2">
                      <Link
                        href={`/dashboard/my-requests`}
                        onClick={() => setIsDashOpen(false)}
                        className="px-4 py-3 rounded-xl hover:bg-orange-50 text-gray-600 font-medium transition"
                      >
                        Dashboard
                      </Link>

                      <Link
                        href="/"
                        className="px-4 py-3 rounded-xl hover:bg-orange-50 text-gray-600 font-medium transition"
                      >
                        Profile
                      </Link>

                      <button
                        onClick={handleLogOut}
                        className="w-full text-left px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                size="sm"
                className={
                  "bg-accent px-5 py-1 font-semibold text-sm rounded-lg"
                }
              >
                <ArrowRightToSquare></ArrowRightToSquare>
                <Link href={"/login"}>Login</Link>
              </Button>
            )}
          </div>
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
