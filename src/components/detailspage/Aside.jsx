'use client'
import { authClient } from '@/lib/auth-client';
import { CodePullRequestArrowRight, SquareListUl } from '@gravity-ui/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Aside = () => {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
      const user = session?.user;
    
    

  const navLinks = [
    {
      name: "My Requests",
      path: `/dashboard/my-requests`,
    },
    {
      name: "Add Pet",
      path: `/dashboard/add-pet`,
    },
    {
      name: "My Listings",
      path: `/dashboard/my-listing`,
    },
  ];
    return (
              <aside className =" bg-white shadow-lg border-r p-6 h-full">
        
                {/* Logo */}
                <div className="mb-10">
                  <h1 className="text-xl font-semibold text-orange-500">
                    Dashboard
                  </h1>
                </div>
        
                {/* Navigation */}
                <nav className="space-y-3">
        
                  {navLinks.map((link) => {
        
                    const isActive = pathname === link.path;
        
                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`px-4 py-3 rounded-xl font-medium transition flex items-center gap-2
                          
                          ${
                            isActive
                              ? "bg-orange-500 text-white"
                              : "text-gray-700 hover:bg-orange-100"
                          }
                        `}
                      >
                       {link.name === 'My Requests' ? <CodePullRequestArrowRight></CodePullRequestArrowRight> : link.name === 'Add Pet' ? '+' : <SquareListUl/>} {link.name}
                      </Link>
                    );
                  })}
        
                </nav>
        
              </aside>
    );
};

export default Aside;