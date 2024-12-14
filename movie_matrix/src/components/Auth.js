"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const SignIn = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div className="flex gap-5 mx-5">
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton>
                  <Image
                    src={session?.user?.image}
                    className="rounded-full cursor-pointer mt-2"
                    width={35}
                    height={35}
                    alt="image"
                  ></Image>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black text-gray-500 border border-gray-500 border-opacity-30 py-2"
              >
                <div className="py-2">
                  <h1 className="text-gray-400 ml-4">
                    {" "}
                    <span className="text-red-500 text-opacity-70">
                      Hi
                    </span>{" "}
                    {session?.user?.name} !!{" "}
                  </h1>
                  <MenuItem>
                    <Link
                      href="/MyFavourites"
                      className="block px-4 py-2 text-md text-gray-500 hover:text-white/70"
                    >
                      My Favourites
                    </Link>
                  </MenuItem>
                  {session?.user?.email == "haribhutanadhu@gmail.com" && (
                    <MenuItem>
                      <Link
                        href="/AdminPage"
                        className="block px-4 pb-4 text-md text-gray-500 hover:text-white/70 "
                      >
                        Admin Page
                      </Link>
                    </MenuItem>
                  )}
                  <MenuItem>
                    <h1
                      onClick={() => signOut("google")}
                      className="block px-4 pb-4 text-md text-gray-500 hover:text-white/70 cursor-pointer"
                    >
                      Sign Out
                    </h1>
                  </MenuItem>

                  <div className="border-t pt-4 border-gray-600 border-opacity-40"></div>
                  <div className="flex justify-center">
                    <h1 className="text-gray-500 text-sm">
                      {session?.user?.email}
                    </h1>
                  </div>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      ) : (
        <h1
          onClick={() => signIn("google")}
          className="text-gray-500 cursor-pointer mx-5 hover:text-white/80"
        >
          SignIn
        </h1>
      )}
    </div>
  );
};

export default SignIn;
