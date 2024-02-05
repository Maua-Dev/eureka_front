import "./Project.css";
import arrowBackIcon from "../../../assets/arrow-back-icon.svg";
import checkIcon from "../../../assets/check-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Project() {
  const students = [
    "João José Augusto",
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
  const [isWorkPotencialNoHovered, setisWorkPotencialNoHovered] =
    useState(false);

  return (
    <main id="project">
      <Link className="return" to={"/"}>
        <img className="return__icon" src={arrowBackIcon} alt="Ícone de flecha" />
      </Link>
      <section className="card card--margin">
        <header className="card__header">
          DDSGD01 - DESIGN UNIVERSAL APLICADO EM EMBALAGEM DE PROTETOR SOLAR -
          TESTE
        </header>
        <div className="card__main">
          <div className="subject">
            <h2 className="main__title">Habilitação: </h2>
            <span className="main__text">Design</span>
          </div>
          <div className="supervisor">
            <h2 className="main__title">Orientador: </h2>
            <span className="main__text">Ana Paula Scabello Mello</span>
          </div>
          <div className="cosupervisor">
            <h2 className="main__title main__title--cosupervisor">Coorientador: </h2>
            <input type="text" className="main__input" />
            <button className="main__btn main__btn--margin">Salvar</button>
          </div>
          <div className="students">
            <h2 className="main__title main__title--students">Alunos: </h2>
            <div className="students__name">
              {students.map((name, index) => (
                <span className="main__text main__text--students" key={index}>{name}</span>
              ))}
            </div>
          </div>
        </div>
        <footer className="card__footer">
          <div className="code">
            <h2 className="main__title">Código: </h2>
            <span className="main__text">DSG</span>
          </div>
          <div className="infos">
            <div className="infos__period">
              <h2 className="main__title">Período: </h2>
              <span className="main__text">D</span>
            </div>
            <div className="infos__number">
              <h2 className="main__title">Número: </h2>
              <span className="main__text">01</span>
            </div>
          </div>
          <div className="potencial">
            <h2 className="main__title">O trabalho tem potencial para empreendimento: </h2>
            <div className="options">
              <div className="option">
                <p className="option__title">Sim</p>
                <div
                  className="option__checkbox"
                  onClick={() => {
                    setisWorkPotencialYesSelected(!isWorkPotencialYesSelected);
                    setisWorkPotencialNoSelected(false);
                    setisWorkPotencialYesHovered(false);
                  }}
                  onMouseEnter={() => setisWorkPotencialYesHovered(true)}
                  onMouseLeave={() => setisWorkPotencialYesHovered(false)}
                  style={{
                    backgroundColor: isWorkPotencialYesSelected
                      ? "var(--dark-mustard)"
                      : "var(--extra-light-blue)",
                  }}
                >
                  {(isWorkPotencialYesSelected || isWorkPotencialYesHovered) && (
                    <img className="option__icon" src={checkIcon} alt="Ícone de check" />
                  )}
                </div>
              </div>
              <div className="option">
                <p className="option__title">Não</p>
                <div
                  className="option__checkbox"
                  onClick={() => {
                    setisWorkPotencialNoSelected(!isWorkPotencialNoSelected);
                    setisWorkPotencialYesSelected(false);
                    setisWorkPotencialNoHovered(false);
                  }}
                  onMouseEnter={() => setisWorkPotencialNoHovered(true)}
                  onMouseLeave={() => setisWorkPotencialNoHovered(false)}
                  style={{
                    backgroundColor: isWorkPotencialNoSelected
                      ? "var(--dark-mustard)"
                      : "var(--extra-light-blue)",
                  }}
                >
                  {(isWorkPotencialNoSelected || isWorkPotencialNoHovered) && (
                    <img className="option__icon" src={checkIcon} alt="Ícone de check" />
                  )}
                </div>
              </div>
              <button className="main__btn">Atualizar potencial do trabalho</button>
            </div>
          </div>
        </footer>
      </section>
      <article className="deliveries">
        <section className="card card--width">
          <header className="card__header">Informações do trabalho</header>
          <div className="grid">
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
              <h3 className="grid__title">Alunos</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
              <h3 className="grid__title">Orientador</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
              <h3 className="grid__title">Responsável</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
              <h3 className="grid__title">Dados do trabalho</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
              <p className="grid__text">Até 15/05/2023</p>
              <p className="grid__text">Enviado por Isabella Augusta Rodrigues em 20/06/2023</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
              <p className="grid__text">Até 22/05/2023</p>
              <p className="grid__text" style={{ color: "var(--green)" }}>
                Aprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
              <p className="grid__text">Até 08/06/2023</p>
              <p className="grid__text" style={{ color: "var(--green)" }}>
                Aprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>
              <h3 className="grid__title">Pôster Imagem</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>
              <p className="grid__text">Até 17/09/2023</p>
              <p className="grid__text">Reenviado por Isabella Augusta Rodrigues em 20/06/2023</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "3 / 4" }}>
              <p className="grid__text">Até 20/08/2023</p>
              <p className="grid__text" style={{ color: "var(--red)" }}>
                Reprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>
              <h3 className="grid__title">Mini Capa</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>
              <p className="grid__text">Até 17/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "4 / 5" }}>
              <p className="grid__text">Até 20/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}>
              <h3 className="grid__title">Vídeo-teaser</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}>
              <p className="grid__text">Até 17/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "5 / 6" }}>
              <p className="grid__text">Até 20/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}>
              <h3 className="grid__title">Fotos do Trabalho</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "6 / 7" }}>
              <p className="grid__text">Até 17/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "6 / 7" }}>
              <p className="grid__text">Até 20/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}>
              <h3 className="grid__title">Pôster Técnico (PDF)</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "7 / 8" }}>
              <p className="grid__text">Até 27/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "7 / 8" }}>
              <p className="grid__text">Até 20/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "8 / 9" }}>
              <h3 className="grid__title">Modelo de Negócios</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "8 / 9" }}>
              <p className="grid__text">Até 27/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "8 / 9" }}>
              <p className="grid__text">Até 01/10/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "9 / 10" }}>
              <h3 className="grid__title">Resumo / Abstcract</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "9 / 10" }}>
              <p className="grid__text">Até 27/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "9 / 10" }}>
              <p className="grid__text">Até 20/09/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "10 / 11" }}>
              <h3 className="grid__title">Vídeo do trabalho (30min)</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: "10 / 11" }}>
              <p className="grid__text">Até 28/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "11 / 12" }}>
              <h3 className="grid__title">Trabalho de conclusão do curso (TCC)</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "11 / 12" }}>
              <p className="grid__text">Até 28/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "11 / 12" }}>
              <p className="grid__text">Até 30/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "12 / 13" }}>
              <h3 className="grid__title">Autorização de divulgação do TCC</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "12 / 13" }}>
              <p className="grid__text">Até 28/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: "12 / 13" }}>
              <p className="grid__text">Até 30/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
            <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "13 / 14" }}>
              <h3 className="grid__title">Banca de Avaliação</h3>
            </div>
            <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: "13 / 14" }}>
              <p className="grid__text">Até 28/12/2023</p>
              <p className="grid__text">Não enviado</p>
            </div>
          </div>
        </section>
        <aside className="deliveries--right">
          <section className="card">
            <header className="card__header">Montagem do evento</header>
            <div className="grid">
              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
                <h3 className="grid__title">Alunos</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
                <h3 className="grid__title">Orientador</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
                <h3 className="grid__title">Responsável</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
                <h3 className="grid__title">Recursos de estande</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
                <p className="grid__text">Até 26/08/2023</p>
                <p className="grid__text">Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
                <p className="grid__text">Até 31/08/2023</p>
                <p className="grid__text" style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
                <p className="grid__text">Até 06/09/2023</p>
                <p className="grid__text" style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>
                <h3 className="grid__title">Questionário</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>
                <p className="grid__text">Até 26/08/2023</p>
                <p className="grid__text">Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>
                <p className="grid__text">Até 31/08/2023</p>
                <p className="grid__text" style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "3 / 4" }}>
                <p className="grid__text">Até 06/09/2023</p>
                <p className="grid__text" style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>
                <h3 className="grid__title">Layout do estande</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>
                <p className="grid__text">Até 26/08/2023</p>
                <p className="grid__text">Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>
                <p className="grid__text">Até 31/08/2023</p>
                <p className="grid__text">Não enviado</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "4 / 5" }}>
                <p className="grid__text">Até 06/09/2023</p>
                <p className="grid__text">Não enviado</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}>
                <h3 className="grid__title">Testeira</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}>
                <p className="grid__text">Até 17/09/2023</p>
                <p className="grid__text">Não enviado</p>
              </div>
              <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: "5 / 6" }}></div>
              <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: "5 / 6" }}></div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}>
                <h3 className="grid__title">Autorização de entrada</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: "6 / 7" }}>
                <p className="grid__text">Até 24/10/2023</p>
                <p className="grid__text">Opcional</p>
                <Link className="grid__link" to={""} onClick={(event) => event.preventDefault()}>
                  Consultar solicitações
                </Link>
              </div>
              <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}>
                <h3 className="grid__title">Certificado</h3>
              </div>
              <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: "7 / 8" }}>
                <p className="grid__text">Nenhum certificado disponível</p>
              </div>
            </div>
          </section>
          <section className="card card--grow">
            <header className="card__header">Próximas entregas</header>
            <div className="card__column">
              <div className="column__element">
                <h1 className="column__title">17/09/2023 - entrega Mini-Imagem</h1>
              </div>
              <div className="column__element">
                <h1 className="column__title">17/09/2023 - entrega Vídeo Teaser</h1>
              </div>
              <div className="column__element">
                <h1 className="column__title">17/09/2023 - entrega Fotos do Trabalho</h1>
              </div>
            </div>
          </section>
        </aside>
      </article>
    </main >
  );
}
