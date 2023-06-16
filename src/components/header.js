// import React from 'react'
// import Link from 'gatsby-link'
// import logo from '../images/logo-react.png';
// import './Header.css'


// class Header extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       hasScrolled: false
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll)
//   }

//   handleScroll = (event) => {
//     const scrollTop = window.pageYOffset

//     if (scrollTop > 50) {
//       this.setState({ hasScrolled: true})
//     } else {
//       this.setState({ hasScrolled: false})
//     }
//   }

//   render() {
//     return (
//       <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
//         <div className='HeaderGroup'>
//           <Link to='/'><img src={logo} width='30' /></Link>
//           <Link to='/courses'>Courses</Link>
//           <Link to='/downloads'>Downloads</Link>
//           <Link to='/workshops'>Workshops</Link>
//           <Link to='/buy'><button>Buy</button></Link>
//         </div>
//       </div>
//     )
//   }
// }



// export default Header

import React from 'react'
import './Header.css'
import logo from '../images/logo-react.png';
<<<<<<< HEAD
import {Link} from 'gatsby-link'
=======
import Link from 'gatsby-link'
>>>>>>> 4ac9ff5 (Everything working, before react flow install)


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 0) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to='/'><img src={logo} width='30' /></Link>
          <Link to='/page-2'>CustomerGPT Email</Link>
          <Link to='/react-flow-mockup'>Digital Twin Mockup</Link>
          <Link to='/workshops'>AG Grid Project</Link>
        </div>
      </div>
    )
  }
}



export default Header

