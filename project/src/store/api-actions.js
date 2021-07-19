import {loadOffers, loadNearbyOffers, loadOffer, setIsDataLoadError, loadReviews, loadFavorites, updateFavorites, requireAuthorization, getUserData, logout as closeSession} from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {adaptOfferToClient, adaptUserToClient, adaptReviewToClient} from './adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      dispatch(loadOffers(data.map(adaptOfferToClient)));
    })
);

export const fetchNearbyOffersList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(loadNearbyOffers(data.map(adaptOfferToClient))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch(() => dispatch(setIsDataLoadError(true)))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(loadFavorites(data.map(adaptOfferToClient)));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(getUserData(adaptUserToClient(data)));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const postReview = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))

);

export const postFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => {dispatch(updateFavorites(adaptOfferToClient(data)));})
    .catch(() => [])
    .then(dispatch(fetchFavorites()))
);
