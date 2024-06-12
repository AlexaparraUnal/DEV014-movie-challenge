let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl=el
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  Object.assign(ROUTES,routes)
}

const queryStringToObject = (queryString) => { // ----> Pendiente
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  rootEl.innerHTML=''
  // find the correct view in ROUTES for the pathname
  const correctRoute = ROUTES[pathname]
  // in case not found render the error view
  if(!correctRoute){
    rootEl.innerHTML='error 404: esta ruta no existe'
  }else{
      // render the correct view passing the value of props  -----> pendiente
      // add the view element to the DOM root element
      rootEl.appendChild(correctRoute())
  }
} 

export const navigateTo = (pathname, props={}) => { // paso 3
  //  paso 1 del paso 3 esperas pathname y las props para que en el archivo movies se invoque la funcion navifateTo('/detail', {id:¨movies.id})
  console.log(pathname, props);

  renderView(pathname,props)
  // update window history with pushState
  // render the view with the pathname and props
  // paso 2 del paso 3 usar el renderView para invocarlo asi:¨renderView(pathname, props)
}

export const onURLChange = (location='/') => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location)
}