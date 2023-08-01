import { useParams } from "react-router-dom";

function StoreProductPage() {
  const { productName } = useParams();
  console.log(productName);
  return <div></div>;
}

export default StoreProductPage;
