import React, { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const [search, setSearch] = useState("")
  const route = useRouter()

  // سرچ کردن از یوآر ال مرورگر
  useEffect(() => {
    setSearch(route.query.q)
  }, [])

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`search?q=${search}`)
    }
  }

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode == 13) {
      if (search.trim()) {
        route.push(`search?q=${search}`)
      }
    }
  }

  return (
    <div class={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        class={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <a href="index.html" class={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </a>
        <button
          type="button"
          class={`${styles.navbar_toggler}`}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class={`${styles.navbar_toggler_icon}`}></span>
        </button>
        <div
          className="w-100 d-flex justify-content-center align-items-center position-relative my-3 my-md-0"
          style={{ maxWidth: "300px" }}
        >
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
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
          class={`collapse ${styles.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div class={`${styles.navbar_nav} ml-auto p-4`}>
            <Link
              href="/"
              class={`${styles.nav_link} ${styles.active_nav_link}`}>
              Home
            </Link>

            <Link
              href="/about"
              class={`${styles.nav_link}`}>
              About
            </Link>
            <Link
              href="/services"
              class={`${styles.nav_link}`}>
              Services
            </Link>
            <Link
              href="/menu"
              class={`${styles.nav_link}`}>
              Menu
            </Link>
            <div class={`${styles.dropdown}`}>
              <a
                href="#"
                class={`${styles.nav_link} ${styles.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div class={`${styles.dropdown_menu} ${styles.text_capitalize}`}>
                <Link
                  href="/reservation"
                  class={`${styles.dropdown_item}`}>
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  class={`${styles.dropdown_item}`}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              class={`${styles.nav_link}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
