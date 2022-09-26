import axios from "axios";
import { bindActionCreators } from "redux";
// import Cities from "../../components/Cities/Cities";
export const GET_PUBLICATIONS = "GET_PUBLICATIONS";
export const GET_PUBLICATIONS_DETAIL = "GET_PUBLICATIONS_DETAIL";
export const GET_DETAILS = "GET_DETAILS";
export const GET_CITIES = "GET_CITIES";
export const GET_SERVICES = "GET_SERVICES,";
export const GET_PROPERTY_TYPES = "GET_PROPERTY_TYPES";
export const ULPOAD_IMG = "ULPOAD_IMG";
export const UPLOAD_IMG_USER = "UPLOAD_IMG_USER";
export const FILTER_PROP = "FILTER_PROP";
export const FILTER_AMB = "FILTER_AMB";
export const FILTER_PET = "FILTER_PET";
export const SORT_PRICE = "SORT_PRICE";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const SET_PUBLICATION = "SET_PUBLICATION";
export const SAVEFILTER = "SAVEFILTER";
export const CLEAN = "CLEAN";
export const LOADING = "LOADING";
export const CURRENT_PAGE = "CURRENT_PAGE";
export const CURRENT_CARRUSEL = "CURRENT_CARRUSEL";
export const VALUE_FILTER = "VALUE_FILTER";
export const SAVESORT = "SAVESORT";
export const DELETE_PUBLICACTION_IMAGE = "DELETE_PUBLICACTION_IMAGE";
export const DELETE_PUBLICACTION = "DELETE_PUBLICACTION";
export const UPDATE_PROP = "UPDATE_PROP";
export const GET_PUBLICATIONS_PREMIUM = "GET_PUBLICATIONS_PREMIUM";
export const INFO_USER = "INFO_USER";
export const EDIT_USER = "EDIT_USER";
export const RANK_USER = "RANK_USER";
export const GET_PUBLICATION_USER = "GET_PUBLICATION_USER";
export const GET_FAVORITES_USER = "GET_FAVORITES_USER";
export const SET_FAVORITE = "SET_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GETUSER = "GETUSER"
export const GET_USER_IMAGE = "GET_USER_IMAGE"


/* ************ GETs ************ */
//Este get realiza el filtrado, ordenamiento y search
export function getPublications(filters, sorting, city) {
  return async function (dispatch) {
    try {
      let info = {
        filters,
        sorting,
      };
      let infoBack = await axios.post("/publication?city=" + city, info); //,?city='+city
      return dispatch({
        type: GET_PUBLICATIONS,
        payload: infoBack.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

//Esto es para ver el detalle de la publicación
export function getPublicationsDetail(id) {
  return async function (dispatch) {
    let infoBack = await axios.get("/publication/" + id); //, info
    return dispatch({
      type: GET_PUBLICATIONS_DETAIL,
      payload: infoBack.data,
    });
  };
}

//Esto trae las Provincias
export function getCities() {
  return async function (dispatch) {
    try {
      let infoBack = await axios.get("/publication/city");
      return dispatch({
        type: GET_CITIES,
        payload: infoBack.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

//Esto trae los servicios de luz, agua, gas, internet y calefaccion
export function getServices() {
  return async function (dispatch) {
    try {
      let infoBack = await axios.get("/publication/serviceTypes");
      return dispatch({
        type: GET_SERVICES,
        payload: infoBack.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

//Esto trae los tipo de propiedades: departamento, casa, local, etc.
export function getTypesOfProperties() {
  return async function (dispatch) {
    try {
      let infoBack = await axios.get("/publication/propertyTypes");
      return dispatch({
        type: GET_PROPERTY_TYPES,
        payload: infoBack.data,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

export function getPublicationsPremium() {
  return async function (dispatch) {
    try {
      let info = await axios.get("/publication/premium");
      return dispatch({
        type: GET_PUBLICATIONS_PREMIUM,
        payload: info.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
}

//Esto trae las publicaciones del mismo usuario
export function getPubs(id) {
  return async function (dispatch) {
    try {
      let info = await axios.get(`/user/getPubs/${id}`);
      return dispatch({
        type: GET_PUBLICATION_USER,
        payload: info.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
}

//Esto trae las publicaciones favoritas del mismo usuario
export function getFavsUser(id) {
  return async function (dispatch) {
    try {
      let info = await axios.get(`/user/getFavs/${id}`);
      return dispatch({
        type: GET_FAVORITES_USER,
        payload: info.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
}

//Esto setea una publicacion en favoritos del usuario
export function setFav(id, pubId) {
  return async function (dispatch) {
    try {
      await axios.put(`/user/setFav?userId=${id}&pubId=${pubId}`, {});
      return dispatch({
        type: SET_FAVORITE,
      });
    } catch (error) {
      alert(error);
    }
  };
}
//Esto quita una publicacion en favoritos del usuario
export function removeFav(id, pubId) {
  return async function (dispatch) {
    try {
      await axios.put(`/user/removeFav?userId=${id}&pubId=${pubId}`, {});
      return dispatch({
        type: REMOVE_FAVORITE,
      });
    } catch (error) {
      alert(error);
    }
  };
}

/* ************ FILTROS & ORDENAMIENTOS ************ */
//propfilter
export function updateFilterProp(value) {
  return {
    type: FILTER_PROP,
    payload: value,
  };
}
export function updateFilterAmbient(value) {
  return {
    type: FILTER_AMB,
    payload: value,
  };
}
export function updateFilterPets(value) {
  return {
    type: FILTER_PET,
    payload: value,
  };
}
export function updateSortingPrice(value) {
  return {
    type: SORT_PRICE,
    payload: value,
  };
}

//Esto limpia los filtros.
export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
  };
}

//Esto limpia el estado.
export function clean() {
  return {
    type: CLEAN,
  };
}

//Esto sube la imagen a la tabla propertyImages
export function imgUpload(value) {
  return async function (dispatch) {
    try {
      await axios.post("/publication/image", value);
      return dispatch({
        type: ULPOAD_IMG,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

//Esto sube la imagen a la tabla UserImages
export function imgUserUpload(value) {
  return async function (dispatch) {
    try {
      await axios.post("/user/imageUser", value);
      return dispatch({
        type: UPLOAD_IMG_USER,
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  };
}

export function loading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function setCurrentPage(page) {
  return {
    type: CURRENT_PAGE,
    payload: page,
  };
}

export function setCurrentCarrusel(page) {
  return {
    type: CURRENT_CARRUSEL,
    payload: page,
  };
}

export function valueFilter(payload) {
  return {
    type: VALUE_FILTER,
    payload,
  };
}
//Filters en Local Storage
export function saveFilter(payload) {
  return {
    type: SAVEFILTER,
    payload,
  };
}

export function saveSort(payload) {
  return {
    type: SAVESORT,
    payload,
  };
}

export function setPublication(payload) {
  console.log("en setpub", payload);
  return {
    type: SET_PUBLICATION,
    payload,
  };
}

//ELIMINAR UNA PUBLICACION
export function deletePublicaction(id) {
  console.log(id, "id");
  return async function (dispatch) {
    try {
      await axios.delete(`/publication/delete/${id}`);
      return dispatch({
        type: DELETE_PUBLICACTION,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ELIMINAR UNA IMAGEN DE UNA PUBLICACION
export function deletePublicactionImage(url) {
  return async function (dispatch) {
    try {
      await axios.post(`/publication/image/delete`, url);
      return dispatch({
        type: DELETE_PUBLICACTION_IMAGE,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ACTUALIZAR DATOS DE PROPIEDAD
export function updatedProp(id, inputPropiedad) {
  console.log(inputPropiedad, "id de actualizacion", id);
  return async function (dispatch) {
    try {
      await axios.put(`/publication/editProperty/${id}`, inputPropiedad);
      return dispatch({
        type: UPDATE_PROP,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// ACTUALIZAR DATOS DE USUARIO
export function editUser(id, input) {
  return async function (dispatch) {
    try {
      let res = await axios.put(`/user/editUser/${id}`, input);
      return dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function rank(id, rank) {
  return async function (dispatch) {
    try {
      await axios.put(`/user/rate?id=${id}&rating=${rank}`, {});
      return dispatch({
        type: RANK_USER,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// Info del usuario
export function getInfoUser(user) {
  return {
    type: INFO_USER,
    payload: user,
  };
}

export function getUserInfo(id) {
  return async function (dispatch) {
    const resp = await axios.get(`/user/userInfo/${id}`);
    return dispatch({
      type: GETUSER,
      payload: resp.data
    });
  }
}
export function getUserImage(id) {
  return async function (dispatch) {
    const resp = await axios.get(`/user/getImage/${id}`);
    return dispatch({
      type: GET_USER_IMAGE,
      payload: resp.data
    });
  }
}

