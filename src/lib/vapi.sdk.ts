"use client";
import Vapi from "@vapi-ai/web";

let vapiInstance: Vapi | null = null;

export function getVapi() {
  if (!vapiInstance) {
    vapiInstance = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);
  }
  return vapiInstance;
}
