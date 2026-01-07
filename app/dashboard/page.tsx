export const dynamic = "force-dynamic";

type Advice = {
  slip: {
    advice: string;
  };
};

export default async function Dashboard() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });

  const data: Advice = await res.json();

  return (
    <div>
      <h1>Dashboard — Dynamic (SSR)</h1>
      <p>This page fetches fresh data on every request.</p>
      <p>Advice: {data.slip.advice}</p>
    </div>
  );
}
