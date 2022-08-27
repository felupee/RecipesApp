import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/header.css';
import SearchBar from './SearchBar';

const SEARCH_BAR_TIMEOUT = 500;

function Header() {
  const [nameHeader, setNameHeader] = useState('');
  const [showIcon, setshowIcon] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { location: { pathname } } = useHistory();

  const showSearchBarFunction = () => {
    const searchBar = document.getElementsByClassName('searchBar')[0];
    if (showSearchBar) {
      searchBar.classList.add('slideToRight');
      setTimeout(() => {
        setShowSearchBar(!showSearchBar);
      }, SEARCH_BAR_TIMEOUT);
    } else {
      setShowSearchBar(!showSearchBar);
    }
  };

  useEffect(() => {
    if (pathname === '/foods') {
      setNameHeader('Foods');
      setshowIcon(true);
    }
    if (pathname === '/drinks') {
      setNameHeader('Drinks');
      setshowIcon(true);
    }
    if (pathname === '/profile') {
      setNameHeader('Profile');
      setshowIcon(false);
    }
    if (pathname === '/done-recipes') {
      setNameHeader('Done Recipes');
      setshowIcon(false);
    }
    if (pathname === '/favorite-recipes') {
      setNameHeader('Favorite Recipes');
      setshowIcon(false);
    }
  }, [pathname]);

  return (
    <div className="header">
      <Link to="/profile">
        <button type="button" className="header-btn">
          <img src={ profileIcon } alt="profileIcon" data-testid="profile-top-btn" />
        </button>
      </Link>
      <h2 data-testid="page-title" className="header-title">{nameHeader}</h2>
      {showIcon && (
        <button
          type="button"
          className="header-btn"
          onClick={ showSearchBarFunction }
        >
          <img src={ searchIcon } alt="searchIcon" data-testid="search-top-btn" />
        </button>
      )}
      {(showSearchBar) && <SearchBar data-testid="search-input" /> }
    </div>
  );
}

const mapStateToProps = (store) => ({
  pathname: store.header.pathname,
});

export default connect(mapStateToProps)(Header);
