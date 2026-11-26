import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#home");

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    
    ];

    const handleClick = (href) => {
        setActive(href);
        setOpen(false); // close the menu after clicking a link
    };

    return (
        <nav className="site-nav">
            <style>{`
                .site-nav {
                    background-color: #1b4332;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }
                .site-nav-inner {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 12px;
                    padding: 10px 16px;
                }
                .site-brand {
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 1.25rem;
                    text-decoration: none;
                }
                .site-toggle {
                    background: transparent;
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 8px;
                    font-size: 1.4rem;
                    line-height: 1;
                    padding: 4px 12px;
                    cursor: pointer;
                }
                .site-links {
                    display: none;
                    flex-direction: column;
                    width: 100%;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 4px;
                }
                .site-links.open {
                    display: flex;
                }
                .site-link {
                    display: block;
                    color: #d8f3dc;
                    text-decoration: none;
                    padding: 8px 14px;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }
                .site-link:hover,
                .site-link.active {
                    color: #ffffff;
                    background-color: #2d6a4f;
                }

                /* Desktop: links beside the brand on the left, button hidden */
                @media (min-width: 768px) {
                    .site-toggle {
                        display: none;
                    }
                    .site-links,
                    .site-links.open {
                        display: flex;
                        flex-direction: row;
                        width: auto;
                        margin-left: 12px;
                    }
                }
            `}</style>

            <div className="site-nav-inner">
                {/* Menu button on the left (mobile only) */}
                <button
                    type="button"
                    className="site-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>

                <a className="site-brand" href="#home" onClick={() => handleClick("#home")}>
                    My First Site
                </a>

                <ul className={`site-links ${open ? "open" : ""}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`site-link ${active === link.href ? "active" : ""}`}
                                onClick={() => handleClick(link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;