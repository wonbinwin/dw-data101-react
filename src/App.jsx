// // import React from "react";
// // import Header from "./layout/Header";
// // import Footer from "./layout/Footer";
// // import Gallery from "./components/Gallery";
// // import Auth from "./components/Auth";

// // const App = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <main>
// //         <Gallery />
// //         <Auth />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };
// // export default App;
// import React from "react";
// import Sampleheader from "./layout/Sampleheader";
// import SampleGal from "./components/SampleGal";
// // import Ninput from "./components/Ninput";
// import Sinput from "./components/Sinput";
// import Cal from "./ex/Cal";
// import Detail from "./components/Detail";

// const App = () => {
//   const kyh = "kim";
//   return (
//     <>
//       {/* <SampleGal /> */}
//       <Sampleheader />
//       <main>
//         <SampleGal />
//         <Sinput />
//         <Detail />
//       </main>
//     </>
//   );
// };

// export default App;

import React from "react";
import Header from "./Components2/Header";
import Gallery from "./Components2/Gallery";
import Calender from "./Components2/Calender";
import Detail from "./Components2/Detail";
import Input from "./Components2/Input";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
        <Calender />
        <Detail />
        <Input />
      </main>
    </>
  );
};

export default App;
