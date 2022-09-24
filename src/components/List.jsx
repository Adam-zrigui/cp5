import { Route , Link  } from "react-router-dom"

import One from "./OneByOne";

export default function List(props) {
 
 
  return (
     <div className="container">

{props.movies.map((movie ,i) =>  {
  const routeComponents = props.movie.route.map(({route}) => <Route exact path={route} element={<One />} />);

return (
<div className="holder">

<Link to={movie.route}><img src={movie.logo} className='poster' alt='' /></Link>
<p className="title ghost">{movie.title}</p>
</div>)})}
  
</div>
  )
}
