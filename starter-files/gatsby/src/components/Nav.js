import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/beers" >Beers</Link></li>
      </ul>
    </nav>
  )
}