import { FiHome, FiGlobe, FiClipboard, FiMail, FiUser, FiBookOpen } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects',
  '/contact': 'Contact',
  '/guestbook': 'G-book',
}

export const SOCIALS = {
  GH: 'https://github.com/BlackPantherSL',
  IG: 'https://www.instagram.com/black.panther_sl',
  IN: 'https://www.linkedin.com/in/black-panther-933b7733a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  WA: 'https://wa.link/ljcp9l',
  YT: 'https://www.youtube.com/@BlackPanther_Tech',
  FB: 'https://web.facebook.com/profile.php?id=61561604562279',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1ytO7InWLVjJGryqRC0QZdc60bU1iesph/view?usp=sharing'

export const FORMSPREE_KEY = 'xoqyaqqe'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
