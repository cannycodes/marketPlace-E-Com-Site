"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import {NavebarItem} from '@/types'

import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Wrapper from "../Wrapper";


const NavebarItems: Array<NavebarItem> = [
  {
    title: "Men",
    href: "/en",
  },
  {
    title: "Women",
    href: "/women",
  },
  {
    title: "Kids",
    href: "/kids",
  },
  {
    title: "All Products",
    href: "/allproducts",
  },
];

const Navebar = () => {
  const [isopen, setisopen] = useState<Boolean>(false);
  return (
    <Wrapper>
    <header className="py-3 bg-slate-50 sticky top-0">
      <div className="bg-slate-50
        h-10
        hidden
        sm:flex
        justify-between
        items-center
        mx-auto
        max-w-screen-2xl
        min-w-full
        shrink
        "
        
      >
        <Image
          className=" flex shrink-0"
          src={"/Logo.webp"}
          alt=""
          width={130}
          height={130}
        />
        <nav className="">
          <ul className="flex shrink ml-5 lg:gap-x-5 md:gap-x-3 text-xl sm:gap-x-2 text-gray-900">
            {NavebarItems.map((NavebarItem: NavebarItem, index: number) => (
              <li
                key={index}
                className="hover:opacity-60  whitespace-nowrap"
              >
                <Link href={NavebarItem.href}>{NavebarItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex relative items-center text-sm text-gray-500  mx-10">
          <input
            type="text"
            placeholder="Search our Store"
            className="pl-8 flex flex-1 h-6 border border-gray-600 rounded-lg"
          />
          <BsSearch className="text-lg absolute left-1 text-gray-600" />
        </div>
        <div className="h-10 w-10 bg-slate-50 relative rounded-full shrink-0 flex justify-center items-center hover:bg-slate-600">
          <BsCart size={25} className="text-xl font-bold text-black " />
          <div className=" flex justify-center top-1 right-1 h-5 w-5 tex-sm bg-red-600 absolute rounded-full items-center">
            1
          </div>
        </div>
      </div>

    <div className="md:hidden flex flex-col bg-slate-50 py-5 px-2">
        <div>
          {!isopen ? (
            <div className="text-gray-800 ">
              <GiHamburgerMenu onClick={() => setisopen(true)} size={25} />
            </div>
          ) : (
            <div className="text-gray-800 ">
              <IoMdClose onClick={() => setisopen(false)} size={25} />
            </div>
          )}
          {isopen && (
            
              <div className="flex flex-col bg-slate-50 text-black text-3xl w-full">
                <ul>
                  {NavebarItems.map(
                    (NavebarItem: NavebarItem, index: number) => (
                      <li key={index}>
                        <Link href={NavebarItem.href}>{NavebarItem.title}</Link>
                      </li>
                    )
                  )}
                </ul>
              
            </div>
          )}
        </div>

      </div>
    </header>
    </Wrapper>
  );
};

export default Navebar;
