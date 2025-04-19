import { db } from "@/firebase/admin";

export const getInterviewsByUserId = async (
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

export const getInterviewDetailsById = async (
  id: string
): Promise<Interview | null> => {
  const interviewRecord = await db.collection("interviews").doc(id).get();
  return interviewRecord.data() as Interview | null;
};

export const getLatestInterviews = async (
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> => {
  const { userId, limit = 20 } = params;
  const interviewRecords = await db
    .collection("interviews")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();
  return interviewRecords.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
};
