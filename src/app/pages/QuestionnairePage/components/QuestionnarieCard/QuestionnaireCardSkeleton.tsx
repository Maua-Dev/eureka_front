import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./QuestionnaireCard.css";

export default function QuestionnaireCardSkeleton() {
    return (
        <div>
            <h3 className={"title"}>
                <Skeleton width={200} />
            </h3>
            <div className={"container__radiobutton"}>
                <div className={"radiobutton"}>
                    <Skeleton circle width={20} height={20} />
                    <Skeleton width={50} style={{ marginLeft: "8px" }} />
                </div>
                <div className={"radiobutton"}>
                    <Skeleton circle width={20} height={20} />
                    <Skeleton width={50} style={{ marginLeft: "8px" }} />
                </div>
            </div>
            <p className={"text__area__tittle"}>
                <Skeleton width={150} />
            </p>
            <Skeleton className={"text__area"} height={120} />
        </div>
    );
}
