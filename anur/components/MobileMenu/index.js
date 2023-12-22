import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Početna',
        link: '/home',
        // submenu: [
        //     {
        //         id: 11,
        //         title: 'Home style 1',
        //         link: '/home'
        //     },
        //     {
        //         id: 12,
        //         title: 'Home style 2',
        //         link: '/home2'
        //     },
        //     {
        //         id: 13,
        //         title: 'Home style 3',
        //         link: '/home3'
        //     },
        //     {
        //         id: 14,
        //         title: 'Home style 4',
        //         link: '/home4'
        //     },
        // ]
    },

    {
        id: 2,
        title: 'O nama',
        link: '/about',
    },

    {
        id: 4,
            title: 'Kursevi',
            link: '/kursevi',
            // submenu: [
            //     {
            //         id: 41,
            //         title: 'Portfolio Grid',
            //         link: '/portfolio-grid'
            //     },
            //     {
            //         id: 42,
            //         title: 'Portfolio Style 2',
            //         link: '/portfolio-grid-s2'
            //     },
            //     {
            //         id: 44,
            //         title: 'Portfolio Style 3',
            //         link: '/portfolio-grid-s3'
            //     },
            //     {
            //         id: 45,
            //         title: 'Portfolio Slide',
            //         link: '/portfolio-slide'
            //     },
            //     {
            //         id: 43,
            //         title: 'portfolio Single',
            //         link: '/portfolio-single/Minimalism'
            //     }
            // ]
        },

// {
//     id: 3,
//         title: 'Pages',
//         link: '/',
//         submenu: [
//             {
//                 id: 31,
//                 title: 'Service',
//                 link: '/service'
//             },
//             {
//                 id: 32,
//                 title: 'Service single',
//                 link: '/service-single/Graphic-Design'
//             },
//             {
//                 id: 33,
//                 title: 'Project Single',
//                 link: '/project-single/Organic-Modeling'
//             },
//             {
//                 id: 34,
//                 title: '404 Error',
//                 link: '/404'
//             },
//             {
//                 id: 35,
//                 title: 'Login',
//                 link: '/login'
//             },
//             {
//                 id: 36,
//                 title: 'Register',
//                 link: '/register'
//             },
//         ]
//     },

    // {
    //     id: 5,
    //     title: 'Blog',
    //     link: '/blog',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Blog',
    //             link: '/blog'
    //         },
    //         {
    //             id: 52,
    //             title: 'Blog Left sidebar',
    //             link: '/blog-left'
    //         },
    //         {
    //             id: 53,
    //             title: 'Blog full width',
    //             link: '/blog-fullwidth'
    //         },
    //         {
    //             id: 54,
    //             title: 'Blog single',
    //             link: '/blog-single/Ipsam-voluptatem'
    //         },
    //         {
    //             id: 55,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-left-sidebar/Ipsam-voluptatem'
    //         },
    //         {
    //             id: 56,
    //             title: 'Blog single Left sidebar',
    //             link: '/blog-single-fullwidth/Ipsam-voluptatem'
    //         },
    //     ]
    // },
    {
        id: 88,
        title: 'Kontakt',
        link: '/contact',
    }
     
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link onClick={ClickHandler} href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link onClick={ClickHandler} className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
