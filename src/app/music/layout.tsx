import MeteorShower from "@/components/bg/meteor";
import ParticleBackground from "@/components/bg/ParticleBackground";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main >
          {children}
          <ParticleBackground />
          <MeteorShower />
        </main>
  );
}
