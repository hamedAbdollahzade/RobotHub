import ItemCard from "./ItemCard";

export default function ItemGrid({ items }) {
  return (
    <div className="grid" role="list">
      {items.map((item, i) => (
        <div role="listitem" key={item.id}>
          <ItemCard item={item} index={i} />
        </div>
      ))}
    </div>
  );
}
