import React from "react";
import { Card, CardContent, CardInfoWrapper, Skeleton } from "./style";
import { TCardLoading } from "@/app/types";

const CardLoadingComponent = () => {
  return (
    <Card>
      <CardContent>
        <SkeletonLoader image />
        <CardInfoWrapper>
          <SkeletonLoader title />
          <SkeletonLoader />
        </CardInfoWrapper>
        <SkeletonLoader desc />
      </CardContent>
    </Card>
  );
};

export default CardLoadingComponent;

const SkeletonLoader = ({ image, title, desc }: TCardLoading) => {
  return <Skeleton image={image} title={title} desc={desc} />;
};
