// === Class === //
import React, { Component } from 'react';
import { GifConsumer } from '../context/GifContext';

class HomePage extends Component {
  render() {
    return (
      <GifConsumer>
        {props => {
          const { url, isVisible, handleToggleGif } = props;

          return (
            <div className="component-wrapper">
              <h1 className="title">Using Context Consumer</h1>
              <div className="card">
                {isVisible ? (
                  <img className="gif" src={url} alt="Cat" />
                ) : (
                  <p className="subtitle">
                    <span className="emoji" role="img" aria-label="Cat">
                      😼
                    </span>
                  </p>
                )}
                <button
                  type="button"
                  className="button"
                  onClick={() => (isVisible ? handleToggleGif('close') : handleToggleGif('open'))}
                >
                  {isVisible ? `close` : `show me`}
                </button>
              </div>
            </div>
          );
        }}
      </GifConsumer>
    );
  }
}
export default HomePage;

// === Class 2 === //
// import React, { Component } from 'react';
// import GifContext from '../context/GifContext';

// class HomePage extends Component {
//   static contextType = GifContext;

//   render() {
//     const { url, isVisible, handleToggleGif } = this.context;

//     return (
//       <div className="component-wrapper">
//         <h1 className="title">Using static contextType</h1>

//         <div className="card">
//           {isVisible ? (
//             <img className="gif" src={url} alt="Cat" />
//           ) : (
//             <p className="subtitle">
//               <span className="emoji" role="img" aria-label="Cat">
//                 😸
//               </span>
//             </p>
//           )}

//           <button
//             type="button"
//             className="button"
//             onClick={() => (isVisible ? handleToggleGif('close') : handleToggleGif('open'))}
//           >
//             {isVisible ? `close` : `show me`}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default HomePage;

// === Functional === //
// import React, { useContext } from 'react';
// import GifContext from '../context/GifContext';

// const HomePage = () => {
//   const { url, isVisible, handleToggleGif } = useContext(GifContext);

//   return (
//     <div className="component-wrapper">
//       <h1 className="title">Using hooks</h1>

//       <div className="card">
//         {isVisible ? (
//           <img className="gif" src={url} alt="Cat" />
//         ) : (
//           <p className="subtitle">
//             <span className="emoji" role="img" aria-label="Cat">
//               🐈
//             </span>
//           </p>
//         )}

//         <button
//           type="button"
//           className="button"
//           onClick={() => (isVisible ? handleToggleGif('close') : handleToggleGif('open'))}
//         >
//           {isVisible ? `close` : `show me`}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default HomePage;

// === Functional 2 === //
// import React, { useContext } from 'react';
// import GifContext from '../context/GifContext';
// import GenerateGifButton from './GenerateGifButton';

// const HomePage = () => {
//   const { url, isVisible } = useContext(GifContext);

//   return (
//     <div className="component-wrapper">
//       <h1 className="title">Using hooks</h1>

//       <div className="card">
//         {isVisible ? (
//           <img className="gif" src={url} alt="Cat" />
//         ) : (
//           <p className="subtitle">
//             <span className="emoji" role="img" aria-label="Cat">
//               🐈
//             </span>
//           </p>
//         )}

//         <GenerateGifButton />
//       </div>
//     </div>
//   );
// };
// export default HomePage;
