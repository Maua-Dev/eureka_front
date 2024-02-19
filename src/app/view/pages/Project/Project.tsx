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
import { tasksTitlesList } from "../../../utils/tasks-titles-list";
import Card from "../../components/Card/Card";
import { handleFetch } from "../../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import BasicButton from "../../components/BasicButton/BasicButton";
import { UserJson } from "../../../../@clean/shared/infra/jsons/user-json";
import { toast } from "react-toastify";
import { User } from "../../../../@clean/shared/domain/entities/user";
import { UserModel } from "../../../models/user-model";
import { UserAdapter } from "../../../adapters/user-adapter";
import Select from "react-select";
import isEqual from "lodash.isequal";

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
  const [cosupervisor, setCosupervisor] = useState<UserModel>(project.professors[2]);
  const [professorsOptions, setProfessorsOptions] = useState<UserModel[]>([]);

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

  useEffect(() => {
    const users: UserModel[] = UserJson.userJson.map((user) =>
      UserAdapter.toModel(User.fromJson(user))
    );
    setProfessorsOptions(
      users.filter(
        (user) =>
          (user.role === ROLE.ADVISOR || user.role === ROLE.RESPONSIBLE) &&
          !isEqual(user, project.professors[0])
      )
    );
  }, [project.professors]);

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
                <Select
                  className="main__input"
                  value={cosupervisor}
                  components={{
                    DropdownIndicator: null,
                    NoOptionsMessage: () => "Professor não encontrado",
                  }}
                  styles={{
                    control(base) {
                      return {
                        ...base,
                        width: "100%",
                        border: "var(--thin-border)",
                        borderRadius: "var(--input-radius)",
                        backgroundColor: "var(--white)",
                        boxShadow: "none",
                        padding: "0 0.2rem",
                        minHeight: "20px",
                      };
                    },
                    menu(base) {
                      return {
                        ...base,
                        top: "84%",
                      };
                    },
                    menuList(base) {
                      return {
                        ...base,
                        backgroundColor: "var(--white)",
                        borderEndStartRadius: "var(--input-radius)",
                        borderEndEndRadius: "var(--input-radius)",
                        width: "100%",
                        margin: "0",
                        border: "var(--thin-border)",
                        borderTop: "none",
                      };
                    },
                    option(base) {
                      return {
                        ...base,
                        padding: "0.2rem",
                      };
                    },
                  }}
                  backspaceRemovesValue={true}
                  unstyled={true}
                  placeholder=""
                  options={professorsOptions}
                  onChange={(option: UserModel | null) => {
                    setCosupervisor(option!);
                  }}
                  getOptionLabel={(option: UserModel) => option.name}
                  getOptionValue={(option: UserModel) => option.name}
                />
                <BasicButton
                  title="Salvar"
                  buttonClassName="main__btn--margin"
                  onClick={() => {
                    if (cosupervisor === undefined) {
                      toast.error("Selecione um professor");
                    } else if (isEqual(cosupervisor, project.professors[2])) {
                      toast.error("O coorientador não pode ser igual ao anterior");
                    } else {
                      const professor = UserJson.userJson.find(
                        (user) => user.name.toLowerCase() === cosupervisor?.name.toLowerCase()
                      );
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
                      toast.success("Coorientador atualizado");
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
                      if (isEntrepreneurship === project.isEntrepreneurship) {
                        toast.error("O potencial do trabalho não pode ser igual ao anterior");
                      } else {
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
                        toast.success("Potencial atualizado");
                      }
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
                {tasksTitlesList.map((taskTitle, index) => {
                  // mount the tasks list grid
                  const tasks = tasksList.filter((task) => task.title === taskTitle.title);
                  const deliveries = deliveriesList.filter(
                    (delivery) => delivery.task.title === taskTitle.title
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
                          to={`${window.location.pathname}/${taskTitle.to}/${tasks[0]?.taskId}`}
                          className="grid__title grid__title--link"
                        >
                          {taskTitle.title}
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
