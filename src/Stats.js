import Item from "./Item";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items 🤔📦</em>
      </p>
    );
  const numitems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything lets go 😎🥂"
          : `🎒💼 You have ${numitems} items on your list, and you already packed ${" "}
        ${numPacked} on your list ${percentage} %`}
      </em>
    </footer>
  );
}
