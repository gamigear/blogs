
import { Link } from '@inertiajs/react';
import React, { Fragment } from 'react'
import BaseLink from "@/shared/layouts-components/baselink/baselink";
const Footer = () => {

  return (
    <Fragment>

      {/* <!-- Footer Start --> */}

      <footer className="footer mt-auto py-3 text-center">
        <div className="container">
          <span className="text-muted"> Copyright © <span id="year"> 2025 </span> <BaseLink
            href="#!" className="text-dark fw-medium">Vyzor</BaseLink>.
            Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link  target='_blank' href="https://spruko.com/">
              <span className="fw-medium text-primary">Spruko</span>
            </Link> All
            rights
            reserved
          </span>
        </div>
      </footer>

      {/* <!-- Footer End --> */}

    </Fragment>
  )
}

export default Footer;
