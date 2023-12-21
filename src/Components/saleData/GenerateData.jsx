

function GenerateData(count, range) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const randomValue = Math.floor(Math.random() * (range.max - range.min + 1) + range.min);
    data.push(randomValue);
  }
  return data;
}

export default GenerateData;