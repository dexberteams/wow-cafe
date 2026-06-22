"use server";

import prisma from "./prisma";

export async function getGalleryImages() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: images };
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { success: false, error: "Failed to fetch gallery images" };
  }
}

export async function createGalleryImage(image: string) {
  try {
    const galleryImage = await prisma.galleryImage.create({
      data: {
        image,
      },
    });
    return { success: true, data: galleryImage };
  } catch (error) {
    console.error("Error creating gallery image:", error);
    return { success: false, error: "Failed to create gallery image" };
  }
}
