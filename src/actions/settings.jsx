export function onValueSnapshot(snap) {
  return {
    type: 'SETTINGS_ON_VALUE',
    data: snap.val(),
  }
}

export function update(ref, data) {
  return {
    type: 'SETTINGS_UPDATE_REQUESTED',
    ref,
    data,
  }
}
