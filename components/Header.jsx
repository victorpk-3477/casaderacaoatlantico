'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Header.css';
import { withPublicPath } from '@/lib/publicPath';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="cra-header-bar">
      <Link href="/" onClick={closeMenu}>
        <img
          className="cra-logo"
          src={withPublicPath('/logo.svg')}
          alt="Logo Casa de Ração Atlântico"
        />
      </Link>

      <button
        className="cra-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`cra-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" className="cra-nav-link" onClick={closeMenu}>
          Início
        </Link>
        <Link href="/produtos" className="cra-nav-link" onClick={closeMenu}>
          Produtos
        </Link>
        <Link href="/sobre-nos" className="cra-nav-link" onClick={closeMenu}>
          Sobre Nós
        </Link>
      </nav>
    </header>
  );
}
