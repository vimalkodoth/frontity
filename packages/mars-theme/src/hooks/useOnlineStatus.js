import React, { useState, useEffect } from "react";

function isOnline() {
  if (
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    return !navigator.onLine;
  }
  return true;
}

export default function useOnlineStatus() {
  const [online, setOnline] = useState(isOnline());

  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);

    // cleanup
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  });

  function handler(event) {
    setOnline(navigator.onLine);

    if (event.type === "online") {
      // handle stuffs when browser resume online
    } else {
      // handle stuffs when browser goes offline
    }
  }

  return { online };
}
