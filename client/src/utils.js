import { WEATHER_API_ENDPOINT } from './constants';
import ThunderStormIcon from './views/assets/weather_icons/11d.png';
import AtmosphereIcon from './views/assets/weather_icons/50d.png';
import DrizzleIcon from './views/assets/weather_icons/10d.png';
import RainIcon from './views/assets/weather_icons/09d.png';
import SnowIcon from './views/assets/weather_icons/13d.png';
import ClearIcon from './views/assets/weather_icons/01d.png';
import FewCloudsIcon from './views/assets/weather_icons/02d.png';
import ScatteredCloudsIcon from './views/assets/weather_icons/03d.png';
import CloudsIcon from './views/assets/weather_icons/04d.png';
import NoLocationFound from './views/assets/no-location.svg';

export function weatherAppAPI(requestHeaders, requestBody, callback) {
  var xhr = new XMLHttpRequest();
  const requestEndpoint = WEATHER_API_ENDPOINT;
  const requestOptions = {
    method: 'post',
  };

  if (requestBody) {
    requestOptions.body = requestBody;
  }

  if (requestHeaders) {
    requestOptions.headers = requestHeaders;
  }

  xhr.open(requestOptions.method, requestEndpoint, true);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const resposeData = JSON.parse(xhr.response);
      if (xhr.status !== 200 || resposeData.data.cod !== 200) {
        return callback(resposeData);
      }

      return callback(null, resposeData);
    }
  };

  xhr.send(JSON.stringify(requestOptions.body));
}

export function weatherIcon(weatherId) {
  if (weatherId <= 232) {
    return ThunderStormIcon;
  } else if (weatherId >= 300 && weatherId <= 321) {
    return DrizzleIcon;
  } else if (weatherId >= 500 && weatherId <= 531) {
    return RainIcon;
  } else if (weatherId >= 600 && weatherId <= 622) {
    return SnowIcon;
  } else if (weatherId > 700 && weatherId < 782) {
    return AtmosphereIcon;
  } else if (weatherId === 800) {
    return ClearIcon;
  } else if (weatherId === 801) {
    return FewCloudsIcon;
  } else if (weatherId === 802) {
    return ScatteredCloudsIcon;
  } else if (weatherId >= 803 && weatherId <= 804) {
    return CloudsIcon;
  }

  return NoLocationFound;
}

export function windDegreestoDirection(windDirection) {
  if (windDirection <= 22) {
    return "N";
  } else if (windDirection >22 && windDirection <67) {
    return "NE";
  } else if (windDirection >68 && windDirection < 113) {
    return "E";
  } else if (windDirection >114 && windDirection < 159) {
    return "SE";
  } else if (windDirection > 160 && windDirection < 205) {
    return "S";
  } else if (windDirection > 206 && windDirection < 251) {
    return "SW";
  } else if (windDirection > 252 && windDirection < 297) {
    return "W";
  } else if (windDirection > 298 && windDirection < 333) {
    return "NW";
  } else if (windDirection >334) {
    return "N";
  }
}
