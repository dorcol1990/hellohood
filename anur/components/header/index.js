import React, { Component } from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Image from 'next/image'


export default class Header extends Component {

  state = {
    isSearchShow: false,
  }


  render() {
    const { isSearchShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault()
    }

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }
    return (
      <header id="header" className={this.props.topbarNone}>
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={this.props.Logo}
                      alt="" /></Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/">Početna</Link>
                      </li>
                      <li><Link onClick={ClickHandler} href="/about">O nama</Link></li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/kursevi">Kursevi</Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/blog-fullwidth">Blog</Link>
                      </li>
                      <li><Link onClick={ClickHandler} href="/contact">Kontakt</Link></li>
                    </ul>
                    
                  </div>
                 
                </div>

              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
