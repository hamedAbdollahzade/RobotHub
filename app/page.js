import Image from "next/image";
import ItemGrid from "@/components/ItemGrid";
import items from "@/data/items.json";
import logo from "@/public/logo.png";

export default function Home() {
  return (
    <main className="shell">
      <header className="header">
        <Image src={logo} alt="روبات مارکت" className="logo" priority />
        <p className="tagline">
          هر چیزی که لازم دارید، یک ضربه فاصله دارد
        </p>
      </header>

      <ItemGrid items={items} />

      <footer className="footer">
        © {new Date().getFullYear()} روبات مارکت
      </footer>
    </main>
  );
}
