import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Faculty from "./components/Faculty";
import Subjects from "./components/Subjects";
import Courses from "./components/Courses";
import Attendance from "./components/Attendance";
import Grades from "./components/Grades";
import Timetable from "./components/Timetable";
import Assignments from "./components/Assignments";
import Announcements from "./components/Announcements";
import Analytics from "./components/Analytics";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "login": return <Login />;
      case "signup": return <Signup />;
      case "dashboard": return <Dashboard />;
      case "students": return <Students />;
      case "faculty": return <Faculty />;
      case "subjects": return <Subjects />;
      case "courses": return <Courses />;
      case "attendance": return <Attendance />;
      case "grades": return <Grades />;
      case "timetable": return <Timetable />;
      case "assignments": return <Assignments />;
      case "announcements": return <Announcements />;
      case "analytics": return <Analytics />;
      case "profile": return <Profile />;
      case "settings": return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("students")}>Students</button>
        <button onClick={() => setPage("faculty")}>Faculty</button>
        <button onClick={() => setPage("subjects")}>Subjects</button>
        <button onClick={() => setPage("courses")}>Courses</button>
        <button onClick={() => setPage("attendance")}>Attendance</button>
        <button onClick={() => setPage("grades")}>Grades</button>
        <button onClick={() => setPage("timetable")}>Timetable</button>
        <button onClick={() => setPage("assignments")}>Assignments</button>
        <button onClick={() => setPage("announcements")}>Announcements</button>
        <button onClick={() => setPage("analytics")}>Analytics</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("settings")}>Settings</button>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
