function UserList ({showData}) {
  return (
    <div className='main'>
        <div className='list'>
          {showData.map((user) => {
            return (
              <div key={user.id}>
                <div className='user'>
                  <div className='image'>
                    <img src={user.avatar} />
                  </div>
                  <div className='detail'>
                    <div className='name'>
                      {user.first_name} {user.last_name}
                    </div>
                    <div className='email'>
                      {user.email}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default UserList