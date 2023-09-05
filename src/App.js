import logo from './logo.svg';
import AddToCartBtn from './AddToCartButton';
import AddOrRemoveBtn from './AddOrRemoveBtn';
import store from './store/configureStore';

function App() {

  const state = store.getState()

  return (
    <div className="container w-2/3 mx-auto justify-center bg-red-100">
      <h1>Cart: {state.count} </h1>
      <img className='img w-1/2' src='https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80' />
      <h1 >
        loremipsum jsdhgsjd gsdjhg sdgj
      </h1>
      <div>
        <AddToCartBtn isDisabled={false} />
        <AddOrRemoveBtn visible={false} />
      </div>
    </div>
  );
}

export default App;
