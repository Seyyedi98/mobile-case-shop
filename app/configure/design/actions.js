"use server";

import prisma from "@/db";

export async function saveConfig({ color, finish, material, model, configId }) {
  await prisma.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  });
}
