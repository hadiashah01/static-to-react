export default function Header() {
    return (
          <header>
    <div className="header__container flex">
      <div className="brand__logo">
        <img src="./assets/Winterworld-logo.svg" alt="Winterworld-logo" />
      </div>
      <ul className="nav flex">
        <li className="flex nav__list-item list-item-first">
          <a href="https://winterworld.com.pk/">HOME</a>
        </li>
        <li className="flex nav__list-item">
          <a href="https://winterworld.com.pk/about-us/">ABOUT US</a>
        </li>
        <li className="flex nav__list-item">
          <a href="https://winterworld.com.pk/experience/">EXPERIENCES</a>
        </li>
      </ul>
      <button className="cta__btn flex">
        <a href="https://winterworld.com.pk/tickets/">Book Now</a>
      </button>
      <div className="hamburger-menu">
        <img src="./assets/hamburger-icon.png" alt="" />
      </div>
    </div>
  </header>
    )
}