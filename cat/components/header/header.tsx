import styles from './header.module.css'; // Import css modules stylesheet as styles

type HeaderProps = {
    title: string,
  }
  export const Header = ({ title }: HeaderProps) => (
    <header className={styles.header}><h1 className={styles.h1}>{title}</h1></header>
  );
  