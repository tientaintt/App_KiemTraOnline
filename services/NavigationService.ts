// navigationService.js

let navigationRef;

function setNavigationRef(ref) {
  navigationRef = ref;
}

function navigate(routeName, params) {
  navigationRef.navigate(routeName, params);
}

export default {
  setNavigationRef,
  navigate,
};