import { Carousel } from 'react-responsive-carousel';
import MessageIcon from '@mui/icons-material/Message';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { reviews } from '../util/reviews';

import styles from '../styles/components/Testimonials.module.css';

export default function Testimonials() {
  function ReviewCarousel(props) {
    const { centerMode } = props;

    return (
      <Carousel
        showStatus={false}
        showThumbs={false}
        swipeable={false}
        infiniteLoop={true}
        centerMode={centerMode}
        centerSlidePercentage={50}
        autoPlay={true}
        interval={30000}
        renderArrowPrev={(onClick, hasPrev, label) =>
          hasPrev &&
          <button
            className={styles.arrowButton}
            onClick={onClick}
            title={label}
            style={{ left: 18 }}
          >
            <ArrowCircleLeftIcon />
          </button>
        }
        renderArrowNext={(onClick, hasNext, label) =>
          hasNext &&
          <button
            className={styles.arrowButton}
            onClick={onClick}
            title={label}
            style={{ right: 18 }}
          >
            <ArrowCircleRightIcon />
          </button>
        }
      >
        {
          reviews.map((review, i) =>
            <div className={styles.review} key={i}>
              <p>{review.title}</p>
              <p><span className={styles.openQuote}>❝</span>{review.content}❞</p>
              <p><b>– {review.author}</b></p>
            </div>
          )
        }
      </Carousel>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.reviewsWide}>
        <ReviewCarousel centerMode={true} />
      </div>
      <div className={styles.reviews}>
        <ReviewCarousel centerMode={false} />
      </div>
      <h1 className="sectionTitle"><MessageIcon />Testimonials</h1>
    </div>
  );
}
