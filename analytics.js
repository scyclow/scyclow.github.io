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



if (!ls.get('__STEVIEP_SESSION_ID')) {
  ls.set('__STEVIEP_SESSION_ID', `"S${Math.random().toString().slice(2)}"`)
}


if (!ls.get('__STEVIEP_TOTAL_SESSION_TIME')) {
  ls.set('__STEVIEP_TOTAL_SESSION_TIME', 0)
}



if (!ls.get('__STEVIEP_ANALYTICS_DATA')) {
  ls.set('__STEVIEP_ANALYTICS_DATA', JSON.stringify(defaultData))
}



let ellapsedInterval, snapshotInterval

export function setupAnalytics() {
  ls.set('__STEVIEP_PAGE_LOADS', Number(ls.get('__STEVIEP_PAGE_LOADS')) + 1 )

  if (!ls.get('__STEVIEP_FIRST_SEEN')) {
    ls.set('__STEVIEP_FIRST_SEEN', Date.now())
  }

  ellapsedInterval = setInterval(() => {
    if (!document.hidden) {
      const totalMS = Number(ls.get('__STEVIEP_TOTAL_SESSION_TIME'))
      ls.set('__STEVIEP_TOTAL_SESSION_TIME', totalMS + 1000)
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
    id: ls.get('__STEVIEP_SESSION_ID').toString(),
    application: 'steviep-xyz',
    snapshot: getSnapshot(data)
  }

  if (ENV === 'local') console.log(snapshot)
  else return post(snapshot, `${ANALYTICS_URL}/snapshots`)
}


function updateData(newData={}) {
  const existingData = ls.get('__STEVIEP_ANALYTICS_DATA') || {}
  const data = {
    ...existingData,
    ...newData
  }

  ls.set('__STEVIEP_ANALYTICS_DATA', JSON.stringify(data))

  return data
}


function getSnapshot(data) {
  return {
    sessionId: ls.get('__STEVIEP_SESSION_ID'),
    version: VERSION,
    env: ENV,

    data,
    referrer: document.referrer,
    lastSeen: Date.now(),
    firstSeen: ls.get('__STEVIEP_FIRST_SEEN'),
    pageLoads: ls.get('__STEVIEP_PAGE_LOADS'),
    totalSessionTime: ls.get('__STEVIEP_TOTAL_SESSION_TIME'),
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
