export const kelvinToCelsius = (kelvin: number): number => {
  return Math.round(kelvin - 273.15);
};

export const unixTimestampToLocaleTimeString = (timestamp: number): string => {
  return timestamp ? new Date(timestamp * 1000).toLocaleTimeString() : "";
};

export const getWindDirectionText = (windDegrees: number): string => {
  if (windDegrees >= 337.5 || windDegrees < 22.5) {
    return "North";
  } else if (windDegrees >= 22.5 && windDegrees < 67.5) {
    return "Northeast";
  } else if (windDegrees >= 67.5 && windDegrees < 112.5) {
    return "East";
  } else if (windDegrees >= 112.5 && windDegrees < 157.5) {
    return "Southeast";
  } else if (windDegrees >= 157.5 && windDegrees < 202.5) {
    return "South";
  } else if (windDegrees >= 202.5 && windDegrees < 247.5) {
    return "Southwest";
  } else if (windDegrees >= 247.5 && windDegrees < 292.5) {
    return "West";
  } else if (windDegrees >= 292.5 && windDegrees < 337.5) {
    return "Northwest";
  }
  return "";
};

export const fahrenheitToCelsius = (fahrenheit: number): number => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius);
};

export const formatTime = (datetime: string): string => {
  return datetime.slice(0, 5);
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("hu-HU", options);
}

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
