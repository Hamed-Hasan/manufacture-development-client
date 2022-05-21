import { useEffect, useState } from "react";


const useNav = () => {
  const [navbar, setNavbar] = useState(false);
  const [navBarLogo, setNavBarLogo] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeLogo = () => {
    if (window.scrollY >= 300) {
      setNavBarLogo(<span className="font-bold text-2xl">Manufac <span className="text-amber-500 ">Turing</span></span>);
    } else {
      setNavBarLogo(<span className="text-amber-500 ">Deve<span className="font-bold text-2xl text-black">Lop</span></span>);
    }
  };
  useEffect(() => {
    changeLogo();
    window.addEventListener("scroll", changeLogo);
  }, []);
  return { navbar, navBarLogo };
};

export default useNav;
