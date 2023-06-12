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

export function* getCovid19Ambulances(): SagaResult {
  try {
    const url = `/api/v1/open-source/covid-19-ambulances`;
    const response = yield call(request, url, makeGetReq());
    yield put(actions.getCovid19AmbulancesDone(response));
  } catch (e) {
    //
  }
}

export function* getAirQuality(): SagaResult {
  try {
    const url = `/api/v1/open-source/air-quality`;
    const response = yield call(request, url, makeGetReq());
    yield put(actions.getAirQualityDone(response));
  } catch (e) {
    //
  }
}

export default function* saga(): Generator<unknown> {
  yield takeEvery(actions.getAirQuality.type, getAirQuality);
  yield takeEvery(actions.getCovid19Ambulances.type, getCovid19Ambulances);
  yield takeEvery(actions.getCovid19DailyStatistic.type, getDailyCovid19Statistic);
  yield takeEvery(actions.getCovid19MonthlyStatistic.type, getMonthlyCovid19Statistic);
}
