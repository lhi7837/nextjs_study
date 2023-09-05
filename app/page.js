export default function Home() {
  let name = "이름 넣음";
  let link = "https://google.com";
  return (
    <div>
      <h4 className="title">안녕 타이틀임</h4>
      <p className="title-sub">p태그임{name}</p>
      <a href={link}>링크</a>
    </div>
  );
}
