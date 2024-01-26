import Image from "next/image";
import Logo from "../../public/assets/logo_text.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        src={Logo}
        alt="web site logo"
        width={800}
        height={100}
        priority
      />
    </main>
  );
}
