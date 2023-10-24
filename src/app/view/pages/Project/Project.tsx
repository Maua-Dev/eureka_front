import "./Project.css";
import arrowBackIcon from "../../../assets/arrow_back_icon.svg";
import checkIcon from "../../../assets/check_icon.svg";
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
      <Link to={"/"}>
        <img className="icon" src={arrowBackIcon} alt="Ícone de flecha" />
      </Link>
      <section className="card">
        <header>
          DDSGD01 - DESIGN UNIVERSAL APLICADO EM EMBALAGEM DE PROTETOR SOLAR -
          TESTE
        </header>
        <div className="mainHeaderCard">
          <div className="subject">
            <h2>Habilitação: </h2>
            <span>Design</span>
          </div>
          <div className="supervisor">
            <h2>Orientador: </h2>
            <span>Ana Paula Scabello Mello</span>
          </div>
          <div className="cosupervisor">
            <h2>Coorientador: </h2>
            <input type="text" />
            <button>Salvar</button>
          </div>
          <div className="students">
            <h2>Alunos: </h2>
            <div className="studentsNames">
              {students.map((name, index) => (
                <span key={index}>{name}</span>
              ))}
            </div>
          </div>
        </div>
        <footer>
          <div className="code">
            <h2>Código: </h2>
            <span>DSG</span>
          </div>
          <div className="infos">
            <div className="period">
              <h2>Período: </h2>
              <span>D</span>
            </div>
            <div className="number">
              <h2>Número: </h2>
              <span>01</span>
            </div>
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
                  {isWorkPotencialNoSelected || isWorkPotencialNoHovered ? (
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
        <section className="card">
          <header>Informações do trabalho</header>
          <div className="grid">
            <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
              <h3> Alunos</h3>
            </div>
            <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
              <h3>Orientador</h3>
            </div>
            <div style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
              <h3>Responsável</h3>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
              <h3>Dados do trabalho</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
              <p>Até 15/05/2023</p>
              <p>Enviado por Isabella Augusta Rodrigues em 20/06/2023</p>
            </div>
            <div style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
              <p>Até 22/05/2023</p>
              <p style={{ color: "var(--green)" }}>
                Aprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
              <p>Até 08/06/2023</p>
              <p style={{ color: "var(--green)" }}>
                Aprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>
              <h3>Pôster Imagem</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>
              <p>Até 17/09/2023</p>
              <p>Reenviado por Isabella Augusta Rodrigues em 20/06/2023</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "3 / 4" }}>
              <p>Até 20/08/2023</p>
              <p style={{ color: "var(--red)" }}>
                Reprovado por Ana Paula Scabello Mello em 19/05/2023
              </p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>
              <h3>Mini Capa</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>
              <p>Até 17/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "4 / 5" }}>
              <p>Até 20/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}>
              <h3>Vídeo-teaser</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}>
              <p>Até 17/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "5 / 6" }}>
              <p>Até 20/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}>
              <h3>Fotos do Trabalho</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "6 / 7" }}>
              <p>Até 17/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "6 / 7" }}>
              <p>Até 20/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}>
              <h3>Pôster Técnico (PDF)</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "7 / 8" }}>
              <p>Até 27/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "7 / 8" }}>
              <p>Até 20/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "8 / 9" }}>
              <h3>Modelo de Negócios</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "8 / 9" }}>
              <p>Até 27/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "8 / 9" }}>
              <p>Até 01/10/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "9 / 10" }}>
              <h3>Resumo / Abstcract</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "9 / 10" }}>
              <p>Até 27/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "9 / 10" }}>
              <p>Até 20/09/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "10 / 11" }}>
              <h3>Vídeo do trabalho (30min)</h3>
            </div>
            <div style={{ gridColumn: "2 / 5", gridRow: "10 / 11" }}>
              <p>Até 28/12/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "11 / 12" }}>
              <h3>Trabalho de conclusão do curso (TCC)</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "11 / 12" }}>
              <p>Até 28/12/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "11 / 12" }}>
              <p>Até 30/12/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "12 / 13" }}>
              <h3>Autorização de divulgação do TCC</h3>
            </div>
            <div style={{ gridColumn: "2 / 3", gridRow: "12 / 13" }}>
              <p>Até 28/12/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "3 / 5", gridRow: "12 / 13" }}>
              <p>Até 30/12/2023</p>
              <p>Não enviado</p>
            </div>
            <div style={{ gridColumn: "1 / 2", gridRow: "13 / 14" }}>
              <h3>Banca de Avaliação</h3>
            </div>
            <div style={{ gridColumn: "2 / 5", gridRow: "13 / 14" }}>
              <p>Até 28/12/2023</p>
              <p>Não enviado</p>
            </div>
          </div>
        </section>
        <aside>
          <section className="card">
            <header>Montagem do evento</header>
            <div className="grid">
              <div style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
                <h3>Alunos</h3>
              </div>
              <div style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
                <h3>Orientador</h3>
              </div>
              <div style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
                <h3>Responsável</h3>
              </div>
              <div style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>
                <h3>Recursos de estande</h3>
              </div>
              <div style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>
                <p>Até 26/08/2023</p>
                <p>Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
                <p>Até 31/08/2023</p>
                <p style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
                <p>Até 06/09/2023</p>
                <p style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>
                <h3>Questionário</h3>
              </div>
              <div style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>
                <p>Até 26/08/2023</p>
                <p>Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>
                <p>Até 31/08/2023</p>
                <p style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div style={{ gridColumn: "4 / 5", gridRow: "3 / 4" }}>
                <p>Até 06/09/2023</p>
                <p style={{ color: "var(--green)" }}>
                  Aprovado por Ana Paula Scabello Mello em 19/05/2023
                </p>
              </div>
              <div style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>
                <h3>Layout do estande</h3>
              </div>
              <div style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>
                <p>Até 26/08/2023</p>
                <p>Enviado por Isabella Augusta Rodrigues em 19/06/2023</p>
              </div>
              <div style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>
                <p>Até 31/08/2023</p>
                <p>Não enviado</p>
              </div>
              <div style={{ gridColumn: "4 / 5", gridRow: "4 / 5" }}>
                <p>Até 06/09/2023</p>
                <p>Não enviado</p>
              </div>
              <div style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}>
                <h3>Testeira</h3>
              </div>
              <div style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}>
                <p>Até 17/09/2023</p>
                <p>Não enviado</p>
              </div>
              <div style={{ gridColumn: "3 / 4", gridRow: "5 / 6" }}></div>
              <div style={{ gridColumn: "4 / 5", gridRow: "5 / 6" }}></div>
              <div style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}>
                <h3>Autorização de entrada</h3>
              </div>
              <div style={{ gridColumn: "2 / 5", gridRow: "6 / 7" }}>
                <p>Até 24/10/2023</p>
                <p>Opcional</p>
                <Link to={""} onClick={(event) => event.preventDefault()}>
                  Consultar solicitações
                </Link>
              </div>
              <div style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}>
                <h3>Certificado</h3>
              </div>
              <div style={{ gridColumn: "2 / 5", gridRow: "7 / 8" }}>
                <p>Nenhum certificado disponível</p>
              </div>
            </div>
          </section>
          <section className="card">
            <header>Próximas entregas</header>
            <div className="column">
              <div>
                <h1>17/09/2023 - entrega Mini-Imagem</h1>
              </div>
              <div>
                <h1>17/09/2023 - entrega Vídeo Teaser</h1>
              </div>
              <div>
                <h1>17/09/2023 - entrega Fotos do Trabalho</h1>
              </div>
            </div>
          </section>
        </aside>
      </article>
    </main>
  );
}
