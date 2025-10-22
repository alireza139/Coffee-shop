import React, { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // ست کردن مقدار سرچ از query
  useEffect(() => {
    setSearch(router.query.q || "");
  }, [router.query.q]);

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13 && search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  // تابع برای چک کردن اکتیو بودن مسیر
  const isActive = (path) => router.pathname === path;

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </Link>

        <div
          className="w-100 d-flex justify-content-center align-items-center position-relative my-3 my-md-0"
          style={{ maxWidth: "300px" }}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchHandlerWithEnter}
            placeholder="Search..."
            style={{
              width: "100%",
              padding: "10px 40px 10px 12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            onClick={searchHandler}
            style={{
              position: "absolute",
              right: "12px",
              color: "#666",
              cursor: "pointer",
            }}
          />
        </div>

        <div
          className={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              className={`${styles.nav_link} ${
                isActive("/") ? styles.active_nav_link : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`${styles.nav_link} ${
                isActive("/about") ? styles.active_nav_link : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/services"
              className={`${styles.nav_link} ${
                isActive("/services") ? styles.active_nav_link : ""
              }`}
            >
              Services
            </Link>

            <Link
              href="/menu"
              className={`${styles.nav_link} ${
                isActive("/menu") ? styles.active_nav_link : ""}`}
            >
              Menu
            </Link>

            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <Link
                  href="/reservation"
                  className={`${styles.dropdown_item} ${isActive("/reservation") ? styles.active_nav_link : ""}`}
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.dropdown_item} ${isActive("/testimonial") ? styles.active_nav_link : ""}`}
                >
                  Testimonial
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className={`${styles.nav_link} ${isActive("/contact") ? styles.active_nav_link : ""}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
