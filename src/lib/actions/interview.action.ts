import { db } from "@/firebase/admin";

export const getInterviewByUserUi = async (
  userId: string
): Promise<Interview[] | null> => {
  const interviewRecords = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();
  return interviewRecords.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
};
