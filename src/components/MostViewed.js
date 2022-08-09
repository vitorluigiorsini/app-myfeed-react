import Feed from "../components/Feed";

export default function MostViewed() {
  const posts = [
    {
      id: Math.random(),
      content: "Desenvolvendo primeiro app utilizando a biblioteca React.",
      userName: "Vitor Orsini",
      publishedAt: new Date(),
    },
    {
      id: Math.random(),
      content: "Aprendendo sobre componentização, rotas e estados.",
      userName: "Vitor Orsini",
      publishedAt: new Date(),
    },
    {
      id: Math.random(),
      content:
        "Conceitos de Single Page Application, e como colocar em prática.",
      userName: "Vitor Orsini",
      publishedAt: new Date(),
    },
  ];

  return (
    <main className="most-viewed">
      <Feed
        posts={posts}
        title="Mais Vistos"
        subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
      />
    </main>
  );
}
