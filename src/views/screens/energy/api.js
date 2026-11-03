// /overview 返回 totalHeat/currentLoad/efficiency/makeupRate/onlineStations/activeAlerts；其余接口与页面数据结构一致。
const API_BASE = (import.meta.env.VITE_ENERGY_API_BASE || '/api/energy').replace(/\/$/, '')

async function request(path, options = {}) {
  const response = await fetch(API_BASE + path, {
    headers: { Accept: 'application/json', ...(options.headers || {}) },
    ...options
  })
  if (!response.ok) {
    throw new Error(`Energy API ${response.status}: ${path}`)
  }
  return response.json()
}

export const fetchEnergyOverview = () => request('/overview')
export const fetchLoadCurve = (hours = 24) => request(`/load-curve?hours=${hours}`)
export const fetchStations = () => request('/stations')
export const fetchEfficiency = () => request('/efficiency')
export const fetchEnergyMix = () => request('/energy-mix')
export const fetchAlerts = (limit = 5) => request(`/alerts?limit=${limit}&status=open`)
export const fetchDevices = () => request('/devices')
export const fetchParameters = () => request('/parameters')
export const fetchWorkOrders = () => request('/work-orders/summary')

export async function fetchEnergySnapshot() {
  const [overview, loadCurve, stations, efficiency, mix, alerts, devices, params, workOrders] = await Promise.all([
    fetchEnergyOverview(),
    fetchLoadCurve(),
    fetchStations(),
    fetchEfficiency(),
    fetchEnergyMix(),
    fetchAlerts(),
    fetchDevices(),
    fetchParameters(),
    fetchWorkOrders()
  ])
  return { overview, loadCurve, stations, efficiency, mix, alerts, devices, params, workOrders }
}
