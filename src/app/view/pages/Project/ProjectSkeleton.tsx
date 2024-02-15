import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CardSkeleton from "../../components/Card/CardSkeleton";

// Skeleton for the project page
export default function ProjectSkeleton() {
  return (
    <div className="project--skeleton">
      <CardSkeleton cardClassName="card--margin" headerTitleClassName="header__title--upper">
        <SkeletonTheme baseColor="var(--gray)" duration={2} highlightColor="var(--white)">
          <div className="card__main">
            <div className="subject subject--skeleton">
              <h2 className="main__title main__title--skeleton">Habilitação: </h2>
              <Skeleton className="main__text"></Skeleton>
            </div>
            <div className="supervisor supervisor--skeleton">
              <h2 className="main__title main__title--skeleton">Orientador: </h2>
              <Skeleton className="main__text"></Skeleton>
            </div>
            <div className=" cosupervisor--skeleton">
              <h2 className="main__title main__title--cosupervisor main__title--skeleton">
                Coorientador:{" "}
              </h2>
              <Skeleton
                containerClassName="main__input--center"
                className="main__input--skeleton react-loading-skeleton"
              />
              <button className="main__btn--skeleton main__btn--margin main__btn--smaller">
                <p className="btn__text">Salvar</p>
              </button>
            </div>
            <div className="students students--skeleton">
              <h2 className="main__title main__title--students main__title--skeleton">Alunos: </h2>
              <Skeleton
                containerClassName="students--center"
                count={3}
                className="students__name"
              ></Skeleton>
            </div>
          </div>
        </SkeletonTheme>
        <SkeletonTheme baseColor="var(--blue)" duration={2} highlightColor="var(--light-blue)">
          <footer className="card__footer">
            <div className="code code--skeleton">
              <h2 className="main__title">Código: </h2>
              <Skeleton containerClassName="center" className="main__text--skeleton"></Skeleton>
            </div>
            <div className="infos">
              <div className="infos__period infos__period--skeleton">
                <h2 className="main__title">Período: </h2>
                <Skeleton containerClassName="center" className="main__text--skeleton"></Skeleton>
              </div>
              <div className="infos__number infos__number--skeleton">
                <h2 className="main__title">Número: </h2>
                <Skeleton containerClassName="center" className="main__text--skeleton"></Skeleton>
              </div>
            </div>
            <div className="potencial">
              <h2 className="main__title">O trabalho tem potencial para empreendimento: </h2>
              <div className="options">
                <div className="option">
                  <p className="option__title">Sim</p>
                  <Skeleton className="option__checkbox--skeleton"></Skeleton>
                </div>
                <div className="option">
                  <p className="option__title">Não</p>
                  <Skeleton className="option__checkbox--skeleton"></Skeleton>
                </div>
                <button className="main__btn">Atualizar potencial do trabalho</button>
              </div>
            </div>
          </footer>
        </SkeletonTheme>
      </CardSkeleton>
      <article className="deliveries">
        <CardSkeleton cardClassName="card--width">
          <SkeletonTheme baseColor="var(--gray)" duration={2} highlightColor="var(--white)">
            <div className="grid">
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton
                  className="grid__text grid__text--skeleton"
                  style={{ color: "var(--green)" }}
                ></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton
                  className="grid__text grid__text--skeleton"
                  style={{ color: "var(--green)" }}
                ></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "3 / 4" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton
                  className="grid__text grid__text--skeleton"
                  style={{ color: "var(--red)" }}
                ></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "4 / 5" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "5 / 6" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "6 / 7" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "6 / 7" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "7 / 8" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "7 / 8" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "8 / 9" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "8 / 9" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "8 / 9" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "9 / 10" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "9 / 10" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "9 / 10" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "10 / 11" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 5", gridRow: "10 / 11" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "11 / 12" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "11 / 12" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "11 / 12" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "12 / 13" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 3", gridRow: "12 / 13" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "3 / 5", gridRow: "12 / 13" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "1 / 2", gridRow: "13 / 14" }}
              >
                <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
              </div>
              <div
                className="grid__element grid__element--skeleton"
                style={{ gridColumn: "2 / 5", gridRow: "13 / 14" }}
              >
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
              </div>
            </div>
          </SkeletonTheme>
        </CardSkeleton>
        <aside className="deliveries--right">
          <CardSkeleton>
            <SkeletonTheme baseColor="var(--gray)" duration={2} highlightColor="var(--white)">
              <div className="grid">
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton
                    className="grid__text grid__text--skeleton"
                    style={{ color: "var(--green)" }}
                  ></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton
                    className="grid__text grid__text--skeleton"
                    style={{ color: "var(--green)" }}
                  ></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton
                    className="grid__text grid__text--skeleton"
                    style={{ color: "var(--green)" }}
                  ></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "4 / 5", gridRow: "3 / 4" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton
                    className="grid__text grid__text--skeleton"
                    style={{ color: "var(--green)" }}
                  ></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "4 / 5", gridRow: "4 / 5" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "5 / 6" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 3", gridRow: "5 / 6" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "3 / 4", gridRow: "5 / 6" }}
                ></div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "4 / 5", gridRow: "5 / 6" }}
                ></div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "6 / 7" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 5", gridRow: "6 / 7" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                  <div className="grid__link"></div>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "1 / 2", gridRow: "7 / 8" }}
                >
                  <Skeleton className="grid__title grid__title--skeleton"></Skeleton>
                </div>
                <div
                  className="grid__element grid__element--skeleton"
                  style={{ gridColumn: "2 / 5", gridRow: "7 / 8" }}
                >
                  <Skeleton className="grid__text grid__text--skeleton"></Skeleton>
                </div>
              </div>
            </SkeletonTheme>
          </CardSkeleton>
          <CardSkeleton cardClassName="card--grow">
            <SkeletonTheme baseColor="var(--gray)" duration={2} highlightColor="var(--white)">
              <div className="card__column">
                <div className="column__element column__element--skeleton">
                  <Skeleton
                    containerClassName="column__element--center"
                    className="column__title column_title--skeleton"
                  ></Skeleton>
                </div>
                <div className="column__element column__element--skeleton">
                  <Skeleton
                    containerClassName="column__element--center"
                    className="column__title column_title--skeleton"
                  ></Skeleton>
                </div>
                <div className="column__element column__element--skeleton">
                  <Skeleton
                    containerClassName="column__element--center"
                    className="column__title column_title--skeleton"
                  ></Skeleton>
                </div>
              </div>
            </SkeletonTheme>
          </CardSkeleton>
        </aside>
      </article>
    </div>
  );
}
