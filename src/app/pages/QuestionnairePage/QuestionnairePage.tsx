import { useState, useEffect } from "react";
import HeaderedBox from "@components/HeaderedBox/HeaderedBox.tsx";
import { questionnaireList } from "@constants/questionnaire-list.ts";
import "./QuestionnairePage.css";
import QuestionnaireCard from "@pages/QuestionnairePage/components/QuestionnarieCard/QuestionnaireCard.tsx";
import DefaultButton from "@components/DefaultButton/DefaultButton.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import QuestionnairePageSkeleton from "@pages/QuestionnairePage/QuestionnairePageSkeleton.tsx";

export default function QuestionnairePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => setIsLoading(false), 5000);
    }, []);

    if (isLoading) {
        return <QuestionnairePageSkeleton />;
    }

    return (
        <div style={{ margin: "42px 32px" }}>
            <HeaderedBox headerTitle={"Questionário"}>
                <section style={{ backgroundColor: "white" }}>
                    <div className={"box__main"}>
                        {questionnaireList.map((questionnaire, index) => (
                            <div key={index + " QuestionnaireKey"}>
                                <QuestionnaireCard
                                    id={questionnaire.id}
                                    title={questionnaire.title}
                                    textAreaTitle={questionnaire.textAreaTitle}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={"send__button"}>
                        <DefaultButton title={"Enviar"}></DefaultButton>
                    </div>
                </section>
            </HeaderedBox>
        </div>
    );
}
