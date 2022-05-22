import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stav's blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logos}>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="128px" height="128px"><radialGradient id="aMOb3qD7zkaYDIFnaYS0Za" cx="32" cy="32" r="33.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#efdcb1"/><stop offset="0" stop-color="#f2e0bb"/><stop offset=".011" stop-color="#f2e0bc"/><stop offset=".362" stop-color="#f9edd2"/><stop offset=".699" stop-color="#fef4df"/><stop offset="1" stop-color="#fff7e4"/></radialGradient><path fill="url(#aMOb3qD7zkaYDIFnaYS0Za)" d="M55.454,45.668c0.5,0.898,1.504,1.337,2.532,1.332c1.75-0.008,3.153,1.483,3.002,3.262 C60.855,51.838,59.434,53,57.852,53L48,53v1H26h-8H7c-1.71,0-3.086-1.431-2.996-3.161C4.089,49.216,5.545,48,7.17,48L8,48 c1.215,0,2.176-1.083,1.973-2.336C9.813,44.681,8.889,44,7.893,44L3,44c-1.71,0-3.086-1.431-2.996-3.161 C0.089,39.216,1.545,38,3.17,38l6.33,0c1.381,0,2.5-1.119,2.5-2.5v0c0-1.381-1.119-2.5-2.5-2.5h0C8.119,33,7,31.881,7,30.5v0 C7,29.119,8.119,28,9.5,28H18v-7h-7.5c-1.995,0-3.601-1.67-3.495-3.688C7.104,15.419,8.803,14,10.698,14L18,14v-4h24h6h8.5 c1.995,0,3.601,1.67,3.495,3.688C59.896,15.581,58.197,17,56.302,17L53.5,17c-1.995,0-3.601,1.67-3.495,3.688 C50.104,22.581,51.803,24,53.698,24L56,24c1.777,0,3.194,1.546,2.978,3.366c-0.179,1.509-1.546,2.572-3.064,2.635 c-1.197,0.05-2.122,1.153-1.874,2.406C54.228,33.355,55.123,34,56.089,34H60.5c1.995,0,3.601,1.67,3.495,3.688 C63.896,39.581,62.197,41,60.302,41L58,41C55.808,41,54.166,43.35,55.454,45.668z M2.5,33L2.5,33C3.881,33,5,31.881,5,30.5v0 C5,29.119,3.881,28,2.5,28h0C1.119,28,0,29.119,0,30.5v0C0,31.881,1.119,33,2.5,33z"/><linearGradient id="aMOb3qD7zkaYDIFnaYS0Zb" x1="33" x2="33" y1="58" y2="6" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#41bfec"/><stop offset=".232" stop-color="#4cc5ef"/><stop offset=".644" stop-color="#6bd4f6"/><stop offset="1" stop-color="#8ae4fd"/></linearGradient><path fill="url(#aMOb3qD7zkaYDIFnaYS0Zb)" d="M50,58H16c-1.657,0-3-1.343-3-3V9c0-1.657,1.343-3,3-3h20.757 c0.796,0,1.559,0.316,2.121,0.879l13.243,13.243C52.684,20.684,53,21.447,53,22.243V55C53,56.657,51.657,58,50,58z"/><linearGradient id="aMOb3qD7zkaYDIFnaYS0Zc" x1="38.879" x2="46.454" y1="20.121" y2="12.546" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#c6effd"/><stop offset=".375" stop-color="#b7ecfd"/><stop offset="1" stop-color="#95e6fd"/></linearGradient><path fill="url(#aMOb3qD7zkaYDIFnaYS0Zc)" d="M52.121,20.122L38.878,6.879c-0.255-0.255-0.556-0.452-0.878-0.6V18c0,1.657,1.343,3,3,3 h11.721C52.574,20.678,52.377,20.377,52.121,20.122z"/><linearGradient id="aMOb3qD7zkaYDIFnaYS0Zd" x1="45.5" x2="45.5" y1="24.083" y2="18.083" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#42c6ee"/><stop offset=".48" stop-color="#3bc3ed"/><stop offset="1" stop-color="#2ebeea"/></linearGradient><path fill="url(#aMOb3qD7zkaYDIFnaYS0Zd)" d="M41,21c-1.657,0-3-1.343-3-3v3c0,1.657,1.343,3,3,3h12v-1.757 c0-0.434-0.102-0.855-0.279-1.243H41z"/><path fill="#f1fcff" d="M32 22H21c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h11c1.105 0 2 .895 2 2v0C34 21.105 33.105 22 32 22zM38 49H21c-1.105 0-2-.895-2-2v0c0-1.105.895-2 2-2h17c1.105 0 2 .895 2 2v0C40 48.105 39.105 49 38 49zM37 37h9c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2h-9c-1.105 0-2-.895-2-2v0C35 37.895 35.895 37 37 37zM21 37h9c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2h-9c-1.105 0-2-.895-2-2v0C19 37.895 19.895 37 21 37zM21 29h16c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2H21c-1.105 0-2-.895-2-2v0C19 29.895 19.895 29 21 29zM44 29h2c1.105 0 2 .895 2 2v0c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2v0C42 29.895 42.895 29 44 29z"/></svg>
          </div>
          <h1>Curriculum vitae</h1>
          <p class="test3">
          💡  Hello, my name is Stav Heuvinck and I am studying applied informatics with a minor in AI business professional at Howest. Below you can find everything about my work experience, education, skills, hobbies etc.
          </p>
        </header>

        <Link href="/">
             <a className={styles.back}>← Go home</a>
        </Link>

        <h2 className={styles.h2}>☎️ Contact information</h2>
        <code>
        📧 E-mail: stavheuvinck@outlook.com<br></br>
        🏄 Instagram: https://instagram.com/stavheuvinck/<br></br>
        🔗 LinkedIn: https://be.linkedin.com/in/stav-heuvinck-740021210
        </code>

        <h2 className={styles.h2}>📚 Education</h2>
        <section class="test">
           <ul>
             <li>
                <h3 className={styles.postTitle}>Bachelor Applied informatics AI Business Professional</h3>
                <a className={styles.back}>2019-present</a>
                <p>HOWEST- Bruges</p>
             </li>
             <li>
                <h3 className={styles.postTitle}>Bachelor Applied informatics</h3>
                <a className={styles.back}>2018-2019</a>
                <p>HOGENT - Ghent</p>
             </li>
             <li>
                <h3 className={styles.postTitle}>Economie Moderne Talen</h3>
                <a className={styles.back}>2014-2016</a>
                <p>SVI - Dendermonde</p>
             </li>
           </ul>
        </section>

        <h2 className={styles.h2}>🏗️ Work experience</h2>
        <section class="test">
          <ul>
            <li>
              <h3 className={styles.postTitle}>Window cleaner 🧹</h3>
              <a className={styles.back}>Jul. 2016 - present</a>
              <p>Fontana, Denderbelle</p>
            </li>
            <li>
              <h3 className={styles.postTitle}>Driver 🚗</h3>
              <a className={styles.back}>Feb. 2020 - Jul. 2021</a>
              <p>Bellefood creations, Denderbelle</p>
            </li>
            <li>
              <h3 className={styles.postTitle}>Aspirant-Initiator 🎾</h3>
              <a className={styles.back}>Feb. 2014 - present</a>
              <p>HTB, Lebbeke</p>
            </li>
          </ul>
        </section>

        <h2 className={styles.h2}>🛠 Skills</h2>
        <section class="test">
           <ul>
             <li>
               <p>-HTML/CSS</p>
               <p>-Progressive Web Apps</p>
               <p>-Javascript</p>
               <p>-Python</p>
               <p>-MySql</p>
               <p>-SwiftUI</p>
               <p>-OPEN API</p>
               <p>-C#</p>
               <p>-GIT</p>
             </li>
           </ul>
        </section>

        <h2 className={styles.h2}>🗣 Languages</h2>
        <section class="test">
          <ul>
            <li>
              <p>Dutch 🇧🇪</p>
              <p>French 🇫🇷</p>
              <p>English 🇬🇧 🇺🇸</p>
            </li>
          </ul>
        </section>

        <h2 className={styles.h2}>🤼‍♂️ Volunteer work</h2>
        <section class="test">
          <ul>
            <li>
            <h3 className={styles.postTitle}>Leader</h3>

            <a className={styles.back}>2017-present</a>
            <p>KSA Denderbelle - youth movement</p>
            </li>
          </ul>
        </section>

        <h2 className={styles.h2}>🏃‍♂️ Hobby’s</h2>
        <section class="test">
          <ul>
            <li>
              <p>Tennis 🎾</p>
              <p>Padel</p>
              <p>Cycling 🚵‍♂️</p>
            </li>
          </ul>
        </section>

        <section class="test1">
           <Link href="/">
             <a className={styles.back}>← Go home</a>
           </Link>
        </section>
      </main>
    </div>
  );
}
