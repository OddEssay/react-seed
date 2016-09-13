export function onValueSnapshot(snap) {
  return {
    type: 'SETTINGS_ON_VALUE',
    data: snap.val(),
  }
}
