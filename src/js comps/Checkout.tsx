type TCheckout = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

function Checkout({ name, quantity, price, total }: TCheckout) {
  return (
    <div className="flex justify-around leading-4	">
      <div>
        <p className="font-bold mb-2">{name}</p>
        <p className="mb-6 text-[#7E88C3]">
          {quantity} x £ {price.toFixed(2)}
        </p>
      </div>
      <p className="font-bold mt-3">£ {total.toFixed(2)}</p>
    </div>
  );
}

export default Checkout;
