import styles from '../styles/components/Testimonials.module.css';

export default function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.reviewsWide}>
        <ReviewCarousel centerMode={true} />
      </div>
      <div className={styles.reviews}>
        <ReviewCarousel centerMode={false} />
      </div>
    </div>
  );
}
