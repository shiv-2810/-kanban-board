"use client"

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {  Search } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="font-bold cursor-pointer text-2xl text-zinc-700">
              Kanban Board
            </span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <>
                <div className="relative flex flex-col w-full flex-grow p-4">
                  <div className="relative">
                    <Textarea
                      rows={1}
                      maxRows={1}
                      onChange={()=>console.log() }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                        }
                      }}
                      placeholder="Search Task..."
                      className="resize-none pr-12  text-base py-2 rounded-lg scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                    />
                   
                      <Search  className="h-5 w-5 absolute right-[10px] bottom-[10px] text-blue-500" />
                  </div>
                </div>
                <Button variant="default" >Add Task</Button>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
