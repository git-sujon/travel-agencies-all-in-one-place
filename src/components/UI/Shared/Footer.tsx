import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-accent text-white ">
      <div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-8 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="text-2xl font-bold italic mb-3">Travel Agency</p>
            <p className="text-justify">
              Welcome to Link world of exploration and adventure! Our travel
              agency opens doors to breathtaking destinations, crafting
              unforgettable experiences for every traveler. Whether you seek
              tranquil beach getaways, cultural escapades, or thrilling
              expeditions, we curate journeys that resonate with your
              wanderlust.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-secondary"
                >
                  <span className="sr-only">Facebook</span>

                  <BsFacebook />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-secondary"
                >
                  <span className="sr-only">Instagram</span>

                  <BsInstagram />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-secondary"
                >
                  <span className="sr-only">Twitter</span>

                  <BsTwitter />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className=" transition hover:text-secondary"
                >
                  <span className="sr-only">Tiktok</span>

                  <BsTiktok />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium ">Packages</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Limited
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Basic
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Gold
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Premium
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium ">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Accounts Review
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium ">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Live Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium ">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Accessibility
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Returns Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className=" transition hover:text-secondaryhover:text-secondary"
                  >
                    Hiring Statistics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-100 text-center">
          &copy; 2023. travel Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
