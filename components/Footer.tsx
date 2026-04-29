import Image from "next/image";
import Logo from "@/public/assets/logo/logo.png";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-2 justify-center">
          {/* About Section */}
          <div>
            <Image src={Logo} alt="footer_logo" width={150} height={150} />

            <p className=" text-amber-400 leading-relaxed text-2xl font-semibold">
              Dakshinamurty Foundation
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col ">
            <h1 className="font-semibold text-white mb-4">Quick Links</h1>

            <ul className="space-y-2 text-white  text-xs">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Donate Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatact Info */}

          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-4">Contact</h4>

            <ul className="space-y-2 text-xs ">
              <li className="text-gray-400 hover:text-white transition-colors">
                Email: dakshinamurtyfoundation@gmail.com
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Phone: +91 89455 72020
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Address: Panitras, Bagnan, West Bengal, Howrah, 711303
              </li>
            </ul>
          </div>
          {/* Social links */}

          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/g/14ZJKR91YoM/"
                aria-label="Facebook"
                className="btn btn-info d-flex align-items-center text-gray-400 hover:text-white"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://wa.me/+918945572020"
                target="_blank"
                aria-label="Whatsapp"
                className="btn btn-success d-flex align-items-center text-gray-400 hover:text-white"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dakshinamurty-foundation-10548b3ab?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="btn btn-success d-flex align-items-center text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="mailto:das.arin.ece@gmail.com"
                className="btn btn-success d-flex align-items-center text-gray-400 hover:text-white"
                aria-label="Email"
              >
                <SiGmail size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}

        <div className=" border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Dakshinamurty Foundation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
