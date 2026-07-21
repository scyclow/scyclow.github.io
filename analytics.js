const ls = {
  get(key) {
    try {
      return window.localStorage && window.localStorage.getItem && JSON.parse(window.localStorage.getItem(key))
    } catch (e) {
      console.log(e)
    }
  },
  set(key, value) {
    try {
      return window.localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
    }
  }
}

const ANALYTICS_URL = `https://godxjnuwaujsfqkqghue.supabase.co/functions/v1`
const ANALYTICS_INTERVAL = 10000
const VERSION = '0.1'


let ENV

if (window.location.href.includes('steviep.xyz')) {
  ENV = 'prod'
} else {
  ENV = 'local'
}

const defaultData = {}

const STORE_KEY = '__STEVIEP_ANALYTICS'

function getStore() {
  return ls.get(STORE_KEY) || {}
}

function setStore(store) {
  ls.set(STORE_KEY, JSON.stringify(store))
  return store
}

if (!ls.get(STORE_KEY)) {
  setStore({
    sessionId: ls.get('__STEVIEP_SESSION_ID') || `S${Math.random().toString().slice(2)}`,
    totalSessionTime: Number(ls.get('__STEVIEP_TOTAL_SESSION_TIME')) || 0,
    analyticsData: ls.get('__STEVIEP_ANALYTICS_DATA') || defaultData,
    firstSeen: ls.get('__STEVIEP_FIRST_SEEN') || Date.now(),
    pageLoads: Number(ls.get('__STEVIEP_PAGE_LOADS')) || 0,
    referrer: document.referrer
  })
}



let ellapsedInterval, snapshotInterval

export function setupAnalytics() {
  const store = getStore()
  store.pageLoads = Number(store.pageLoads) + 1
  setStore(store)

  ellapsedInterval = setInterval(() => {
    if (!document.hidden) {
      const store = getStore()
      store.totalSessionTime = Number(store.totalSessionTime) + 1000
      setStore(store)
    }
  }, 1000)

  snapshotInterval = setInterval(async () => {
    if (!document.hidden) {
      try {
        await postSnapshot()
      } catch (e) {
        console.log(e)
      }
    }
  }, ANALYTICS_INTERVAL)
}

export function teardownAnalytics() {
  clearInterval(ellapsedInterval)
  clearInterval(snapshotInterval)
}

export async function postSnapshot(newData={}) {
  const data = updateData(newData)

  const snapshot = {
    id: getStore().sessionId,
    application: 'steviep-xyz',
    snapshot: getSnapshot(data)
  }

  if (ENV === 'local') console.log(snapshot)
  else return post(snapshot, `${ANALYTICS_URL}/snapshots`)
}


function updateData(newData={}) {
  const store = getStore()
  const data = {
    ...store.analyticsData,
    ...newData
  }

  store.analyticsData = data
  setStore(store)

  return data
}


function getSnapshot(data) {
  const store = getStore()
  return {
    sessionId: store.sessionId,
    version: VERSION,
    env: ENV,

    data,
    referrer: document.referrer,
    lastSeen: Date.now(),
    firstSeen: store.firstSeen,
    pageLoads: store.pageLoads,
    totalSessionTime: store.totalSessionTime,
    navigator: {
      userAgent: navigator?.userAgent,
      language: navigator?.language,
      mobile: navigator?.userAgentData?.mobile

    }
  }
}



let postFailed
async function post(_body, url) {
  const method = 'POST';
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(_body)

  try {
    const response = await fetch(
      url,
      {
        headers,
        body,
        method
      }
    )

    return response.json()
  } catch (e) {
    if (!postFailed) {
      postFailed = true
      console.log('...')
    }
  }
}
