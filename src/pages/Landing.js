import React, { Fragment } from 'react'

const Landing = () => {
  return (
    <Fragment>
      <section id='hero'>
        <div className='hero-container'>
          <div
            id='heroCarousel'
            className='carousel slide carousel-fade'
            data-ride='carousel'
          >
            <ol
              className='carousel-indicators'
              id='hero-carousel-indicators'
            ></ol>

            <div className='carousel-inner' role='listbox'>
              <div className='carousel-item active'>
                <div className='carousel-background'>
                  <img src='assets/img/slide/slide-1.jpg' alt=''></img>
                  <div className='carousel-container'>
                    <div className='carousel-content'>
                      <h2 className='animate__animated animate__fadeInDown'>
                        Welcome to <span>Shuffle</span>
                      </h2>
                      <p className='animate__animated animate__fadeInUp'>
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati
                        alias dolorem mollitia ut. Similique ea voluptatem. Esse
                        doloremque accusamus repellendus deleniti vel. Minus et
                        tempore modi architecto.
                      </p>
                      <a
                        href='#about'
                        className='btn-get-started animate__animated animate__fadeInUp scrollto'
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>

                <div className='carousel-item'>
                  <div className='carousel-background'>
                    <img src='assets/img/slide/slide-2.jpg' alt=''></img>
                    <div className='carousel-container'>
                      <div className='carousel-content'>
                        <h2 className='animate__animated animate__fadeInDown'>
                          Lorem Ipsum Dolor
                        </h2>
                        <p className='animate__animated animate__fadeInUp'>
                          Ut velit est quam dolor ad a aliquid qui aliquid.
                          Sequi ea ut et est quaerat sequi nihil ut aliquam.
                          Occaecati alias dolorem mollitia ut. Similique ea
                          voluptatem. Esse doloremque accusamus repellendus
                          deleniti vel. Minus et tempore modi architecto.
                        </p>
                        <a
                          href='#about'
                          className='btn-get-started animate__animated animate__fadeInUp scrollto'
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='carousel-item'>
                    <div className='carousel-background'>
                      <img src='assets/img/slide/slide-3.jpg' alt=''></img>
                      <div className='carousel-container'>
                        <div className='carousel-content'>
                          <h2 className='animate__animated animate__fadeInDown'>
                            Sequi ea ut et est quaerat
                          </h2>
                          <p className='animate__animated animate__fadeInUp'>
                            Ut velit est quam dolor ad a aliquid qui aliquid.
                            Sequi ea ut et est quaerat sequi nihil ut aliquam.
                            Occaecati alias dolorem mollitia ut. Similique ea
                            voluptatem. Esse doloremque accusamus repellendus
                            deleniti vel. Minus et tempore modi architecto.
                          </p>
                          <a
                            href='#about'
                            className='btn-get-started animate__animated animate__fadeInUp scrollto'
                          >
                            Get Started
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className='carousel-control-prev'
                    href='#heroCarousel'
                    role='button'
                    data-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon icofont-thin-double-left'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Previous</span>
                  </a>

                  <a
                    className='carousel-control-next'
                    href='#heroCarousel'
                    role='button'
                    data-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon icofont-thin-double-right'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header id='header'>
        <div className='container d-flex'>
          <div className='logo mr-auto'>
            <h1 className='text-light'>
              <a href='index.html'>
                <span>Shuffle</span>
              </a>
            </h1>
          </div>

          <nav className='nav-menu d-none d-lg-block'>
            <ul>
              <li className='active'>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='#about'>About Us</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#portfolio'>Portfolio</a>
              </li>
              <li>
                <a href='#team'>Team</a>
              </li>
              <li className='drop-down'>
                <a href='#'>Drop Down</a>
                <ul>
                  <li>
                    <a href='#'>Drop Down 1</a>
                  </li>
                  <li className='drop-down'>
                    <a href='#'>Drop Down 2</a>
                    <ul>
                      <li>
                        <a href='#'>Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>Drop Down 3</a>
                  </li>
                  <li>
                    <a href='#'>Drop Down 4</a>
                  </li>
                  <li>
                    <a href='#'>Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id='main'>
        <section id='about' className='about'>
          <div className='container'>
            <div className='section-title'>
              <h2>About Us</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <img
                  src='assets/img/about.jpg'
                  className='img-fluid'
                  alt=''
                ></img>
              </div>
              <div className='col-lg-6 pt-4 pt-lg-0 content'>
                <h3>
                  Voluptatem dignissimos{' '}
                  <strong>provident quasi corporis voluptates</strong>
                </h3>
                <p className='font-italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>

                <div className='skills-content'>
                  <div className='progress'>
                    <span className='skill'>
                      HTML <i className='val'>100%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='100'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      CSS <i className='val'>90%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='90'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      JavaScript <i className='val'>75%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='75'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>

                  <div className='progress'>
                    <span className='skill'>
                      Photoshop <i className='val'>55%</i>
                    </span>
                    <div className='progress-bar-wrap'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='55'
                        aria-valuemin='0'
                        aria-valuemax='100'
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='counts section-bg'>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch'>
                <div className='count-box'>
                  <i className='icofont-simple-smile'></i>
                  <span data-toggle='counter-up'>232</span>
                  <p>
                    <strong>Happy Clients</strong> consequuntur quae qui deca
                    rode
                  </p>
                  <a href='#'>Find out more &raquo;</a>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch'>
                <div className='count-box'>
                  <i className='icofont-document-folder'></i>
                  <span data-toggle='counter-up'>521</span>
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                    numquam delectus
                  </p>
                  <a href='#'>Find out more &raquo;</a>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch'>
                <div className='count-box'>
                  <i className='icofont-live-support'></i>
                  <span data-toggle='counter-up'>1,463</span>
                  <p>
                    <strong>Hours Of Support</strong> aut commodi quaerat.
                    Aliquam ratione
                  </p>
                  <a href='#'>Find out more &raquo;</a>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 d-md-flex align-items-md-stretch'>
                <div className='count-box'>
                  <i className='icofont-users-alt-5'></i>
                  <span data-toggle='counter-up'>15</span>
                  <p>
                    <strong>Hard Workers</strong> rerum asperiores dolor
                    molestiae doloribu
                  </p>
                  <a href='#'>Find out more &raquo;</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='services'>
          <div className='container'>
            <div className='section-title'>
              <h2>Our Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className='row'>
              <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bxl-dribbble'></i>
                  </div>
                  <h4 className='title'>
                    <a href=''>Lorem Ipsum</a>
                  </h4>
                  <p className='description'>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-file'></i>
                  </div>
                  <h4 className='title'>
                    <a href=''>Sed ut perspiciatis</a>
                  </h4>
                  <p className='description'>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-tachometer'></i>
                  </div>
                  <h4 className='title'>
                    <a href=''>Magni Dolores</a>
                  </h4>
                  <p className='description'>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div className='col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='icon-box'>
                  <div className='icon'>
                    <i className='bx bx-world'></i>
                  </div>
                  <h4 className='title'>
                    <a href=''>Nemo Enim</a>
                  </h4>
                  <p className='description'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='cta'>
          <div className='container'>
            <div className='text-center'>
              <h3>Call To Action</h3>
              <p>
                {' '}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className='cta-btn' href='#'>
                Call To Action
              </a>
            </div>
          </div>
        </section>

        <section className='more-services section-bg'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='card'>
                  <img
                    src='assets/img/more-service-1.jpg'
                    className='card-img-top'
                    alt='...'
                  ></img>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a href=''>Autem sunt earum</a>
                    </h5>
                    <p className='card-text'>
                      Et architecto provident deleniti facere repellat nobis
                      iste. Id facere quia quae dolores dolorem tempore
                    </p>
                    <a href='#' className='btn'>
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='card'>
                  <img
                    src='assets/img/more-service-2.jpg'
                    className='card-img-top'
                    alt='...'
                  ></img>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a href=''>Nobis et tempore</a>
                    </h5>
                    <p className='card-text'>
                      Ut quas omnis est. Non et aut tempora dignissimos
                      similique in dignissimos. Sit incidunt et odit iusto
                    </p>
                    <a href='#' className='btn'>
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 d-flex align-items-stretch mb-5 mb-lg-0'>
                <div className='card'>
                  <img
                    src='assets/img/more-service-3.jpg'
                    className='card-img-top'
                    alt='...'
                  ></img>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      <a href=''>Facere quia quae dolores</a>
                    </h5>
                    <p className='card-text'>
                      Modi ut et delectus. Modi nobis saepe voluptates nostrum.
                      Sed quod consequatur quia provident dera
                    </p>
                    <a href='#' className='btn'>
                      Explore more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='info-box py-0'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1'>
                <div className='content'>
                  <h3>
                    Eum ipsam laborum deleniti{' '}
                    <strong>velit pariatur architecto aut nihil</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>

                <div className='accordion-list'>
                  <ul>
                    <li>
                      <a
                        data-toggle='collapse'
                        className='collapse'
                        href='#accordion-list-1'
                      >
                        <span>01</span> Non consectetur a erat nam at lectus
                        urna duis?{' '}
                        <i className='bx bx-chevron-down icon-show'></i>
                        <i className='bx bx-chevron-up icon-close'></i>
                      </a>
                      <div
                        id='accordion-list-1'
                        className='collapse show'
                        data-parent='.accordion-list'
                      >
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle='collapse'
                        href='#accordion-list-2'
                        className='collapsed'
                      >
                        <span>02</span> Feugiat scelerisque varius morbi enim
                        nunc? <i className='bx bx-chevron-down icon-show'></i>
                        <i className='bx bx-chevron-up icon-close'></i>
                      </a>
                      <div
                        id='accordion-list-2'
                        className='collapse'
                        data-parent='.accordion-list'
                      >
                        <p>
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a
                        data-toggle='collapse'
                        href='#accordion-list-3'
                        className='collapsed'
                      >
                        <span>03</span> Dolor sit amet consectetur adipiscing
                        elit? <i className='bx bx-chevron-down icon-show'></i>
                        <i className='bx bx-chevron-up icon-close'></i>
                      </a>
                      <div
                        id='accordion-list-3'
                        className='collapse'
                        data-parent='.accordion-list'
                      >
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className='col-lg-5 align-items-stretch order-1 order-lg-2 img'
                style={{
                  backgroundImage: `url('assets / img / info - box.jpg')`,
                }}
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio' className='portfolio section-bg'>
          <div className='container'>
            <div className='section-title'>
              <h2>Our Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-12 d-flex justify-content-center'>
                <ul id='portfolio-flters'>
                  <li data-filter='*' className='filter-active'>
                    All
                  </li>
                  <li data-filter='.filter-app'>App</li>
                  <li data-filter='.filter-card'>Card</li>
                  <li data-filter='.filter-web'>Web</li>
                </ul>
              </div>
            </div>

            <div className='row portfolio-container'>
              <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-1.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>App 1</h4>
                    <p>App</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-1.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='App 1'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-2.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-2.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Web 3'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-3.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>App 2</h4>
                    <p>App</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-3.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='App 2'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-4.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Card 2</h4>
                    <p>Card</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-4.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Card 2'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-5.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Web 2</h4>
                    <p>Web</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-5.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Web 2'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-6.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>App 3</h4>
                    <p>App</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-6.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='App 3'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-7.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Card 1</h4>
                    <p>Card</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-7.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Card 1'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-8.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Card 3</h4>
                    <p>Card</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-8.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Card 3'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                <div className='portfolio-wrap'>
                  <img
                    src='assets/img/portfolio/portfolio-9.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='portfolio-info'>
                    <h4>Web 3</h4>
                    <p>Web</p>
                  </div>
                  <div className='portfolio-links'>
                    <a
                      href='assets/img/portfolio/portfolio-9.jpg'
                      data-gall='portfolioGallery'
                      className='venobox'
                      title='Web 3'
                    >
                      <i className='bx bx-plus'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                      <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='team' className='team'>
          <div className='container'>
            <div className='section-title'>
              <h2>Our Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='member'>
                  <img
                    src='assets/img/team/team-1.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                    </div>
                    <div className='social'>
                      <a href=''>
                        <i className='icofont-twitter'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-facebook'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-instagram'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-lg-4 col-md-6' data-wow-delay='0.1s'>
                <div className='member'>
                  <img
                    src='assets/img/team/team-2.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                    </div>
                    <div className='social'>
                      <a href=''>
                        <i className='icofont-twitter'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-facebook'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-instagram'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-lg-4 col-md-6' data-wow-delay='0.2s'>
                <div className='member'>
                  <img
                    src='assets/img/team/team-3.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                    <div className='social'>
                      <a href=''>
                        <i className='icofont-twitter'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-facebook'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-instagram'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-xl-3 col-lg-4 col-md-6' data-wow-delay='0.3s'>
                <div className='member'>
                  <img
                    src='assets/img/team/team-4.jpg'
                    className='img-fluid'
                    alt=''
                  ></img>
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                    </div>
                    <div className='social'>
                      <a href=''>
                        <i className='icofont-twitter'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-facebook'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-instagram'></i>
                      </a>
                      <a href=''>
                        <i className='icofont-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='contact' className='contact section-bg'>
          <div className='container'>
            <div className='section-title'>
              <h2>Contact Us</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-stretch infos'>
                <div className='row'>
                  <div className='col-lg-6 info d-flex flex-column align-items-stretch'>
                    <i className='bx bx-map'></i>
                    <h4>Address</h4>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>
                  <div className='col-lg-6 info info-bg d-flex flex-column align-items-stretch'>
                    <i className='bx bx-phone'></i>
                    <h4>Call Us</h4>
                    <p>
                      +1 5589 55488 55
                      <br />
                      +1 5589 22548 64
                    </p>
                  </div>
                  <div className='col-lg-6 info info-bg d-flex flex-column align-items-stretch'>
                    <i className='bx bx-envelope'></i>
                    <h4>Email Us</h4>
                    <p>
                      contact@example.com
                      <br />
                      info@example.com
                    </p>
                  </div>
                  <div className='col-lg-6 info d-flex flex-column align-items-stretch'>
                    <i className='bx bx-time-five'></i>
                    <h4>Working Hours</h4>
                    <p>
                      Mon - Fri: 9AM to 5PM
                      <br />
                      Sunday: 9AM to 1PM
                    </p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 d-flex align-items-stretch contact-form-wrap'>
                <form
                  action='forms/contact.php'
                  method='post'
                  role='form'
                  className='php-email-form'
                >
                  <div className='form-row'>
                    <div className='col-md-6 form-group'>
                      <label htmlFor='name'>Your Name</label>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        id='name'
                        data-rule='minlen:4'
                        data-msg='Please enter at least 4 chars'
                      />
                      <div className='validate'></div>
                    </div>
                    <div className='col-md-6 form-group'>
                      <label htmlFor='email'>Your Email</label>
                      <input
                        type='email'
                        className='form-control'
                        name='email'
                        id='email'
                        data-rule='email'
                        data-msg='Please enter a valid email'
                      />
                      <div className='validate'></div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='subject'>Subject</label>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      id='subject'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 8 chars of subject'
                    />
                    <div className='validate'></div>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      className='form-control'
                      name='message'
                      rows='8'
                      data-rule='required'
                      data-msg='Please write something for us'
                    ></textarea>
                    <div className='validate'></div>
                  </div>
                  <div className='mb-3'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className='text-center'>
                    <button type='submit'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 footer-info'>
                <h3>Shuffle</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className='social-links mt-3'>
                  <a href='#' className='twitter'>
                    <i className='bx bxl-twitter'></i>
                  </a>
                  <a href='#' className='facebook'>
                    <i className='bx bxl-facebook'></i>
                  </a>
                  <a href='#' className='instagram'>
                    <i className='bx bxl-instagram'></i>
                  </a>
                  <a href='#' className='google-plus'>
                    <i className='bx bxl-skype'></i>
                  </a>
                  <a href='#' className='linkedin'>
                    <i className='bx bxl-linkedin'></i>
                  </a>
                </div>
              </div>

              <div className='col-lg-2 col-md-6 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className='bx bx-chevron-right'></i> <a href='#'>Home</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>About us</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Terms of service</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 footer-links'>
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Web Design</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Web Development</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Product Management</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Marketing</a>
                  </li>
                  <li>
                    <i className='bx bx-chevron-right'></i>{' '}
                    <a href='#'>Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-4 col-md-6 footer-newsletter'>
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action='' method='post'>
                  <input type='email' name='email' />
                  <input type='submit' value='Subscribe' />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
              <span>Shuffle</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'>
            Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a href='#' className='back-to-top'>
        <i className='icofont-simple-up'></i>
      </a>
    </Fragment>
  )
}

export default Landing
