import { POST_FORM_SUCCESS } from "../../actionTypes/formTypes";
import FormService from "./formService";

export const createForm = (data) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.set("date", data.date);
    formData.set("description", data.description);
    formData.set("endTime", data.endTime);
    formData.set("id_topic", data.id_topic);
    formData.set("limitParticipant", data.limitParticipant);
    formData.set("roomStatus", data.roomStatus);
    formData.set("startTime", data.startTime);
    formData.set("title", data.title);
    formData.append("imageClass", data.imageClass);
    const res = await FormService.create(formData);
    console.log(res);

    dispatch({
      type: POST_FORM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
