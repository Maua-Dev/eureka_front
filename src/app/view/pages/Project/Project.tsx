import "./Project.css";
import checkIcon from "../../../assets/icons/check-icon.svg";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../../context/project-context";
import { shiftToAcronym } from "../../../../@clean/shared/domain/enums/shift-enum";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import { ProjectModel } from "../../../models/project-model";
import ProjectSkeleton from "./ProjectSkeleton";
import CircularLoading from "../../components/CircularLoading/CircularLoading";
import { TaskModel } from "../../../models/task-model";
import { TaskContext } from "../../../context/task-context";
import { DeliveryContext } from "../../../context/delivery-context";
import { DeliveryModel } from "../../../models/delivery-model";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { taskTitles } from "../../../utils/task-titles";
import Card from "../../components/Card/Card";
import { handleFetch } from "../../../utils/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";

export default function Project() {
  const [project, setProject] = useState(ProjectModel.empty());
  const [tasksList, setTasksList] = useState<TaskModel[]>([]);
  const [deliveriesList, setDeliveriesList] = useState<DeliveryModel[]>([]);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWorkPotencialYesHovered, setisWorkPotencialYesHovered] =
    useState(false);
  const [isWorkPotencialNoHovered, setisWorkPotencialNoHovered] =
    useState(false);
  const [isEntrepreneurship, setIsEntrepreneurship] = useState(false);

  const { id } = useParams();
  const projectId = parseInt(id!);

  const { getProject, updateProject } = useContext(ProjectContext);
  const { getAllTasks } = useContext(TaskContext);
  const { getDeliveries } = useContext(DeliveryContext);

  async function fetchGetProject() {
    const projectCaught = await getProject(projectId);
    if (projectCaught) {
      setProject(projectCaught);
      setIsEntrepreneurship(projectCaught.isEntrepreneurship);
    }
  }

  async function fetchGetAllTasks() {
    const tasksCaught = await getAllTasks();
    if (tasksCaught) {
      setTasksList(tasksCaught);
    }
  }

  async function fetchGetDeliveries() {
    const deliveriesCaught = await getDeliveries(projectId);
    if (deliveriesCaught) {
      setDeliveriesList(deliveriesCaught);
    }
  }

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    handleFetch(setIsSkeletonLoading, showBoundary, fetchGetProject, fetchGetAllTasks, fetchGetDeliveries);
  }, []);

  return (
    <main className="project">
      <ReturnButton />
      {isLoading && <CircularLoading />}
      {isSkeletonLoading ? <ProjectSkeleton /> :
        <><Card cardClassName="card--margin" headerTitleClassName="header__title--upper" headerTitle={`${project.code}${shiftToAcronym(project.shift)}${project.standNumber} - ${project.title}`}>
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
              <button className="main__btn main__btn--margin main__btn--smaller"><p className="btn__text">Salvar</p></button>
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
                <button onClick={() => {
                  setIsLoading(true);
                  updateProject(projectId, undefined, undefined, undefined, undefined, undefined, isEntrepreneurship);
                  setIsLoading(false);
                }} className="main__btn">
                  <p className="btn__text">Atualizar potencial do trabalho</p>
                </button>
              </div>
            </div>
          </footer>
        </Card>
          <article className="deliveries">
            <Card headerTitle="Informações do trabalho" cardClassName="card--width">
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
                {taskTitles.map((title, index) => {
                  // mount the tasks list grid
                  const tasks = tasksList.filter((task) => task.title === title);
                  const deliveries = deliveriesList.filter((delivery) => delivery.task.title === title);
                  const studentDelivery = deliveries.filter((delivery) => delivery.user.role === ROLE.STUDENT)[0];
                  const advisorDelivery = deliveries.filter((delivery) => delivery.user.role === ROLE.ADVISOR)[0];
                  const responsibleDelivery = deliveries.filter((delivery) => delivery.user.role === ROLE.RESPONSIBLE)[0];

                  const getContentColor = (content: string) => {
                    switch (content?.toLowerCase()) {
                      case "aprovado":
                        return "var(--green)";
                      case "reprovado":
                        return "var(--red)";
                      default:
                        return "var(--dark-blue)";
                    }
                  };

                  return (
                    <React.Fragment key={index}>
                      <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: `${index + 2} / ${index + 3}` }}>
                        <Link to={`${window.location.pathname}/data`} className="grid__title grid__title--link">{title}</Link>
                      </div>
                      {
                        tasks.length == 1 ?
                          <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: `${index + 2} / ${index + 3}` }}>
                            <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                            <p className="grid__text" style={{ color: getContentColor(studentDelivery?.content["content"] as string) }}>{studentDelivery?.content["content"] != undefined ? `${studentDelivery?.content["content"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}` : "Não enviado"}</p>
                          </div>
                          :
                          tasks.length == 2 ?
                            <>
                              <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: `${index + 2} / ${index + 3}` }}>
                                <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                                <p className="grid__text" style={{ color: getContentColor(studentDelivery?.content["content"] as string) }}>{studentDelivery?.content["content"] != undefined ? `${studentDelivery?.content["content"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}` : "Não enviado"}</p>
                              </div>
                              <div className="grid__element" style={{ gridColumn: "3 / 5", gridRow: `${index + 2} / ${index + 3}` }}>
                                <p className="grid__text">Até {tasks[1].deliveryDate}</p>
                                <p className="grid__text" style={{ color: getContentColor(advisorDelivery?.content["content"] as string) }}>{advisorDelivery?.content["content"] != undefined ? `${advisorDelivery?.content["content"]} por ${advisorDelivery?.user.name} em ${advisorDelivery?.task.deliveryDate}` : "Não enviado"}</p>
                              </div>
                            </>
                            :
                            tasks.length == 3 ?
                              <>
                                <div className="grid__element" style={{ gridColumn: "2 / 3", gridRow: `${index + 2} / ${index + 3}` }}>
                                  <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                                  <p className="grid__text" style={{ color: getContentColor(studentDelivery?.content["content"] as string) }}>{studentDelivery?.content["content"] != undefined ? `${studentDelivery?.content["content"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}` : "Não enviado"}</p>
                                </div>
                                <div className="grid__element" style={{ gridColumn: "3 / 4", gridRow: `${index + 2} / ${index + 3}` }}>
                                  <p className="grid__text">Até {tasks[1].deliveryDate}</p>
                                  <p className="grid__text" style={{ color: getContentColor(advisorDelivery?.content["content"] as string) }}>{advisorDelivery?.content["content"] != undefined ? `${advisorDelivery?.content["content"]} por ${advisorDelivery?.user.name} em ${advisorDelivery?.task.deliveryDate}` : "Não enviado"}</p>
                                </div>
                                <div className="grid__element" style={{ gridColumn: "4 / 5", gridRow: `${index + 2} / ${index + 3}` }}>
                                  <p className="grid__text">Até {tasks[2].deliveryDate}</p>
                                  <p className="grid__text" style={{ color: getContentColor(responsibleDelivery?.content["content"] as string) }}>{responsibleDelivery?.content["content"] != undefined ? `${responsibleDelivery?.content["content"]} por ${responsibleDelivery?.user.name} em ${responsibleDelivery?.task.deliveryDate}` : "Não enviado"} </p>
                                </div>
                              </>
                              : null
                      }
                    </React.Fragment>
                  );
                })}
              </div >
            </Card>
            <aside className="deliveries--right">
              <Card headerTitle="Montagem do evento">
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
              </Card>
              <Card cardClassName="card--grow" headerTitle="Próximas entregas">
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
              </Card>
            </aside>
          </article> </>}
    </main >
  );
}
