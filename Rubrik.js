const makeServerCall = (searchText) => {
  let results = [];  

  if (searchText === "") {
    return Promise.resolve({ searchText, results });
  }

  const getRandomNumberLessThan = (max) => Math.floor(Math.random() * max);
  const getRandomString = () => Math.random().toString(36).substring(2, 15);

  for (let i = 0; i < 2 + getRandomNumberLessThan(5); i++) {
    results.push(`${searchText} - ${getRandomString()}`);
  }

  return new Promise((resolve, reject) => {
    window.setTimeout(
      () => resolve({ searchText, results }),
      1000 * Math.random()
    );
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  const betterfunction = debounce(handleChange, 3000)

  debounce = (fn, limit) => {
    let timer = 0
    let context = this,
    clearTimeout(timer)
    return function(context,arguments) {
      timer = setTimeout(() => {
      fn(arguments);
    }, limit)
    }
  }
  handleChange = e => {
    const inputValue = e.target.value
    makeServerCall(inputValue).then(result => {
        this.setState({ searchText: result.results })
    })
  }

  render() {
    const {searchText} = this.state
    console.log('state', console.log('fdfdfd', searchText))
    return (
      <div className="searchbar-container">
        <input type="text" onChange={e => this.handleChange(e)} />
        { searchText.map((value, index) => {
           return (
              <div className="search-options" key={index}>
                <span>{value}</span>
              </div>
           )
        })}
    </div>
    )
  }
};

ReactDOM.render(
  <App />, 
  document.querySelector("#root")
);
