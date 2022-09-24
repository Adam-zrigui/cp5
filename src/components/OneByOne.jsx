import './style/card.css'
import ReactStars from 'react-stars'
export default function One(props) {
  return (
 <>
 <div className="cont">
  <img src={props.logo} className='poster' alt="" />
  <ReactStars count={props.rate} />
  <h4 className="primary ghost">{props.title}</h4>
  <p>{props.description}</p>

 </div>
 </>
  )
}
