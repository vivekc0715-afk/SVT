const raw = (import.meta.env.VITE_API_BASE_URL || '').trim()

const shouldIgnoreLocalhostBaseUrl = (value) => {
  if (!value) return false
  try {
    const u = new URL(value)
    const isLocal =
      u.hostname === 'localhost' || u.hostname === '127.0.0.1' || u.hostname === '0.0.0.0'
    if (!isLocal) return false

    // If the site is not running on localhost, ignore localhost API base URLs.
    if (typeof window !== 'undefined' && window.location) {
      const host = window.location.hostname
      const runningLocally = host === 'localhost' || host === '127.0.0.1'
      return !runningLocally
    }
    return false
  } catch {
    return false
  }
}

export const API_BASE_URL = shouldIgnoreLocalhostBaseUrl(raw) ? '' : raw
