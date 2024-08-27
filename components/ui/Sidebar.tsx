'use client';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface SidebarProps {
  user: string; // Future use or conditional logic can be implemented
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  // Error handling or fallback could be added if needed
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='flex mb-12 cursor-pointer items-center gap-2'>
          <Image 
            src='/icons/logo.svg' 
            width={34} 
            height={34} 
            className='w-[24px] h-[24px] max-xl:w-[14px] max-xl:h-[14px]' 
            alt='Logo' 
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>
        {sidebarLinks.length > 0 ? (
          sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link 
                href={item.route} 
                key={item.label} 
                className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
              >
                <div className='relative w-6 h-6'>
                  <Image 
                    src={item.imgURL} 
                    alt={item.label} 
                    className={cn({ 'brightness-[3] invert-0': isActive })} 
                    fill 
                  />
                </div>
                <p className={cn('sidebar-label', { 'text-white': isActive })}>
                  {item.label}
                </p>
              </Link>
            );
          })
        ) : (
          <p className='text-gray-500'>No links available</p>
        )}
      </nav>
    </section>
  );
}

export default Sidebar;



