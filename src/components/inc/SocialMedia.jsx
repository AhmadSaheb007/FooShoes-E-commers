import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const SocialMedia = () => {
  return (
    <div>
      <div className="row py-3">
        <div className="col-lg-2">
          <FaFacebook className="fs-4" />
        </div>

        <div className="col-lg-2">
          <FaTwitter className="fs-4" />
        </div>

        <div className="col-lg-2">
          <IoIosMail className="fs-3" />
        </div>

        <div className="col-lg-2">
          <FaInstagram className="fs-4" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
