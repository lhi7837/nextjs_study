import Image from "next/image";
import Foodpng from "/public/food0.png";
export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let 어레이 = [2, 3, 4];
  /*어레이 개수만큼 반복해줌 map*/
  let b = 어레이.map((a, i) => {
    return 10;
  });

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((상품리스트, i) => {
        return (
          <div className="food" key={i}>
            <Image src={Foodpng} className="food-img" />
            <h4>{상품리스트} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
