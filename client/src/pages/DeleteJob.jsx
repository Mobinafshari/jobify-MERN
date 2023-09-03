import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../API/config";

export async function action({ params }) {
  try {
    await API.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashboard/all-jobs");
}
