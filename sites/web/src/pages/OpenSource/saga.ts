import { put, takeEvery, call, SagaResult } from "@web/core";
import { makeGetReq, request } from "@web/core/request";

import { actions } from "./slice";

export function* getDailyCovid19Statistic(): SagaResult {
  try {
    const url = `/api/v1/open-source/covid-19-daily-statistic`;
    const response = yield call(request, url, makeGetReq());
    yield put(actions.getCovid19DailyStatisticDone(response));
  } catch (e) {
    //
  }
}

export function* getMonthlyCovid19Statistic(): SagaResult {
  try {
    const url = `/api/v1/open-source/covid-19-monthly-statistic`;
    const response = yield call(request, url, makeGetReq());
    yield put(actions.getCovid19MonthlyStatisticDone(response));
  } catch (e) {
    //
  }
}

export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.getCovid19DailyStatistic.type, getDailyCovid19Statistic);
  yield takeEvery(actions.getCovid19MonthlyStatistic.type, getMonthlyCovid19Statistic);
}
