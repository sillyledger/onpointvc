"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const RESET_MS = 1800;

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleClick() {
    let next = "Copied";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      next = email;
    }
    setLabel(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy"), RESET_MS);
  }

  return (
    <button type="button" className={styles.copy} onClick={handleClick}>
      <span aria-live="polite">{label}</span>
    </button>
  );
}
