import React from "react";
import Header from "./Header";
import styles from "./posts.module.css";
import chit from "../../images/horizontal_on_white_by_logaster.png";
import Footer from "./Footer";

function SinglePostPage(props) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.slogan}>
            <div className={styles.category_date}>
              <a href="#" className={styles.category}>
                code-for-a-living
              </a>{" "}
              SEPTEMBER 2, 2021
            </div>
            <div>
              <h1>
                Pandemic lockdowns accelerated cloud migration by three to four
                years
              </h1>
            </div>
            {/* блок с описанием поста */}
            <div className={styles.text}>
              The number of questions across Stack Overflow surged, and new
              research solidifies this trend.
            </div>
            {/* блок с автором и его аватаркой */}
            <div className={styles.author}>
              <div>Ben Stone</div>
            </div>
          </div>
          <div className={styles.slogan_image}>
            <img src={chit} className={styles.img_} alt="" />
          </div>
        </div>
        <div className={styles.whole_post}>
          Welcome to our second Stack Overflow Knows pulse survey. In our first
          edition, we focused on blockchain technologies. This time, we are
          shifting our focus to the cloud. We will be running these smaller
          surveys every few months as a compliment to our annual Developer
          Survey to allow us to dive deeper into specific topics. If you have a
          suggestion for what we should explore next, email us or share on
          social with the hashtag #StackOverflowKnows.
          <h1>Cloud adoption skyrockets</h1>
          The migration from localized to cloud computing has been accelerating
          for more than a decade, so perhaps it’s no surprise that 90% of
          respondents to our latest survey indicated that their companies
          increased usage of the cloud over the last year. It was a global
          phenomenon, with every region showing at least 75% of its participants
          growing their cloud adoption. While we know that the pandemic
          accelerated many aspects of digital transformation, we wanted to see
          if we could make an educated guess at exactly how big of a leap
          forward the worldwide lockdowns precipitated.
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SinglePostPage;
