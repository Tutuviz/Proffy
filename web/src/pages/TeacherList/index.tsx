import React, { useState, FormEvent } from "react";

import TeacherItem, { Teacher } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Input from "../../components/Input";
import api from "../../services/api";

import "./style.css";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [week_day, setWeekDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Biologia", label: "Biologia" },
              { value: "Química", label: "Química" },
              { value: "Física", label: "Física" },
              { value: "Redação", label: "Redação" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Sociologia", label: "Sociologia" },
            ]}
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
