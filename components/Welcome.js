import styles from '../styles/components/Welcome.module.css';

export default function Welcome(props) {
  const { scrollTo } = props;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Captain Coder&apos;s Academy</h1>
        <p>Become a coding hero with one-on-one and group lessons at Captain Coder&apos;s Academy!</p>
        <button
          className="blueButton"
          onClick={() => scrollTo('about')}
        >
          Meet the Captain!
        </button>
      </div>
      <div className={styles.splash}>
        <img
          className={styles.logo}
          src="/img/logo-clean.svg"
          width="512"
          height="512"
          alt="logo"
        />
      </div>
    </div>
  );
}
