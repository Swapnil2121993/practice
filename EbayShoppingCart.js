https://i.imgur.com/lqTCxkP.png

// nodejs + markojs.com

const itemDetails = [
  {
    sellerName: 'xyz',
    imageUrl: 'https://image.com',
    title: 'item-1',
    price: '$22.95',
  },
  {
    sellerName: 'abc',
    imageUrl: 'https://image.com',
    title: 'item-2',
    price: '$22.95',
  }
]

const MainComponent = () => {
  return (
  <div className="main">
    <Header  />
    <ItemList />
    <CheckOut />
  </div>
  )
}

const Header = ({ totalItem }) => <h2>Shopping Card { totalItem } </h2>

const ItemList = () => {
  return (
    {itemDetails.map((item, index) => {
  return (
    <div key={index}>
      <ItemDescritption
        sellerName={item.sellerName}
        imageUrl={{item.imageUrl}
        title={{item.title}
        price={item.price}
      />
  </div>                              
    )}
)}

//action.js

const totalQuantity = () => {
  type: 'TOTAL_QUANTITY',
  item
}

// reducer

const totalReducer = (state=0, { type, item } ) => {
  switch type
    case: 'TOTAL_QUANTIY'
      return Object.assign({}, state, totalItem: state + item})
      default: 
        return state
}


import totalQuantity from 'action'

const ItemDescription = ({ sellerName, imageUrl, title, price ) => {
                          
const [quantity, setQuantity] = useState(0)

const totalQuantity = useSelector(state => state.totalItem)
const dispatch = useDispatch()

const selectQty = e => {
  return (
  setQuantity(e.target.value)
  dispatch(totalQuantity(e.target.value)
)}
                          
const getTotalPrice = (qty) => qty * price
  
return (
    <div className={styles['item-desc-container']>
      <div className={style['item-desc-header']>
        <h2>Seller {sellerName}</h2>
        <a href="#"> Pay this seller </a>
      </div>
        
      <div className={style['item-desc-detail']>
        <img src={imageUrl} alt='item'/>
          <span>{title}</span>
          <select id="quantity" onChange={e => selectQty(e)} >
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = "3">3</option>
          </select>
        <span>{getTotalPrice(quantity)}</span>
      </div>
        
      <div className={style['item-desc-footer']>
        <a href="#"> Save for later </a>
        <a href="#"> Remove </a>
        
        </div>
        
    </div>
  
  </div>
)