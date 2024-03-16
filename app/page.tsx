import Image from "next/image"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Image
      src="/images/next.jpg"
      alt="Next.js Logo"
      width={430}
      height={270}
     />
    </main>
  );
}
