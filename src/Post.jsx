export default function Post({ post }) {
  const { title, body } = post;
  return (
    <div
      style={{
        padding: "20px",
        margin: "20px",
        border: "2px solid red",
        borderRadius: "20px",
      }}
    >
      <h3>Title: {title}</h3>
      <p>Description: {body}</p>
    </div>
  );
}
