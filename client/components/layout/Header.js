import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import WhatsappButton from "../whatsappButton/index"
import { searchItems } from '../../redux/slices/productSlice';

function Header() {
    const router = useRouter();

    let token;
    let admin;

    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        // Now you can safely use localStorage
        token = localStorage.getItem('token')
        admin = JSON.parse(localStorage.getItem('isOwner'))
    }
    const dispatch = useDispatch()

    const cart = useSelector((state) => state?.cart?.cartItems);
    const [search, setSearch] = useState()
    const catagories = useSelector((state) => state?.category?.categories);
    const [isListVisible, setListVisible] = useState(false);

    // Function to toggle the list's visibility
    const toggleList = () => {
        setListVisible(!isListVisible);
    };

   

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        {/* <div className="d-inline-flex align-items-center h-100">
                            <a className="text-body mr-3" href="">
                                About
                            </a>
                            <a className="text-body mr-3" href="">
                                Contact
                            </a>
                            <a className="text-body mr-3" href="">
                                Help
                            </a>
                            <a className="text-body mr-3" href="">
                                FAQs
                            </a>
                        </div> */}
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    My Account
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link href="/login" className="dropdown-item" type="button" >
                                        Sign in
                                    </Link>
                                    <Link href="/signup" className="dropdown-item" type="button">
                                        Sign up
                                    </Link>

                                </div>
                            </div>
                            <div className="btn-group mx-2">
                                +971551396801
                                {/*  <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    USD
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">
                                        EUR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        GBP
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        CAD
                                    </button>
                                </div>
                                */}
                            </div>
                            {/* <div className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-sm btn-light dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    EN
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">
                                        FR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        AR
                                    </button>
                                    <button className="dropdown-item" type="button">
                                        RU
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="#" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark" />
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: 2 }}
                                >
                                    0
                                </span>
                            </a>
                            <Link href="/cart" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark" />
                                <span
                                    className="badge text-dark border border-dark rounded-circle"
                                    style={{ paddingBottom: 2 }}
                                >
                                    {cart?.length}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link href="/" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">
                                Gate
                            </span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                                Automation
                            </span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="search"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value)
                                        dispatch(searchItems(e.target.value))
                                    }}
                                    className="form-control"
                                    placeholder="Search for product by product name or categroy name"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search" />
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div className="col-lg-4 col-6 text-right">
                        <WhatsappButton text={"Quick Shop Now"} />
                    </div> */}
                </div>
            </div>


            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                            data-toggle="collapse"
                            // href="#navbar-vertical"
                            style={{ height: 65, padding: "0 30px" }}
                            onClick={toggleList}
                        >
                            <h6 className="text-dark m-0">
                                <i className="fa fa-bars mr-2" />
                                Categories
                            </h6>
                            <i className="fa fa-angle-down text-dark" />
                        </a>
                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            // id="navbar-vertical"
                            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                        >
                            {isListVisible && <div className="navbar-nav w-100">
                                {/* <div className="nav-item dropdown dropright">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Dresses <i className="fa fa-angle-right float-right mt-1" />
                                    </a>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <a href="" className="dropdown-item">
                                            Mens Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Womens Dresses
                                        </a>
                                        <a href="" className="dropdown-item">
                                            Babys Dresses
                                        </a>
                                    </div>
                                </div> */}
                                {catagories?.map((itm) => {
                                    return (
                                        <p onClick={() => {
                                        setListVisible(!isListVisible);
                                        router.push(`/product-list-by-selected-category/${itm?._id}`)
                                        }}
                                        // }} href={`/product-list-by-selected-category/${itm?._id}`}
                                         keys={itm?._id}  className="nav-item nav-link">
                                        {itm?.name}
                                    </p>
                                    )
                                })}
                                {/* <a href="" className="nav-item nav-link">
                                    Jeans
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Swimwear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Sleepwear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Sportswear
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Jumpsuits
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Blazers
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Jackets
                                </a>
                                <a href="" className="nav-item nav-link">
                                    Shoes
                                </a> */}
                            </div>}
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <a href="/" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">
                                    Gate
                                </span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                    Automation
                                </span>
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            {admin ?
                                <div
                                    className="collapse navbar-collapse justify-content-between"
                                    id="navbarCollapse"
                                >
                                    <div className="navbar-nav mr-auto py-0">
                                        <Link href="/create-product" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Add Product
                                        </Link>
                                        <Link href="/create-category" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Add Category
                                        </Link>

                                        <div className="nav-item dropdown">
                                            <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            </div>
                                        </div>
                                        <Link href="/services" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Installation & Maintenance
                                        </Link>

                                        <Link href="/contact" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Contact
                                        </Link>

                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <a href="" className="btn px-0">
                                            <i className="fas fa-heart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                0
                                            </span>
                                        </a>
                                        <Link href="/cart" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                {cart?.length}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                : <div
                                    className="collapse navbar-collapse justify-content-between"
                                    id="navbarCollapse"
                                >
                                    <div className="navbar-nav mr-auto py-0">
                                        {/* <Link href="/create-product" className="nav-item nav-link active" style={{ color: "white" }}>
                                        Add Product
                                    </Link>
                                    <Link href="/create-category" className="nav-item nav-link active" style={{ color: "white" }}>
                                        Add Category
                                    </Link> */}

                                        <div className="nav-item dropdown">
                                            <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            </div>
                                        </div>
                                        <Link href="/services" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Installation & Maintenance
                                        </Link>

                                        <Link href="/contact" className="nav-item nav-link active" style={{ color: "white" }}>
                                            Contact
                                        </Link>
                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <a href="" className="btn px-0">
                                            <i className="fas fa-heart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                0
                                            </span>
                                        </a>
                                        <Link href="/cart" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary" />
                                            <span
                                                className="badge text-secondary border border-secondary rounded-circle"
                                                style={{ paddingBottom: 2 }}
                                            >
                                                {cart?.length}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
