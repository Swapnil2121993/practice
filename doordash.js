// import React, { useState, useEffect } from "react";
// import { getDogs } from "./dogapi";
// import styles from "./styles.css";

// const ImageSlider = () => {
//   const [url, setUrl] = useState("");

//   useEffect(() => {
//     async function getData() {
//       const data = await getDogs();
//       data.map((result, index) => {
//         return <div key={index}>setUrl(result.url)</div>;
//       });
//     }
//     getData();
//   }, [url]);

//   return (
//     <div className={styles["image-container"]}>
//       <div className={styles["image"]}>
//         <img src={url} alt="title" />
//       </div>
//       <div className={styles["button"]}>
//         <button>prev</button>
//         <button>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

// /**
//  * Get cute dog pictures from reddit!
//  * @param {number} length
//  * @returns {Promise<Array<{ title: string, url:string }>}
//  */
// export const getDogs = (length = 10) => {
//   const limit = 2 * length; // get double the requested posts because some don't have images
//   return fetch(`https://www.reddit.com/r/dogswithjobs/.json?limit=${limit}`)
//     .then((response) => response.json())
//     .then((response) => {
//       const dogs = [];
//       response.data.children.forEach((c) => {
//         const title = c.data.title;
//         const url = c.data.preview?.images[0]?.resolutions[2]?.url;
//         if (url) {
//           dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
//         }
//       });
//       return new Promise((res, rej) => {
//         if (dogs.length > 0) {
//           console.log("dog", dogs);
//           const data = res(dogs.slice(0, length));
//           return data;
//         }
//         rej((err) => console.error(err)); // remove the extra dogs
//       });
//     });
// };

Solution

import React, { useState, useEffect } from 'react';
import styles from './styles.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div className={styles['image-container']}>
      <div className={styles['image']}>
        {slides &&
          slides.map((image, idx) => {
            return (
              <div key={idx}>
                {idx === current && <img src={image.url} alt={image.title} />}
              </div>
            );
          })}
      </div>
      <div className={styles['button']}>
        <button onClick={prevImage}>prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getDogs } from './component/dogapi';
import ImageSlider from './component/ImageSlider';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    async function getData() {
      const result = await getDogs();
      setData(result);
    }
    getData();
  }, []);
  return (
    <div>
      <ImageSlider slides={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

