import {Component} from 'react'
import './App.css'
import BrowserHistory from './component/UserHistoryList'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    list: initialHistoryList,
    searchInput: '',
  }

  searchHistory = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteHistory = uniqueNo => {
    const {list} = this.state
    const filteredHistory = list.filter(each => each.id !== uniqueNo)
    this.setState({
      list: filteredHistory,
    })
  }

  render() {
    const {list, searchInput} = this.state
    const searchResults = list.filter(eachUser =>
      eachUser.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="header">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-element">
            <div className="search-logo">
              <img
                className="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
              />
            </div>
            <input
              type="search"
              className="input"
              placeholder="Search History"
              value={searchInput}
              onChange={this.searchHistory}
            />
          </div>
        </div>
        <div className="container">
          {searchResults.length === 0 ? (
            <p>There is no history to show</p>
          ) : (
            <div className="body">
              <ul>
                <li>
                  {searchResults.map(eachItem => (
                    <BrowserHistory
                      key={eachItem.id}
                      id={eachItem.id}
                      timeAccessed={eachItem.timeAccessed}
                      logoUrl={eachItem.logoUrl}
                      title={eachItem.title}
                      domainUrl={eachItem.domainUrl}
                      deleteHistory={this.deleteHistory}
                    />
                  ))}
                </li>
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default App
