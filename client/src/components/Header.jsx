import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="reserve">Reserve Spot in Queue</Link>
      </nav>
    </header>
  )
}

export default Header
