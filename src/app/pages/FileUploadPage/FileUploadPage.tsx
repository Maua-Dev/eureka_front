import { useParams } from "react-router-dom";
import "./FileUploadPage.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { TaskContext } from "../../context/task-context";
import HeaderedBox from "../../ui/components/HeaderedBox/HeaderedBox";
import { jobInfoContentList } from "../../utils/statics/job-info-content-list";
import isEqual from "lodash.isequal";
import { handleFetch } from "../../utils/functions/handle-fetch";
import { useErrorBoundary } from "react-error-boundary";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";
import { toast } from "react-toastify";
import parse from "html-react-parser";
import { TaskContentType } from "../../utils/@types/task-content-type";

export default function FileUploadPage() {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(false);

  // get the project id from the url to fetch the project data
  const { taskId } = useParams();
  const taskIdFromPath = parseInt(taskId!);

  const { tasksFromContext, getAllTasks } = useContext(TaskContext);

  const [files, setFiles] = useState<File[]>();
  const [jobInfo, setJobInfo] = useState<TaskContentType | undefined>(
    jobInfoContentList.find(
      (jobInfo) =>
        jobInfo.title === tasksFromContext.find((task) => task.taskId === taskIdFromPath)?.title
    )
  );

  // error boundary to catch errors in the components (used in handleFetch function)
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (isEqual(tasksFromContext, [])) {
      handleFetch(setIsSkeletonLoading, showBoundary, undefined, getAllTasks());
    }
  }, []);

  useEffect(() => {
    setJobInfo(
      jobInfoContentList.find(
        (jobInfo) =>
          jobInfo.title === tasksFromContext.find((task) => task.taskId === taskIdFromPath)?.title
      )
    );
  }, [tasksFromContext]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).map((file) => {
        if (!jobInfo?.fileFormat?.includes(file.type.split("/")[1])) {
          toast.error("Tipo de arquivo inválido");
          return;
        }
        if (jobInfo.maxSize && file.size > jobInfo.maxSize * 1024 ** 2) {
          toast.error(`O tamanho do arquivo não pode exceder ${jobInfo.maxSize}MB`);
          return;
        }
        if (jobInfo.maxNumber && files?.length && files.length >= jobInfo.maxNumber) {
          const fileText = jobInfo.maxNumber > 1 ? "arquivos" : "arquivo";
          toast.error(`Você pode enviar no máximo ${jobInfo.maxNumber} ${fileText}`);
          return;
        }
        setFiles((prevFiles) => [...(prevFiles ?? []), file]);
      });
    }
  };

  return (
    <main className="file_upload_page">
      {isSkeletonLoading}
      <HeaderedBox
        boxHeaderClassName="box__header--file"
        boxClassName="box--file"
        headerTitle={jobInfo?.title}
      >
        <div className="box__main">
          <div className="description">
            {<>{jobInfo?.description && parse(jobInfo.description)}</>}
          </div>
          <p className="download_text">{jobInfo?.downloadText}</p>
          {jobInfo?.title == "Fotos do Trabalho" && (
            <div className="photos">
              {files?.map((file, index) => {
                const objectUrl = URL.createObjectURL(file);
                return (
                  <div className="photos__item" key={index}>
                    <img src={objectUrl} alt={file.name} key={index} className="photos__preview" />
                    <DefaultButton
                      title="Remover"
                      buttonClassName="photos__btn"
                      onClick={() => setFiles(files.filter((e) => e != file))}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <label className="btn btn--lighter">
            <input
              onChange={handleFileChange}
              type="file"
              className="btn__input"
              accept={`.${jobInfo?.fileFormat?.join(",.")}`}
            />
            <p>Escolher arquivo</p>
          </label>
          {jobInfo?.title != "Fotos do Trabalho" &&
            files?.map((file, index) => {
              return (
                <div className="file" key={index}>
                  <p className="file__name">{file.name}</p>
                  <p
                    onClick={() => setFiles(files.filter((e) => e != file))}
                    className="file__icon"
                  >
                    X
                  </p>
                </div>
              );
            })}
        </div>
        <div className="box__footer">
          <DefaultButton title="Enviar" buttonClassName="btn" />
          <DefaultButton title="Remover envio" buttonClassName="btn" />
        </div>
      </HeaderedBox>
    </main>
  );
}
