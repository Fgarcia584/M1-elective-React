import { PropsWithChildren } from "react"
import LibertyLogo from "../assets/logo-with-text.png"
import { Link } from "react-router-dom"


const Navbar: React.FC<PropsWithChildren> = () => {


    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={LibertyLogo} alt="roabooks-logo" style={{height:45}} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-zinc-950">
            <li>
              <Link to="/" className="text-zinc-950">GPS Moto</Link>
            </li>
            <li>
              <Link to="/" className="text-zinc-950">Roadbooks</Link>
            </li>
            <li>
              <Link to="/" className="text-zinc-950">SOS Accident</Link>
            </li>
            <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/">GPS Moto</Link>
                </li>
                <li>
                  <Link to="/auth">Connexion</Link>
                </li>
                <li>
                  <Link to="/">SOS Accident</Link>
                </li>
              </ul>
            </details>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar