import styled, { css } from "styled-components";
import Image from "next/image";
import { TCardLoading } from "@/app/types";

export const Skeleton = styled.div<TCardLoading>`
  border-radius: var(--border-radius);
  animation: var(--animate-pulse);

  ${(props) =>
    props.image
      ? css`
          width: 100%;
          height: 140px;
          background: #f3f3f3;
          margin-bottom: 20px;
        `
      : props.title
      ? css`
          width: 100%;
          height: 20px;
          background: #f3f3f3;
          margin-bottom: 8px;
        `
      : props.desc
      ? css`
          width: 100%;
          height: 40px;
          background: #f3f3f3;
          margin-bottom: 15px;
        `
      : css`
          width: 30%;
          height: 20px;
          background: #f3f3f3;
          margin-bottom: 15px;
        `}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background: #fff;
  color: #000;
  width: 250px;
  height: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const CardImage = styled(Image)`
  width: 115px;
  height: 140px;
  object-fit: contain;
  object-position: center;
  margin-bottom: 20px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
  width: 100%;
  line-height: 19px;
`;

export const CardTitle = styled.p`
  flex: 3;
  font-size: 16px;
  font-weight: 400;
`;

export const CardPrice = styled.span`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  background: var(--alt-black);
  color: #fff;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  white-space: nowrap;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  line-height: 12px;
  font-weight: 300;
  margin-bottom: 15px;
`;

export const CardButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--primary-color);
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: 8px 0;
  transition: background 0.3s;
  text-transform: uppercase;
  box-shadow: var(--box-shadow);

  &:hover {
    background: rgba(15, 82, 186, 0.8);
  }

  &:disabled {
    background: var(--alt-black);
    cursor: not-allowed;
  }
`;
