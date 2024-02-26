import { useParams } from "react-router-dom";
import "./FileUploadPage.css";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/task-context";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { jobInfoContentList } from "../../utils/statics/job-info-content-list";
import isEqual from "lodash.isequal";
import { handleFetch } from "../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";

export default function FileUploadPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);

  // get the project id from the url to fetch the project data
  const { taskId } = useParams();
  const taskIdFromPath = parseInt(taskId!);

  const { tasksFromContext, getAllTasks } = useContext(TaskContext);
  const jobInfo = jobInfoContentList.find(
    (jobInfo) =>
      jobInfo.title === tasksFromContext.find((task) => task.taskId === taskIdFromPath)?.title
  );

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isEqual(tasksFromContext, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getAllTasks());
    }
  }, []);

  return (
    <main className="file_upload_page">
      {isSkeletonLoading}
      <HeaderedBox
        boxHeaderClassName="box__header--file"
        boxClassName="box--file"
        headerTitle={jobInfo?.title}
      >
        <div className="description">
          <p className="description__first">{`Envio do ${jobInfo?.title}. Tipos de arquivos válidos: ${jobInfo?.fileFormat?.join(", ")}.`}</p>
          {/* <p className="description__second">{parse(jobInfo?.description!)}</p> */}
          <input type="file" />
        </div>
      </HeaderedBox>
    </main>
  );
}
