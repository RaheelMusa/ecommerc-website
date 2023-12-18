"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const getUser = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
    sublinks: [
      {
        id: 11,
        title: "Fashion Home 1",
        url: "#",
      },
      {
        id: 12,
        title: "Fashion Home 2",
        url: "#",
      },
      {
        id: 13,
        title: "Fashion Home 3",
        url: "#",
      },
      {
        id: 14,
        title: "Fashion Home 4",
        url: "#",
      },
      {
        id: 15,
        title: "Fashion Home 5",
        url: "#",
      },
      {
        id: 16,
        title: "Fashion Home 6",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Shop",
    url: "/",
    sublinks: [
      { id: 21, title: "chartlist", url: "#" },
      { id: 22, title: "Collection list", url: "#" },
      { id: 23, title: "Collection all", url: "#" },
      { id: 24, title: "Product Details", url: "#" },
      { id: 25, title: "Single product 2", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Blog",
    url: "/",
    sublinks: [
      {
        id: 31,
        title: "Blog details",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Product",
    url: "/products",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "/",
  },
];

const Navbar = () => {
  // const isClientView = false;
  // const isAdminView = true;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(getUser());
  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    // const getUser = () => {
    //   const storedUser = localStorage.getItem("user");
    //   if (storedUser) {
    //     const currentUser = JSON.parse(storedUser);
    //     setUser(currentUser);
    //     setIsLoggedIn(true);
    //   }
    //   setLoading(false);
    // };
    // getUser();

    const handleScroll = () => {
      const halfPoint = window.innerHeight / 2;
      setScrolled(window.scrollY > halfPoint);
    };
    document.addEventListener("scroll", handleScroll);

    const fetchData = () => {
      const storedUser = getUser();

      setUser(storedUser);

      setLoading(false);
    };

    fetchData();
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <header
        className={`${
          scrolled ? " bg-opacity-40 bg-gray-200  fixed  top-0  w-full" : ""
        } transition-all duration-300 z-10`}
      >
        <div
          className={`${
            scrolled ? "hidden top-0" : "block"
          } px-8 text-sm flex justify-between items-center py-3 border-b-2`}
        >
          <div>
            <p className="font-bold md:block hidden">
              Free Delivery:
              <span className="font-normal   text-xs dark:text-black text-gray-500 text-opacity-80">
                {" "}
                Take advantage of our time to save event
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <select className="cursor-pointer outline-none text-center">
              <option value="">USD</option>
              <option value="usd">USD- US Dollar</option>
              <option value="eur">EUR - Euro</option>
              <option value="gbr">GBR - British pound</option>
              <option value="ind">IND - Indian Rupies </option>
            </select>
            <div>
              <h3 className="px-2 py-1 bg-gray-100 rounded-sm font-medium">
                {getUser()?.email}
              </h3>
            </div>
            <div className="cursor-pointer relative group z-10">
              <p>My account</p>
              {getUser() ? (
                <ul className="hidden group-hover:block absolute left-0 z-10 bg-gray-100 pt-3  group-hover:shadow-2xl  group-hover:duration-700 delay-800 group-hover:transition-all  ease-in-out">
                  <li className="hover:text-red-400 px-3  my-2 text-xl">
                    <Link href="">Checklist</Link>
                  </li>
                  <li className="hover:text-red-400 px-3  my-2 text-xl">
                    <Link href="">Wishlist</Link>
                  </li>
                  <li className="hover:text-red-400 px-3  my-2 text-xl">
                    <Link href="">Cart</Link>
                  </li>

                  <li className="hover:text-red-400  my-2 w-full text-xl font-semibold px-2 overflow-hidden hover:bg-gray-200 rounded">
                    <Link href="/login" onClick={handleLogout}>
                      Log out
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="hidden group-hover:block absolute left-0  group-hover:shadow-2xl  group-hover:duration-700 delay-800 group-hover:transition-all pb-10  ease-in-out w-full">
                  <li className="hover:text-red-400  my-2 w-full text-xl font-semibold px-2 overflow-hidden hover:bg-gray-200 rounded">
                    <Link href="/login">Login</Link>
                  </li>
                  <li className="hover:text-red-400  my-2 text-xl font-semibold px-2 overflow-hidden hover:bg-gray-200 rounded">
                    <Link href="/register">Sign up</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="py-6  mx-auto items-center bg-white  md:grid md:grid-cols-3 gap-10  flex-wrap">
          <div className="col-span-3  ml-5 md:col-span-1 w-full md:w-auto">
            <Link href="/" className=" w-auto  ">
              <Image
                src="/logo.png"
                alt="Logo Image"
                width={80}
                height={50}
                // className="h-100 w-100"
              ></Image>
            </Link>
          </div>

        
          <div className="md:flex col-span-3 md:col-span-1 md:flex-wrap gap-10 hidden">
            {links.map((navLink) => {
              return (
                <div
                  className="relative group gap-2 group-hover:text-red-400"
                  key={navLink.id}
                >
                  {navLink.sublinks ? (
                    <div>
                      <Link
                        className="flex  hover:text-red-400 duration-500 focus:text-red-400"
                        href={navLink.url}
                      >
                        {navLink.title}

                        <i className="fa-solid fa-sort-down"></i>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      className="hover:text-red-500 hover:duration-500"
                      href={navLink.url}
                    >
                      {navLink.title}
                    </Link>
                  )}
                  {navLink.sublinks && (
                    <div className="hidden group-hover:block transition  delay-500 absolute left-0 space-y-2 z-10">
                      {navLink.sublinks.map((sublinksItem) => (
                        <Link
                          key={sublinksItem.id}
                          className="hover:text-red-500 block mt-5 w-48"
                          href={sublinksItem.url}
                        >
                          {sublinksItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 col-span-3 md:col-span-1 text-end">
            <div>
              <input
                type="searchbar"
                placeholder="Search here........."
                className="outline-none focus:shadow-lg px-2 py-2 dark:text-opacity-50 text-gray-400 text-opacity-70"
              />
            </div>
            <Link
              href="/"
              className="rounded-2xl bg-black text-white md:px-3  md:py-2 hover:bg-red-400 hover:duration-500"
            >
              <i className="fa-solid fa-shopping-cart"></i> 0 item(s)
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
