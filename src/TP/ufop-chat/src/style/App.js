import styled from " styled-components";


export const OutterMain = styled.div`
.outter-main {
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  position: relative;
}

.main {
  display: flex;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.central {
  position: relative;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`;

// #root {
//   // margin: 0 auto;
//   // padding: 0;
//   // /* text-align: center; */
//   // height: 100%;
//   --ufop-color: #962038;
//   --dark-text: #211E2F;
// }


// .outter-main {
//   height: 100vh;
//   max-height: 100vh;
//   width: 100vw;
//   max-width: 100vw;
//   position: relative;
// }

// .main {
//   display: flex;
//   height: 100vh;
//   position: relative;
//   z-index: 1;
// }

// .central {
//   position: relative;
//   flex: 1.5;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }

// h1 {
//   color: var(--dark-text);
//   text-align: center;
// }

// h1>span {
//   color: var(--ufop-color);
//   font-weight: 900;
//   font-size: 2em;
// }

// .mountains-BG {
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
//   position: absolute;
//   bottom: 0;
//   z-index: -1;
// }

// @media only screen and (min-width: 2000px) {
//   h1 {
//     font-size: 3.5em;
//   }

//   h1>span {
//     font-weight: 900;
//     font-size: 3em;
//   }
// }