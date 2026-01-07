export const revalidate = 60; // seconds

type Advice = {
  slip: {
    advice: string;
  };
};

export default async function News() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data: Advice = await res.json();

  return (
    <div>
      <h1>News — Hybrid (ISR)</h1>
      <p>This page regenerates every 60 seconds.</p>
      <p>Advice: {data.slip.advice}</p>
    </div>
  );
}
