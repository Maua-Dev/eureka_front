import Skeleton from "react-loading-skeleton";
import HeaderedBoxSkeleton from "../../ui/components/HeaderedBox/HeaderedBoxSkeleton";
import DefaultButton from "../../ui/components/DefaultButton/DefaultButton";

export default function FileUploadSkeleton() {
  return (
    <div className="file_upload_page--skeleton">
      <HeaderedBoxSkeleton boxHeaderClassName="box__header--file" boxClassName="box--file">
        <div className="box__main">
          <Skeleton className="description"></Skeleton>
          <Skeleton className="download_text"></Skeleton>
          <label className="btn btn--lighter">
            <input type="file" className="btn__input" />
            <p>Escolher arquivo</p>
          </label>
        </div>
        <div className="box__footer">
          <DefaultButton title="Enviar" buttonClassName="btn" />
          <DefaultButton title="Remover envio" buttonClassName="btn" />
        </div>
      </HeaderedBoxSkeleton>
    </div>
  );
}
