"use client";
import { authClient } from "@/lib/auth-client";
import { CodePullRequestArrowRight, SquareListUl } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Aside = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <aside className="bg-background md:shadow-lg md:border-r px-0 md:px-5 py-5 md:min-h-full">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold text-accent">Dashboard</h1>
      </div>

      {/* Navigation */}

      <nav className="flex flex-row md:flex-col gap-1 sm:gap-2 items-center justify-between md:justify-items-normal md:items-start">
        <Button
          className={`w-full ${pathname === "/dashboard/my-requests" ? "bg-accent text-gray-100" : "text-gray-700 hover:text-gray-700"}`}
        >
          <Link className="flex items-center gap-2" href={"/dashboard/my-requests"}><CodePullRequestArrowRight></CodePullRequestArrowRight> My Requests</Link>
        </Button>
        <Button
          className={`w-full ${pathname === "/dashboard/add-pet" ? "bg-accent text-gray-100" : "text-gray-700 hover:text-gray-700"}`}
        >
          <Link className="flex items-center gap-2" href={"/dashboard/add-pet"}>+ Add Pet</Link>
        </Button>
        <Button
          className={`w-full ${pathname === "/dashboard/my-listing" ? "bg-accent text-gray-100" : "text-gray-700 hover:text-gray-700"}`}
        >
          <Link className="flex items-center gap-2" href={"/dashboard/my-listing"}><SquareListUl></SquareListUl> My Listings</Link>
        </Button>
      </nav>
    </aside>
  );
};

export default Aside;
