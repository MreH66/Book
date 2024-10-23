import c from "./elements.module.css";

export default function MainElements(text) {
  return (
    <div>
      <h2 className={c.mainText}>{text}</h2>
    </div>
  );
}
