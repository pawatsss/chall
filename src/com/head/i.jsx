function Header  ({ keyword, setKeyword }) {
  return (
    <div className='header'>
      <div className='header__box'>
        <input
          className='profile__search'
          placeholder='Search'
          type='text'
          value={keyword}
          onChange={setKeyword}
        />
      </div>
    </div>
  )
}

export default Header
