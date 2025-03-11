import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        header: {
            backgroundColor: '#2563EB',
            color: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem'
        },
        navLink: {
            marginRight: '1.5rem',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'white',
            hover: { color: '#93C5FD' }
        },
        mobileNav: {
            backgroundColor: '#1E3A8A',
            padding: '1rem'
        },
        mobileLink: {
            display: 'block',
            padding: '0.5rem 0',
            textDecoration: 'none',
            color: 'white',
            hover: { color: '#93C5FD' }
        }
    };

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MyWebsite</h1>

                <nav className="hidden md:flex">
                    <a href="#" style={styles.navLink}>Home</a>
                    <a href="#" style={styles.navLink}>About</a>
                    <a href="#" style={styles.navLink}>Services</a>
                    <a href="#" style={styles.navLink}>Contact</a>
                </nav>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <nav style={styles.mobileNav}>
                    <a href="#" style={styles.mobileLink}>Home</a>
                    <a href="#" style={styles.mobileLink}>About</a>
                    <a href="#" style={styles.mobileLink}>Services</a>
                    <a href="#" style={styles.mobileLink}>Contact</a>
                </nav>
            )}
        </header>
    );
}