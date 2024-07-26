import { useContext } from "react";

import { Link } from "react-router-dom";
import { GlobalAPI } from "../../logic/MainContext";

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
