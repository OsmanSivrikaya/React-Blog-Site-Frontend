import SendMail from "./SendMail";

const Footer = () => {
  return (
    <div>
      <div className="row mt-5 pt-3">
        <div className="col-xl-6 col-lg-12 mb-4">
          <SendMail />
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
          <div className="p-5 tm-bg-gray">
            <h3 className="tm-text-primary mb-4">Quick Links</h3>
            <ul className="list-unstyled tm-footer-links">
              <li>
                <a href="#">Duis bibendum</a>
              </li>
              <li>
                <a href="#">Purus non dignissim</a>
              </li>
              <li>
                <a href="#">Sapien metus gravida</a>
              </li>
              <li>
                <a href="#">Eget consequat</a>
              </li>
              <li>
                <a href="#">Praesent eu pulvinar</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
          <div className="p-5 tm-bg-gray h-100">
            <h3 className="tm-text-primary mb-4">Our Pages</h3>
            <ul className="list-unstyled tm-footer-links">
              <li>
                <a href="#">Our Videos</a>
              </li>
              <li>
                <a href="#">License Terms</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="row pt-5">
        <div className="col-12">
          <p className="text-right">
            Copyright 2020 The Video Catalog Company - Designed by
            <a href="https://templatemo.com" rel="nofollow" target="_parent">
              TemplateMo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
