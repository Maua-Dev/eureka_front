import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./TasksPage.css";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import HeaderedBoxSkeleton from "../../ui/components/HeaderedBox/HeaderedBoxSkeleton";
import ControlledTextFieldSkeleton from "../../ui/components/ControlledTextField/ControlledTextFieldSkeleton";
import TaskGridSkeleton from "../../ui/components/TasksGrid/TasksGridSkeleton";
import { jobInfoContentList } from "../../utils/statics/job-info-content-list";
import { eventSetupContentList } from "../../utils/statics/event-setup-content-list";

// Skeleton for the tasks page
export default function TasksPageSkeleton() {
  return (
    <div className="tasks_page--skeleton">
      <HeaderedBoxSkeleton boxClassName="box--margin" headerTitleClassName="header__title--upper">
        <div className="box__main">
          <div className="subject subject--skeleton">
            <h2 className="main__title main__title--skeleton">Habilitação: </h2>
            <Skeleton className="main__text"></Skeleton>
          </div>
          <div className="supervisor supervisor--skeleton">
            <h2 className="main__title main__title--skeleton">Orientador: </h2>
            <Skeleton className="main__text"></Skeleton>
          </div>
          <div className="cosupervisor cosupervisor--skeleton">
            <ControlledTextFieldSkeleton saveButtonIsincluded={true} title={"Coorientador"} />
          </div>
          <div className="students students--skeleton">
            <h2 className="main__title main__title--students main__title--skeleton">Alunos: </h2>
            <Skeleton
              containerClassName="students--center"
              count={3}
              className="students__name"
            ></Skeleton>
          </div>
        </div>
        <SkeletonTheme baseColor="var(--gray)" highlightColor="var(--light-blue)">
          <footer className="box__footer">
            <div className="code code--skeleton">
              <h2 className="main__title">Código: </h2>
              <Skeleton className="main__text--skeleton" containerClassName="center"></Skeleton>
            </div>
            <div className="infos">
              <div className="infos__period infos__period--skeleton">
                <h2 className="main__title">Período: </h2>
                <Skeleton className="main__text--skeleton" containerClassName="center"></Skeleton>
              </div>
              <div className="infos__number infos__number--skeleton">
                <h2 className="main__title">Número: </h2>
                <Skeleton className="main__text--skeleton" containerClassName="center"></Skeleton>
              </div>
            </div>
            <div className="potencial">
              <h2 className="main__title">O trabalho tem potencial para empreendimento: </h2>
              <div className="options">
                {["yes", "no"].map((optionValue) => (
                  <div className="option" key={optionValue}>
                    <p className="option__title">{optionValue === "yes" ? "Sim" : "Não"}</p>
                    <Skeleton className="option__checkbox--skeleton" />
                  </div>
                ))}
                <DefaultButton
                  title="Atualizar potencial do trabalho"
                  buttonClassName="main__btn--width"
                ></DefaultButton>
              </div>
            </div>
          </footer>
        </SkeletonTheme>
      </HeaderedBoxSkeleton>
      <article className="deliveries">
        <TaskGridSkeleton boxClassName="box--width" tasksContent={jobInfoContentList} />
        <aside className="deliveries--right">
          <TaskGridSkeleton tasksContent={eventSetupContentList} />
          <HeaderedBoxSkeleton boxClassName="box--grow">
            <div className="box__column">
              <div className="column__element column__element--skeleton">
                <Skeleton
                  className="column__title column_title--skeleton"
                  containerClassName="column__element--center"
                ></Skeleton>
              </div>
              <div className="column__element column__element--skeleton">
                <Skeleton
                  className="column__title column_title--skeleton"
                  containerClassName="column__element--center"
                ></Skeleton>
              </div>
              <div className="column__element column__element--skeleton">
                <Skeleton
                  className="column__title column_title--skeleton"
                  containerClassName="column__element--center"
                ></Skeleton>
              </div>
            </div>
          </HeaderedBoxSkeleton>
        </aside>
      </article>
    </div>
  );
}
