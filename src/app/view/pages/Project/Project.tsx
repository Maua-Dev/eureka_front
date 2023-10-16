import "./Project.css";
import arrowBackIcon from "../../../assets/arrow_back_icon.svg";
import checkIcon from "../../../assets/check_icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Project() {
  const students = [
    "Isabella Augusta Rodrigues Rodrigues",
    "Isabella Augusta Rodrigues Rodrigues",
    "Isabella Augusta Rodrigues Rodrigues",
    "Isabella Augusta Rodrigues Rodrigues",
    "Isabella Augusta Rodrigues Rodrigues",
    "Isabella Augusta Rodrigues Rodrigues",
  ];

  const [isWorkPotencialYesSelected, setisWorkPotencialYesSelected] =
    useState(false);
    const [isWorkPotencialYesHovered, setisWorkPotencialYesHovered] =
    useState(false);
  const [isWorkPotencialNoSelected, setisWorkPotencialNoSelected] =
    useState(false);

  return (
    <main id="project">
      <Link to={"/"}>
        <img src={arrowBackIcon} alt="Ícone de flecha" />
      </Link>

      <section className="card">
        <header>DSGD01- TRABALHO ERGONOMIA COGNITIVA - TESTE</header>
        <div className="mainHeaderCard">
          <div className="leftMain">
            <h2>Habilitação: </h2>
            <span>Design</span>
          </div>
          <div className="centerMain">
            <div>
              <h2>Orientador: </h2>
              <span>Ana Paula Scabello Mello</span>
            </div>
            <div className="supervisor">
              <h2>Coorientador: </h2>
              <input type="text" />
              <button>Salvar</button>
            </div>
          </div>
          <div className="rightMain">
            <h2>Alunos: </h2>
            <div className="studentsNames">
              {students.map((nome, index) => (
                <span key={index}>{nome}</span>
              ))}
            </div>
          </div>
        </div>
        <footer>
          <div className="code">
            <h2>Código: </h2>
            <span>DSG</span>
          </div>
          <div className="period">
            <h2>Período: </h2>
            <span>D</span>
          </div>
          <div className="period">
            <h2>Número: </h2>
            <span>01</span>
          </div>
          <div className="potencial">
            <h2>O trabalho tem potencial para empreendimento: </h2>
            <div>
              <div className="yes">
                <p>Sim</p>
                <div
                  className="checkbox"
                  onClick={() => {
                    setisWorkPotencialYesSelected(!isWorkPotencialYesSelected);
                    setisWorkPotencialNoSelected(false);
                  }}
                  onMouseEnter={() => {
                      setisWorkPotencialYesHovered(true);
                      console.log("TESTE");
                  }}
                  onMouseLeave={() => {
                      setisWorkPotencialYesHovered(false);
                  }}
                >
                  {isWorkPotencialYesSelected || isWorkPotencialYesHovered ? (
                    <img src={checkIcon} alt="Ícone de check" />
                  ) : null}
                </div>
              </div>
              <div className="no">
                <p>Não</p>
                <div
                  className="checkbox"
                  onClick={() => {
                    setisWorkPotencialNoSelected(!isWorkPotencialNoSelected);
                    setisWorkPotencialYesSelected(false);
                  }}
                >
                  {isWorkPotencialNoSelected ? (
                    <img src={checkIcon} alt="Ícone de check" />
                  ) : null}
                </div>
              </div>
              <button>Atualizar potencial do trabalho</button>
            </div>
          </div>
        </footer>
      </section>
      <article>
        <section></section>
        <aside>
          <section className="card"></section>
          <section className="card"></section>
        </aside>
      </article>
    </main>
  );
}
