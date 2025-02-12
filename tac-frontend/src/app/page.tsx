"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.text());

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_TAC_API_URL);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_TAC_API_URL}/data?username=frost`,
    fetcher
  );
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{data}</p>
    </div>
  );
}
