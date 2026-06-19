import { useState, useEffect } from "react";

function Subjects() {
  const [subjects, setSubjects] =
    useState([]);

  const [subject, setSubject] =
    useState({
      code: "",
      name: ""
    });

  useEffect(() => {
    setSubjects(
      JSON.parse(
        localStorage.getItem("subjects")
      ) || []
    );
  }, []);

  const addSubject = () => {
    const updated =
      [...subjects, subject];

    setSubjects(updated);

    localStorage.setItem(
      "subjects",
      JSON.stringify(updated)
    );

    setSubject({
      code: "",
      name: ""
    });
  };

  const deleteSubject = (index) => {
    const updated =
      subjects.filter(
        (_, i) => i !== index
      );

    setSubjects(updated);

    localStorage.setItem(
      "subjects",
      JSON.stringify(updated)
    );
  };

  return (
    <div>

      <h1>Subjects</h1>

      <input
        placeholder="Code"
        value={subject.code}
        onChange={(e) =>
          setSubject({
            ...subject,
            code: e.target.value
          })
        }
      />

      <input
        placeholder="Subject Name"
        value={subject.name}
        onChange={(e) =>
          setSubject({
            ...subject,
            name: e.target.value
          })
        }
      />

      <button onClick={addSubject}>
        Add Subject
      </button>

      <ul>

        {subjects.map((s, index) => (
          <li key={index}>
            {s.code} - {s.name}

            <button
              onClick={() =>
                deleteSubject(index)
              }
            >
              Delete
            </button>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default Subjects;