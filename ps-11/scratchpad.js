HUE = HOURS
SATURATION = MINUTES
LIGHTNESS = SECONDS 

var makeColor = function(hue, sat, light, alph) {
  return "hsla(" + hue + "," + sat + "%," + light + "%," + alph + ")";
};