export const LangDropdown = ({ dropdownOpen, langDropdownRef }: {
    dropdownOpen: boolean; langDropdownRef: React.MutableRefObject<HTMLUListElement>
}) => {
    return (
        <ul className={`navbar-language-menu ${dropdownOpen ? 'show' : ''}`} ref={langDropdownRef}>
            <li><a className="navbar-language-item" href="/">English</a></li>
            <li><a className="navbar-language-item" href="/ar">العربية</a></li>
            <li><a className="navbar-language-item" href="/es">Español</a></li>
            <li><a className="navbar-language-item" href="/fr">Français</a></li>
            <li><a className="navbar-language-item" href="/hi">हिंदी</a></li>
            <li><a className="navbar-language-item" href="/zh">中文</a></li>
            <li><a className="navbar-language-item" href="/bn">বাংলা</a></li>
            <li><a className="navbar-language-item" href="/ru">Русский</a></li>
            <li><a className="navbar-language-item" href="/id">Bahasa Indonesia</a></li>
            <li><a className="navbar-language-item" href="/de">Deutsch</a></li>
        </ul>
    );
};
