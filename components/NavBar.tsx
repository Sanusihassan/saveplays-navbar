import React, { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import Logo from './Logo';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { LangDropdown } from './LangDropdown';
import { FaYoutube, FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const Socials = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <div className={`navbar-social-links${isMobile ? " is-mobile" : ""}`}>
            <a className="navbar-social-link" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon yt" /> YouTube
            </a>
            <a className="navbar-social-link" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="icon fb" /> Facebook
            </a>
            <a className="navbar-social-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon ig" /> Instagram
            </a>
            <a className="navbar-social-link" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="icon tw" /> Twitter
            </a>
            <a className="navbar-social-link" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="icon tk" /> TikTok
            </a>
        </div>
    );
};


const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Mobile Menu Toggle */}
                <button
                    className="navbar-toggler"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? <IoIosClose /> : <IoIosMenu />}
                </button>

                {/* Logo or Brand */}
                <a className="navbar-brand" href="/">
                    <Logo />
                </a>

                {/* Desktop Social Links */}
                <Socials isMobile={false} />

                {/* Mobile Social Links */}
                {mobileMenuOpen && (
                    <div className="mobile-menu-overlay">
                        <Socials isMobile={true} />
                    </div>
                )}

                {/* Language Dropdown */}
                <div className={`navbar-language-dropdown ${dropdownOpen ? 'show' : ''}`}>
                    <button
                        className="navbar-language-button"
                        type="button"
                        onClick={toggleDropdown}
                        onBlur={() => setDropdownOpen(false)}
                        aria-expanded={dropdownOpen}
                    >
                        <IoLanguage className="navbar-language-icon" />
                        English
                    </button>
                    <LangDropdown dropdownOpen={dropdownOpen} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;