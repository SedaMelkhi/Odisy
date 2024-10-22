"use client";
import { Input } from "../ui/input";
import { Search } from "../svg";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SearchInput = ({
  onFocus,
  onBlur,
  value,
  onChange,
}: {
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  const router = useRouter();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const searchIcon = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setIsOpen(false);
  }, [router, params]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        (ref.current || searchIcon.current) &&
        !ref.current?.contains(event.target as Node) &&
        !searchIcon.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?value=${value}`);
  };
  return (
    <>
      <div className="relative flex items-center" onClick={onFocus}>
        <form onSubmit={toNavigate} onBlur={() => setIsOpen(false)}>
          <div
            className={cn(
              "lg:static fixed flex gap-3 lg:w-auto w-full lg:p-0 p-4 top-0 left-0 bg-background z-10 lg:border-0 border-b border-grey lg:translate-y-0 translate-y-[-100%] transition-transform duration-200",
              isOpen && "translate-y-0"
            )}
            ref={ref}
          >
            <Input
              className="h-11 lg:w-60 w-full rounded-2xl lg:pl-10 pl-4 font-medium text-primary tracking-[-0.32px] text-base focus:pl-4 peer lg:border-light-grey border-secondary"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              value={value}
            />
            <Image
              src="/close2.svg"
              width={24}
              height={24}
              alt=""
              onClick={() => setIsOpen(false)}
              className="lg:hidden block"
            />

            <Search className="absolute inset-y-2.5 inset-x-2.5 lg:pointer-events-none cursor-pointer peer-focus:opacity-0 duration-100 lg:block hidden" />
          </div>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            ref={searchIcon}
            className="peer-focus:opacity-0 duration-100 lg:hidden block"
          >
            <Search />
          </div>
        </form>
      </div>
    </>
  );
};
