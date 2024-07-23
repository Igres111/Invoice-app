import { useContext } from "react";
import { GlobalAPI } from "../logic/MainContext";
import { Link } from "react-router-dom";

function InfoButtons({ id }: string) {
  const { markAsPaid } = useContext(GlobalAPI);
  return (
    <div className="flex justify-between">
      <Link to={"/"}>Edit</Link>
      <button>Delete</button>
      <button onClick={() => markAsPaid(id)}>Mark As Paid</button>
    </div>
  );
}

export default InfoButtons;
