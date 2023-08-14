import Link from "next/link";
import LocationIcon from "./icons/Location";
function Footer() {
  return (
    <div className="footer-container" id="contactUs">
      <hr />
      <div className="footer">
        <div className="footer-logo">
          <img
            src="/asset/doughnuts.jpg"
            className="footer-img"
            alt="doughnut"
          />
          <span className="header-logo">
            Foodn<span style={{ color: "red" }}>o</span>tion
          </span>
        </div>
        <div className="block">
          <div className="details">
            <span>Contact us</span>
            <span className="pngLine">
              <span>
                {" "}
                <Link href="https://www.facebook.com/abdulbasit.suleiman568">
                  <LocationIcon />
                </Link>
              </span>
              <span>
                <Link href="https://www.facebook.com/abdulbasit.suleiman568">
                  Foodnotion.com
                </Link>
              </span>
            </span>
            <span className="pngLine">
              <span>
                {" "}
                <Link href="https://www.facebook.com/abdulbasit.suleiman568">
                  <img
                    src="/asset/facebook.svg"
                    className="icons"
                    alt="doughnut"
                  />
                </Link>
              </span>
              <span>
                <Link href="https://www.facebook.com/abdulbasit.suleiman568 ">
                  Facebook
                </Link>
              </span>
            </span>
            <span className="pngLine">
              <span>
                <Link href="https://wa.me/2348102444444"></Link>{" "}
                <img
                  src="/asset/instagram.svg"
                  className="icons"
                  alt="doughnut"
                />
              </span>
              <span>
                <Link href="https://wa.me/2348102444444">Whatsapp</Link>
              </span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Account</span>
            <span className="pngLine">
              <span>::::::</span>
              <span>
                <Link href="https://wa.me/2348102444444">Support now</Link>
              </span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Company</span>
            <span className="pngLine">
              <span>
                <LocationIcon className="icon" />
              </span>
              <span>Foodnotion.com</span>
            </span>
          </div>
        </div>

        <div className="block">
          <div className="details">
            <span>Resources</span>
            <span className="pngLine">
              <span style={{ fontWeight: "800" }}>U</span>
              <span>Notionlous</span>
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <span>CopyWright@ 2023 by foodnotion {"     "}FFo.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}
export default Footer;
