import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { Inputs } from "../types/billForm";
const style_inputs =
  "rounded font-bold border border-[#DFE3FA] border-solid pl-5 h-12 mt-2";
const style_text = "text-[#7E88C3] text-[13px]";
const style_errors = "mt-3 text-xs text-red-600 font-medium";

function BillFrom() {
  const schema = yup.object({
    senderAddress: yup.object({
      street: yup.string().required("Street Address is required"),
      city: yup.string().required("City is required"),
      postcode: yup.string().required("Post Code is required"),
      country: yup.string().required("Country is required"),
    }),
    clientAddress: yup.object({
      street: yup.string().required("Street Address is required"),
      city: yup.string().required("City is required"),
      postcode: yup.string().required("Post Code is required"),
      country: yup.string().required("Country is required"),
    }),
    clientName: yup.string().required("Name is required"),
    clientEmail: yup.string().required("Email is required"),
    createdAt: yup
      .date()
      .required("Dates are required")
      .min(new Date(), "Invalid date"),
    description: yup.string(),
    paymentTerms: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="mt-[22px] font-medium" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-[#7C5DFA] ">Bill From</p>
      <div className="mt-6">
        <p className={`${style_text}`}>Street Address</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("senderAddress.street")}
        />
      </div>
      {errors.senderAddress?.street && (
        <p className={`${style_errors}`}>
          {" "}
          {errors.senderAddress.street.message}
        </p>
      )}

      <div className="flex mt-6 justify-between">
        <div>
          <p className={`${style_text}`}>City</p>
          <input
            className={`w-[152px] ${style_inputs}`}
            {...register("senderAddress.city")}
          />
        </div>
        <div>
          <p className={`${style_text}`}>Post Code</p>
          <input
            className={`w-[152px] ${style_inputs}`}
            {...register("senderAddress.postcode")}
          />
        </div>
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Country</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("senderAddress.country")}
        />
      </div>
      {errors.senderAddress?.country && (
        <p className={`${style_errors}`}>
          {" "}
          {errors.senderAddress.country.message}
        </p>
      )}
      <p className="text-[#7C5DFA] mt-[41px]">Bill to</p>
      <div className="mt-6">
        <p className={`${style_text}`}>Client's Name</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("clientName")}
        />
      </div>
      {errors.clientName && (
        <p className={`${style_errors}`}> {errors.clientName.message}</p>
      )}
      <div className="mt-6">
        <p className={`${style_text}`}>Client's Email</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("clientEmail")}
        />
      </div>
      {errors.clientEmail && (
        <p className={`${style_errors}`}> {errors.clientEmail.message}</p>
      )}
      <div className="mt-6">
        <p className={`${style_text}`}>Street Address</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("clientAddress.street")}
        />
      </div>
      {errors.clientAddress?.street && (
        <p className={`${style_errors}`}>
          {" "}
          {errors.clientAddress.street.message}
        </p>
      )}
      <div className="flex mt-6 justify-between">
        <div>
          <p className={`${style_text}`}>City</p>
          <input
            className={`w-[152px] ${style_inputs}`}
            {...register("clientAddress.city")}
          />
        </div>
        <div>
          <p className={`${style_text}`}>Post Code</p>
          <input
            className={`w-[152px] ${style_inputs}`}
            {...register("clientAddress.postcode")}
          />
        </div>
      </div>
      <div className="mt-6">
        <p className={`${style_text}`}>Country</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("clientAddress.country")}
        />
      </div>
      {errors.clientAddress?.country && (
        <p className={`${style_errors}`}>
          {" "}
          {errors.clientAddress.country.message}
        </p>
      )}
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Invoice Date</p>
        <input
          type="date"
          className={`w-[327px] ${style_inputs} pr-4`}
          {...register("createdAt")}
        />
      </div>
      {errors.createdAt && (
        <p className={`${style_errors}`}> {errors.createdAt.message}</p>
      )}
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Payment Terms</p>
        <select
          className="w-[327px] h-12 border border-[#DFE3FA] border-solid pl-5 mt-2"
          {...register("paymentTerms")}
        >
          <option>Net 30 days</option>
          <option>Net 60 days</option>
          <option>Net 90 days</option>
        </select>
      </div>
      <div className="mt-[41px]">
        <p className={`${style_text}`}>Project Description</p>
        <input
          className={`w-[327px] ${style_inputs}`}
          {...register("description")}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BillFrom;
