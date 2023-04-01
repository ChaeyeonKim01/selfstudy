import React from "react";

function Weekly() {
  const timetable = [
    "07:00~07:30",
    "07:30~08:00",
    "08:00~08:30",
    "08:30~09:00",
    "09:00~09:30",
    "09:30~10:00",
    "09:00~09:30",
  ];
  return (
    <section className="weekly">
      <h2>Weekly Time Table</h2>
      <table>
        <tr>
          <td>time</td>
          <td>Sun</td>
          <td>Mon</td>
          <td>Tue</td>
          <td>Wed</td>
          <td>Thu</td>
          <td>Fri</td>
          <td>Sat</td>
        </tr>
        {timetable.map((time, i) => (
          <tr key={i}>
            <td>{time}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default Weekly;
