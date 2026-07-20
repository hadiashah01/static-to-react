export default function MainOfBody() {
    return (
        <main>
    <div className="cart flex">
      <div className="count-item flex">0</div>
      <svg
        className="cart__icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16.5" cy="18.5" r="1.5" />
        <circle cx="9.5" cy="18.5" r="1.5" />
        <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
      </svg>
    </div>
    <section className="explore__cards flex">
      <div className="explore-card flex flex--column">
        <div
          style={{
            backgroundImage: "url(./assets/explore-card__image-03.jpg)"
          }}
          className="explore-card__image"
        >
          <img src="./assets/Winter-world-logo.svg" alt="Winterworld-logo" />
        </div>
        <a
          href="https://winterworld.com.pk/experience-winterland/"
          className="explore-card__link flex"
        >
          <h2 className="explore-card__title">Winter Land</h2>
          <svg
            className="explore-card__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={32}
            height={32}
          >
            <path
              d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z"
              fill="currentColor"
              data-name="5-Arrow Up"
            />
          </svg>
        </a>
      </div>
      <div className="explore-card flex flex--column">
        <div
          style={{
            backgroundImage: "url(./assets/explore-card__image-02.jpg)"
          }}
          className="explore-card__image"
        >
          <img
            src="./assets/carnival-logo.svg"
            alt="carnival-logo"
            className="carnival-logo"
          />
        </div>
        <a
          href="https://winterworld.com.pk/experience-carnival/"
          className="explore-card__link flex"
        >
          <h2 className="explore-card__title">Carnival World</h2>
          <svg
            className="explore-card__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={32}
            height={32}
          >
            <path
              d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z"
              fill="currentColor"
              data-name="5-Arrow Up"
            />
          </svg>
        </a>
      </div>
      <div className="explore-card flex flex--column">
        <div
          style={{
            backgroundImage: "url(./assets/explore-card__image-01.jpg)"
          }}
          className="explore-card__image"
        >
          <img src="./assets//bubble-dome-logo.svg" alt="bubble-dome-logo" />
        </div>
        <a
          href="https://winterworld.com.pk/experience-bubble-dome/"
          className="explore-card__link flex"
        >
          <h2 className="explore-card__title">Bubble Dome</h2>
          <svg
            className="explore-card__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={32}
            height={32}
          >
            <path
              d="M31 0H15v2h13.59L.29 30.29 1.7 31.7 30 3.41V16h2V1a1 1 0 0 0-1-1z"
              fill="currentColor"
              data-name="5-Arrow Up"
            />
          </svg>
        </a>
      </div>
    </section>
    <section className="gallery">
      <div
        style={{ backgroundImage: "url(./assets/gallery-item-1.jpg)" }}
        className="gallery__item gallery__item--wide"
      />
      <div style={{ backgroundColor: "#eb003f" }} className="gallery__item">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div
        style={{ backgroundImage: "url(assets/gallery-img-15.jpg)" }}
        className="gallery__item"
      />
      <div className="gallery__item gallery__item--blue">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div
        style={{ backgroundImage: "url(assets/gallery-img-5.jpg)" }}
        className="gallery__item"
      />
      <div
        style={{ backgroundImage: "url(assets/gallery-img-6.jpg)" }}
        className="gallery__item"
      />
      <div className="gallery__item gallery__item--yellow">
        <svg
          className="gallery__item-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 304 304"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="__lottie_element_37">
              <rect width={304} height={304} x={0} y={0} />
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_37)">
            <g
              transform="matrix(1.3321272134780884,0.05591050535440445,-0.05591050535440445,1.3321272134780884,6.728240966796875,-6.000335693359375)"
              opacity={1}
              style={{ display: "block" }}
            >
              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(79,0,178)"
                    fillOpacity={1}
                    d=" M113.87999725341797,0.23000000417232513 C113.87999725341797,0.23000000417232513 148.64999389648438,79.16999816894531 148.64999389648438,79.16999816894531 C148.64999389648438,79.16999816894531 227.58999633789062,113.94999694824219 227.58999633789062,113.94999694824219 C227.58999633789062,113.94999694824219 148.64999389648438,148.7100067138672 148.64999389648438,148.7100067138672 C148.64999389648438,148.7100067138672 113.87999725341797,227.66000366210938 113.87999725341797,227.66000366210938 C113.87999725341797,227.66000366210938 79.12000274658203,148.7100067138672 79.12000274658203,148.7100067138672 C79.12000274658203,148.7100067138672 0.17000000178813934,113.94999694824219 0.17000000178813934,113.94999694824219 C0.17000000178813934,113.94999694824219 79.12000274658203,79.16999816894531 79.12000274658203,79.16999816894531 C79.12000274658203,79.16999816894531 113.87999725341797,0.23000000417232513 113.87999725341797,0.23000000417232513z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="gallery__item gallery__item--blue">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div
        style={{ backgroundImage: "url(assets/gallery-item-12.jpg)" }}
        className="gallery__item gallery__item--wide"
      />
      <div className="gallery__item gallery__item--blue">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div style={{ backgroundColor: "#5000b3" }} className="gallery__item">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div
        style={{ backgroundImage: "url(./assets/gallery-item-12.jpg)" }}
        className="gallery__item gallery__item--wide"
      />
      <div style={{ backgroundColor: "#eb003f" }} className="gallery__item">
        <img src="assets/svg" className="gallery__item-svg" />
      </div>
      <div className="gallery__item gallery__item--yellow">
        <svg
          className="gallery__item-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 304 304"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="__lottie_element_37">
              <rect width={304} height={304} x={0} y={0} />
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_37)">
            <g
              transform="matrix(1.3321272134780884,0.05591050535440445,-0.05591050535440445,1.3321272134780884,6.728240966796875,-6.000335693359375)"
              opacity={1}
              style={{ display: "block" }}
            >
              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(79,0,178)"
                    fillOpacity={1}
                    d=" M113.87999725341797,0.23000000417232513 C113.87999725341797,0.23000000417232513 148.64999389648438,79.16999816894531 148.64999389648438,79.16999816894531 C148.64999389648438,79.16999816894531 227.58999633789062,113.94999694824219 227.58999633789062,113.94999694824219 C227.58999633789062,113.94999694824219 148.64999389648438,148.7100067138672 148.64999389648438,148.7100067138672 C148.64999389648438,148.7100067138672 113.87999725341797,227.66000366210938 113.87999725341797,227.66000366210938 C113.87999725341797,227.66000366210938 79.12000274658203,148.7100067138672 79.12000274658203,148.7100067138672 C79.12000274658203,148.7100067138672 0.17000000178813934,113.94999694824219 0.17000000178813934,113.94999694824219 C0.17000000178813934,113.94999694824219 79.12000274658203,79.16999816894531 79.12000274658203,79.16999816894531 C79.12000274658203,79.16999816894531 113.87999725341797,0.23000000417232513 113.87999725341797,0.23000000417232513z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div
        style={{ backgroundImage: "url(assets/gallery-img-15.jpg)" }}
        className="gallery__item"
      />
    </section>
  </main>
    )
}
  