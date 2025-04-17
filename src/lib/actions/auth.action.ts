"use server";
import { auth, db } from "@/firebase/admin";

const ONE_WEEK = 60 * 60 * 24 * 7; // 1 week || 60s, 60m, 24h, 7d

export const signUp = async (params: SignUpParams) => {
  const { uid, name, email } = params;

  try {
    // Check exist by coming to Users collection / table, getting document where the specific id
    const userRecord = await db.collection("users").doc(uid).get();
    if (userRecord.exists) {
      return {
        success: false,
        message: "User already exists.",
      };
    }
    // Create new user
    await db.collection("users").doc(uid).set({
      name,
      email,
    });
    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error: any) {
    console.error("Invalid Credentials");
    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "This email is already in use.",
      };
    }

    return { success: false, message: "Failed to create an account" };
  }
};

export const signIn = async (params: SignInParams) => {
  const { email, idToken } = params;

  try {
    // Check exist by coming to Users collection / table, getting document where the specific id
    const userRecord = await auth.getUserByEmail(email);
    if (!userRecord) {
      return {
        success: false,
        message: "User does not exists. Create an new account instead.",
      };
    }
    // Log in
    await setSessionCookie(idToken);
  } catch (error) {
    console.error("User was not created because of: ", error);
    return {
      success: false,
      message: "Failed to log into an account.",
    };
  }
};

// Server sends back cookies
export const setSessionCookie = async (idToken: string) => {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000, //1000 ms
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
};
