import "./Project.css";
import arrowBackIcon from "../../../assets/icons/arrow-back-icon.svg";
import checkIcon from "../../../assets/icons/check-icon.svg";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../../context/project-context";
import { shiftToAcronym } from "../../../../@clean/shared/domain/enums/shift-enum";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import { ProjectModel } from "../../../models/project-model";
import ProjectSkeleton from "./ProjectSkeleton";

export default function Project() {
  const [isWorkPotencialYesHovered, setisWorkPotencialYesHovered] =
    useState(false);
  const [isWorkPotencialNoHovered, setisWorkPotencialNoHovered] =
    useState(false);
  const [isEntrepreneurship, setIsEntrepreneurship] = useState(false);
  const [project, setProject] = useState(ProjectModel.empty());

  const { id } = useParams();
  const projectId = parseInt(id!);
  const { getProject, updateProject } = useContext(ProjectContext);

  useEffect(() => {
    async function fetch() {
      const projectCaught = await getProject(projectId);
      if (projectCaught) {
        setProject(projectCaught);
        setIsEntrepreneurship(projectCaught.isEntrepreneurship);
      }
    }

    fetch();
  }, []);

  return (
    <main className="project">
      <Link className="return" to={"/"}>
        <img className="return__icon" src={arrowBackIcon} alt="Ícone de flecha" />
      </Link>
      <section className="card card--margin">
        <header className="card__header">
          <h1 className="header__title header__title--upper">
            {`${project.code}${shiftToAcronym(project.shift)}${project.standNumber} - ${project.title}`}
          </h1>
        </header>
        <div className="card__main">
          <div className="subject">
            <h2 className="main__title">Habilitação: </h2>
            <span className="main__text">{project.qualification}</span>
          </div>
          <div className="supervisor">
            <h2 className="main__title">Orientador: </h2>
            <span className="main__text">{project.professors.find((professor) => professor.role === ROLE.ADVISOR)?.name}</span>
          </div>
          <div className="cosupervisor">
            <h2 className="main__title main__title--cosupervisor">Coorientador: </h2>
            <input type="text" className="main__input" />
            <button className="main__btn main__btn--margin">Salvar</button>
          </div>
          <div className="students">
            <h2 className="main__title main__title--students">Alunos: </h2>
            <div className="students__name">
              {project?.students.map((user, index) => (
                <span className="main__text main__text--students" key={index}>{user.name}</span>
              ))}
            </div>
          </div>
        </div>
        <footer className="card__footer">
          <div className="code">
            <h2 className="main__title">Código: </h2>
            <span className="main__text">{project.code}</span>
          </div>
          <div className="infos">
            <div className="infos__period">
              <h2 className="main__title">Período: </h2>
              <span className="main__text">{shiftToAcronym(project.shift)}</span>
            </div>
            <div className="infos__number">
              <h2 className="main__title">Número: </h2>
              <span className="main__text">{project.standNumber}</span>
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
                    setisWorkPotencialYesHovered(false);
                    setIsEntrepreneurship(true);
                  }}
                  onMouseEnter={() => setisWorkPotencialYesHovered(true)}
                  onMouseLeave={() => setisWorkPotencialYesHovered(false)}
                  style={{
                    backgroundColor: isEntrepreneurship
                      ? "var(--dark-mustard)"
                      : "var(--extra-light-blue)",
                  }}
                >
                  {(isEntrepreneurship || isWorkPotencialYesHovered) && (
                    <img className="option__icon" src={checkIcon} alt="Ícone de check" />
                  )}
                </div>
              </div>
              <div className="option">
                <p className="option__title">Não</p>
                <div
                  className="option__checkbox"
                  onClick={() => {
                    setisWorkPotencialNoHovered(false);
                    setIsEntrepreneurship(false);
                  }}
                  onMouseEnter={() => setisWorkPotencialNoHovered(true)}
                  onMouseLeave={() => setisWorkPotencialNoHovered(false)}
                  style={{
                    backgroundColor: !isEntrepreneurship
                      ? "var(--dark-mustard)"
                      : "var(--extra-light-blue)",
                  }}
                >
                  {(!isEntrepreneurship || isWorkPotencialNoHovered) && (
                    <img className="option__icon" src={checkIcon} alt="Ícone de check" />
                  )}
                </div>
              </div>
              <button onClick={() => updateProject(projectId, undefined, undefined, undefined, undefined, undefined, isEntrepreneurship)} className="main__btn">Atualizar potencial do trabalho</button>
            </div>
          </div>
        </footer>
      </section>
      <article className="deliveries">
        <section className="card card--width">
          <header className="card__header"><h1 className="header__title">Informações do trabalho</h1></header>
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
            <header className="card__header"><h1 className="header__title">Montagem do evento</h1></header>
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
            <header className="card__header"><h1 className="header__title">Próximas entregas</h1></header>
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
      <ProjectSkeleton />

    </main >
  );
}
