import "./ImageInfoCard.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ImageInfoCardSkeleton() {
  return (
    <SkeletonTheme baseColor="var(--white)" highlightColor="var(--gray)">
      <Skeleton className="image_info_card image_info_card--skeleton"></Skeleton>
    </SkeletonTheme>
  );
}
