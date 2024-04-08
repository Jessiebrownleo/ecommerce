import { PinContainer } from "../ui/3d-pin";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";
type CardProductProps = {
  image: string;
  name: string;
  price: number;
  onClick?: () => void;
  seller: string;
};
const CardProduct = ({
  image,
  name,
  seller,
  price,
  onClick,
}: CardProductProps) => {
  return (
    <>
      <div className="w-[300px]" onClick={onClick}>
        <PinContainer title={seller} >
          <div className="max-w-[300px] " >
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-5"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start "></CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={image}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-md">{name}</p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  Add to cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </PinContainer>
      </div>
    </>
  );
};
export default CardProduct;
