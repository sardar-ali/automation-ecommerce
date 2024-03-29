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
                                +971 551396801
                            </div>
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
                    <div className="col-lg-4 col-6 ml-4 text-left">
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
                </div>
            </div>


            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                         <a
                            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                            data-toggle="collapse"
                            style={{ height: 65, padding: "0 30px" }}
                        >
                            <h6 className="text-dark m-0">
                                Gate And Barriers
                            </h6>
                        </a> 
                         <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            // id="navbar-vertical"
                            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                        ></nav>
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
                                                Contact Us
                                            </Link>

                                            <Link href="/about-us" className="nav-item nav-link active" style={{ color: "white" }}>
                                                About Us
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

                                            <div className="nav-item dropdown">
                                                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                                </div>
                                            </div>
                                            <Link href="/services" className="nav-item nav-link active" style={{ color: "white" }}>
                                                Installation & Maintenance
                                            </Link>

                                            <Link href="/contact" className="nav-item nav-link active" style={{ color: "white" }}>
                                                Contact Us
                                            </Link>

                                            <Link href="/about-us" className="nav-item nav-link active" style={{ color: "white" }}>
                                                About Us
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
