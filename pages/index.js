import styles from "../styles/Home.module.css";

import Link from "next/link";
import categoty from "../data/category";
import { Animate, AnimateGroup } from "react-simple-animate";
import { AnimateKeyframes } from "react-simple-animate";
import { useState } from "react";
export default function Home() {
  const [pause, setPause] = useState(false);
  setTimeout(() => setPause(true), 4000);
  return (
    <>
      <AnimateKeyframes
        play
        pause={pause}
        delay={3}
        duration={1}
        direction="alternate"
        keyframes={["transform: translateY(-900px)", "transform: translateY()"]}
      >
        <div className={styles.overPage}>
          <h1>خوش آمدید...</h1>
        </div>
      </AnimateKeyframes>
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.navigation}>
            <ul className="d-flex justify-content-between align-items-center m-0 p-5">
              <li className="px-2">
                {/* <AnimateKeyframes
                  play
                  // pause={pause}
                  delay={0}
                  duration={1}
                  direction=""
                  keyframes={
                    [
                      //
                    ]
                  }
                > */}
                <div className="d-flex align-items-center">
                  <img src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/ffffff/external-_18-user-interface-jumpicon-(line)-jumpicon-line-ayub-irawan.png" />
                  <p className="m-0 pe-2">منو</p>
                </div>
                {/* </AnimateKeyframes> */}
              </li>
              <li className={styles.logo}>لوگو</li>
              <li className="px-2">
                <div className="d-flex align-items-center">
                  <p className="m-0 ps-2 pt-1">+11 448 4848</p>
                  <img src="https://img.icons8.com/ios/32/ffffff/phone.png" />
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.glass}></div>
          <div className={styles.bgVideo}>
            <video autoPlay={true} muted loop className={styles.background}>
              <source src="/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className={styles.body}>
            <div>
              <h1 className={styles.header}>
                از این سایت برای خرید استفاده کنید.
              </h1>
              <div className={styles.horizentalLine}></div>
              <p>ما به شما کمک میکنیم</p>
              <div className={styles.verticalLine}></div>
              <p>دسته بندی</p>
              <img src="https://img.icons8.com/ios/50/ffffff/down3.png" />
              {/* <img src="https://img.icons8.com/ios/50/ffffff/down2.png" /> */}
            </div>
            <div className={`me-5 text-end`}>
              <img
                className="ms-3"
                src="https://img.icons8.com/ios-glyphs/20/ffffff/twitter--v1.png"
              />
              <img
                className="ms-3"
                src="https://img.icons8.com/ios/20/ffffff/instagram-new--v1.png"
              />
              <img
                className="ms-3"
                src="https://img.icons8.com/ios-glyphs/20/ffffff/facebook-f.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className="py-5">دسته بندی ها</h3>
          <div className={`container ${styles.container}`}>
            <div className="row ">
              {categoty.map((item) => (
                <div
                  className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-sm-6 text-end m-0 p-0`}
                  key={item.id}
                >
                  <Link
                    href={{
                      pathname: "/market/[slug]",
                      query: { slug: item.id },
                    }}
                  >
                    <a>
                      <div className={styles.item}>
                        <img src={item.src} alt="" />
                        <p className="fw-bolder fs-5 text-dark"> {item.name}</p>
                        <div className="d-flex">
                          {item?.keyWords?.map((keyword) => {
                            return (
                              <p
                                className={`mx-1 p-1 me-0 text-secondary  ${styles.keyWords}`}
                                key={keyword.id}
                              >
                                {keyword.name}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
