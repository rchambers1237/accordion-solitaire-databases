import React from'react';

import Links from '../components/Links';
import Logo from '../components/Logo';

interface LayoutProps {
    children: React.ReactNode;
}

// Maybe a Modal should go beneath the footer to accmomdate error messages:
// {errorMessage && <div className="error-message" aria-live="polite">{errorMessage}</div>}

// Or maybe it's simply a message prop passed down from Router,
// so the Modal could handle errors as well as user-friendly messages.

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <Logo></Logo>
                <Links></Links>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>© 2025 Solitaire Accordion by Solitarot Games</p>
            </footer>
        </>
    );
}

export default Layout;
