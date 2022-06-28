import Carousel from 'react-alice-carousel';
import MessageIcon from '@mui/icons-material/Message';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import 'react-alice-carousel/lib/alice-carousel.css';

import { reviews } from '../util/reviews';
import { useEffect, useState } from 'react';

import styles from '../styles/components/Testimonials.module.css';

export default function Testimonials() {
  const [ready, setReady] = useState(false);

  // set ready on start
  useEffect(() => {
    setReady(true);
  }, []);

  function ReviewCarousel() {
    return (
      <Carousel
        infinite={true}
        disableDotsControls={true}
        renderPrevButton={() => <ArrowCircleLeftIcon />}
        renderNextButton={() => <ArrowCircleRightIcon />}
        responsive={{
          0: {
            items: 1,
          },
          900: {
            items: 3
          }
        }}
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
      <h1 className="sectionTitle"><MessageIcon />Testimonials</h1>
        {
          ready &&
          <ReviewCarousel />
        }
    </div>
  );
}
