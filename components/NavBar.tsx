import React, { useRef, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import Logo from './Logo';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { LangDropdown } from './LangDropdown';
import { FaYoutube, FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
const getLang = (code: string): string => {
    const langMap: { [key: string]: string } = {
        en: "English",
        ar: "العربية",
        es: "Español",
        fr: "Français",
        hi: "हिंदी",
        zh: "中文",
        bn: "বাংলা",
        ru: "Русский",
        id: "Bahasa Indonesia",
        de: "Deutsch",
    };

    return langMap[code] || "English";
};


const Socials = ({ isMobile, lang }: { isMobile: boolean; lang: string }) => {
    const prefix = lang ? `/${lang}` : ""
    return (
        <div className={`navbar-social-links${isMobile ? " is-mobile" : ""}`}>
            <a className="navbar-social-link" href={`${prefix}/youtube-downloader`} rel="noopener noreferrer">
                <FaYoutube className="icon yt" /> YouTube
            </a>
            <a className="navbar-social-link" href={`${prefix}/facebook-downloader`} rel="noopener noreferrer">
                <FaFacebookF className="icon fb" /> Facebook
            </a>
            <a className="navbar-social-link" href={`${prefix}/instagram-downloader`} rel="noopener noreferrer">
                <FaInstagram className="icon ig" /> Instagram
            </a>
            <a className="navbar-social-link" href={`${prefix}/twitter-downloader`} rel="noopener noreferrer">
                <FaXTwitter className="icon tw" /> Twitter
            </a>
            <a className="navbar-social-link" href={`${prefix}/tiktok-downloader`} rel="noopener noreferrer">
                <FaTiktok className="icon tk" /> TikTok
            </a>
        </div>
    );
};


const NavBar = ({ lang }: { lang: string }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    const langDropdownRef = useRef<HTMLUListElement>(null)

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
                <Socials isMobile={false} lang={lang} />

                {/* Mobile Social Links */}
                {mobileMenuOpen && (
                    <div className="mobile-menu-overlay">
                        <Socials isMobile={true} lang={lang} />
                    </div>
                )}

                {/* Language Dropdown */}
                <div className={`navbar-language-dropdown ${dropdownOpen ? 'show' : ''}`}>
                    <button
                        className="navbar-language-button"
                        type="button"
                        onClick={toggleDropdown}
                        onBlur={(e) => {
                            if (langDropdownRef.current && langDropdownRef.current.contains(e.relatedTarget)) {
                                // Do nothing if relatedTarget is within the dropdown
                                return;
                            }

                            // Close the dropdown otherwise
                            setDropdownOpen(false);
                        }}

                        aria-expanded={dropdownOpen}
                    >
                        <IoLanguage className="navbar-language-icon" />
                        {getLang(lang)}
                    </button>
                    <LangDropdown dropdownOpen={dropdownOpen} langDropdownRef={langDropdownRef} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;