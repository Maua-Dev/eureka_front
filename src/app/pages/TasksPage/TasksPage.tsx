import "./TasksPage.css";
import checkIcon from "../../assets/icons/check-icon.svg";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import isEqual from "lodash.isequal";
import { ProjectContext } from "../../context/project-context";
import { TaskContext } from "../../context/task-context";
import { DeliveryContext } from "../../context/delivery-context";
import { useErrorBoundary } from "react-error-boundary";
import { UserModel } from "../../models/user-model";
import { handleFetch } from "../../utils/functions/handle-fetch";
import { UserAdapter } from "../../adapters/user-adapter";
import { UserJson } from "../../../@clean/shared/infra/jsons/user-json";
import { User } from "../../../@clean/shared/domain/entities/user";
import { ROLE } from "../../../@clean/shared/domain/enums/role-enum";
import LoadingSpinner from "../../ui/helpers/LoadingSpinner/LoadingSpinner";
import ProjectTasksPageSkeleton from "./TasksPageSkeleton";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { shiftToAcronym } from "../../../@clean/shared/domain/enums/shift-enum";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import { toast } from "react-toastify";
import { jobInfoContentList } from "../../utils/statics/job-info-content-list";
import ControlledTextField from "../../ui/components/ControlledTextField/ControlledTextField";
import TasksGrid from "../../ui/components/TasksGrid/TasksGrid";
import {
  eventSetupContentList,
  eventSetupContentListMock,
} from "../../utils/statics/event-setup-content-list";

export default function TasksPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // get the project id from the url to fetch the project data
  const { projectId } = useParams();
  const projectIdFromPath = parseInt(projectId!);

  const { projectFromContext, getProject, updateProject } = useContext(ProjectContext);
  const { tasksFromContext, getAllTasks } = useContext(TaskContext);
  const { deliveriesFromContext, getDeliveries } = useContext(DeliveryContext);

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const [isEntrepreneurship, setIsEntrepreneurship] = useState<boolean>(
    projectFromContext.isEntrepreneurship
  );

  const [cosupervisor, setCosupervisor] = useState<UserModel>(projectFromContext.advisors[1]);
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

  useEffect(() => {
    handleFetch(
      setIsSkeletonLoading,
      showBoundary,
      undefined,
      getProject(projectIdFromPath),
      getAllTasks(),
      getDeliveries(projectIdFromPath)
    );
  }, []);

  useEffect(() => {
    setIsEntrepreneurship(projectFromContext.isEntrepreneurship);
  }, [projectFromContext.isEntrepreneurship]);

  // set the possible professors to be selected in the input, excluding the responsible
  useEffect(() => {
    const users: UserModel[] = UserJson.userJson.map((user) =>
      UserAdapter.toModel(User.fromJson(user))
    );
    setProfessorsOptions(
      users.filter(
        (user) => user.role === ROLE.PROFESSOR && !isEqual(user, projectFromContext.advisors[0])
      )
    );
    setCosupervisor(projectFromContext.advisors[1]);
  }, [projectFromContext.advisors, projectFromContext.responsibles]);

  return (
    <main className="tasks_page">
      {isLoading && <LoadingSpinner />}
      {isSkeletonLoading ? (
        <ProjectTasksPageSkeleton />
      ) : (
        <>
          <HeaderedBox
            boxClassName="box--margin"
            headerTitleClassName="header__title--upper"
            headerTitle={`${projectFromContext.code}${shiftToAcronym(projectFromContext.shift)}${projectFromContext.standNumber} - ${projectFromContext.title}`}
          >
            <div className="box__main">
              <div className="subject">
                <h2 className="main__title">Habilitação: </h2>
                <span className="main__text">{projectFromContext.qualification}</span>
              </div>
              <div className="supervisor">
                <h2 className="main__title">Orientador: </h2>
                <span className="main__text">{projectFromContext.advisors[0]?.name}</span>
              </div>
              <div className="cosupervisor">
                <ControlledTextField<UserModel>
                  title={"Coorientador"}
                  value={cosupervisor}
                  noOptionsMessage={"Professor não encontrado"}
                  options={professorsOptions}
                  onChange={(option: UserModel | null) => {
                    setCosupervisor(option!);
                  }}
                  getOptionLabel={(option: UserModel) => option.name}
                  getOptionValue={(option: UserModel) => option.name}
                  saveButtonIsincluded={true}
                  onClick={() => {
                    if (cosupervisor === undefined) {
                      toast.error("Selecione um professor");
                    } else if (isEqual(cosupervisor, projectFromContext.advisors[1])) {
                      toast.error("O coorientador não pode ser igual ao anterior");
                    } else {
                      const professor = UserJson.userJson.find(
                        (user) => user.name.toLowerCase() === cosupervisor?.name.toLowerCase()
                      );
                      const professorId = [professor!.user_id];
                      handleFetch(
                        setIsLoading,
                        showBoundary,
                        "Coorientador atualizado",
                        updateProject(
                          projectIdFromPath,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          undefined,
                          professorId
                        )
                      );
                    }
                  }}
                />
              </div>
              <div className="students">
                <h2 className="main__title main__title--students">Alunos: </h2>
                <div className="students__name">
                  {projectFromContext?.students.map((user, index) => (
                    <span className="main__text main__text--students" key={index}>
                      {user.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <footer className="box__footer">
              <div className="code">
                <h2 className="main__title">Código: </h2>
                <span className="main__text">{projectFromContext.code}</span>
              </div>
              <div className="infos">
                <div className="infos__period">
                  <h2 className="main__title">Período: </h2>
                  <span className="main__text">{shiftToAcronym(projectFromContext.shift)}</span>
                </div>
                <div className="infos__number">
                  <h2 className="main__title">Número: </h2>
                  <span className="main__text">{projectFromContext.standNumber}</span>
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
                  <DefaultButton
                    title="Atualizar potencial do trabalho"
                    onClick={() => {
                      if (isEntrepreneurship === projectFromContext.isEntrepreneurship) {
                        toast.error("O potencial do trabalho não pode ser igual ao anterior");
                      } else {
                        handleFetch(
                          setIsLoading,
                          showBoundary,
                          "Potencial atualizado",
                          updateProject(
                            projectIdFromPath,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            isEntrepreneurship
                          )
                        );
                      }
                    }}
                    buttonClassName="main__btn--width"
                  ></DefaultButton>
                </div>
              </div>
            </footer>
          </HeaderedBox>
          <article className="deliveries">
            <TasksGrid
              headerTitle="Informações do trabalho"
              boxClassName="box--width"
              deliveries={deliveriesFromContext}
              tasks={tasksFromContext}
              tasksContent={jobInfoContentList}
            />
            <aside className="deliveries--right">
              <TasksGrid
                headerTitle="Montagem do evento"
                deliveries={[]}
                tasksContent={eventSetupContentList}
                tasks={eventSetupContentListMock}
              />
              <HeaderedBox boxClassName="box--grow" headerTitle="Próximas entregas">
                <div className="box__column">
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
              </HeaderedBox>
            </aside>
          </article>
        </>
      )}
    </main>
  );
}
