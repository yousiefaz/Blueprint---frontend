import { FeatureBlock } from "@/types/Interfaces";
import Image from "next/image";
import { FC } from "react";
import Heading from "@/components/Heading";

interface FeatureBlockProps extends featureBlock {
  isReversed?: boolean;
}

const FeatureBlock: FC<FeatureBlockProps> = ({
  title,
  imageUrl,
  content,
  isReversed,
}) => {
  return (
    <article
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
        isReversed && "lg:flex-row-reverse"
      }`}
    >
      <Image
        src={imageUrl}
        width={370}
        height={370}
        alt="feature"
        className="basis-5/12 w-full shadow-lg "
      />
      <div className="basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
        <Heading title={title} />
        <p className="lg:max-w-[40rem]">{content}</p>
      </div>
      <article className="flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6"></article>
    </article>
  );
};

export default FeatureBlock;
