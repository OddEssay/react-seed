export function readValueSnapshot(ref, snap) {
  console.log('readValueSnapshot',snap)
  window.snap = snap
  return {
    type: 'FIREBASE_READ_VALUE',
    data: snap.val(),
    ref
  }
}
