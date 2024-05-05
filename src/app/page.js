'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SecaoTrabalhos from "@/components/SecaoTrabalhos";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false)

  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <main className={styles.main}>
      <Header changeTheme={changeTheme} darkTheme={darkTheme} />
      <Banner darkTheme={darkTheme}/>
      <SecaoTrabalhos darkTheme={darkTheme}/>
      <Footer darkTheme={darkTheme}/>
    </main>
  );
}
