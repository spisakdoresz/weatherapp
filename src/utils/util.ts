const airQualityLevels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

export function getAiqEvaluation(data: number) {
  if (data < 0) {
    return "Unknown value";
  } else if (data === 1) {
    return airQualityLevels[0];
  } else if (data === 2) {
    return airQualityLevels[1];
  } else if (data === 3) {
    return airQualityLevels[2];
  } else if (data === 4) {
    return airQualityLevels[3];
  } else if (data === 5) {
    return airQualityLevels[4];
  }
}

export function getNo2Evaluation(data: number) {
  if (data < 0) {
    return "Unknown value";
  } else if (data < 40) {
    return airQualityLevels[0];
  } else if (data < 70) {
    return airQualityLevels[1];
  } else if (data < 150) {
    return airQualityLevels[2];
  } else if (data < 200) {
    return airQualityLevels[3];
  } else {
    return airQualityLevels[4];
  }
}

export function getO3Evaluation(data: number) {
  if (data < 0) {
    return "Unknown value";
  } else if (data > 0 && data < 60) {
    return airQualityLevels[0];
  } else if (data < 100) {
    return airQualityLevels[1];
  } else if (data < 140) {
    return airQualityLevels[2];
  } else if (data < 180) {
    return airQualityLevels[3];
  } else {
    return airQualityLevels[4];
  }
}

export function getPm10Evaluation(data: number) {
  if (data < 0) {
    return "Unknown value";
  } else if (data < 20) {
    return airQualityLevels[0];
  } else if (data < 50) {
    return airQualityLevels[1];
  } else if (data < 100) {
    return airQualityLevels[2];
  } else if (data < 200) {
    return airQualityLevels[3];
  } else {
    return airQualityLevels[4];
  }
}

export function getPm2_5Evaluation(data: number) {
  if (data < 0) {
    return "Unknown value";
  } else if (data < 10) {
    return airQualityLevels[0];
  } else if (data < 25) {
    return airQualityLevels[1];
  } else if (data < 50) {
    return airQualityLevels[2];
  } else if (data < 75) {
    return airQualityLevels[3];
  } else {
    return airQualityLevels[4];
  }
}
