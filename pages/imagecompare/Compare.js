import ReactCompareImage from "react-compare-image";

export default function Compare(props) {
  return (
    <div>
      <ReactCompareImage
        leftImage="https://puraxel.co.kr/img/main/section10_img01.jpg"
        // leftImage={props.left}
        rightImage="https://puraxel.co.kr/img/main/section10_img02.jpg"
        // rightImage={props.right}
        hover
      />
    </div>
  );
}
