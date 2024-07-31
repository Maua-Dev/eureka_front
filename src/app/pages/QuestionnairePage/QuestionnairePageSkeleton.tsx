import HeaderedBox from "@components/HeaderedBox/HeaderedBox.tsx";
import QuestionnaireCardSkeleton from "@pages/QuestionnairePage/components/QuestionnarieCard/QuestionnaireCardSkeleton.tsx";
import Skeleton from "react-loading-skeleton";

export default function QuestionnairePageSkeleton() {
    return (
        <div style={{ margin: "42px 32px" }}>
            <HeaderedBox headerTitle={"Questionário"}>
                <section style={{ backgroundColor: "white" }}>
                    <div className={"box__main"}>
                        {Array(4)
                            .fill(0, 0)
                            .map((_, index) => (
                                <div key={index + " QuestionnaireSkeletonKey"}>
                                    <QuestionnaireCardSkeleton />
                                </div>
                            ))}
                    </div>
                    <div className={"send__button"}>
                        <Skeleton width={100} height={40} />
                    </div>
                </section>
            </HeaderedBox>
        </div>
    );
}
