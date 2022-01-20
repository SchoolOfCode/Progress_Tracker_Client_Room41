//Code from Graham Canny Hackaton - might be useful:
// const url = "https://course-api.com/react-tabs-project";
// function Research() {
//   const [loading, setLoading] = useState(true);
//   const [jobs, setJobs] = useState([]);
//   const [value, setValue] = useState(0);

//   async function fetchJobs() {
//     const response = await fetch(url);
//     const newJobs = await response.json();
//     setJobs(newJobs);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   if (loading) {
//     return <section className="section loading">loading...</section>;
//   }
//   const { company, dates, duties, title } = jobs[value];

//   return (
//     <section className="section">
//       <div className="title">
//         <h2>experience</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="jobs-centre">
//         <div className="btn-container">
//           {jobs.map((item, index) => {
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setValue(index);
//                 }}
//                 className={`job-btn ${index === value && "active-btn"}`}
//               >
//                 {item.company}
//               </button>
//             );
//           })}
//         </div>
//         {}
//         <article className="job-info">
//           <h3>{title}</h3>
//           <h4>{company}</h4>
//           <p className="job-date">{dates}</p>
//           {duties.map((duty, index) => {
//             return (
//               <div className="job-desc">
//                 <FaAngleDoubleRight className="job-icon" />
//                 <p>{duty}</p>
//               </div>
//             );
//           })}
//         </article>
//       </div>
//     </section>
//   );
// }

// export default Research;