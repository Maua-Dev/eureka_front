import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { TaskContentType } from "../../../utils/@types/task-content-type";
import HeaderedBoxSkeleton from "../HeaderedBox/HeaderedBoxSkeleton";
import "./TasksGrid.css";
import React from "react";

type TaskGridSkeletonProps = {
  boxClassName?: string;
  tasksContent: TaskContentType[];
};

export default function TaskGridSkeleton({ boxClassName, tasksContent }: TaskGridSkeletonProps) {
  return (
    <SkeletonTheme baseColor="var(--gray)" duration={2} highlightColor="var(--white)">
      <HeaderedBoxSkeleton boxClassName={boxClassName}>
        <div className="tasks_grid">
          <div
            className="tasks_grid__element tasks_grid__element--skeleton"
            style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
          >
            <Skeleton className="tasks_grid__title tasks_grid__title--skeleton"></Skeleton>
          </div>
          <div
            className="tasks_grid__element tasks_grid__element--skeleton"
            style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
          >
            <Skeleton className="tasks_grid__title tasks_grid__title--skeleton"></Skeleton>
          </div>
          <div
            className="tasks_grid__element tasks_grid__element--skeleton"
            style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}
          >
            <Skeleton className="tasks_grid__title tasks_grid__title--skeleton"></Skeleton>
          </div>
          {tasksContent.map((_, taskContentIndex) => {
            return (
              <React.Fragment key={taskContentIndex}>
                <div
                  className="tasks_grid__element tasks_grid__element--skeleton"
                  style={{
                    gridColumn: "1 / 2",
                    gridRow: `${taskContentIndex + 2} / ${taskContentIndex + 3}`,
                  }}
                >
                  <Skeleton className="tasks_grid__title tasks_grid__title--skeleton grid__title--link"></Skeleton>
                </div>
                <div
                  className="tasks_grid__element tasks_grid__element--skeleton"
                  style={{
                    gridColumn: "2 / 5",
                    gridRow: `${taskContentIndex + 2} / ${taskContentIndex + 3}`,
                  }}
                >
                  <Skeleton className="tasks_grid__text tasks_grid__text--skeleton"></Skeleton>
                  <Skeleton className="tasks_grid__text tasks_grid__text--skeleton"></Skeleton>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </HeaderedBoxSkeleton>
    </SkeletonTheme>
  );
}
