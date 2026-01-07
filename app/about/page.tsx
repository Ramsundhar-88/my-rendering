export const revalidate = false; // static at build time

type Advice = {
  slip: {
    advice: string;
  };
};

export default async function About() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data: Advice = await res.json();

  return (
    <div>
      <h1>About Page — Static (SSG)</h1>
      <p>This page is pre-rendered at build time.</p>
      <p>Advice: {data.slip.advice}</p>
    </div>
  );
}
