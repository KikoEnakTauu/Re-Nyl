"use client";
import { useTRPC } from "@/trpc/client";
import { Button } from "../../../../components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

const NavBar = () => {
  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let latestScrollY = window.scrollY;

    const handleScroll = () => {
      const currScrollY = window.scrollY;
      setIsScrollingDown(currScrollY > latestScrollY && currScrollY > 50);
      latestScrollY = currScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
    backdrop-blur-xs px-10 md:px-20 py-3 bg-black/50 text-white shadow-sm fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
      isScrollingDown ? "-translate-y-full" : "translate-y-0"
    }
    `}
    >
      <nav className="flex justify-between items-center">
        <div className="hidden md:flex justify-center items-center gap-10">
          <Link href="/">
            <span className="text-3xl font-bold">RE-NYL</span>
          </Link>
          <ul className="flex gap-10">
            <li>
              <Link href="/shop">Browse</Link>
            </li>
          </ul>
        </div>

        {/* login, log out button */}
        {session.data?.user ? (
          <div className="flex items-center gap-5 flex-shrink-0">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button asChild className="cursor-pointer">
              <Link prefetch href="/admin">
                <span>Dashboard</span>
              </Link>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-5 flex-shrink-0">
            <Button asChild className="cursor-pointer">
              <Link prefetch href="/sign-in">
                <span>Login</span>
              </Link>
            </Button>

            <Button
              asChild
              className="cursor-pointer text-black"
              variant={"outline"}
            >
              <Link prefetch href="/sign-up">
                <span>Start Selling</span>
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
