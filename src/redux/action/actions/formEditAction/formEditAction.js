import {
  PUT_FORM_SUCCESS,
  GET_TOPICS_SUCCESS,
  GET_DETAIL_ROOM_SUCCESS,
} from "../../actionTypes/formEditTypes";
import FormEditService from "./formEditService";

export const getDetailRoom = (id) => async (dispatch) => {
  try {
    const res = await FormEditService.getDetail(id);
    // console.log(res.data.data);

    dispatch({
      type: GET_DETAIL_ROOM_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateForm = (data) => async (dispatch) => {
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
    const res = await FormEditService.update(formData);
    console.log(res);

    dispatch({
      type: PUT_FORM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTopics = () => async (dispatch) => {
  try {
    const res = await FormEditService.getAllTopics();

    dispatch({
      type: GET_TOPICS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
