import React from "react";
import "./TasksGrid.css";
import { Link } from "react-router-dom";
import { TaskContentType } from "../../../../utils/@types/task-content-type";
import { TaskModel } from "../../../../models/task-model";
import { DeliveryModel } from "../../../../models/delivery-model";
import { handleGetTaskContentColor } from "../../../../utils/functions/handle-get-task-content-color";
import HeaderedBox from "../../../../ui/components/HeaderedBox/HeaderedBox";

type TasksGridProps = {
  headerTitle: string;
  tasksContent: TaskContentType[];
  tasks: TaskModel[];
  deliveries: DeliveryModel[];
  boxClassName?: string;
};

export default function TasksGrid({
  headerTitle,
  tasksContent,
  tasks,
  deliveries,
  boxClassName,
}: TasksGridProps) {
  return (
    <HeaderedBox headerTitle={headerTitle} boxClassName={boxClassName}>
      <div className="tasks_grid">
        <div className="tasks_grid__element" style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>
          <h3 className="tasks_grid__title">Alunos</h3>
        </div>
        <div className="tasks_grid__element" style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
          <h3 className="tasks_grid__title">Orientador</h3>
        </div>
        <div className="tasks_grid__element" style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
          <h3 className="tasks_grid__title">Responsável</h3>
        </div>
        {tasksContent.map((taskContent, taskContentIndex) => {
          const tasksFiltered = tasks.filter((task) => task.title === taskContent.title);
          const deliveriesFiltered = deliveries.filter(
            (delivery) => delivery.task.title === taskContent.title
          );

          const handleGridColumn = (deliveryIndex: number): string => {
            switch (tasksFiltered.length) {
              case 1:
                return "2 / 5";
              case 2:
                return deliveryIndex == 0 ? "2 / 3" : "3 / 5";
              case 3:
                return deliveryIndex == 0 ? "2 / 3" : deliveryIndex == 1 ? "3 / 4" : "4 / 5";
              default:
                return `${deliveryIndex} / ${deliveryIndex}`;
            }
          };

          return (
            <React.Fragment key={taskContentIndex}>
              <div
                className="tasks_grid__element"
                style={{
                  gridColumn: "1 / 2",
                  gridRow: `${taskContentIndex + 2} / ${taskContentIndex + 3}`,
                }}
              >
                <Link
                  to={`${taskContent.basePath}/${tasksFiltered[0].taskId}`}
                  className="tasks_grid__title grid__title--link"
                >
                  {taskContent.title}
                </Link>
              </div>
              <>
                {tasksFiltered.map((task, taskIndex) => {
                  return (
                    <div
                      key={taskIndex}
                      className="tasks_grid__element"
                      style={{
                        gridColumn: handleGridColumn(taskIndex),
                        gridRow: `${taskContentIndex + 2} / ${taskContentIndex + 3}`,
                      }}
                    >
                      <p className="tasks_grid__text">Até {task.deliveryDate}</p>
                      <p className="tasks_grid__text">Não enviado</p>
                    </div>
                  );
                })}
                {deliveriesFiltered.map((delivery, deliveryIndex) => {
                  return (
                    <div
                      key={deliveryIndex}
                      className="tasks_grid__element"
                      style={{
                        gridColumn: handleGridColumn(deliveryIndex),
                        gridRow: `${taskContentIndex + 2} / ${taskContentIndex + 3}`,
                      }}
                    >
                      <p className="tasks_grid__text">Até {`${delivery.date}`}</p>
                      <p
                        className="tasks_grid__text"
                        style={{
                          color: handleGetTaskContentColor(delivery?.content["status"] as string),
                        }}
                      >
                        {delivery?.content["status"] != undefined
                          ? `${delivery?.content["status"]} por ${delivery?.user.name} em ${delivery?.task.deliveryDate}`
                          : ""}
                      </p>
                    </div>
                  );
                })}
              </>
            </React.Fragment>
          );
        })}
      </div>
    </HeaderedBox>
  );
}
