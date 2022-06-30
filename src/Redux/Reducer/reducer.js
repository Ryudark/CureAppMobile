import {
  ALL,
  CITY,
  COUNTRY,
  ERROR,
  FECHA,
  LOCATION,
  POST,
  POSTPROPIOS,
  REGION,
  SPECIALITY,
} from "../constantes";
import {
  ERR,
  USER_LOGIN,
  NO_ERR,
  LOADING,
  USER_DETAIL,
  LOGOUT,
  SAVE_IMAGE,
  PHOTO,
} from "../Actions/actions";

const initialState = {
  error: {
    message: "",
    isError: false,
  },
  imageProfile: "",
  id: 0,
  dataLog: {},
  islogged: false,
  userDetail: {},
  country: [],
  region: [],
  city: [],
  speciality: [],
  isLoggin: false,
  post: [],
  copyPost: [],
  postPropios: [],
};

// const lastMounth = today.getFullYear() + "-" + (today.getMonth()) + "-" + today.getDate()

const rootReducer = (state = initialState, action) => {
  function SortArray(x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        id: action.payload.id,
        dataLog: action.payload.user,
        isLoggin: false,
        islogged: true,
      };
    case PHOTO:
      return {
        ...state,
        imageProfile: "",
      };

    case LOGOUT:
      return {
        ...state,
        islogged: false,
        isLoggin: false,
        dataLog: {},
        id: 0,
        imageProfile: "",
      };

    case LOADING:
      return {
        ...state,
        isLoggin: action.payload,
      };
    case SAVE_IMAGE:
      return {
        ...state,
        imageProfile: action.payload,
      };
    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
    case ERR:
      return {
        ...state,
        error: {
          message: action.payload,
          isError: true,
        },
        isLoggin: false,
      };
    case NO_ERR:
      return {
        ...state,
        error: {
          message: "",
          isError: false,
        },
      };
    case COUNTRY:
      const pais = action.payload;
      const countryOrden = pais.sort(SortArray);
      return {
        ...state,
        country: countryOrden,
      };
    case REGION:
      const region = action.payload;
      const regionOrden = region.sort(SortArray);
      return {
        ...state,
        region: regionOrden,
      };
    case CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case SPECIALITY:
      let copiaSpeciality = state.copyPost;
      const filterSpeciality =
        action.payload === ALL
          ? copiaSpeciality
          : copiaSpeciality.filter((s) =>
              s.specialty.specialty.includes(action.payload)
            );
      return {
        ...state,
        post: filterSpeciality,
      };
    case FECHA:
      let copiaDate = state.copyPost;
      const today = new Date();
      const todayMinimo =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "T00:00:00.000Z";
      const diasMinimo =
        today.getFullYear() +
        "-0" +
        (today.getMonth() + 1) +
        "-" +
        (today.getDate() - 7) +
        "T00:00:00.000Z";
      const mesMinimo =
        today.getFullYear() +
        "-0" +
        today.getMonth() +
        "-" +
        today.getDate() +
        "T00:00:00.000Z";
      let filterDate = [];
      if ("Hoy" === action.payload) {
        filterDate = copiaDate.filter((d) => d.date_post == todayMinimo);
        return {
          ...state,
          post: filterDate,
        };
      }
      if ("Esta Semana" === action.payload) {
        filterDate = copiaDate.filter((d) => d.date_post > diasMinimo);
        return {
          ...state,
          post: filterDate,
        };
      }
      if ("Este mes" === action.payload) {
        filterDate = copiaDate.filter((d) => d.date_post > mesMinimo);
        return {
          ...state,
          post: filterDate,
        };
      } else {
        filterDate = copiaDate;
        return {
          ...state,
          post: filterDate,
        };
      }
    case LOCATION:
      let copyLocation = state.copyPost;
      let filterLocation = [];
      if ("Tu País" === action.payload.location) {
        filterLocation = copyLocation.filter(
          (l) => l.country.name === action.payload.country
        );
        return {
          ...state,
          post: filterLocation,
        };
      }
      if ("Cerca de ti" === action.payload.location) {
        filterLocation = copyLocation.filter(
          (l) => l.city.name === action.payload.city
        ); ///===action.payload.city
        return {
          ...state,
          post: filterLocation,
        };
      } else {
        filterLocation = copyLocation;
        return {
          ...state,
          post: filterLocation,
        };
      }
    case POST:
      return {
        ...state,
        post: action.payload,
        copyPost: action.payload,
      };
    case POSTPROPIOS:
      return {
        ...state,
        postPropios: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
