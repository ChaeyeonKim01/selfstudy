import React from "react";

function Today() {
  return (
    <section className="today">
      <h2>Today's Schedule</h2>
      <article className="today_schedule">
        <div className="today_subject">
          <p className="time">07:00-10:00</p>
          <p className="subject">Study English</p>
          <ul className="tasks">
            <li>헤일리쌤</li>
            <li>해커스 영어 회화</li>
            <li>book 'Dopamine Nation'</li>
          </ul>
        </div>
        <div className="today_subject">
          <p className="time">11:00-13:30</p>
          <p className="subject">Neuroscience</p>
          <ul className="tasks">
            <li>Speeding up the Action Potential</li>
            <li>Giant Axons</li>
            <li>Myelinated Axons</li>
            <li>Myelination 1</li>
          </ul>
        </div>
        <div className="today_subject">
          <p className="time">18:00-22:00</p>
          <p className="subject">Programming</p>
          <ul className="tasks">
            <li>JavaScript 영상 시청</li>
            <li>CSS 부족한 부분 복습</li>
            <li>Self Study menu page 기획</li>
          </ul>
        </div>
        <div className="today_subject">
          <p className="time">22:00-23:00</p>
          <p className="subject">Production Control</p>
          <ul className="tasks">
            <li>Aggregate Planning</li>
            <li>Master Planning Schedule</li>
            <li>문제 풀이</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Today;
