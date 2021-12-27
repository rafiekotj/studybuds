import { GET_APPROVE_PARTICIPANT_SUCCESS } from "../../actionTypes/approveTypes";

export const getApprovePart = (id) => async (dispatch) => {
  try {
    const res = await DetailRoomService.getApprove(id);
    // console.log(res.data.data);

    dispatch({
      type: GET_APPROVE_PARTICIPANT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
