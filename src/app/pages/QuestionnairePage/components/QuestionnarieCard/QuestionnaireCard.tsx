import "./QuestionnaireCard.css";
import { QuestionnaireType } from "@@types/questionnaire-type.ts";

export default function QuestionnaireCard({
    id,
    title,
    textAreaTitle
}: QuestionnaireType) {
    return (
        <div>
            <h3 className={"title"}>{id + ". " + title}</h3>
            <div className={"container__radiobutton"}>
                <div className={"radiobutton"}>
                    <input id={"radioYes"} name="foo" type={"radio"} />
                    <label htmlFor={"radioYes"}>Sim</label>
                </div>
                <div className={"radiobutton"}>
                    <input id={"radioNo"} name="foo" type={"radio"} />
                    <label htmlFor={"radioNo"}>Não</label>
                </div>
            </div>
            <p className={"text__area__tittle"}>{textAreaTitle}</p>
            <textarea className={"text__area"} cols={76} rows={6} />
        </div>
    );
}
