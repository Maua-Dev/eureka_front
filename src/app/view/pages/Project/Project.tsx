import "./Project.css";
import checkIcon from "../../../assets/icons/check-icon.svg";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../../context/project-context";
import { shiftToAcronym } from "../../../../@clean/shared/domain/enums/shift-enum";
import { ROLE } from "../../../../@clean/shared/domain/enums/role-enum";
import ProjectSkeleton from "./ProjectSkeleton";
import CircularLoading from "../../components/CircularLoading/CircularLoading";
import { TaskContext } from "../../../context/task-context";
import { DeliveryContext } from "../../../context/delivery-context";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { taskTitles } from "../../../utils/task-titles";
import Card from "../../components/Card/Card";
import { handleFetch } from "../../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import BasicButton from "../../components/BasicButton/BasicButton";
import { UserJson } from "../../../../@clean/shared/infra/jsons/user-json";
import { NoItemsFoundError } from "../../../../@clean/shared/domain/helpers/errors/domain-errors";
import { toast } from "react-toastify";
import { stringCapitalize } from "../../../utils/functions/string-formatter";

export default function Project() {
  // get the project id from the url to fetch the project data
  const { idProject } = useParams();
  const projectId = parseInt(idProject!);

  const { project, getProject, updateProject } = useContext(ProjectContext);
  const { tasksList, getAllTasks } = useContext(TaskContext);
  const { deliveriesList, getDeliveries } = useContext(DeliveryContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  // state to control the primary loading of the page
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);
  // state to control general loading actions
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [isEntrepreneurship, setIsEntrepreneurship] = useState<boolean>(project.isEntrepreneurship);
  const [coosupervisorName, setCoosupervisorName] = useState<string>(project.professors[2]?.name);

  // function to control the selection of the entrepreneurship option
  const handleOptionClick = (optionValue: string) => {
    setHoveredOption(optionValue);
    setIsEntrepreneurship(optionValue === "yes");
  };

  // function to control the hover of the entrepreneurship option
  const handleOptionMouseEnter = (optionValue: string) => {
    setHoveredOption(optionValue);
  };

  // function to control the leave of the entrepreneurship option
  const handleOptionMouseLeave = () => {
    setHoveredOption(null);
  };

  // function to get the color of the task status based in the content
  const handleGetContentColor = (content: string) => {
    switch (content?.toLowerCase()) {
      case "aprovado":
        return "var(--green)";
      case "reprovado":
        return "var(--red)";
      default:
        return "var(--dark-blue)";
    }
  };

  useEffect(() => {
    handleFetch(
      setIsSkeletonLoading,
      showBoundary,
      getProject(projectId),
      getAllTasks(),
      getDeliveries(projectId)
    );
  }, []);

  useEffect(() => {
    setIsEntrepreneurship(project.isEntrepreneurship);
  }, [project.isEntrepreneurship]);

  return (
    <main className="project">
      <ReturnButton />
      {isLoading && <CircularLoading />}
      {isSkeletonLoading ? (
        <ProjectSkeleton />
      ) : (
        <>
          <Card
            cardClassName="card--margin"
            headerTitleClassName="header__title--upper"
            headerTitle={`${project.code}${shiftToAcronym(project.shift)}${project.standNumber} - ${project.title}`}
          >
            <div className="card__main">
              <div className="subject">
                <h2 className="main__title">Habilitação: </h2>
                <span className="main__text">{project.qualification}</span>
              </div>
              <div className="supervisor">
                <h2 className="main__title">Orientador: </h2>
                <span className="main__text">
                  {project.professors.find((professor) => professor.role === ROLE.ADVISOR)?.name}
                </span>
              </div>
              <div className="cosupervisor">
                <h2 className="main__title main__title--cosupervisor">Coorientador: </h2>
                <input
                  type="text"
                  className="main__input"
                  value={coosupervisorName || ""}
                  onChange={(event) => setCoosupervisorName(event.currentTarget.value)}
                />
                <BasicButton
                  title="Salvar"
                  buttonClassName="main__btn--margin"
                  onClick={() => {
                    const professor = UserJson.userJson.find(
                      (user) => user.name.toLowerCase() === coosupervisorName.toLowerCase()
                    );
                    if (professor === undefined) {
                      toast.error(new NoItemsFoundError("name: " + coosupervisorName).message);
                    } else {
                      const professorId = [professor!.user_id];
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        updateProject(
                          projectId,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          professorId
                        )
                      );
                      setCoosupervisorName(stringCapitalize(professor!.name));
                    }
                  }}
                ></BasicButton>
              </div>
              <div className="students">
                <h2 className="main__title main__title--students">Alunos: </h2>
                <div className="students__name">
                  {project?.students.map((user, index) => (
                    <span className="main__text main__text--students" key={index}>
                      {user.name}
                    </span>
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
                  {["yes", "no"].map((optionValue) => (
                    <div className="option" key={optionValue}>
                      <p className="option__title">{optionValue === "yes" ? "Sim" : "Não"}</p>
                      <div
                        className="option__checkbox"
                        onClick={() => handleOptionClick(optionValue)}
                        onMouseEnter={() => handleOptionMouseEnter(optionValue)}
                        onMouseLeave={handleOptionMouseLeave}
                        style={{
                          backgroundColor:
                            hoveredOption === optionValue
                              ? "var(--extra-light-blue)"
                              : isEntrepreneurship === (optionValue === "yes")
                                ? "var(--dark-mustard)"
                                : "",
                        }}
                      >
                        {(hoveredOption === optionValue ||
                          isEntrepreneurship === (optionValue === "yes")) && (
                          <img className="option__icon" src={checkIcon} alt="Ícone de check" />
                        )}
                      </div>
                    </div>
                  ))}
                  <BasicButton
                    title="Atualizar potencial do trabalho"
                    onClick={() => {
                      setIsLoading(true);
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        updateProject(
                          projectId,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          isEntrepreneurship
                        )
                      );
                      setIsLoading(false);
                    }}
                    buttonClassName="main__btn--width"
                  ></BasicButton>
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
                  const deliveries = deliveriesList.filter(
                    (delivery) => delivery.task.title === title
                  );
                  const studentDelivery = deliveries.filter(
                    (delivery) => delivery.user.role === ROLE.STUDENT
                  )[0];
                  const advisorDelivery = deliveries.filter(
                    (delivery) => delivery.user.role === ROLE.ADVISOR
                  )[0];
                  const responsibleDelivery = deliveries.filter(
                    (delivery) => delivery.user.role === ROLE.RESPONSIBLE
                  )[0];

                  return (
                    <React.Fragment key={index}>
                      <div
                        className="grid__element"
                        style={{
                          gridColumn: "1 / 2",
                          gridRow: `${index + 2} / ${index + 3}`,
                        }}
                      >
                        <Link
                          to={`${window.location.pathname}/data/${tasks[0]?.taskId}`}
                          className="grid__title grid__title--link"
                        >
                          {title}
                        </Link>
                      </div>
                      {tasks.length == 1 ? (
                        <div
                          className="grid__element"
                          style={{
                            gridColumn: "2 / 5",
                            gridRow: `${index + 2} / ${index + 3}`,
                          }}
                        >
                          <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                          <p
                            className="grid__text"
                            style={{
                              color: handleGetContentColor(
                                studentDelivery?.content["status"] as string
                              ),
                            }}
                          >
                            {studentDelivery?.content["status"] != undefined
                              ? `${studentDelivery?.content["status"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}`
                              : "Não enviado"}
                          </p>
                        </div>
                      ) : tasks.length == 2 ? (
                        <>
                          <div
                            className="grid__element"
                            style={{
                              gridColumn: "2 / 3",
                              gridRow: `${index + 2} / ${index + 3}`,
                            }}
                          >
                            <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                            <p
                              className="grid__text"
                              style={{
                                color: handleGetContentColor(
                                  studentDelivery?.content["status"] as string
                                ),
                              }}
                            >
                              {studentDelivery?.content["status"] != undefined
                                ? `${studentDelivery?.content["status"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}`
                                : "Não enviado"}
                            </p>
                          </div>
                          <div
                            className="grid__element"
                            style={{
                              gridColumn: "3 / 5",
                              gridRow: `${index + 2} / ${index + 3}`,
                            }}
                          >
                            <p className="grid__text">Até {tasks[1].deliveryDate}</p>
                            <p
                              className="grid__text"
                              style={{
                                color: handleGetContentColor(
                                  advisorDelivery?.content["status"] as string
                                ),
                              }}
                            >
                              {advisorDelivery?.content["status"] != undefined
                                ? `${advisorDelivery?.content["status"]} por ${advisorDelivery?.user.name} em ${advisorDelivery?.task.deliveryDate}`
                                : "Não enviado"}
                            </p>
                          </div>
                        </>
                      ) : tasks.length == 3 ? (
                        <>
                          <div
                            className="grid__element"
                            style={{
                              gridColumn: "2 / 3",
                              gridRow: `${index + 2} / ${index + 3}`,
                            }}
                          >
                            <p className="grid__text">Até {tasks[0].deliveryDate}</p>
                            <p
                              className="grid__text"
                              style={{
                                color: handleGetContentColor(
                                  studentDelivery?.content["status"] as string
                                ),
                              }}
                            >
                              {studentDelivery?.content["status"] != undefined
                                ? `${studentDelivery?.content["status"]} por ${studentDelivery?.user.name} em ${studentDelivery?.task.deliveryDate}`
                                : "Não enviado"}
                            </p>
                          </div>
                          <div
                            className="grid__element"
                            style={{
                              gridColumn: "3 / 4",
                              gridRow: `${index + 2} / ${index + 3}`,
                            }}
                          >
                            <p className="grid__text">Até {tasks[1].deliveryDate}</p>
                            <p
                              className="grid__text"
                              style={{
                                color: handleGetContentColor(
                                  advisorDelivery?.content["status"] as string
                                ),
                              }}
                            >
                              {advisorDelivery?.content["status"] != undefined
                                ? `${advisorDelivery?.content["status"]} por ${advisorDelivery?.user.name} em ${advisorDelivery?.task.deliveryDate}`
                                : "Não enviado"}
                            </p>
                          </div>
                          <div
                            className="grid__element"
                            style={{
                              gridColumn: "4 / 5",
                              gridRow: `${index + 2} / ${index + 3}`,
                            }}
                          >
                            <p className="grid__text">Até {tasks[2].deliveryDate}</p>
                            <p
                              className="grid__text"
                              style={{
                                color: handleGetContentColor(
                                  responsibleDelivery?.content["status"] as string
                                ),
                              }}
                            >
                              {responsibleDelivery?.content["status"] != undefined
                                ? `${responsibleDelivery?.content["status"]} por ${responsibleDelivery?.user.name} em ${responsibleDelivery?.task.deliveryDate}`
                                : "Não enviado"}
                            </p>
                          </div>
                        </>
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
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
                    <p className="grid__text">
                      Enviado por Isabella Augusta Rodrigues em 19/06/2023
                    </p>
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
                    <p className="grid__text">
                      Enviado por Isabella Augusta Rodrigues em 19/06/2023
                    </p>
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
                    <p className="grid__text">
                      Enviado por Isabella Augusta Rodrigues em 19/06/2023
                    </p>
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
                  <div
                    className="grid__element"
                    style={{ gridColumn: "3 / 4", gridRow: "5 / 6" }}
                  ></div>
                  <div
                    className="grid__element"
                    style={{ gridColumn: "4 / 5", gridRow: "5 / 6" }}
                  ></div>
                  <div className="grid__element" style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}>
                    <h3 className="grid__title">Autorização de entrada</h3>
                  </div>
                  <div className="grid__element" style={{ gridColumn: "2 / 5", gridRow: "6 / 7" }}>
                    <p className="grid__text">Até 24/10/2023</p>
                    <p className="grid__text">Opcional</p>
                    <Link
                      className="grid__link"
                      to={""}
                      onClick={(event) => event.preventDefault()}
                    >
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
          </article>
        </>
      )}
    </main>
  );
}
