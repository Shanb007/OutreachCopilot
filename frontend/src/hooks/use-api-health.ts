"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export function useApiHealth() {
  const [status, setStatus] = useState<"checking" | "connected" | "disconnected">("checking");

  useEffect(() => {
    api
      .healthCheck()
      .then(() => setStatus("connected"))
      .catch(() => setStatus("disconnected"));
  }, []);

  return status;
}
