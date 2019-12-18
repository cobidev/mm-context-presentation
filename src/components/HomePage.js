// === Functional === //
import React, { useContext } from 'react';
import GifContext from '../context/GifContext';

const HomePage = () => {
  const { url, isVisible, toggleGif } = useContext(GifContext);

  return (
    <div className="component-wrapper">
      <h1 className="title">Using hooks</h1>
      <div className="card">
        {isVisible ? (
          <img className="gif" src={url} alt="Chuck Norris" />
        ) : (
          <p className="subtitle">
            <span role="img" aria-label="Cat">
              🐈
            </span>{' '}
            Generator
          </p>
        )}
        <button className="button" onClick={() => toggleGif()}>
          {isVisible ? `close` : `show me`}
        </button>
      </div>
    </div>
  );
};

export default HomePage;

// === Class === //
// import React, { Component } from 'react';
// import { GifConsumer } from '../context/GifContext';

// class HomePage extends Component {
//   render() {
//     return (
//       <GifConsumer>
//         {props => {
//           const { url, isVisible, toggleGif } = props;

//           return (
//             <div className="component-wrapper">
//               <h1 className="title">Using consumer function</h1>
//               <div className="card">
//                 {isVisible ? (
//                   <img className="gif" src={url} alt="Chuck Norris" />
//                 ) : (
//                   <p className="subtitle">
//                     <span role="img" aria-label="Cat">
//                       🐈
//                     </span>{' '}
//                     Generator
//                   </p>
//                 )}
//                 <button className="button" onClick={() => toggleGif()}>
//                   {isVisible ? `close` : `show me`}
//                 </button>
//               </div>
//             </div>
//           );
//         }}
//       </GifConsumer>
//     );
//   }
// }

// export default HomePage;

// === Class 2 === //
// import React, { Component } from 'react';
// import GifContext from '../context/GifContext';

// class HomePage extends Component {
//   static contextType = GifContext;

//   render() {
//     const { url, isVisible, toggleGif } = this.context;

//     return (
//       <div className="component-wrapper">
//         <h1 className="title">Using contextType</h1>
//         <div className="card">
//           {isVisible ? (
//             <img className="gif" src={url} alt="Chuck Norris" />
//           ) : (
//             <p className="subtitle">
//               <span role="img" aria-label="Cat">
//                 🐈
//               </span>{' '}
//               Generator
//             </p>
//           )}
//           <button className="button" onClick={() => toggleGif()}>
//             {isVisible ? `close` : `show me`}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default HomePage;
