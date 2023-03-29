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

    <section class="large pb-40 pt-10" id="partners">
      <div class="content-width">
        <div class="row center-xs m-bottom-xlarge">
          <div class="col-xs-11">
            <div class="row center-xs flex-items-center">
              <div class="col-xs-12">
                <h2 class="heading-1 mb-3">Connect Wallet</h2>
                <p class="m-bottom-xxlarge text-center">
                  Select your crypto wallet from the list bellow
                </p>
              </div>
              <div
                class="col-xs-6 col-sm-6 col-md-4 flex items-center justify-center mb-14 cursor-pointer group"
                
                v-for="(items, index) in dapps"
                :key="items.name"
                @click="checkoutWallet(index, items)"
              >
                <div>
                  <div class="flex items-center justify-center">
                    <img
                      loading="lazy"
                      class="w-28 h-28 object-contain"
                      width="224"
                      height="46"
                      :src="items.img"
                      :alt="items.name"
                      style="max-width: 200px"
                    />
                  </div>
                  <div class="flex items-center" style="margin-top: 20px">
                    <h2 class="heading-3 text-center">
                    <span  v-if="indexSelected === index"  class="mt-10">Connecting</span>
                      <span v-else class="mt-10">{{ items.name }}</span>
                      
                    </h2>
                    <div
                      v-if="indexSelected === index"
                      class="ml-1"
                      id="html-spinner"
                    ></div>
                  </div>
                </div>
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
  data() {
    return {
      dapps: [
        {
          id: 5,
          name: 'Trust Wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_88P46925f9EAG7oeQhe1JhUXGctI4MkoSDmMNlQ&s',
        },
        {
          id: 22,
          name: 'Ledger',
          link: '/encryption-link',
          type: 'hardware',
          img: 'https://cdn.shopify.com/s/files/1/2974/4858/files/good_square_200x.png?v=1533838574',
        },

        {
          id: 4,
          name: 'MetaMask',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png',
        },

        {
          id: 6,
          name: 'Wallet Connect',
          link: '/encryption-link',
          type: 'mobile',
          img: 'data:image/png;base64,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',
        },
        {
          id: 6,
          name: 'Relai Wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'data:image/png;base64,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',
        },
        {
          id: 18,
          name: 'Phantom wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://nitter.1d4.us/pic/enc/cGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMzk0MTE2NzgzNzkyMDI1NjAzL2pUTWNvWlJZXzQwMHg0MDAuanBn',
        },
        {
          id: 7,
          name: 'Coinbase Wallet',
          type: 'mobile',
          link: '/encryption-link',
          img: 'https://pbs.twimg.com/profile_images/1389350367977099264/S-pY13TJ.png',
        },
        {
          id: 23,
          name: 'Keplr',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://dl.airtable.com/.attachments/bac5b682ac37280d2aed158a5d44bada/03f36288/icon.svg',
        },

        {
          id: 900,
          name: 'Keep Key',
          link: '/encryption-link',
          type: 'hardware',
          img: 'data:image/jpeg;base64,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',
        },
        {
          id: 901,
          name: 'BitBox02',
          link: '/encryption-link',
          type: 'hardware',
          img: 'data:image/png;base64,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',
        },
        {
          id: 23,
          name: 'Ecto Wallet',
          link: '/encryption-link',
          img: 'https://lh3.googleusercontent.com/2BLyVdVBoWwoiaT6AXDUelkkqZ7_q6f4giXG36L4OKff5u9Dsj4n0OM3vLMW6_ryk_EEi-dCN0gZrnNb5wbl8j_z=w128-h128-e365-rj-sc0x00ffffff',
          type: 'mobile',
        },
        {
          id: 21,
          name: 'Exodus',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedVUC8iOmMq681N89fRAs-Wxd587Jd81RBcL2q7cPz-0Nhqt6RQ6CBaaiwna5RBgLurY&usqp=CAU',
        },
        {
          id: 1,
          name: 'Safepal',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://icodrops.com/wp-content/uploads/2021/02/SafePal_logo.jpg',
        },
        {
          id: 2,
          name: 'Atomic Wallet',
          type: 'mobile',
          link: '/encryption-link',
          img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/oupwn0bvhlilyfyofmdp',
        },
        {
          id: 3,
          name: 'Coinomi',
          type: 'mobile',
          link: '/encryption-link',
          img: 'https://avatars.githubusercontent.com/u/7957039?s=280&v=4',
        },
        {
          id: 8,
          name: 'Token Pocket',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://everipedia-storage.s3.amazonaws.com/ProfilePicture/lang_en/tokenpocket/mainphoto_medium.webp',
        },
        {
          id: 9,
          name: 'Trezor',
          link: '/encryption-link',
          type: 'hardware',
          img: 'https://img.favpng.com/20/4/22/trezor-cryptocurrency-wallet-logo-bitcoin-png-favpng-XLYZ1nLhwqKs2RV9v4xnBE4Eq.jpg',
        },
        {
          id: 10,
          name: 'Fortmatic',
          type: 'mobile',
          link: '/encryption-link',
          img: 'https://gblobscdn.gitbook.com/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?alt=media',
        },
        {
          id: 11,
          name: 'Portis',
          link: '/encryption-link',
          type: 'mobile',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAEpCAMAAAA0+0lyAAABMlBMVEX///9La5ptstgdQlk+VXgTNERSm7oAAABvt9xIZZUaQFZKapprsdg9U3ZBZJZxuN/c3NzDw8N3d3dirdalpaU8YZRgYGDs7OxsbGwNMD3Kysr4+Pjw8PCVlZUNDQ0WOEqysrIwMDBKSkqdnZ1inL+MjIzl5eUGKDZElbbW1tYnJyfu9vrT5vJOdZZScJdYiasAIjYuWXA8XYRPT08YGBiBgYE5OTm82uyvu899krPN1eGTxOHBy9qDvd2izOVfeqSMnrtTf6AxUWhIZoYANlAAHDI1SWZHh6dtqMPb5+2frsZvh6zH4O/d4uu1wNKHmrmrwdycn7yFsNRvfKWPscqwwtKdo7IuRWyqtb13gph9jZlEX3FQYH9mc45meoh5ho5aa3U1TVo8bokuQFg3Zn+YwNLgetuPAAAQBElEQVR4nO2diVYbRxaGtSC1ljZakbBaRkJCWEIEiJEgEydjY+MAiZPZTOLJzCTOZHj/V5iq6kWt7lpuLVIr5/Af22DQ8vWt+1ddVVdXp1Ir0PGXq3jVlejrV0kTQHVp73yRNANMU7tQ3J4mTQHSS4z6p6QpIDpuZArF9M4fwVkFG6OW/wDOumxkMGp68501tTMuanrjnfVygbrhzkKe8lE33VkFe4G62c66JEH1UDfaWVOX1Ectb7CziKcWqBvsrGMvqAHq5jqrYEdRy+mkmei69IO6QE3vfJs0FU1TP6Zh1PJ2O2kuil7SUDfSWYGnllE30VkZm466ec66DAV1CTW9vWHOmoZJl1HLO5vlrJCnoqjp8kY563gpqBHUzXJWxuahlstJ8y10uUwaRd0gZy17ioKa3hhnvbRFqNvfJc3o6jga1DhqeuerpCmJMtGgUlA3Y8z6c4yUgroRzop5io6a3rlLmjTuKQZqMXFnxT3FQE3eWXFPsVDLaSdR0j/TgkpHTdhZNE8xUZMds76mNT8TNUlnvacHlYWapLOonuKgJucsuqc4qOnt18mQMjzFQ03vfJ8IKsNTXNRknMXyFBc1EWc5LE/xUdMJOIvpKQHq+p3F9pQoqmt31tccUj5qec3O4nhKhLpmZ/E8JURdr7N4nhKjrtNZd3xSYVTX6CyupwCo63MW31MA1PTOD+shFXgKgpour8dZlDkKadT1OEvkKRDqepwl8hQMdR2LBYSegqGuwVliTwFRV+8ssaegqKt2FsBTUNRVOwvgKTDqap0F8RQYdaXOciCJCkdNb6/OWSBPyaC+XhUpzFMSqKtzFsxTMqirctYlNKhw1BU5C+opKdTVOAvqKUnUv5gnpZ5K0UddhbPAnpJENe8suKckUY0vHXVkSOVQyztmnSXhKVlUw84Cj1MqqGadxZ5LN4Fq0llSnpJHNegsOU8poJpzFu2Uv1FUY86SGacUUU0tcCvIBlUB1YyzZD2lhGrEWdxTKeZQyzv6lztIe0oN1YCz5D2liKrvLHlPqaLqOkvBU6qoms5S8ZQyqp6zVDyljKp1uYOSp9RRdZyl5CmkiiKqurPUPJUp2Fdv02W1sCoucJsqxbRw8NmTJ6Xs2xOlsCpeoqfiqQoG3doqZUulz0/K8qEtKjlLofbLHLzFoBg1i2DfnMjngZKzZD1VyJxuuaAuKoF9K4uq4ixJT1UyV1seZ4CKad+8fSUZVmlnyXmq4KZoHBWHVs5h8pfoSXhqkaI0VASb/VwmaWUXC8A9RQGNoMo6TNJZUE+FvcRG9RwGhC2fyJACPYXGpScUUAoqhs1CYWUWZcNqP+IlGigVlSQtzGEyzoJMURUoKSpA9boDcWjhFxJ9KQxqheYlACrUYdATL8IpKuIlNicXFTiGFWGTWH/lNz/ykgCUj+rCnvAju/03COn33KBW2F4Co0KSFjQ9/Hdey/NTFI4qHMPK/xCTfsVel841vSyqyGFiZ3WZa/3p45IGqmAME178+oHuqQr2EhQUjOo5jOEswZhF9xRnXNJEzbLHsLLAWQexoNrI9NAUVULNks9hlDzgX+5wHwtqJXMqDSqLynIYb1F2txG9eFrGSxqojDGM46yIpyDjkilUF/bVcmTZzlr2lLSXNFGzlM9hLGc5t6HtSKDjklHU2BjGctbCUxLjkmHUqMPozgo8VbDVvGQGNTKGbXM8VZAbl1aAmiUzHRxnuZ6C1XgrR3XHMDI9R3EWHqd0U9QgajCGxWcw7huiz0vrRvUdFnVWu6HvJeOovsOWP2d9uDLHaRAV07558XoJ9cefTJKaRM1elz5GMuCfJmHNoZauf+7GuoAv//3TxqGWrv9VpY0BqY/G8tUQ6nX2IxUUqWsqC4ygorbnzbFMzGSBAdTS9adDDqixLNBHvX5TE4AiOT/rZ4F2uXL9oxgU6/A/CVdWpV/iHRRV3WHvd01WPdRSr9eEsFZ/OTvL5XLfJIfaQ29/dvYrvUNdqPbp3fMcUU8HVucDi/v2uefvPnGM5TR7757mfD3VyAL1j4G93ALgXe8jvWM9/JW0fFi/rxu1FwFAeRDvXDufzp7nYlLNAjXUUhwAwX7qLIF+/O0dBVQ9C5RmV6IhDZL2t6AS6I5iLa+bBQqoDFASr7MzrxL8cNOjh9STQhZIo9LaPsSa+8ld3Jip2P99/pT3SOkskERltb3//t94n1vxGbXKwRtuYGVh5VAFoNki+oxNFo67pykrp/wskBu+pCbY+aC9F+7kFV4k4O2dWcnwsyDXkwgsHJUPitvemxDCyzCD09SVg89NZQEYVdT2i+lLvAArPPF/WjKTBUBUAWjvxWKmFS9qWrrkT5wFMFjY2UAuaO7p1vKJASd60U+lYSILIKiito+ccNm5i1+fVDnIameBGFUAWnoROzP0fWzzXHwe4CqnmQUiVNHgtBUFRV3ADxTUjF2w/6eXBYKlC8LBiaLtb2moGfHwJShiuKjitqedzEaozBV1NxpZwEEVtX0sSX3U1+zrUysaWcBEVWp7IlSwcHb8EGcBC5aFKmr7InvVRfmEh4pgBaUsq+NirF7jg/ZYbe/qJCVaqSQoZelFDA1Vve09CVDFRQw1CyiokKJUE1UpC+KLQvmggrb3UIWkGeEHmngpG11qywXN5Z4AQGGo4iImmgXLqMKiFLasFZAALuyBTClbgoOC2t6LKnipskQRUwK3/RZ8vTgYVaqU9VFFHVRWDBjoBJarQRYISlkftgQbnMBtnyajlcweFSgLBEWMl7IlQAdFK0p5qN9J7qdgi4oYt+MqiUMqHJwiKr6WRM1AZmIwqlpRyhGztOaqcNMTZIHI9zJJ6qN+oXRVHR6+BDC8kMq2vYv6g+yOGj6sqJRlgwIKE5rQJ1Y1VEARQwcNz5jIod7JbKi0rIJCFqi1vSsnJTUGRAIrKmWjoNmiYki9C/Ek91RZhr0RFDHLba8eUncmUPHCWo9VNB+3EKwoZYnMrwL3/mPCikpZr+21QL1Za+kNYGKwolJWs+1dVHIKE14GMiQoZWULE5q8y1sVNwEIya402EWMTgcVyNs6QMtXvlilrFxRykZ11zCqjlfLKhSopax+2xP5t3AxgkqbjzPS9q6888HSJSsTdikLFIpSloJ9OjV71iXYoIgx0EEtFFwwrFyx0Fi9mRiDbY9vPBgsDNEpA+KwqJRVLUoZCu3FYDADCOyNId/7Ci23Vty0hi31Yo+mcni1tdEMyGRuVUt9upZ2uVHdtoah/GdGUZc3DDCMemUUdfn2iMZGASw7f6O48w5VkctYjBrLzo9NRjV6CzeTxjrI5w2Sxi4PM2msfN6kr+K7cJgjxag3xlAp29sYG7FsG6GOjfmKtrWJIVISVHPJSt0zyMjnlgDVVLLSr2M01AfYBNVQsjI2YjKUrQ2CmjeTrKxNeIyQuu2fzwv21YCJubuVmY+uHqqRDGBvEaA/eRG0v5HuinOXBhOVQN6X0pZ2kaByLmLS77DsAFW/uuLvx6kd1EaAqj0KCHaM03bWglR7FBBtaKNXY9t2CFUzA8Rb2xkLqqaxABsGaqWAvYSq07WKdl1xU0CDNb8sjaDCNt9S/+xiR1DVsxW4dbT6bFs+KtVsBe+/p5qu0aAqh7W8cwdEVR20YqSqfavM/otK1ooHVbFokdvgWsVaFNK8ypSQ7F2v5M+7Naio8h0WfD9DT6D7A4Zk05pfxVnSpHivWDlWBqlsChRfKdyRYxrd3EqNVK5zLardV3gqkQOMRPXSFRzX7RPFu5zAWVmJKmmtbZXWdwX1loA0P4bFVTmmcFYRKZBVwftLrC/F4xY3T+H5uvNaixTpgc9q87wflqAaKKtuah/W/YFe4/s65bCWi9v3+qSp1PtxfE9GX2BQLNY0VrmcvgFXfXxN8+N8gzS2akQ9jT8rRzfmxz+4Gt+aux3bw3icz/uxdb/YIDfFdHVSRHDkD/5bPLm6yY+NNL6vYxTYPP57cNCwG40DJUxPN6cnrq5Ob8iLGmp8X9PbsQ4eW+MHs6BY7/MrgB3fGg6ppwfTrOPx5UpAke7MZsH4YZV35T42B7uqtjcOu3pQM7Dj9YBioZzVoB2PH/TvuwbX9EGx60IBvVz1Le5jukO0krjo8Q/ravllOccytMlxerq7/zAW46KHfLhMlNPT3eUH5DMqMfnp7cP7TcD0NZ2+v3+4vfXoPOzb24f799O1uwiq6XR6hzTdXMJHPepRj3rUox5F1Qir2Wft1doetgaD1hAvKq415cf5/u7g4nw+Qd915rEdVifzudSLWZ7ozxqi3xztoX/6qVTLkr0b4QQ9c3aEnr2bSjWtxf6qDjnmmmU9S6W6HdHOy4H2LPxv58IaUX7Zt44m7lf0RtKoXXKEiHiAWMOo7isdzTBx02rCUckhti2L8ssLn649cuRRhy4pEmr8MOrooovfkQSnL42a2rcomWjth/5DULvBo9q1Gop4dZJy8BG0J4ts79QmLpEValuCWp0sftDFOed0m9awC9yA2Uedoah2+m7cqnMvAgMr9NotqzvCqUt+123hBJ8dXlipqtWp7ge/SM1J6j8jdCEDNK3O0PcEeqUJedTFiHw5l0B1Dlu4OYZW3Xs3z60dy6r3246POrDORy2ctilnZl0M+3Xr6Aijjqz9YX/XsoboUefWoN/pn+NXQg8aNKtdH3VgtfrPZthiu1a3PZ8j0OEEvUa934lj0VH39/f33DA4lhvivQv/tx0cLmtAOhoEiWNcs47wwZCAtdETEar7H/S1io7WjeQuPtr2Ln72/m6NoJJkdY5QViBUnAAkLlK5OhgMzmfWET60OjFCLbADBujPW267tbwXPUdvZl0EYUeIXkb30aNmnjvb5NhT3dpod4Zouwh114tu30VtK6CS/KxeYA9UCUIr5rDOEXrBlueSkTVxSFunSBujJ819vEHbOho+I7JawbNRdg0IontwQ3VUF6BKnnmO2s3xMjasQxQ5v7N6hlH9198nueqj7retPX9MaYWejjo9v7MygJpCR47bfo6OPxgCF/63ZmHUlB/ILkkAjwp944Td3A36qrl1aBC1TVBRrjmDwFR+fiFm9Nswasvqet9brp2wdkmWuIfn4Fec+R3mntVlodakc9VpuemHHLx4LorZAL+zUwsPrBgVWalKjsVF3cP919zac/B/+g56wqyOc36vj7O+eh4aWKOoh9YFcARAqPXRqI5MPvDpQqY6xLXGxYVFukwfdYQDh+D3zy2rOcCowwEaDSw3uKhPIPlaI2FGzx7gPt6JoLYDVPyguDeo8l3gVyv1oNGJ+rsXe0fnIwz5bNc9/H4Lp4wzbLXqk9SzJkJtop8NWn5j9Ou79b77bXV+PpsN6rgf7NTdLKnWa6n+HEWj6z+oXwfWgjWiwyCSdSs6doiq1Co824zKwWORnJJCbfqdO1yJoB52UA0N9WOgqvzR6Qv3PcAqJ6T2SP452mp3Jo8zuo961KM2Qf8HFzqJfHOGpWQAAAAASUVORK5CYII=',
        },
        {
          id: 12,
          name: 'Squarelink',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://avatars.githubusercontent.com/u/36418916?s=280&v=4',
        },
        {
          id: 13,
          name: 'Torus',
          link: '/encryption-link',
          type: 'mobile',
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAY1BMVEX///86lv81lP8pkP/6/f/G3/9hqf/3+/8wkv9Nn/+DuP/y+f9prf+Ov/+01P+qz//d7P+Lvf8+mv/H3/9Sov/t9f/n8f/Q4/+bx//U5/9NoP96tf9Ypf9xsf9jqv+lzP++2v9ory8/AAACqElEQVR4nO3a63KiQBBAYRy8DCCoEBUjGt//KYOWtbUpBbp2bbbHPV/lJ4GcADPIGEUAAAAAAAAAAAAAAAAAfio2+aBNKpZPuw+126/qPK9X1a5no5dLYz/Iiflk0XGcdT2f3A8Vu2ZzGC/QTV7peeB01lz/Tb+2ct5/Fl3/igAD10v3cBTnm+pdAmvvn23q4nSMk6geuDjGXRv7+Tb8wKx5evruheU69MDs3NPXXqbJLvDAU29fW/ihfR/qBq4G+tqrdBNy4HoyvHd/CTjwJNl5ovvgphm475wgfhevgg08Dt6BV65RHWcUAyV34K1wFmjg8BB6D0wDDTwLd+1KzWFGLzArpbt2mg9seoFr4RXajqOXIAMr0SRx5b+CDCzEZ9DnQQZKB9H2HtR8HjURqDlPcIn+ceDs3QeZt58m3n6ijxrxo5rmxwnFwC/pw/ZRsU8z8CD8Hd2XFpofeJeyfX9moQbKJgpfa/bpvnSaS3auOsQoBx4eV5Ue+EK1T/nFbz384ld1CFUPnM6HXt2X2gtMymsT24/+xZdSfS1be/ls1/fA5rz+Wr36Aui2+yr1if7y4AhL2Is0fn6MeKm+ODhKYBRVT25E50vl+WHEwCgryh9n0Tk/qUdYn78FCr7m89eBreqYuNg7f/3x5eky2ped6vNyUCMP7FmRzg5FnZ5OaV7sRzp5YrJ1vtu1Nx/za2gvI399RKBNBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxBBJoHIEEGkcggcYRSKBxbx84zeT+9d8KAAAAAAAAAAAAAACA/8U3xf9DR8tejEgAAAAASUVORK5CYII=',
        },
        {
          id: 14,
          name: 'Authereum',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://pbs.twimg.com/profile_images/1136781248758571008/TOIXMgdS_400x400.png',
        },
        {
          id: 15,
          name: 'VeChain',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
        },
        {
          id: 16,
          name: 'Scatter Wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://play-lh.googleusercontent.com/U-Hh2El-rXw5bkMhc78F5oBYPzfAQEcN_rG0A6M1ac7l4rEhGl5B2iSY_N1VSQr3o6k',
        },
        {
          id: 17,
          name: 'Math Wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN04hBJLqwxe0dndDvoSMn4JJeyklXMEQ-ag&usqp=CAU',
        },
        {
          id: 18,
          name: 'Tomo Chain',
          type: 'mobile',
          link: '/encryption-link',
          img: 'https://cryptologos.cc/logos/tomochain-tomo-logo.png',
        },

        {
          id: 20,
          name: 'Guarda Wallet',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://99bitcoins.com/wp-content/uploads/2019/07/1200x630wa.png',
        },
        {
          id: 20,
          name: 'Cool Wallet',
          link: '/encryption-link',
          type: 'hardware',
          img: 'data:image/jpeg;base64,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',
        },
        {
          id: 21,
          name: 'Others',
          link: '/encryption-link',
          type: 'mobile',
          img: 'https://www.shop.accurator.asia/image/accurator/image/data/Logo/Accurator%20Others%20Logo.png',
        },
      ],
      indexSelected: null,
      myVar: null,
    }
  },
  methods: {
    checkoutWallet(i, o) {
      this.indexSelected = i
      let self = this
      this.myVar = setInterval(function () {
        this.indexSelected = null
        self.$router.push(`/checkout?wallet=${o.name}`)
        self.myStopFunction()
        self.$toast.error(
          "Error Occured!. Manual configuration needed"
        );
      }, 3000)
    },
    myStopFunction() {
      clearInterval(this.myVar)
    },
  },
}
</script>

<style>
#html-spinner {
  width: 20px;
  height: 20px;
  border: 4px solid black;
  border-top: 4px solid white;
  border-radius: 50%;
}

#html-spinner,
#svg-spinner {
  transition-property: transform;
  animation-name: rotate;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
