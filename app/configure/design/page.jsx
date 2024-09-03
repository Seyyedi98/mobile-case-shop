import prisma from "@/db";
import { notFound } from "next/navigation";
import DesignConfigurator from "./_components/DesignConfigurator";

const Page = async ({ searchParams }) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") return notFound();

  const configuration = await prisma.configuration.findUnique({
    where: { id },
  });
  if (!configuration) return notFound();

  const { imageUrl, width, height } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
};

export default Page;
