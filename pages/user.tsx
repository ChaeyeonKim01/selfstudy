import React, { useState } from "react";

function Userform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [habit, setHabit] = useState("");
  return (
    <>
      <div>Userform</div>
      <form>
        <div>
          이름 : {name}
          <input
            type="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          이메일 : {email}
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          성별 : {gender}
          <span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            남자
          </span>
          <span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            여자
          </span>
        </div>
        <div>취미 : {habit}</div>
        <div>
          <span>
            <input
              type="checkbox"
              name="habit"
              value="exercise"
              onChange={(e) => setHabit(e.target.value)}
            />
            운동
          </span>
          <span>
            <input
              type="checkbox"
              name="habit"
              value="reading"
              onChange={(e) => setHabit(e.target.value)}
            />
            독서
          </span>
          <span>
            <input
              type="checkbox"
              name="habit"
              value="listening music"
              onChange={(e) => setHabit(e.target.value)}
            />
            음악 감상
          </span>
        </div>
      </form>
    </>
  );
}

export default Userform;
죽어라 공부해도 모자른 시간.
물론 당장은 바에서 일할 수는 있다만 그것도 3개월 정도만 그렇게 할 수 있지 그 이상은 시간 낭비다.
