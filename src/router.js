//objeto que mapea las rutas 
let ROUTES = {};
//referencia elemnto html
let rootEl;

//setter permita darle valores a las dos variables anteriores y que sea correcto
export const setRootEl = (el) => {
  // assign rootEl
  rootEl=el
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  Object.assign(ROUTES,routes)  // assign ROUTES
}


const queryStringToObject = (queryString) => { // ---->  cual seria mi cadena de consulta (queryString)??
 // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const pobject = {};
  params.forEach((value, key )=>{
    pobject[key]= value;

  })
  console.log("Obj:", pobject);
  // return the object
  return pobject;
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
      // render the correct view passing the value of props  
      const viewElement = correctRoute(props);
      // add the view element to the DOM root element
      rootEl.appendChild(correctRoute(viewElement))
  }
} 

export const navigateTo = (pathname, props={}) => { // paso 3
  //  paso 1 del paso 3 esperas pathname y las props para que en el archivo movies se invoque la funcion navifateTo('/detail', {id:¨movies.id})
  console.log(pathname, props);
  // update window history with pushState
  const urlState={pathname, props};            //es el objeto que le paso a pushstate tiene como parametros el pthname y los props
  window.history.pushState(urlState,'',pathname);
  // render the view with the pathname and props
  // paso 2 del paso 3 usar el renderView para invocarlo asi:¨renderView(pathname, props)
  renderView(pathname,props)
}
export const onURLChange = (location='/') => {


  renderView(location);
}