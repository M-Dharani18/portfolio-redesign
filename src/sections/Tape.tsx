// const words = [
//   "ACCESSIBLE", "SECURE", "INTERACTIVE", "SCALABLE",
//   "USER-FRIENDLY", "RESPONSIVE", "MAINTAINABLE", "PERFORMANT",
//   "ACCESSIBLE", "SECURE", "INTERACTIVE", "SCALABLE",
//   "USER-FRIENDLY", "RESPONSIVE", "MAINTAINABLE", "PERFORMANT",
// ];

// const Star = () => (
//   <svg className="inline w-4 h-4 text-gray-900 mx-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
//   </svg>
// );

// export const TapeSection = () => {
//   return (
//     <div className="py-6 overflow-hidden -rotate-2 my-8">
//       <div className="bg-gradient-to-r from-[#6ee7b7] to-[#38bdf8] py-3">
//         <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
//           <div className="tape-left flex gap-0 whitespace-nowrap">
//             {words.map((word, i) => (
//               <span key={i} className="inline-flex items-center">
//                 <span className="text-gray-950 font-extrabold text-sm tracking-widest uppercase">{word}</span>
//                 <Star />
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


const words = [
  "LATE-NIGHT-CODER", "EXPLORER", "UI-LOVER", "AESTHETIC",
  "DETAIL-OBSESSED", "GROWTH-MINDSET", "AMBITION-FUELED", "SELF-MOTIVATED",
];

const Star = () => (
  <svg
    className="inline w-4 h-4 text-gray-900 mx-2 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export const TapeSection = () => {
  return (
    <div className="py-6 overflow-hidden -rotate-2 my-8">
      <div className="bg-gradient-to-r from-[#6ee7b7] to-[#38bdf8] py-3">
        
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          
          {/* FIRST COPY */}
          <div className="tape-left flex shrink-0 whitespace-nowrap">
            {[...words, ...words].map((word, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-gray-950 font-extrabold text-sm tracking-widest uppercase">
                  {word}
                </span>
                <Star />
              </span>
            ))}
          </div>

          {/* SECOND COPY */}
          <div className="tape-left flex shrink-0 whitespace-nowrap">
            {[...words, ...words].map((word, i) => (
              <span key={`duplicate-${i}`} className="inline-flex items-center">
                <span className="text-gray-950 font-extrabold text-sm tracking-widest uppercase">
                  {word}
                </span>
                <Star />
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};