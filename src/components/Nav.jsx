import { Link } from "react-router-dom"
import styles from "../styles/nav"

const Nav = () => {
  return (
    <>
      <nav className={styles.nav.nav}>
        <Link to="/">
          <h1 className={styles.logo}>Logo</h1>
        </Link>

        <ul className="flex gap-2 font-bold">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
