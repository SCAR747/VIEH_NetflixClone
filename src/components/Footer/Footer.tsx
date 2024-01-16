import React from 'react'
import './footer.scss'

const footer = () => (
  <footer className='footer'>
    <div className='footer__copyright'>
      &copy; {new Date().getFullYear()} Scarrr{' '}
      <a
        className='footer__copyright--link'
        href='https://github.com/devandres-tech'
      >
        Pagarrr
      </a>
    </div>
  </footer>
)

export default footer
