<template>
  <div>
    <div id="referralBannerContainer"></div>

    <div id="nav" class="nav-container">
      <div class="content-width row">
        <nav class="nav-content col-xs-12">
          <div class="logo">
            <a href="/">
              <span class="sr-only">BitBox</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <path
                  style="fill: #191919"
                  d="M105.8 347.4v-82.9l67-28.8V106.6l66.6-29.1v212zM406.2 348.1v-82.8l-67-28.9V107.3l-66.6-28.9v211.8zM256.2 318.5L123 376.7l133.1 57.8 133.6-58.1z"
                />
              </svg>
            </a>
          </div>
          <ul class="nav-menu">
            <li>
              <a href="/checkout">Hardware wallet</a>
            </li>
            <li>
              <a href="/checkout">Reviews</a>
            </li>
            <li>
              <a href="/checkout">Security</a>
            </li>
            <li>
              <a href="/checkout">App</a>
            </li>
          </ul>
          <ul class="cart-menu text-right">
            <li><a href="/checkout">Blog</a></li>
            <li><a href="/checkout">Support</a></li>

            <li><a href="/checkout">Shop</a></li>

            <li class="nav-dropdown">
              <input type="checkbox" id="language-toggle" tabindex="0" />
              <label
                for="language-toggle"
                class="nav-dropdown-toggle"
                style="display: flex; align-items: center"
                aria-haspopup="true"
                aria-owns="language-menu"
              >
                <span> Languages </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokewidth="2"
                  strokelinecap="round"
                  strokelinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path
                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                  ></path>
                </svg>
              </label>
              <div class="nav-dropdown-content shadow">
                <span class="sr-only">Languages</span>
                <ul id="language-menu">
                  <li lang="en">
                    <a class="active" href="index.html">English</a>
                  </li>

                  <li lang="de"><a href="de/index.html">Deutsch</a></li>

                  <li lang="es"><a href="es/index.html">Español</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="mobile-container hide">
            <ul class="mobile-menu shadow" id="mobile-nav">
              <li>
                <a href="bitbox02/index.html">Hardware wallet</a>
              </li>
              <li>
                <a href="bitbox02/reviews/index.html">Reviews</a>
              </li>
              <li>
                <a href="bitbox02/security-features/index.html">Security</a>
              </li>
              <li>
                <a href="app/index.html">App</a>
              </li>

              <li><a href="https://shiftcrypto.shop/">Shop</a></li>

              <li><a href="blog/index.html">Blog</a></li>
              <li><a href="support/index.html">Support</a></li>
              <li class="mobile-language-menu">
                <ul>
                  <li>
                    <span class="mobile-language-menu-icon"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                          fill="#888"
                        ></path></svg
                    ></span>
                  </li>
                  <li lang="en">
                    <a class="active" href="index.html">English</a>
                  </li>

                  <li lang="de"><a href="de/index.html">Deutsch</a></li>

                  <li lang="es"><a href="es/index.html">Español</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <ul class="mobile-icon">
            <li>
              <svg
                class="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <svg
                class="x-icon hide"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="hero rightup topFlat h-padding p-none" id="intro">
      <div class="hero-content content-width">
        <div class="row center-xs start-sm">
          <div class="col-xs-12 col-sm-6 col-md-6">
            <h1 class="title onHero m-bottom-large">
              <span class="standOut">
                <span class="lab-bold">BitBox</span
                ><span class="lab-regular">02</span>
                <span class="lab-regular unbreak">hardware wallet</span>
              </span>
            </h1>
            <p class="info-lead mobile-text-center">
              Keeping your crypto secure doesn't have to be hard.
              With&nbsp;the&nbsp;BitBox02 your coins are safe, with&nbsp;you.
            </p>

            <div class="mobile-justify-center">
              <script
                type="text/plain-m"
                src="../widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                async
              ></script>
              <div
                class="trustpilot-widget"
                data-locale="en-US"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="607b4c482242fd000138f3ee"
                data-style-height="150px"
                data-style-width="235px"
                data-theme="light"
                data-text-color="#454540"
              >
                <a
                  class="sr-only"
                  href="https://www.trustpilot.com/review/shiftcrypto.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Trustpilot</a
                >
              </div>
            </div>

            <div>
              <img
                loading="lazy"
                width="440"
                height="36"
                class="opensource"
                src="../assets/images/logos/bitbox02-claims.gif"
                alt="Swiss Made, Open Source, Security, Design, Independence"
              />
            </div>
            <div style="" class="inline m-top-large m-bottom-large">
              <a
                href="/checkout"
                style="margin-top: 40px"
                class="button primary shadow text-center"
              >
                Run Validation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <picture>
          <img
            loading="lazy"
            width="989"
            height="1912"
            src="../assets/images/products/composition-5b6dc4ee06f5a6f95d2d5f673f398b8f.webp"
            alt="Lightgray placeholder pixel"
          />
        </picture>
      </div>
    </div>

    <section class="with-space rightup large" id="bitbox02-intro-security">
      <div class="content-width m-top-large">
        <div class="row center-xs">
          <div class="col-xs-12 col-sm-11 col-md-10">
            <h2 class="heading-1 text-center m-bottom-xlarge">
              Secure your crypto offline
            </h2>
            <div class="row center-xs">
              <div class="col-xs-11 col-sm-5 text-left">
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="42"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#454540"
                      d="M17 13a4 4 0 1 1 0 8c-2.142 0-4-1.79-4-4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM2 12v-2h2V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3h2v2H2z"
                    />
                  </svg>
                  <div class="m-left m-top-xsmall">
                    <h3 class="heading-3">
                      Information stored online is vulnerable
                    </h3>
                    <p class="m-bottom-large">
                      Your cryptocurrency private keys can be stolen at any
                      point if you use an online exchange or software wallet.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48"
                    height="42"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path
                      fill="#454540"
                      d="M12 1l8.217 1.826c.457.102.783.507.783.976v9.987c0 2.006-1.003 3.88-2.672 4.992L12 23l-6.328-4.219C4.002 17.668 3 15.795 3 13.79V3.802c0-.469.326-.874.783-.976L12 1zm4.452 7.222l-4.95 4.949-2.828-2.828-1.414 1.414L11.503 16l6.364-6.364-1.415-1.414z"
                    />
                  </svg>
                  <div class="m-left m-top-xsmall">
                    <h3 class="heading-3">
                      Safely store and manage your coins offline
                    </h3>
                    <p class="m-bottom-large">
                      The BitBox02 hardware wallet stores the private keys for
                      your cryptocurrencies offline. So you can manage your
                      coins safely.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-xs-11 col-sm-6 col-sm-offset-1 text-left text-center"
              >
                <picture>
                  <img
                    loading="lazy"
                    class="move-left m-bottom-large"
                    width="540"
                    height="262"
                    src="../assets/images/products/bitbox02-locked-1e8e38902ac12f04f7f9dc8c94104ac3.png"
                    alt="BitBox02 locked"
                  />
                </picture>
                <div class="inline">
                  <a href="/checkout" class="button generic text-center"
                    >Merge</a
                  >
                  <a href="/checkout" class="button primary text-center"
                    >Run Validation</a
                  >
                </div>
              </div>
            </div>

            <div class="row center-xs m-bottom-medium m-top-xxlarge">
              <div class="feature col-xs-11 col-sm-5">
                <div
                  class="rating"
                  style="--rating: 5"
                  aria-label="Rating of this product is 5 out of 5."
                ></div>
                <blockquote>
                  <p>
                    I have a great sense of security when using it and
                    I&nbsp;can depend on its performance. BitBox02 has been a
                    beautiful and most importantly reliable tool to protect and
                    direct capital. I highly recommend it.
                  </p>
                  <footer>
                    <cite>
                      <a
                        href="https://paybtc.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Ben Howard</a
                      >, Founder paybtc.com.au
                    </cite>
                  </footer>
                </blockquote>
                <script type="application/ld+json">
                  {
                    "@context": "http://schema.org/",
                    "@type": "Quotation",
                    "creator": {
                      "@type": "Person",
                      "name": "Ben"
                    },
                    "text": "I have a great sense of security when using it and I&nbsp;can depend on its performance. BitBox02 has been a beautiful and most importantly reliable tool to protect and direct capital. I highly recommend it."
                  }
                </script>
              </div>

              <div class="feature col-xs-11 col-sm-5 col-sm-offset-1">
                <div
                  class="rating"
                  style="--rating: 5"
                  aria-label="Rating of this product is 5 out of 5."
                ></div>
                <blockquote>
                  <p>
                    The device is well designed and the interaction with it is
                    10/10. Tapping, sliding and holding down non-existent
                    buttons gives it a premium feel. The usability is
                    delightful.
                  </p>
                  <footer>
                    <cite>
                      <a
                        href="https://twitter.com/lunaticoin"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Lunaticoin</a
                      >, LNTCN podcast
                    </cite>
                  </footer>
                </blockquote>
                <script type="application/ld+json">
                  {
                    "@context": "http://schema.org/",
                    "@type": "Quotation",
                    "creator": {
                      "@type": "Person",
                      "name": "Lunaticoin"
                    },
                    "text": "The device is well designed and the interaction with it is 10/10. Tapping, sliding and holding down non-existent buttons gives it a premium feel. The usability is delightful."
                  }
                </script>
              </div>

              <div class="row center-xs m-bottom-medium" style="width: 100%">
                <div class="feature col-xs-11 col-sm-10">
                  <img
                    loading="lazy"
                    class="m-bottom"
                    width="103"
                    height="32"
                    src="../assets/images/media/business-insider-logo-84bede9278788d8b2c9cecc2ec2a5de4.svg"
                    style="
                      filter: grayscale(1);
                      opacity: 0.4;
                      max-width: 180px;
                      width: 180px;
                    "
                    alt="Business Insider"
                  />
                  <blockquote>
                    <p class="lead">Best for beginners</p>
                    <footer>
                      <cite>
                        <a
                          href="https://www.businessinsider.com/personal-finance/best-bitcoin-wallet?r=US&amp;IR=T#best-for-beginners"
                          target="_blank"
                          rel="noopener noreferrer"
                          >Business Insider</a
                        >
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>

              <div class="row center-xs m-bottom-medium">
                <div class="feature col-xs-11 col-sm-10">
                  <img
                    loading="lazy"
                    class="m-bottom"
                    width="160"
                    height="42"
                    src="../assets/images/media/forbes-logo-160x42-b299bcfbb7191ca3943f84dcf782dd92.png"
                    style="filter: grayscale(1); opacity: 0.5; max-width: 160px"
                    alt="Forbes"
                  />
                  <blockquote>
                    <p class="lead">
                      One of the simplest hardware wallet for beginners,
                      BitBox02 boasts a fast setup, microSD backup, in-app
                      guide, and intuitive touch sliders.
                    </p>
                    <footer>
                      <cite>
                        Tatiana Koffman,
                        <a
                          href="https://www.forbes.com/sites/tatianakoffman/2020/09/24/best-crypto-hardware-wallets-of-2020/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >Forbes</a
                        >
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div class="mobile-justify-center">
              <script
                type="text/plain-m"
                src="../widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                async
              ></script>
              <div
                class="trustpilot-widget"
                data-locale="en-US"
                data-template-id="539ad0ffdec7e10e686debd7"
                data-businessunit-id="607b4c482242fd000138f3ee"
                data-style-height="350px"
                data-style-width="100%"
                data-theme="light"
                data-tags="public"
                data-stars="4,5"
                data-review-languages="en"
                data-text-color="#454540"
              >
                <a
                  class="sr-only"
                  href="https://www.trustpilot.com/review/shiftcrypto.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Trustpilot</a
                >
              </div>
            </div>

            <div class="row center-xs m-top-large m-bottom-large text-center">
              <div class="col-xs-12">
                <a href="bitbox02/reviews/index.html" class="button generic">
                  See all reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="leftup leftdown large with-space bg-gray"
      id="bitbox02-intro-usability"
    >
      <div class="content-width">
        <div class="row center-xs m-top-xlarge m-bottom-xxlarge">
          <div class="col-xs-12 col-sm-11 col-md-10">
            <h2 class="heading-1 m-bottom-xlarge">
              Stay in control of your coins
            </h2>
            <div class="row center-xs">
              <div class="col-xs-11 col-sm-5 text-left">
                <h3 class="heading-3">Get started in 5 minutes</h3>
                <p class="m-bottom-large">
                  Setup your BitBox02 in moments. The intuitive interface makes
                  it easier than ever to stay in control of your crypto assets.
                </p>
                <p class="m-bottom-large">
                  The BitBox02 supports Bitcoin, Litecoin, Cardano, Ethereum,
                  Chainlink, BAT and 1500+ more.
                </p>
                <p class="m-bottom-large">
                  <a href="coins/index.html"
                    >See all supported cryptocurrencies</a
                  >
                </p>
                <picture>
                  <img
                    loading="lazy"
                    width="540"
                    height="257"
                    class="m-right m-bottom-large-on-small"
                    src="../assets/images/products/bitbox02-welcome-screen-540x257-c681e0858f081104841f8c06a3f4500c.png"
                    alt="BitBox02 welcome screen"
                  />
                </picture>
              </div>
              <div class="col-xs-11 col-sm-5 col-sm-offset-1 text-left">
                <h3 class="heading-3">Advanced features for power users</h3>
                <p>
                  The BitBox02 is simple yet powerful. Whether you are new or an
                  expert in the crypto space, the BitBox02 has all the features
                  you need for financial independence.
                </p>
                <div class="m-bottom-xxlarge-on-small">
                  <a href="bitbox02/features/index.html"
                    >See all the features</a
                  >
                </div>
                <h3 class="heading-3 m-top-large">Secure and simple</h3>
                <p class="m-bottom-large">
                  Keeping your crypto safe doesn't have to be complicated. The
                  BitBox02 hardware wallet gives you peace of mind knowing your
                  coins are safe with you.
                </p>
                <a href="/checkout" class="button primary text-center"
                  >Connect your BitBox02</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rightup rightdown large bg-yinyang" id="which-edition">
      <div class="bg-yin with-space">
        <h2 class="heading-1 m-top-xlarge m-bottom-xlarge yin-heading">
          Which version
          <span class="yang-heading">is right for you?</span>
        </h2>

        <div class="row center-xs m-bottom-xlarge">
          <div class="col-xs-10 text-center">
            <div style="min-height: 300px">
              <img
                loading="lazy"
                class="width-40 m-bottom"
                width="300"
                height="95"
                src="../assets/images/logos/bitbox02-logo-0d6343bd8ac49541fae64c1c9358c3fe.svg"
                alt="BitBox02 logo"
              />
              <h3 class="info-lead">
                Everything you need to start your crypto journey
              </h3>
              <p>
                Multi-cryptocurrency hardware wallet and U2F authenticator.
                Supports Bitcoin, Litecoin, Cardano, Ethereum and 1500+ tokens.
              </p>
              <a href="coins/index.html">
                See all supported cryptocurrencies
              </a>
              <br />
              <br />
              <a href="bitbox02/index.html"> Explore the BitBox02 </a>
            </div>

            <picture>
              <img
                loading="lazy"
                width="540"
                height="257"
                class="m-top width-60"
                src="../assets/images/products/bitbox02-welcome-screen-540x257-c681e0858f081104841f8c06a3f4500c.png"
                alt="BitBox02"
              />
            </picture>
          </div>
        </div>
      </div>
      <div class="bg-yang bg-btcdark with-space">
        <div class="yang-spacer heading-1 m-top-xlarge m-bottom-xlarge"></div>

        <div class="row center-xs m-bottom-xlarge">
          <div class="col-xs-10 text-center">
            <div style="min-height: 300px">
              <img
                loading="lazy"
                class="width-40 m-bottom"
                width="300"
                height="101"
                src="../assets/images/logos/bitbox02-bitcoin-only-logo-8c4ca758d853d2834f8a437df3908700.svg"
                alt="BitBox02 Bitcoin-only logo"
              />
              <h3 class="info-lead">For those who only want to hold Bitcoin</h3>
              <p>
                The BitBox02 for the pure bitcoiner. No distractions, radically
                focused firmware. Bitcoin and nothing else, ever.
              </p>
              <br />
              <a class="btc-only" href="bitbox02/bitcoin-only/index.html">
                Explore the Bitcoin-only edition
              </a>
            </div>

            <picture>
              <img
                loading="lazy"
                width="420"
                height="199"
                class="m-top width-60"
                src="../assets/images/products/bitbox02-bitcoin-only-cropped-flipped-420x200-dcc2c0d75aefdedb7ef844b43b9f61a2.png"
                alt="BitBox02 Bitcoin-only edition"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section
      class="leftup leftdown large with-space bg-gray"
      id="bitboxapp-intro"
    >
      <div class="content-width">
        <div class="row center-xs m-bottom-xlarge">
          <div class="col-xs-12 col-sm-10 col-md-9">
            <div
              class="row row-xs-reverse m-top-xlarge center-xs flex-items-center"
            >
              <div class="col-xs-12 col-sm-5 text-left">
                <h2 class="heading-1">
                  BitBox<span class="lab-light">App</span>
                </h2>
                <p style="margin-top: 20px" class="heading-2">
                  Simple yet powerful
                </p>
                <p class="info" style="margin-top: 20px; margin-bottom: 20px">
                  The BitBoxApp is at the center of the BitBox ecosystem. An
                  all-in-one solution to securely manage your coins.
                </p>
                <a href="app/index.html">Explore the BitBoxApp</a>
              </div>
              <div class="col-xs-12 col-sm-7 m-bottom-large-on-small">
                <div class="relative">
                  <picture>
                    <source
                      type="image/webp"
                      srcset="
                        ../assets/images/images/laptop-app@1x-c81e5298fef7b96a891a9a9acbc2d526.png
                      "
                    />
                    <source
                      type="image/png"
                      srcset="
                        ../assets/images/images/laptop-app@1x-c81e5298fef7b96a891a9a9acbc2d526.png 1x
                      "
                    />
                    <img
                      loading="lazy"
                      width="672"
                      height="406"
                      src="../assets/images/images/laptop-app@1x-c81e5298fef7b96a891a9a9acbc2d526.png"
                      alt="Laptop frame"
                    />
                  </picture>
                  <div class="desk-slides">
                    <div class="slides-container">
                      <div class="slides">
                        <picture>
                          <!-- <source
                            type="image/webp"
                            srcset="
                              ../assets/images/products/bitbox_app@1x-6322bffb598519aaed6c55dd358cec7c.webp 1x,
                              ../assets/images/products/bitbox_app@2x-b9d373666f80426269a15b33ddbe2239.webp 2x
                            "
                          /> -->
                          <!-- <source
                            type="image/png"
                            srcset="
                              ../assets/images/products/bitbox_app@1x-1b2fb515e7a4776febac1af74c450fba.png 1x,
                              ../assets/images/products/bitbox_app@2x-49848c65fe84b1091b9a53f95dc13a3c.png 2x
                            "
                          /> -->
                          <img
                            loading="lazy"
                            width="505"
                            height="315"
                            src="../assets/images/products/bitboxapp-android-mobile-197x350-632b3e71b01dcc1dcddbdbd5d464650b.png"
                            alt="BitBoxApp demo"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div style="position: absolute; bottom: -1rem; right: -1rem">
                    <picture>
                      <!-- <source
                        type="image/png"
                        srcset="
                          ../assets/images/products/bitboxapp-android-mobile-197x350-632b3e71b01dcc1dcddbdbd5d464650b.png 1x,
                          ../assets/images/products/bitboxapp-android-mobile-395x700-29c73c42abf59fe7e6f4678b9b677591.png 2x
                        "
                      /> -->
                      <img
                        loading="lazy"
                        width="197"
                        height="350"
                        class="product-image height-220 height-xs-160"
                        src="../assets/images/products/bitboxapp-android-mobile-197x350-632b3e71b01dcc1dcddbdbd5d464650b.png"
                        alt="BitBoxApp on a mobile phone"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rightup rightdown large with-space" id="featured-in">
      <div class="content-width">
        <div class="row center-xs m-top-xxlarge m-bottom-xlarge">
          <div class="col-xs-12">
            <div class="row center-xs flex-items-center">
              <div class="col-xs-12">
                <h2 class="heading-1 m-bottom-xxlarge" translate="no">
                  Featured in
                </h2>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://bitcoinmagazine.com/articles/bitcoin-wallet-reviews-whats-the-best-hardware-wallet-on-the-market-part-2"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="652"
                    height="110"
                    src="../assets/images/media/bitcoin-magazine-logo-d662aca4cae0098260cd699e996bf4fd.svg"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 220px"
                    alt="Bitcoin Magazine"
                  />
                  <span class="sr-only"
                    >bitcoinmagazine.com/articles/bitcoin-wallet-reviews-whats-the-best-hardware-wallet-on-the-market-part-2</span
                  >
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://en.cryptonomist.ch/2019/10/06/review-bitbox02-hardware-wallet-shift-crypto-security/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="130"
                    height="19"
                    src="../assets/images/media/cryptonomist-logo-eb864e3ba7729ab476b4591e6304f058.svg"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 220px"
                    alt="The Cryptonomist"
                  />
                  <span class="sr-only"
                    >en.cryptonomist.ch/2019/10/06/review-bitbox02-hardware-wallet-shift-crypto-security/</span
                  >
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://www.forbes.com/sites/tatianakoffman/2020/09/24/best-crypto-hardware-wallets-of-2020/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    class="width-60 m-bottom-xxlarge"
                    width="160"
                    height="42"
                    src="../assets/images/media/forbes-logo-160x42-b299bcfbb7191ca3943f84dcf782dd92.png"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 160px"
                    alt="Forbes"
                  />
                  <span class="sr-only"
                    >www.forbes.com/sites/tatianakoffman/2020/09/24/best-crypto-hardware-wallets-of-2020/</span
                  >
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://www.theblockcrypto.com/post/43675/the-block-review-bitbox02"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="150"
                    height="70"
                    src="../assets/images/media/theblock-logo-fc139b76575327fe971dce0c66743b74.svg"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 220px"
                    alt="The Block"
                  />
                  <span class="sr-only"
                    >theblockcrypto.com/post/43675/the-block-review-bitbox02</span
                  >
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://blog.bitrefill.com/the-best-multicoin-crypto-wallets-3ab56396b14e"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="width-60 m-bottom-xxlarge"
                    width="160"
                    height="42"
                    src="../assets/images/media/bitrefill-logo-d6420749deba2c47e4fb56354fe06a54.svg"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 160px"
                    alt="Bitrefill blog"
                  />
                  <span class="sr-only"
                    >blog.bitrefill.com/the-best-multicoin-crypto-wallets-3ab56396b14e</span
                  >
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://99bitcoins.com/hardware-wallets/bitbox02/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="width-60 m-bottom-xxlarge"
                    width="142"
                    height="59"
                    src="../assets/images/media/99bitcoins-501c39ac6a7942d5636781fb02d44d34.svg"
                    style="filter: grayscale(1); opacity: 0.6; max-width: 200px"
                    alt="99Bitcoins"
                  />
                  <span class="sr-only"
                    >99bitcoins.com/hardware-wallets/bitbox02/</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="newsletter" class="with-space rightup decorator">
      <div class="content-width">
        <div class="row center-xs">
          <div class="col-xs-10 col-sm-9 col-md-7">
            <h2 class="heading-1 white">Get involved</h2>
            <p class="info-lead text-center white">
              Our mailing list covers developments and releases about our
              growing ecosystem of open-source products.
            </p>
            <a href="newsletter/index.html" class="button primary">Subscribe</a>
          </div>
        </div>
      </div>
    </section>

    <section class="rightup rightdown large with-space" id="swiss-precision">
      <div class="content-width">
        <div class="row center-xs m-top-xxlarge m-bottom-xxlarge">
          <div class="col-xs-12 col-sm-11 col-md-10">
            <div class="row center-xs row-xs-reverse">
              <div class="col-xs-11 col-sm-5 text-left">
                <h2 class="heading-2">Swiss precision</h2>
                <p>
                  Known for its precision engineering and attention to detail,
                  Switzerland produces some of the highest quality products in
                  the world.
                </p>
                <p>
                  The BitBox02 software and hardware are designed and
                  manufactured in Switzerland to give you the best possible
                  product.
                </p>
                <a href="about/index.html">Learn more about us</a>
              </div>
              <div
                class="col-xs-11 col-sm-5 col-sm-offset-1 text-left relative m-bottom-large-on-small"
              >
                <picture>
                  <img
                    loading="lazy"
                    class="m-top"
                    width="540"
                    height="303"
                    src="../assets/images/products/bitbox02-manufacturing-540x-0a6b2a4d968789151dd6b4d411de1783.png"
                    alt="Swiss manufactured"
                  />
                </picture>
                <picture>
                  <source
                    type="image/png"
                    srcset="
                      /../assets/images/products/swiss-made-logo-80x111-473ea8e094600f0e63fd66a9eb797910.png  1x,
                      /../assets/images/products/swiss-made-logo-160x222-28673d6fb9ce4c8e5e2d98f7ca406faf.png 2x
                    "
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="leftup leftdown with-space bg-gray" id="comparison">
      <span class="anchor" id="compare"></span>
      <div class="content-width">
        <div class="row m-bottom-large">
          <div class="col-sm-12 col-md-12">
            <h2 class="text-center">Hardware wallet comparison</h2>
            <style>
              .compare-table table {
                color: var(--softBlack);
                width: 100%;
              }

              .compare-table caption {
                font-family: 'labMedium', sans-serif;
                font-size: 40px;
                font-weight: 700;
                line-height: 1.4;
                margin-bottom: 2rem;
                padding: 1rem;
              }

              .compare-table thead th {
                font-weight: normal;
              }

              .compare-table thead strong {
                display: block;
              }

              .compare-table tbody tr:nth-child(odd) {
                background-color: var(--white);
              }

              .compare-table tbody tr:nth-child(even) {
                background-color: var(--lighterGray);
              }

              .bg-btcdark .compare-table tbody tr:nth-child(odd),
              .bg-btclight .compare-table tbody tr:nth-child(odd) {
                background-color: var(--btcDarkGray);
              }

              .bg-btcdark .compare-table tbody tr:nth-child(even),
              .bg-btclight .compare-table tbody tr:nth-child(even) {
                background-color: var(--btcLightGray);
              }

              .bg-btcdark .compare-table a,
              .bg-btclight .compare-table a {
                text-decoration: underline;
              }

              .compare-table td,
              .compare-table th {
                padding: 1rem 0.5rem;
                text-align: center;
                vertical-align: top;
              }

              .compare-table tbody th {
                padding-left: 1rem;
                text-align: left;
              }

              .compare-table svg {
                max-width: 100%;
              }

              .compare-icon-almostmark,
              .compare-icon-checkmark,
              .compare-icon-crossmark {
                display: block;
                height: 30px;
                min-width: 30px;
                overflow: visible;
                width: 30px;
              }

              .compare-icon-info {
                cursor: pointer;
                height: 22px;
                margin-left: 0.5rem;
                opacity: 0.5;
                position: absolute;
                transition: opacity ease-in-out 0.3s;
                width: 22px;
              }

              .compare-table tr:hover .compare-icon-info {
                opacity: 1;
              }

              .compare-trustpilot-stars {
                flex-wrap: wrap;
              }
              .compare-trustpilot-stars a,
              .compare-trustpilot-stars svg {
                display: block;
                max-width: min(160px, 100%);
              }

              .compare-row-header {
                width: 22%;
              }
              .compare-col-bitbox02 {
                width: 26%;
              }
              .compare-col-ledger {
                width: 26%;
              }
              .compare-col-trezor {
                width: 26%;
              }

              .table-editlog {
                font-size: var(--defaultFontSizeSmall);
                padding: 0 1rem;
              }

              @media (min-width: 769px) {
                .compare-table thead th {
                  background-color: var(--lighterGray);
                  position: sticky;
                  top: 0;
                  z-index: 1;
                }
                .bg-btcdark .compare-table thead th {
                  background-color: var(--btcDarkGray);
                }
                .bg-btclight .compare-table thead th {
                  background-color: var(--btcLightGray);
                }
                .bg-btcdark .compare-table thead th strong,
                .bg-btclight .compare-table thead th strong {
                  color: white;
                }

                .compare-table tbody th {
                  padding-right: 40px;
                  white-space: nowrap;
                }

                .compare-table td,
                .compare-table th {
                  line-height: 26px;
                }

                .compare-table thead th:nth-child(2) {
                  background-color: #78bd77;
                  color: white;
                  outline: 2px solid #78bd77;
                  z-index: 2;
                }
                .compare-table tbody td:nth-child(2),
                .compare-table tbody tr:last-child td:nth-child(2) {
                  border-color: #78bd77;
                  border-style: solid;
                }
                .compare-table tbody td:nth-child(2) {
                  border-width: 0 4px;
                }
                .compare-table tbody tr:last-child td:nth-child(2),
  /* TODO: fix the green border for group-a, can be removed when the A/B test is over */
  .group-a .compare-table tbody tr.compare-madein td:nth-child(2) {
                  border-bottom-width: 4px;
                }

                .compare-icon-almostmark,
                .compare-icon-checkmark,
                .compare-icon-crossmark {
                  margin: 0 auto;
                }

                .compare-info {
                  display: block;
                  overflow: hidden;
                  position: relative;
                  max-height: 0;
                  transition: max-height ease-in-out 0.3s;
                }
                .compare-info span {
                  display: block;
                  padding-top: 0.5rem;
                  position: relative;
                }
                .compare-info span.mobile {
                  display: none;
                }
                .compare-expand .compare-info {
                  max-height: 300px;
                }

                .compare-trustpilot-stars a,
                .compare-trustpilot-stars svg {
                  margin: 0 auto;
                }
              }

              @media (max-width: 768px) {
                .compare-table {
                  line-height: 1.4;
                }

                .compare-table table,
                .compare-table caption,
                .compare-table tbody,
                .compare-table tr {
                  display: block;
                }

                .compare-table caption {
                  font-size: 28px;
                }

                .compare-icon-checkmark,
                .compare-icon-crossmark {
                  align-self: baseline;
                }

                .compare-table thead {
                  display: none;
                }

                .compare-table tr {
                  padding: 1rem 0;
                }

                .compare-table td,
                .compare-table th {
                  align-items: center;
                  display: flex;
                  padding: 0.5rem 1rem;
                }
                .compare-table tbody th {
                  font-family: 'labMedium';
                  font-size: calc(var(--defaultFontSize) + 4px);
                  font-weight: normal;
                }
                .compare-table td > *:first-child {
                  display: inline-block;
                  flex-basis: 26px;
                  flex-grow: 0;
                  flex-shrink: 0;
                  margin-right: 1rem;
                  text-align: center;
                }

                .compare-info {
                  flex-basis: 100%;
                  flex-grow: 1;
                  text-align: left;
                }
                .compare-info::before {
                  display: block;
                  font-weight: 700;
                }
                .compare-icon-info {
                  display: none;
                }
                .compare-table td:nth-child(2) .compare-info::before {
                  content: 'BitBox02';
                }
                .compare-table td:nth-child(3) .compare-info::before {
                  content: 'Ledger Nano X';
                }
                .compare-table td:nth-child(4) .compare-info::before {
                  content: 'Trezor model T';
                }

                .compare-madein td > *:first-child {
                  flex-basis: 120px;
                }
              }
            </style>

            <span hidden>
              <svg xmlns="http://www.w3.org/2000/svg">
                <symbol
                  id="checkmark"
                  class="checkmark"
                  viewBox="0 0 52 52"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                >
                  <title>Checkmark</title>
                  <circle cx="26" cy="26" r="26" fill="#78bd77" />
                  <path
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    fill="none"
                    stroke="#fff"
                  />
                </symbol>

                <symbol
                  id="almostmark"
                  class="almostmark"
                  viewBox="0 0 52 52"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                >
                  <title>Almost</title>
                  <circle cx="26" cy="26" r="26" fill="#f5a04c" />
                  <path
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    fill="none"
                    stroke="#fff"
                  />
                </symbol>

                <symbol
                  id="crossmark"
                  class="crossmark"
                  viewBox="0 0 52 52"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="6"
                >
                  <title>Crossmark</title>
                  <circle cx="26" cy="26" r="26" fill="#ec644b" />
                  <path
                    d="M16 16 36 36 M36 16 16 36"
                    fill="none"
                    stroke="#fff"
                  />
                </symbol>

                <symbol
                  id="info"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M16 14 L16 23 M16 8 L16 10" />
                  <circle cx="16" cy="16" r="14" />
                </symbol>
              </svg>
            </span>

            <div class="compare-table">
              <table>
                <caption>
                  Hardware wallet comparison
                </caption>
                <colgroup>
                  <col class="compare-row-header" />
                  <col class="compare-col-bitbox02" />
                  <col class="compare-col-ledger" />
                  <col class="compare-col-trezor" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">
                      <strong translate="no">BitBox02</strong>
                      with BitBoxApp
                    </th>
                    <th scope="col">
                      <strong translate="no">Ledger Nano X</strong>
                      with Ledger Live
                    </th>
                    <th scope="col">
                      <strong translate="no">Trezor model T</strong>
                      with Trezor Suite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <strong> Open-source </strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >BitBoxApp and firmware are fully
                          <a href="bitbox02/security-features/index.html"
                            >open&nbsp;source</a
                          ></span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Crypto firmware runs directly on secure chip, which
                          is protected with "non-disclosure agreements" and
                          prohibits release of program code</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Web wallet and firmware are fully open source</span
                        >
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <strong>Secure chip</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          ><a href="bitbox02/security-features/index.html"
                            >Dual chip design</a
                          >
                          using a secure chip</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Fully trusts secure chip only</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Protection against attacker with physical access to
                          the device is out-of-scope</span
                        >
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <strong>Secure Multisig</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Store multisig account on device, automatically
                          verify for secure send/receive</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >No receive address verification, change outputs are
                          shown for verification but user cannot distinguish it
                          from an unauthorized address</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-almostmark">
                        <title>Almost</title>
                        <use xlink:href="#almostmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Cannot automatically verify that the co-signers are
                          safe, must be manually checked for every receiving
                          transaction</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <strong>Simple setup</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Fast and simple setup. Backup instantly on microSD
                          card, no need to write seed words</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >No instant microSD card backup, must manually write
                          down recovery words</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >No instant microSD card backup, must manually write
                          down recovery words</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <strong>Easy backup & recovery</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >Instant backup and recovery with microSD card,
                          optionally write down recovery words</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Manually write down recovery words on paper</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-crossmark">
                        <title>Crossmark</title>
                        <use xlink:href="#crossmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Manually write down recovery words on paper</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <strong>Native desktop app</strong>
                    </th>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span translate="no" class="mobile">BitBoxApp</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span translate="no" class="mobile">Ledger Live</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span translate="no" class="mobile">Trezor Suite</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <strong>Mobile app</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-almostmark">
                        <title>Almost</title>
                        <use xlink:href="#almostmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Fully featured Android</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Android / iOS</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-almostmark">
                        <title>Almost</title>
                        <use xlink:href="#almostmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Android</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <strong
                        ><a href="coins/index.html"
                          >Coins & tokens support</a
                        ></strong
                      >
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td>
                      <svg class="compare-icon-almostmark">
                        <title>Almost</title>
                        <use xlink:href="#almostmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span
                          >In app support for
                          <a href="coins/index.html"
                            >BTC, LTC, ETH and selected tokens.</a
                          >
                          ADA with AdaLite and 1500+ ERC20 tokens supported with
                          MyEtherWallet.</span
                        >
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Variety of coins supported</span>
                      </div>
                    </td>
                    <td>
                      <svg class="compare-icon-checkmark">
                        <title>Checkmark</title>
                        <use xlink:href="#checkmark"></use>
                      </svg>
                      <div class="compare-info">
                        <span>Variety of coins supported</span>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <strong>User score</strong>
                      <svg class="compare-icon-info">
                        <title>Info</title>
                        <use xlink:href="#info"></use>
                      </svg>
                    </th>
                    <td class="compare-trustpilot-stars">
                      <span></span>
                      <div class="compare-info">
                        <span>Highest rated hardware wallet on Trustpilot</span>
                      </div>
                      <a
                        href="https://www.trustpilot.com/review/shiftcrypto.ch"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256"
                          height="48"
                          viewBox="0 0 512 96"
                        >
                          <g fill="none" fill-rule="nonzero">
                            <path
                              fill="#00B67A"
                              d="M0 0h96v96H0zM104 0h96v96h-96zM208 0h96v96h-96zM312 0h96v96h-96zM416 0h96v96h-96z"
                            />
                            <path
                              fill="#FFF"
                              d="M48 64.7 62.6 61l6.1 18.8L48 64.7Zm33.6-24.3H55.9L48 16.2l-7.9 24.2H14.4l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM152 64.7l14.6-3.7 6.1 18.8L152 64.7Zm33.6-24.3h-25.7L152 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM256 64.7l14.6-3.7 6.1 18.8L256 64.7Zm33.6-24.3h-25.7L256 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM360 64.7l14.6-3.7 6.1 18.8L360 64.7Zm33.6-24.3h-25.7L360 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM464 64.7l14.6-3.7 6.1 18.8L464 64.7Zm33.6-24.3h-25.7L464 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15Z"
                            />
                          </g>
                        </svg>
                        <span class="sr-only"
                          >www.trustpilot.com/review/shiftcrypto.ch</span
                        >
                      </a>
                    </td>
                    <td class="compare-trustpilot-stars">
                      <span></span>
                      <div class="compare-info">
                        <span>User rating on active Trustpilot profile</span>
                      </div>
                      <a
                        href="https://www.trustpilot.com/review/www.ledger.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256"
                          height="48"
                          viewBox="0 0 512 96"
                        >
                          <g fill="none" fill-rule="nonzero">
                            <path
                              fill="#FFCE00"
                              d="M0 0h96v96H0zM104 0h96v96h-96zM208 0h96v96h-96z"
                            />
                            <path fill="#B8B8C170" d="M312 0h96v96h-96z" />
                            <path fill="#FFCE00" d="M312 0h48v96h-48z" />
                            <path fill="#B8B8C170" d="M416 0h96v96h-96z" />
                            <path
                              fill="#FFF"
                              d="M48 64.7 62.6 61l6.1 18.8L48 64.7Zm33.6-24.3H55.9L48 16.2l-7.9 24.2H14.4l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM152 64.7l14.6-3.7 6.1 18.8L152 64.7Zm33.6-24.3h-25.7L152 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM256 64.7l14.6-3.7 6.1 18.8L256 64.7Zm33.6-24.3h-25.7L256 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM360 64.7l14.6-3.7 6.1 18.8L360 64.7Zm33.6-24.3h-25.7L360 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM464 64.7l14.6-3.7 6.1 18.8L464 64.7Zm33.6-24.3h-25.7L464 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15Z"
                            />
                          </g>
                        </svg>
                        <span class="sr-only"
                          >www.trustpilot.com/review/www.ledger.com</span
                        >
                      </a>
                    </td>
                    <td class="compare-trustpilot-stars">
                      <span></span>
                      <div class="compare-info">
                        <span>User rating on active Trustpilot profile</span>
                      </div>
                      <a
                        href="https://www.trustpilot.com/review/trezor.io"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256"
                          height="48"
                          viewBox="0 0 512 96"
                        >
                          <g fill="none" fill-rule="nonzero">
                            <path
                              fill="#FFCE00"
                              d="M0 0h96v96H0zM104 0h96v96h-96zM208 0h96v96h-96z"
                            />
                            <path fill="#B8B8C170" d="M312 0h96v96h-96z" />
                            <path fill="#FFCE00" d="M312 0h48v96h-48z" />
                            <path fill="#B8B8C170" d="M416 0h96v96h-96z" />
                            <path
                              fill="#FFF"
                              d="M48 64.7 62.6 61l6.1 18.8L48 64.7Zm33.6-24.3H55.9L48 16.2l-7.9 24.2H14.4l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM152 64.7l14.6-3.7 6.1 18.8L152 64.7Zm33.6-24.3h-25.7L152 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM256 64.7l14.6-3.7 6.1 18.8L256 64.7Zm33.6-24.3h-25.7L256 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM360 64.7l14.6-3.7 6.1 18.8L360 64.7Zm33.6-24.3h-25.7L360 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15ZM464 64.7l14.6-3.7 6.1 18.8L464 64.7Zm33.6-24.3h-25.7L464 16.2l-7.9 24.2h-25.7l20.8 15-7.9 24.2 20.8-15 12.8-9.2 20.7-15Z"
                            />
                          </g>
                        </svg>
                        <span class="sr-only"
                          >www.trustpilot.com/review/trezor.io</span
                        >
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <script>
              ;(() => {
                document
                  .querySelector('.compare-table')
                  .addEventListener('click', (e) => {
                    const target = e.target
                    if (target.closest('.compare-icon-info')) {
                      const tr = e.target.closest('tr')
                      if (tr) {
                        tr.classList.toggle('compare-expand')
                      }
                    }
                  })
              })()
            </script>

            <div class="m-top-xlarge text-center">
              <a
                href="bitbox02/index.html#compare"
                class="button primary text-center"
                >See full comparison</a
              >
              <p>
                Learn more about picking the
                <a href="bitbox02/compare-hardware-wallets/index.html"
                  >best hardware wallet for you</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="rightup rightdown large with-space" id="blog-teaser">
      <div class="content-width">
        <div class="row m-top-xlarge">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12">
                <h2 class="heading-1 desktop-text-center">Read more</h2>
              </div>
            </div>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="css/blog-teaser-c74d860671a0b47a0ea511c7fd6293ac.css"
        />
        <section class="blog-teaser-feed">
          <article class="post-card post">
            <a
              class="post-card-image-link"
              href="blog/announcing-a-new-partnership-bitbox-pocket-bitcoin/index.html"
            >
              <img
                class="post-card-image"
                srcset="
                  https://shiftcrypto.ch/blog/content/images/size/w300/2023/03/pocketadfirst_eng-2.jpg   300w,
                  https://shiftcrypto.ch/blog/content/images/size/w600/2023/03/pocketadfirst_eng-2.jpg   600w,
                  https://shiftcrypto.ch/blog/content/images/size/w1000/2023/03/pocketadfirst_eng-2.jpg 1000w,
                  https://shiftcrypto.ch/blog/content/images/size/w2000/2023/03/pocketadfirst_eng-2.jpg 2000w
                "
                sizes="(max-width: 1000px) 400px, 700px"
                loading="lazy"
                src="blog/content/images/size/w600/2023/03/pocketadfirst_eng-2.jpg"
                alt="Announcing a new partnership: BitBox + Pocket Bitcoin"
              />
              <span class="sr-only"
                >Announcing a new partnership: BitBox + Pocket Bitcoin</span
              >
            </a>

            <div class="post-card-content">
              <a
                class="post-card-content-link"
                href="blog/announcing-a-new-partnership-bitbox-pocket-bitcoin/index.html"
              >
                <header class="post-card-header">
                  <h2 class="post-card-title">
                    Announcing a new partnership: BitBox + Pocket Bitcoin
                  </h2>
                </header>

                <section class="post-card-excerpt">
                  <p>
                    From today BitBox users can enjoy the convenience of buying
                    bitcoin directly in the BitBoxApp using Pocket
                  </p>
                </section>
              </a>

              <footer class="post-card-meta">
                <ul class="author-list"></ul>
                <div class="post-card-byline-content">
                  <span></span>
                  <span class="post-card-byline-date"
                    ><time datetime="2023-03-08">8 Mar 2023</time>
                    <span class="bull">&bull;</span> 3 min read</span
                  >
                </div>
              </footer>
            </div>
          </article>
          <article class="post-card post">
            <a
              class="post-card-image-link"
              href="blog/ankundigung-einer-neuen-partnerschaft-bitbox-pocket-bitcoin/index.html"
            >
              <img
                class="post-card-image"
                srcset="
                  https://shiftcrypto.ch/blog/content/images/size/w300/2023/03/pocketadfirst_de.jpg   300w,
                  https://shiftcrypto.ch/blog/content/images/size/w600/2023/03/pocketadfirst_de.jpg   600w,
                  https://shiftcrypto.ch/blog/content/images/size/w1000/2023/03/pocketadfirst_de.jpg 1000w,
                  https://shiftcrypto.ch/blog/content/images/size/w2000/2023/03/pocketadfirst_de.jpg 2000w
                "
                sizes="(max-width: 1000px) 400px, 700px"
                loading="lazy"
                src="blog/content/images/size/w600/2023/03/pocketadfirst_de.jpg"
                alt="Ankündigung einer neuen Partnerschaft: BitBox + Pocket Bitcoin"
              />
              <span class="sr-only"
                >Ankündigung einer neuen Partnerschaft: BitBox + Pocket
                Bitcoin</span
              >
            </a>

            <div class="post-card-content">
              <a
                class="post-card-content-link"
                href="blog/ankundigung-einer-neuen-partnerschaft-bitbox-pocket-bitcoin/index.html"
              >
                <header class="post-card-header">
                  <h2 class="post-card-title">
                    Ankündigung einer neuen Partnerschaft: BitBox + Pocket
                    Bitcoin
                  </h2>
                </header>

                <section class="post-card-excerpt">
                  <p>
                    Ab heute können BitBox-Nutzer mit Pocket Bitcoin direkt in
                    der BitBox-App kaufen
                  </p>
                </section>
              </a>

              <footer class="post-card-meta">
                <ul class="author-list"></ul>
                <div class="post-card-byline-content">
                  <span></span>
                  <span class="post-card-byline-date"
                    ><time datetime="2023-03-08">8 Mar 2023</time>
                    <span class="bull">&bull;</span> 3 min read</span
                  >
                </div>
              </footer>
            </div>
          </article>
          <article class="post-card post">
            <a
              class="post-card-image-link"
              href="blog/bitbox-03-2022-trift-update-2/index.html"
            >
              <img
                class="post-card-image"
                srcset="
                  https://shiftcrypto.ch/blog/content/images/size/w300/2023/03/triftupdate_de.jpg   300w,
                  https://shiftcrypto.ch/blog/content/images/size/w600/2023/03/triftupdate_de.jpg   600w,
                  https://shiftcrypto.ch/blog/content/images/size/w1000/2023/03/triftupdate_de.jpg 1000w,
                  https://shiftcrypto.ch/blog/content/images/size/w2000/2023/03/triftupdate_de.jpg 2000w
                "
                sizes="(max-width: 1000px) 400px, 700px"
                loading="lazy"
                src="blog/content/images/size/w600/2023/03/triftupdate_de.jpg"
                alt="BitBox 03.2023 Trift-Update"
              />
              <span class="sr-only">BitBox 03.2023 Trift-Update</span>
            </a>

            <div class="post-card-content">
              <a
                class="post-card-content-link"
                href="blog/bitbox-03-2022-trift-update-2/index.html"
              >
                <header class="post-card-header">
                  <h2 class="post-card-title">BitBox 03.2023 Trift-Update</h2>
                </header>

                <section class="post-card-excerpt">
                  <p>
                    Dieses Update bietet eine neue und bequeme Möglichkeit, Sats
                    in der BitBoxApp zu stacken und verschiedene UI- und
                    UX-Verbesserungen
                  </p>
                </section>
              </a>

              <footer class="post-card-meta">
                <ul class="author-list"></ul>
                <div class="post-card-byline-content">
                  <span></span>
                  <span class="post-card-byline-date"
                    ><time datetime="2023-03-08">8 Mar 2023</time>
                    <span class="bull">&bull;</span> 2 min read</span
                  >
                </div>
              </footer>
            </div>
          </article>
        </section>
      </div>
    </section>

    <section class="leftup leftdown large with-space bg-gray" id="partners">
      <div class="content-width">
        <div class="row center-xs m-top-xxlarge m-bottom-xlarge">
          <div class="col-xs-11">
            <div class="row center-xs flex-items-center">
              <div class="col-xs-12">
                <h2 class="heading-1 m-bottom-xxlarge">Partners</h2>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://pocketbitcoin.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="224"
                    height="46"
                    src="../assets/icons/partners/pocket-7461084deebba0d1a2af59f0e8dac281.svg"
                    style="max-width: 200px"
                    alt="Pocket Bitcoin"
                  />
                  <span class="sr-only">pocketbitcoin.com</span>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://cointracking.info/?ref=BITBOX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="319"
                    height="60"
                    src="../assets/icons/partners/cointracking_bw-016434ba0abaebe71071090719ff5238.png"
                    style="max-width: 240px"
                    alt="CoinTracking"
                  />
                  <span class="sr-only">cointracking.info</span>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a href="https://relai.ch/" target="_blank" rel="noopener">
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="337"
                    height="104"
                    src="../assets/icons/partners/relai_bw-4bd1eca2dfe77ec91c456fc38be6b7a5.png"
                    style="max-width: 274px"
                    alt="Relai"
                  />
                  <span class="sr-only">relai.ch</span>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://www.houseofinsurtech.ch/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="width-60 m-bottom-xxlarge"
                    width="279"
                    height="128"
                    src="../assets/icons/partners/hits_logo_no_bg-33a268e4ac3e026a798eaccef3c28bda.png"
                    style="max-width: 200px"
                    alt="HITS House of Insurtech"
                  />
                  <span class="sr-only">houseofinsurtech.ch</span>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://www.bitcoinassociation.ch/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="m-bottom-xxlarge"
                    width="148"
                    height="155"
                    src="../assets/icons/partners/bitcoin_association_switzerland_bw-3e3d41186006bff08005a882282100eb.png"
                    style="max-width: 150px"
                    alt="Bitcoin Association Switzerland"
                  />
                  <span class="sr-only">bitcoinassociation.ch</span>
                </a>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4">
                <a
                  href="https://www.amwal.network/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    loading="lazy"
                    class="width-60 m-bottom-xxlarge"
                    width="229"
                    height="115"
                    src="../assets/icons/partners/amwal-network_bw-9c9f2d0f6b9afe219e51630b6555cfad.png"
                    style="max-width: 229px"
                    alt="Amwal Network"
                  />
                  <span class="sr-only">amwal.network</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer rightup bottomFlat h-padding with-space" id="footer">
      <div class="content-width">
        <div class="row end-xs">
          <div class="col-xs-12 col-sm-10 text-right">
            <img
              loading="lazy"
              class="footer-logo"
              src="../assets/images/logos/reversed_swiss_made.svg"
              alt="Swiss made open source"
            />
            <p class="meta">
              <a href="support/index.html">Got questions? Contact us</a>.<br />
              © 2020 Shift Crypto AG, Switzerland. All rights reserved.
            </p>
          </div>
        </div>
        <div class="row center-xs text-left">
          <div class="footer-subnav text-left col-xs-12 col-sm-9 col-md-12">
            <a class="m-right" href="about/index.html" translate="no">About</a>
            <a class="m-right" href="blog/index.html" translate="no">Blog</a>
            <a class="m-right" href="https://shiftcrypto.shop/">Shop</a>
            <a href="jobs/index.html" translate="no">Jobs</a>
            <a
              class="m-left"
              target="_blank"
              rel="noopener noreferrer"
              href="https://bitbox.betteruptime.com/"
              translate="no"
              >Status</a
            >
            <a
              class="rss-button"
              href="blog/rss/index.html"
              title="RSS"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="6.18" cy="17.82" r="2.18"></circle>
                <path
                  d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="row m-top-large center-xs text-left">
          <div class="col-xs-4 col-sm-3 col-md-2 m-bottom">
            <p class="footer-label meta">Partners</p>
            <ul>
              <li><a href="buy/index.html">Where to buy</a></li>
              <li><a href="reviewers/index.html">Reviewers</a></li>
              <li><a href="dev/index.html">Developer resources</a></li>
              <li>
                <a href="bug-bounty-program/index.html">Bug bounty program</a>
              </li>
              <li><a href="affiliates/index.html">Affiliate program</a></li>
              <li>
                <a href="bitcoin/resources/index.html">Bitcoin crash course</a>
              </li>
              <li>
                <a href="bitbox02/compare-hardware-wallets/index.html"
                  >Wallet comparison</a
                >
              </li>
            </ul>
          </div>
          <div class="col-xs-4 col-sm-3 col-md-2 m-bottom">
            <p class="footer-label meta">Products</p>
            <ul translate="no">
              <li><a href="bitbox02/index.html">BitBox02</a></li>
              <li><a href="app/index.html">BitBoxApp</a></li>
              <li><a href="base/index.html">BitBoxBase</a></li>
              <li><a href="bitboxcare/index.html">BitBoxCare</a></li>
              <li><a href="backupcard/index.html">Backup card</a></li>
              <li><a href="steelwallet/index.html">Steelwallet</a></li>
              <li>
                <a href="tamper-evident-bags/index.html">Tamper-evident bags</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-4 col-sm-3 col-md-2 m-bottom">
            <p class="footer-label meta">Policies</p>
            <ul>
              <li>
                <a href="policies/refund-policy/index.html">Refund policy</a>
              </li>
              <li>
                <a href="policies/privacy-policy/index.html">Privacy policy</a>
              </li>
              <li>
                <a href="policies/terms-of-service/index.html"
                  >Terms of service</a
                >
              </li>
              <li>
                <a href="policies/limited-warranty/index.html"
                  >Limited warranty</a
                >
              </li>
              <li>
                <a href="policies/shipping/index.html">Shipping policy</a>
              </li>
              <li class="open-cookie-monster">
                <button onClick="app.openCookieMonster();" type="button">
                  Cookie settings&nbsp;🍪
                </button>
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-5 col-md-offset-1">
            <p class="footer-label meta">Platforms</p>
            <div class="inline">
              <a
                data-name="Twitter"
                data-category="Social"
                href="https://twitter.com/ShiftCryptoHQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">twitter.com/ShiftCryptoHQ</span>
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter icon</title>
                  <path
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                  />
                </svg>
              </a>
              <a
                data-name="GitHub"
                data-category="Social"
                href="https://github.com/digitalbitbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">github.com/digitalbitbox</span>
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub icon</title>
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a
                data-name="YouTube"
                data-category="Social"
                href="https://www.youtube.com/channel/UCBEYTMaU5UVd6RWLI_2tzzA/playlists"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">youtube.com</span>
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube icon</title>
                  <path
                    d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                  />
                </svg>
              </a>
              <a
                data-name="Facebook"
                data-category="Social"
                href="https://www.facebook.com/Shiftcrypto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">facebook.com/Shiftcrypto</span>
                <svg
                  style="fill: white"
                  width="24"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook icon</title>
                  <path
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                  />
                </svg>
              </a>
              <a
                data-name="LinkedIn"
                data-category="Social"
                href="https://www.linkedin.com/organization-guest/company/shift-crypto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only"
                  >linkedin.com/organization-guest/company/shift-crypto</span
                >
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn icon</title>
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                data-name="Instagram"
                data-category="Social"
                href="https://www.instagram.com/shiftcryptohq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">instagram.com/shiftcryptohq</span>
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram icon</title>
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </a>
              <a
                data-name="Telegram"
                data-category="Social"
                href="telegram/index.html"
              >
                <span class="sr-only">Telegram group</span>
                <svg
                  role="img"
                  style="fill: white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>Telegram icon</title>
                  <path
                    d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"
                  />
                </svg>
              </a>
              <a
                data-name="Reddit"
                data-category="Social"
                href="https://www.reddit.com/r/BitBoxWallet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">reddit.com/r/BitBoxWallet/</span>
                <svg
                  role="img"
                  width="24"
                  height="24"
                  style="fill: white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <defs />
                  <path
                    d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
                  />
                </svg>
              </a>
            </div>
            <p class="footer-label meta m-top-large">Newsletter</p>
            <ul>
              <li>
                <a href="newsletter/index.html" class="footer-inline-icon">
                  <svg
                    role="img"
                    fill="none"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  Subscribe
                </a>
              </li>
            </ul>
            <div class="row m-top-large">
              <div class="col-xs-8 p-right-none p-left-none">
                <p class="meta m-top-none">
                  Except where otherwise noted, content on this site is licensed
                  under a
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by/4.0/"
                    >Creative Commons Attribution 4.0 International License</a
                  >
                </p>
              </div>
            </div>
            <div class="row m-top-large">
              <div class="col-md-10 p-right-none p-left-none">
                <div>
                  <ul class="inline">
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="bitcoin"
                        src="../assets/icons/payments/bitcoin.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="mastercard"
                        src="../assets/icons/payments/mastercard.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="visa"
                        src="../assets/icons/payments/visa.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="bancontact"
                        src="../assets/icons/payments/bancontact.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="ideal"
                        src="../assets/icons/payments/ideal.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="sofort"
                        src="../assets/icons/payments/sofort.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        style="background-color: white"
                        alt="bank-transfer"
                        src="../assets/icons/payments/bank.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="giropay"
                        src="../assets/icons/payments/giropay.png"
                      />
                    </li>
                    <li class="payment-icon">
                      <img
                        loading="lazy"
                        alt="eps"
                        src="../assets/icons/payments/eps.png"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
