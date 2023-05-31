import { put, takeEvery, call, SagaResult, PayloadAction, select } from "@web/core";
import { makePostReq, request } from "@web/core/request";

import { selectMessages } from "./selectors";
import { actions } from "./slice";
import { Message } from "./types";

export function* promptHandler(action: PayloadAction<Message>): SagaResult {
  try {
    const url = `/api/ai`;
    const messages = yield select(selectMessages);
    const response = yield call(
      request,
      url,
      makePostReq({
        messages: [...messages, action.payload],
      }),
    );
    if (response) {
      console.log("r", response);
      yield put(actions.promptDone(response.message));
    }
  } catch (e) {
    //
  }
}

export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.prompt.type, promptHandler);
}
