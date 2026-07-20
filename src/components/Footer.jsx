export default function Footer() {
    return (
        <footer>
    <div className="footer-top">
      <img src="./assets/winter-world-footer-top.png" alt="" />
    </div>
    <div className="footer-main flex">
      <section className="footer-main__links flex flex--column">
        <h2>Useful Links</h2>
        <ul className="flex flex--column">
          <li>
            <a href="https://winterworld.com.pk/experience-winterland/">
              Winterland
            </a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/experience/"> Experiences</a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/experience-carnival/">
              Carnival World
            </a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/experience-bubble-dome/">
              Bubble Dome
            </a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/faqs">FAQs</a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/about-us/">About Us</a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/terms-and-condition/">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/safety-rules/">Safety Rules</a>
          </li>
          <li>
            <a href="https://winterworld.com.pk/privacy-policy/">
              Privacy Policy
            </a>
          </li>
        </ul>
      </section>
      <section className="outer-brand">
        <div className="flex flex--column footer-main__brand">
          <div className="brand-container flex">
            <div className="brand">
              <img
                src="https://winterworld.com.pk/wp-content/uploads/2025/04/Winterland-Logo.svg"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://winterworld.com.pk/wp-content/uploads/2025/04/Carnival-Logo.svg"
                alt=""
              />
            </div>
            <div className="brand">
              <img
                src="https://winterworld.com.pk/wp-content/uploads/2025/04/Bubbledoem-Logo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="brand-text">
            Winter World is Lahore’s ultimate entertainment destination,
            bringing together three unique experiences in one place. It includes
            Winterland 2.0, an indoor snow and ice theme park now transformed
            into the Kingdom of Ice and Snow; Carnival, a large-scale outdoor
            amusement park packed with thrilling rides, games, food, music, and
            attractions like the giant dancing fountain; and Bubble Dome,
            Pakistan’s largest indoor ball pit arena with over one million
            balls. Together, these destinations create a complete entertainment
            hub designed for unlimited fun, offering something exciting for
            visitors of all ages.
          </div>
        </div>
      </section>
      <section className="footer-main__timing flex flex--column">
        <div className="winterland__timings flex flex--column">
          <h2 className="timing-title">Winterland timings</h2>
          <span className="timing-schedule">Monday – Sun: 2PM - 12AM</span>
          <a
            className="timing-link flex"
            href="https://maps.app.goo.gl/WYpCEzDnV5JaEAvj7"
          >
            <span>See The location </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.6066 1.20883C12.6066 0.656543 12.1589 0.208828 11.6066 0.208828L2.6066 0.208828C2.05432 0.208827 1.6066 0.656543 1.6066 1.20883C1.6066 1.76111 2.05432 2.20883 2.6066 2.20883L10.6066 2.20883L10.6066 10.2088C10.6066 10.7611 11.0543 11.2088 11.6066 11.2088C12.1589 11.2088 12.6066 10.7611 12.6066 10.2088L12.6066 1.20883ZM1 11.8154L1.70711 12.5225L12.3137 1.91593L11.6066 1.20883L10.8995 0.501721L0.292893 11.1083L1 11.8154Z"
                fill="#FFBC00"
              />
            </svg>
          </a>
        </div>
        <div className="carnival__timings flex flex--column">
          <h2 className="timing-title">Carnival timings</h2>
          <span className="timing-schedule">Monday – Sun: 4PM - 12AM</span>
          <a
            className="timing-link flex"
            href="https://maps.app.goo.gl/WYpCEzDnV5JaEAvj7"
          >
            <span>See The location </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.6066 1.20883C12.6066 0.656543 12.1589 0.208828 11.6066 0.208828L2.6066 0.208828C2.05432 0.208827 1.6066 0.656543 1.6066 1.20883C1.6066 1.76111 2.05432 2.20883 2.6066 2.20883L10.6066 2.20883L10.6066 10.2088C10.6066 10.7611 11.0543 11.2088 11.6066 11.2088C12.1589 11.2088 12.6066 10.7611 12.6066 10.2088L12.6066 1.20883ZM1 11.8154L1.70711 12.5225L12.3137 1.91593L11.6066 1.20883L10.8995 0.501721L0.292893 11.1083L1 11.8154Z"
                fill="#FFBC00"
              />
            </svg>
          </a>
        </div>
        <div className="bubbledome__timings flex flex--column">
          <h2 className="timing-title">Bubbledome timings</h2>
          <span className="timing-schedule">Monday – Sun: 2PM - 12AM</span>
          <a
            className="timing-link flex"
            href="https://maps.app.goo.gl/WYpCEzDnV5JaEAvj7"
          >
            <span>See The location </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M12.6066 1.20883C12.6066 0.656543 12.1589 0.208828 11.6066 0.208828L2.6066 0.208828C2.05432 0.208827 1.6066 0.656543 1.6066 1.20883C1.6066 1.76111 2.05432 2.20883 2.6066 2.20883L10.6066 2.20883L10.6066 10.2088C10.6066 10.7611 11.0543 11.2088 11.6066 11.2088C12.1589 11.2088 12.6066 10.7611 12.6066 10.2088L12.6066 1.20883ZM1 11.8154L1.70711 12.5225L12.3137 1.91593L11.6066 1.20883L10.8995 0.501721L0.292893 11.1083L1 11.8154Z"
                fill="#FFBC00"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
    <div className="footer-bar">
      © Copyright 2026 Winter World | Designed &amp; Developed by
      <span>
        <a href="https://echodmc.com/">Echo Digital</a>
      </span>
    </div>
  </footer>
    )
}