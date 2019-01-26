import React, { Component } from 'react';
import './css/side-menu.css';
import './css/pure-min.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list : [{name:'Toshiuk',email:'flaviotoshiukhjr@outlook.com',password:'123456'}]
    };
  }





  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Author</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Author Register</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value="" />
                </div>
                <div className="pure-control-group">
                  <label htmlFor="password">Password</label>
                  <input id="password" type="password" name="password" />
                </div>
                <div className="pure-control-group">
                  <label></label>
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                </div>
              </form>

            </div>
            <div>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map(function(author){
                      return (
                        <tr>
                          <td>{author.name}</td>
                          <td>{author.email}</td>
                        </tr>
                      );
                    })
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>

    );
  }
}

export default App;
