import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./style.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/54548671?s=460&u=fe3be87ecffa65a9fba41e6ca3db8d2e92d8dadb&v=4"
          alt="Arthur"
        />
        <div>
          <strong>Arthur Passos</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        facere libero sunt, quibusdam voluptates fugiat laudantium aspernatur
        quis temporibus mollitia ipsam incidunt sapiente, eaque est, voluptas
        quam earum iusto neque!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
