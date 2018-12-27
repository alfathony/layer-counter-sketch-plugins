import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("Hallo cuy It's alive 🙌")
// }


export default function() {
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    sketch.UI.alert('Info','No layers are selected.')
  } else {
    sketch.UI.alert('Warning',`${selectedCount} layers selected.`)
  }
}