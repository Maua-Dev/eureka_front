import DefaultTextFieldSkeleton from "@components/DefaultTextField/DefaultTextFieldSkeleton";
import HeaderedBoxSkeleton from "@components/HeaderedBox/HeaderedBoxSkeleton";
import "./AbstractPage.css";
import DefaultButton from "@components/DefaultButton/DefaultButton";

export default function AbstractPageSkeleton() {
    return (
        <>
            <HeaderedBoxSkeleton
                boxHeaderClassName="box__header--start"
                boxClassName="box--margin"
            >
                <div className="box__main">
                    <span className="box__span">
                        Envio do resumo corrigido. As palavras em ingês devem
                        estar isoladas com aspas. Tudo deve ser preenchido em{" "}
                        <u>português</u>.
                    </span>
                    <div>
                        <DefaultTextFieldSkeleton
                            isSaveButtonIncluded={true}
                            topTitle="Título do trabalho"
                        ></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Título do trabalho após apresentação para banca.
                            Lembrando que ao salvar o título ele se torna
                            definitivo.
                        </span>
                    </div>
                    <div>
                        <DefaultTextFieldSkeleton
                            topTitle="Resumo do trabalho"
                            isTextArea={true}
                            textFieldClassName="input--bigger"
                        ></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Resumo do trabalho após apresentação para banca.
                            Lembrando que ao salvar o resumo ele se torna
                            definitivo.
                        </span>
                    </div>
                    <div>
                        <DefaultTextFieldSkeleton topTitle="Palavras-chave"></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Palavras-chave separadas entre si por ponto e
                            finalizadas também por ponto.
                        </span>
                    </div>
                    <div>
                        <DefaultButton
                            title="Enviar"
                            buttonClassName="box__btn--end"
                        ></DefaultButton>
                    </div>
                </div>
            </HeaderedBoxSkeleton>
            <HeaderedBoxSkeleton
                boxHeaderClassName="box__header--start"
                boxClassName="box--margin"
            >
                <div className="box__main">
                    <span className="box__span">
                        Envio do resumo corrigido. As palavras em ingês devem
                        estar isoladas com aspas. Tudo deve ser preenchido em{" "}
                        <u>inglês</u>.
                    </span>
                    <div>
                        <DefaultTextFieldSkeleton
                            isSaveButtonIncluded={true}
                            topTitle="Título do trabalho (em inglês)"
                        ></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Título do trabalho após apresentação para banca.
                            Lembrando que ao salvar o título ele se torna
                            definitivo.
                        </span>
                    </div>
                    <div>
                        <DefaultTextFieldSkeleton
                            topTitle="Resumo do trabalho (em inglês)"
                            isTextArea={true}
                            textFieldClassName="input--bigger"
                        ></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Resumo do trabalho após apresentação para banca.
                            Lembrando que ao salvar o resumo ele se torna
                            definitivo.
                        </span>
                    </div>
                    <div>
                        <DefaultTextFieldSkeleton topTitle="Palavras-chave (em inglês)"></DefaultTextFieldSkeleton>
                        <span className="box__span">
                            Palavras-chave separadas entre si por ponto e
                            finalizadas também por ponto.
                        </span>
                    </div>
                    <div>
                        <DefaultButton
                            title="Enviar"
                            buttonClassName="box__btn--end"
                        ></DefaultButton>
                    </div>
                </div>
            </HeaderedBoxSkeleton>
        </>
    );
}
