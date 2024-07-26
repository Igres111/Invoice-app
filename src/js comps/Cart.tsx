import React from "react";
import useForm from "react-hook-form";

function Cart({ style_inputs, register, index, append, fields }) {
  return (
    <div>
      <h1>Item List</h1>
      <p>item name</p>
      <input
        className={`${style_inputs} w-[327px] h-12`}
        {...register("items.name")}
      />
      <div>
        <div>
          <p>Qty.</p>
          <input
            className={style_inputs}
            {...register(`items.${index}.quantity`)}
          />
        </div>
        <div>
          <p>Price</p>
          <input
            className={style_inputs}
            {...register(`items.${index}.price`)}
          />
        </div>
        <div>
          <p>Total</p>
          <input
            className={style_inputs}
            {...register(`items.${index}.total`)}
          />
        </div>
      </div>
      <button
        onClick={() => append(fields + 1)}
        type="button"
        className="w-[327px] h-12"
      >
        + Add New Item
      </button>
    </div>
  );
}

export default Cart;
