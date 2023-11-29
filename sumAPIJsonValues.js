const jsonData = [
    // ... (your provided JSON array)
  ];
  
  const sumNonNullValues = jsonData.reduce((sum, entry) => {
    if (entry.value !== null) {
      sum += entry.value;
    }
    return sum;
  }, 0);
  
  console.log(sumNonNullValues);
  