// import { NavLink } from 'react-router-dom';
// import './Courses.css';

// function Courses() {
//     const courses = [
//         {
//             id: 1,
//             title: "Web Development Bootcamp",
//             desc: "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world applications from scratch.",
//             image: "/images/course_webdev.png",
//             duration: "21h 57m",
//             students: "830+",
//             link: "/learning"
//         },
//         {
//             id: 2,
//             title: "Python Masterclass",
//             desc: "From basics to advanced Python. Learn data structures, algorithms, and build automation scripts.",
//             image: "/images/course_python.png",
//             duration: "15h 30m",
//             students: "1.2k+",
//             link: "/learning"
//         },
//         {
//             id: 3,
//             title: "React JS Deep Dive",
//             desc: "Understand React components, Hooks, Context API, and state management like a pro.",
//             image: "/images/course_react.png",
//             duration: "18h 45m",
//             students: "950+",
//             link: "/learning"
//         },
//         {
//             id: 4,
//             title: "UI/UX Design Principles",
//             desc: "Learn wireframing, prototyping, and modern design aesthetics using Figma.",
//             image: "/images/course_uiux.png",
//             duration: "10h 15m",
//             students: "600+",
//             link: "/learning"
//         }
//     ];

//     return (
//         <div className="courses-container">
//             <div className="courses-header">
//                 <h1 className="heading-lg text-gradient">Explore Our Courses</h1>
//                 <p className="text-lead">Discover top-rated courses taught by industry experts. Gain the skills you need to advance your career.</p>
//             </div>
            
//             <div className="courses-grid">
//                 {courses.map(course => (
//                     <div key={course.id} className="course-card glass-panel">
//                         <div className="course-img-wrapper">
//                             <img src={course.image} alt={course.title} className="course-img" />
//                             <div className="course-overlay">
//                                 <NavLink to={course.link} className="play-btn">
//                                     ▶
//                                 </NavLink>
//                             </div>
//                         </div>
//                         <div className="course-info">
//                             <h3 className="course-title">{course.title}</h3>
//                             <p className="course-desc">{course.desc}</p>
//                             <div className="course-meta">
//                                 <span>⏱ {course.duration}</span>
//                                 <span>👥 {course.students}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Courses;

import { NavLink } from 'react-router-dom';
import './Courses.css';
import StickyNote from './StickyNote';
function Courses() {
    const courses = [
        {
            id: 1,
            title: "Web Development Bootcamp",
            desc: "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world applications from scratch.",
            // 1. Add the YouTube Video ID here
            videoId: "w7ejDZ8SWv8", 
            duration: "21h 57m",
            students: "830+",
            link: "/learning"
        },
        {
            id: 2,
            title: "Python Masterclass",
            desc: "From basics to advanced Python. Learn data structures, algorithms, and build automation scripts.",
            videoId: "rfscVS0vtbw",
            duration: "15h 30m",
            students: "1.2k+",
            link: "/learning"
        },
        {
            id: 3,
            title: "React JS Deep Dive",
            desc: "Understand React components, Hooks, Context API, and state management like a pro.",
            videoId: "SqcY0GlETPk",
            duration: "18h 45m",
            students: "950+",
            link: "/learning"
        },
        {
           
    id: 4,
    title: "UI/UX Design Principles",
    desc: "Learn wireframing, prototyping, and modern design aesthetics using Figma.",
    videoId: "8XQ8nS2S_9k", // Verified permanent embed ID
    duration: "10h 15m",
    students: "600+",
    link: "/learning"

        }
    ];

    return (
        <div className="courses-container">
           <StickyNote />
            <div className="courses-header">
                <h1 className="heading-lg text-gradient">Explore Our Courses</h1>
                <p className="text-lead">Discover top-rated courses taught by industry experts.</p>
            </div>
            
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card glass-panel">
                        <div className="course-img-wrapper">
                            {/* 2. YouTube Embed Code replaces the static <img> tag */}
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${course.videoId}`}
                                title={course.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ borderRadius: '15px 15px 0 0' }}
                            ></iframe>
                        </div>
                        
                        <div className="course-info">
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.desc}</p>
                            <div className="course-meta">
                                <span>⏱ {course.duration}</span>
                                <span>👥 {course.students}</span>
                            </div>
                            
                            {/* 3. Button to go to the full course page */}
                            <NavLink to={course.link} className="enroll-btn">
                                Start Learning
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;