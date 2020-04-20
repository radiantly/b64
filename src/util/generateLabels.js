export const generateLabels = input => {
  if(!input)
    return [{ text: 'No Input', icon: 'info' }];
  
  const labels = []
  labels.push({text: 'Length', icon: 'info', detail: input.length });

  /* eslint no-control-regex: "off" */

  if(/^[\x00-\x7F]*$/.test(input))
    labels.push({text: 'Ascii', icon: 'checkmark' });
  else
    labels.push({text: 'Unicode', icon: 'language' });
  
  labels.push({ text: 'Unique', detail: new Set(input.split('')).size })

  return labels;
}