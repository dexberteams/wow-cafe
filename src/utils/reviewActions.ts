"use server";

import prisma from "./prisma";

export async function getReviews() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: reviews };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { success: false, error: "Failed to fetch reviews" };
  }
}

export async function createReview(userName: string, image?: string) {
  try {
    const review = await prisma.review.create({
      data: {
        userName,
        image,
      },
    });
    return { success: true, data: review };
  } catch (error) {
    console.error("Error creating review:", error);
    return { success: false, error: "Failed to create review" };
  }
}
