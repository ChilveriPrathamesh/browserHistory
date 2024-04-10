import './index.css'

const BrowserHistory = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteHistory} = props

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="body-container">
      <div className="contents">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        onClick={onDelete}
        type="button"
        className="button"
        data-testid="delete"
      >
        <img
          className="btn-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
