import storage from "local-storage-fallback"

const loadState = (key) => {
  try {
    const serializedState = storage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    storage.setItem(key, serializedState)
  } catch (error) {
    console.error(error)
  }
}

const removeState = (key) => {
  try {
    storage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}

const loadSessionState = (key) => {
  try {
    const serializedState = sessionStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

const saveSessionState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(key, serializedState)
  } catch (error) {
    console.error(error)
  }
}

const removeSessionState = (key) => {
  try {
    sessionStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}

export {
  loadState,
  saveState,
  removeState,
  loadSessionState,
  saveSessionState,
  removeSessionState,
}
