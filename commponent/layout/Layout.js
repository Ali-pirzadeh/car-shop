import Link from "next/link"

import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>My car</h1>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="google.com" target="_blank">
          google
        </a>{" "}
        Next.js courses | BotoCar Project &copy;
      </footer>
    </>
  );
}

export default Layout