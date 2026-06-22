"use server";

import prisma from "./prisma";

export async function getMenuReactions() {
  try {
    const reactions = await prisma.menuReaction.findMany();
    return { success: true, data: reactions };
  } catch (error) {
    console.error("Error fetching menu reactions:", error);
    return { success: false, error: "Failed to fetch reactions" };
  }
}

export async function getMenuReaction(menuItemId: string) {
  try {
    const reaction = await prisma.menuReaction.findUnique({
      where: { menuItemId },
    });
    return { success: true, data: reaction };
  } catch (error) {
    console.error("Error fetching menu reaction:", error);
    return { success: false, error: "Failed to fetch reaction" };
  }
}

export async function incrementMenuReaction(menuItemId: string) {
  try {
    const reaction = await prisma.menuReaction.upsert({
      where: { menuItemId },
      update: { count: { increment: 1 } },
      create: { menuItemId, count: 1 },
    });
    return { success: true, data: reaction };
  } catch (error) {
    console.error("Error incrementing menu reaction:", error);
    return { success: false, error: "Failed to increment reaction" };
  }
}

export async function decrementMenuReaction(menuItemId: string) {
  try {
    // First, ensure the record exists before trying to decrement
    const existing = await prisma.menuReaction.findUnique({
      where: { menuItemId }
    });

    if (!existing || existing.count <= 0) {
      return { success: true, data: existing }; // Can't decrement below 0
    }

    const reaction = await prisma.menuReaction.update({
      where: { menuItemId },
      data: { count: { decrement: 1 } },
    });
    return { success: true, data: reaction };
  } catch (error) {
    console.error("Error decrementing menu reaction:", error);
    return { success: false, error: "Failed to decrement reaction" };
  }
}
