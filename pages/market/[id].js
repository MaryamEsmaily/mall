import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Market.module.css";
import { useRouter } from "next/router";
import detail from "data/details";

function Market() {
  const router = useRouter();
  const item = detail?.find((i) => i.id === router.query.id);
  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <ul className="d-flex justify-content-between align-items-center m-0  px-3 py-3 ">
          <li>
            <div className="d-flex align-items-center">
              <Link href="/">خانه</Link>
              <Link href="/">درباره ما</Link>
              <Link href="/">ارتباط با ما</Link>
            </div>
          </li>
          <li>
            <p className="m-0 ps-2 pt-1">لوگو</p>
          </li>
        </ul>
      </div>

      <div className={styles.body}>
        <div className=" d-flex flex-wrap pt-1">
          <div className={`pe-3  ${styles.firstChild}`}>
            <div className={styles.market}>
              <h1>{item?.name}</h1>
              <div className="my-2 ">
                <div className={styles.horizentalLine}></div>
                <Link href="/">
                  <a>برای مشاهده کلیک کنید</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={` ${styles.secondChild}`}>
            <div
              className={`d-flex flex-nowrap overflow-auto ms-1 ${styles.images}`}
            >
              {item?.images?.map((item) => {
                return (
                  <div key={item.id}>
                    <img
                      src={item.src}
                      className="mx-2"
                      width={250}
                      alt="df"
                    ></img>
                  </div>
                );
              })}
            </div>
            <div
              className={`d-flex justify-content-end align-items-center mt-1 ${styles.arrow}`}
            >
              <div className={`${styles.horizentalLine} m-0`}></div>
              <div>
                <img src="https://img.icons8.com/ios/20/d55508/back--v1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
