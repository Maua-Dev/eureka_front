import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./ProjectCard.css";

// Skeleton for the project card
export default function ProjectCardSkeleton() {
    return (
        <SkeletonTheme baseColor="var(--mustard)" duration={2} highlightColor="var(--dark-mustard)">
            <div className="project_card">
                <Skeleton className="project_card__img--skeleton" />
                <aside className="infos">
                    <Skeleton className="infos__title"></Skeleton>
                    <Skeleton className="infos__teacher"></Skeleton>
                </aside>
            </div>
        </SkeletonTheme>

    );
}