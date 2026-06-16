import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Central Operacional Ybera" },
      {
        name: "description",
        content:
          "Portal interno Ybera Group para centralizar o acesso aos aplicativos operacionais de logística, WMS, estoque, recebimento, expedição, indicadores e suporte.",
      },
      { property: "og:title", content: "Central Operacional Ybera" },
      {
        property: "og:description",
        content:
          "Portal interno Ybera Group para centralizar o acesso aos aplicativos operacionais.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/central.html");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#252323" }}>
      <iframe
        src="/central.html"
        title="Central Operacional Ybera"
        style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: 0 }}
      />
    </div>
  );
}
