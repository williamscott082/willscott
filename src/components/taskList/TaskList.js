import React from 'react'

export default (props) => {
  return (
    <React.Fragment>
      <header className='app-header'>
        <input type='text'
          id='taskInput'
          placeholder='What are you busy with?' />
      </header>
      <main>
        <ul className='no-bullets'>
          <li>Mon, 2 Sept 2018</li>
          <ul>
            <li>Task item 1</li>
            <li>Task item 2</li>
            <li>Task item 3</li>
          </ul>
          <li>Tue, 3 Sept 2018</li>
          <ul>
            <li>Task item 1</li>
            <li>Task item 2</li>
            <li>Task item 3</li>
          </ul>
          <li>Wed, 4 Sept 2018</li>
          <ul>
            <li>Task item 1</li>
            <li>Task item 2</li>
            <li>Task item 3</li>
          </ul>
        </ul>
      </main>
    </React.Fragment>
  )
}
