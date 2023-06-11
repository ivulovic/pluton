import { takeEvery, call, SagaResult } from "@web/core";
import { request, makeGetReq } from "@web/core/request";

import { actions } from "./slice";

export function* promptHandler(): SagaResult {
  try {
    const url = `/api/apps`;
    const response = yield call(request, url, makeGetReq());
    // yield put(actions.setLoading(false));
  } catch (e) {
    //
  }
}

export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.setLoading.type, promptHandler);
}
