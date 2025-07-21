// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>自己紹介</Link>
        <Link href="/about" style={styles.link}>経歴、スキル</Link>
        <Link href="/projects" style={styles.link}>制作物</Link>
       
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '1rem',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
