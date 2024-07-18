import img from "/assets/illustration-empty.svg";
function Empty() {
  return (
    <div>
      <img src={img} />
      <p>There is nothing here</p>
      <p>Create an invoice by clicking the New button and get started</p>
    </div>
  );
}

export default Empty;
